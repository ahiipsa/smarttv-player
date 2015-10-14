var extend = require('./helpers.js').extend,
    merge = require('./helpers.js').merge,
    PlayerAbstract = require('./player.abstract.js'),
    log = require('./log.js');

extend(PlayerSamsungSef, PlayerAbstract);


function PlayerSamsungSef (options) {
    PlayerSamsungSef.superclass.constructor.apply(this, arguments);
    log('player samsung sef create');
}


PlayerSamsungSef.prototype.currentTime = 0;
PlayerSamsungSef.prototype.duration = 0;


/**
 * Initialize and return samsung video plugin
 * @returns {HTMLElement}
 */
PlayerSamsungSef.prototype.getPlugin = function () {
    if(!this.plugin){
        var plugin = document.createElement('object');
        plugin.setAttribute('id', 'pluginSEF');
        plugin.setAttribute('border', '0');
        plugin.setAttribute('class', 'player');
        plugin.setAttribute('classid', 'clsid:SAMSUNG-INFOLINK-SEF');
        plugin.style.position = 'relative';

        this.getContainer().appendChild(plugin);
        this.plugin = plugin;
    }

    if(!this.plugin){
        throw new Error('player not found');
    }

    return this.plugin;
};


/**
 * Execute player api function
 * @returns {boolean}
 */
PlayerSamsungSef.prototype.execute = function () {
    var plugin = this.getPlugin();
    if(typeof plugin.Execute === 'undefined'){
        throw new Error('Plugin have no method Execute');

    }

    return plugin.Execute.apply( plugin, arguments );
};


/**
 * Initialize video player
 * @returns void
 */
PlayerSamsungSef.prototype.init = function () {
    this.container = this.getContainer();
    var plugin = this.getPlugin();
    var self = this;

    var createHandler = function (fnName) {
        return  function () {
            return self[fnName].apply(self, arguments);
        };
    };

    plugin.OnConnectionFailed      = createHandler('onConnectionFailed');
    plugin.OnAuthenticationFailed  = createHandler('onAuthenticationFailed');
    plugin.OnStreamNotFound        = createHandler('onStreamNotFound');
    plugin.OnNetworkDisconnected   = createHandler('onNetworkDisconnected');
    plugin.OnRenderingStart        = createHandler('onRenderingStart');
    plugin.OnRenderError           = createHandler('onRenderError');
    plugin.OnRenderingComplete     = createHandler('onRenderingComplete');
    plugin.OnStreamInfoReady       = createHandler('onStreamInfoReady');
    plugin.OnBufferingStart        = createHandler('onBufferingStart');
    plugin.OnBufferingComplete     = createHandler('onBufferingComplete');
    plugin.OnBufferingProgress     = createHandler('onBufferingProgress');
    plugin.OnCurrentPlayTime       = createHandler('onCurrentPlayTime');
    plugin.OnResolutionChanged     = createHandler('onResolutionChanged');
    plugin.OnCustomEvent           = createHandler('onCustomEvent');
    plugin.OnEvent                 = createHandler('onEvent');

    var params = {
        'trid': '23520697',
        'DEVICE_ID': this.getOption('drm').duid,
        'DEVICE_TYPE_ID': '', // 60
        'STREAM_ID': this.getOption('drm').streamId,
        'IP_ADDR': this.getOption('drm').ip,
        'DRM_URL': this.getOption('drm').url,
        'HEARTBEAT_URL': this.getOption('drm').heartbeatUrl,
        'HEARTBEAT_PERIOD': this.getOption('drm').heartbeatPeriod,
        'I_SEEK': 'TIME',
        'CUR_TIME': 'PTS',
        'COMPONENT': 'WV',
        'PORTAL': this.getOption('drm').portal,
        'USER_DATA': this.getOption('drm').userData
    };


    /*
     url = options.url+'?trid=23520697|' +
     'DEVICE_ID='+tok[2]+'|' +
     'DEVICE_TYPE_ID=|' +
     'STREAM_ID='+tok[1]+'|' +
     'IP_ADDR='+tok[0]+'|' +
     'DRM_URL=https://drm.look1.ru/lic|' +
     'HEARTBEAT_URL=https://drm.look1.ru/hb|' +
     'HEARTBEAT_PERIOD=30|' +
     'I_SEEK=TIME|' +
     'CUR_TIME=PTS|' +
     'COMPONENT=WV|' +
     'PORTAL=moreruswv|' +
     'USER_DATA='+encodeURIComponent(tok[3]);
     */

    var queryString = Object.keys( params ).map(function(param){
        return param + '=' + params[ param ];
    }).join('|');

    // if DRM
    if(this.getOption('url').slice(-4) === '.wvm'){
        this.setOption('url', (this.getOption('url') +  '?' + queryString));
    }

    // if DASH
    if(this.getOption('url').slice(-4) === '.mpd'){
        this.setOption('url', (this.getOption('url') + '|COMPONENT=HAS'));
    }

    // for sef player
    if(typeof plugin.Open === "function"){
        plugin.Open('Player', '1.112', 'Player');
    }

    this.execute('InitPlayer', this.getOption('url'));
    this.execute('SetPlayerProperty', 3, document.cookie, document.cookie.length);
    // this.execute('SetPlayerProperty', 4, 'https://drm.look1.ru/lic', 'https://drm.look1.ru/lic'.length);
    this.execute('SetInitialBuffer', this.getOption('bufferSize'));
    this.execute('SetTotalBufferSize', this.getOption('bufferSize') * 5);
    this.execute('SetPendingBuffer', this.getOption('bufferSize') * 5);
    this.setScreenSize(plugin.offsetWidth, plugin.offsetHeight);
    // this.execute('StartPlayback');

    this._setState(this.STATE_INIT);
};


PlayerSamsungSef.prototype.deinit = function(){
    log('deinit');
    var result = this.execute('Stop');
    this._setState(this.STATE_NOT_INIT);
    return result;
};


/**
 *
 * @param {number} width
 * @param {number} height
 */
PlayerSamsungSef.prototype.setScreenSize = function(width, height){
    var plugin = this.getPlugin();
    plugin.style.left = '0px';
    plugin.style.top = '0px';
    plugin.style.width = width + 'px';
    plugin.style.height = height + 'px';
    plugin.style.overflow = 'hidden';

    var deviceScreenSize = this.getDeviceScreenSize();
    var scaleRatio = 960 / deviceScreenSize[0];

    width = width * scaleRatio;
    height = height * scaleRatio;

    var pluginRect = plugin.getBoundingClientRect();
    var left = pluginRect.left * scaleRatio;
    var top = pluginRect.top * scaleRatio;

    this.execute('SetDisplayArea', left, top, width, height);
    this.execute('ClearScreen');
};


/**
 * Request Fullscreen mode
 * @returns {object} PlayerSamsungSef
 */
PlayerSamsungSef.prototype.requestFullscreen = function () {
    this.getPlugin().style.position = 'fixed';
    var deviceScreenSize = this.getDeviceScreenSize();
    this.setScreenSize(deviceScreenSize[0], deviceScreenSize[1]);
    return true;
};


/**
 * Exit from Fullscreen mode
 * @returns {boolean}
 */
PlayerSamsungSef.prototype.exitFullscreen = function () {
    this.getPlugin().style.position = 'relative';
    this.setScreenSize(this.options.width, this.options.height);
    return true;
};


/**
 * Start playback from
 * @param {number} seconds
 * @returns {boolean}
 */
PlayerSamsungSef.prototype.startPlayback = function (seconds) {
    if (typeof seconds === 'undefined') {
        seconds = 0;
    }

    var result = this.execute('StartPlayback', seconds);
    this._setState(this.STATE_PLAY);
    return result;
};


/**
 * Jump to timestamp
 * @param {number} ms
 * @returns {boolean}
 */
PlayerSamsungSef.prototype.setCurrentTime = function (ms) {
    var currentTime = this.getCurrentTime();
    var jump = 0;

    if(ms > this.currentTime){
        jump = ms - currentTime;
        return this.execute('JumpForward', jump );
    }

    if(ms < this.currentTime){
        jump = currentTime - ms;
        return this.execute('JumpBackward', jump );
    }
};


/**
 * Paused video
 * @returns {boolean}
 */
PlayerSamsungSef.prototype.pause = function () {
    var result = this.execute('Pause');
    this._setState(this.STATE_PAUSE);
    return result;
};


/**
 * Resume playback
 * @returns {boolean}
 */
PlayerSamsungSef.prototype.resume = function () {
    var result = this.execute('Resume');
    this._setState(this.STATE_PLAY);
    return result;
};


PlayerSamsungSef.prototype.stepBackward = function (sec) {
    return this.execute('JumpBackward', sec);
};


PlayerSamsungSef.prototype.stepForward = function (sec) {
    return this.execute('JumpForward', sec);
};


PlayerSamsungSef.prototype.stop = function () {
    var result = this.execute('Stop');
    this._setState(this.STATE_STOP);
    this.deinit();
    this.emit('stop');
    return result;
};


PlayerSamsungSef.prototype.setPlaybackSpeed = function (speed) {
    return this.execute('SetPlaybackSpeed', speed);
};


PlayerSamsungSef.prototype.setPlaybackRate = function (rate) {
    return this.execute('SetPlaybackSpeed', rate);
};


PlayerSamsungSef.prototype.onCustomEvent = function () {
    log('onCustomEvent');

    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        log('arg' + i, obj);
    }

    var args = Object.keys(arguments).map(function (name) {
        return arguments[name];
    });

    Array.prototype.apply(log, args);
};


PlayerSamsungSef.prototype.onEvent = function (event, arg1, arg2) {
    // http://www.samsungdforum.com/SamsungDForum/ForumView/f0cd8ea6961d50c3?forumID=ec9f3562a5ebd82a
    /*
     '1' : 'CONNECTION_FAILED',
     '2' : 'AUTHENTICATION_FAILED',
     '3' : 'STREAM_NOT_FOUND',
     '4' : 'NETWORK_DISCONNECTED',
     '5' : 'NETWORK_SLOW',
     '6' : 'RENDER_ERROR',
     '7' : 'RENDERING_START',
     '8' : 'RENDERING_COMPLETE',
     '9' : 'STREAM_INFO_READY',
     '10' : 'DECODING_COMPLETE',
     '11' : 'BUFFERING_START',
     '12' : 'BUFFERING_COMPLETE',
     '13' : 'BUFFERING_PROGRESS',
     '14' : 'CURRENT_PLAYBACK_TIME',
     '15' : 'AD_START',
     '16' : 'AD_END',
     '17' : 'RESOLUTION_CHANGED',
     '18' : 'BITRATE_CHANGED',
     '19' : 'SUBTITLE',
     '20' : 'CUSTOM',
     '30' : ? // jump to success
     '100' : ? // arg1 403,  drm permission deni
     */

    switch (event) {
        case 1:
            this.onConnectionFailed();
            break;
        case 4:
            this.onNetworkDisconnected();
            break;
        case 6:
            this.onRenderError(arg1);
            break;
        case 7:
            this.onRenderingStart();
            break;
        case 8:
            this.onRenderingComplete();
            break;
        case 9:
            this.onStreamInfoReady();
            break;
        case 11:
            this.onBufferingStart();
            break;
        case 12:
            this.onBufferingComplete();
            break;
        case 13:
            this.onBufferingProgress(arg1);
            break;
        case 14:
            this.onCurrentPlayTime(arg1);
            break;
        case 18:
            log('bitrate changed', event, 'arg1', arg1, 'arg2', arg2);
            break;
        default:
            log('undeclared even', event, 'arg1', arg1, 'arg2', arg2);
            break;
    }
};


/**
 * The OnStreamInfoReady event is sent by the media player is when it is ready to send content information
 * such as duration and video resolution after parsing the stream.
 * There are a few APIs which gives valid information only when they are called
 * after OnStreamInfoReady() event is sent.
 * APIs such as GetDuration(), GetVideoWidth(), and GetVideoHeight() are have to be used
 * after widget get OnStreamInfoReady event.
 */
PlayerSamsungSef.prototype.onStreamInfoReady = function () {
    log( 'onStreamInfoReady' );

    var info = this.getInfo();
    var plugin = this.getPlugin();
    this.emit('info', info);
    this.setScreenSize(plugin.offsetWidth, plugin.offsetHeight);
};


PlayerSamsungSef.prototype.getDuration = function () {
    return this.duration;
};


PlayerSamsungSef.prototype.getCurrentTime = function () {
    return this.currentTime;
};


PlayerSamsungSef.prototype.getInfo = function () {
    log('GET INFO');

    this.duration = this.timeToMseconds(this.execute('GetDuration'));

    var info = {
        duration: this.duration,
        width: this.execute('GetVideoWidth'),
        height: this.execute('GetVideoHeight'),
        resolution: this.execute('GetVideoResolution'),
        playerVersion: this.execute('GetPlayerVersion'),
        availableBitrates: this.execute('GetAvailableBitrates'),
        currentBitrates: this.execute('GetCurrentBitrates'),
        totalNumOfStreamId: this.execute('GetTotalNumOfStreamID')
    };

    if(!info.width && !info.height && info.resolution){
        info.width = info.resolution.split('|')[0];
        info.height = info.resolution.split('|')[1];
    }

    log('info');
    for(var param in info){
        log(param, info[param]);
    }


    this.emit('durationchange', this.duration);
    var videoRatio = info.width / info.height;
    var size = this.getDeviceScreenSize();

    log('videoRatio', videoRatio);
    log('scaleRatio', 960 / size[0]);

    return info;
};


/**
 * The SetPlaybackSpeed function sets the playback speed of the currently playing content.
 *
 * @param {number} speed
 * @return {boolean}
 */
PlayerSamsungSef.prototype.setPlaybackSpeed = function (speed) {
    return this.execute('SetPlaybackSpeed', speed);
};


/**
 * SetInitialTimeOut sets the maximum time out value for initial buffering before starting playback.
 * @param {number} seconds
 */
PlayerSamsungSef.prototype.setInitialTimeOut = function (seconds) {
    return this.execute('SetInitialTimeOut', seconds);
};


/**
 * OnConnectionFailed event is different from OnNetworkDisconnected. This event is sent only when
 * media player fails to connect to server at the begining or at the jump in HTTP and HTTPS streaming.
 */
PlayerSamsungSef.prototype.onConnectionFailed = function() {
    log('onConnectionFailed');
    this._setState(this.STATE_ERROR);
};


/**
 * The OnAuthenticationFailed event is sent by media player when it fails to play
 * because authentication process has been failed.
 */
PlayerSamsungSef.prototype.onAuthenticationFailed = function() {
    log('onAuthenticationFailed');
};


/**
 * OnStreamNotFound event is sent by meida player when it fails to play because streaming server replys
 * that the stream specified by url parameter of Play() API is not exist.
 */
PlayerSamsungSef.prototype.onStreamNotFound = function() {
    log('onStreamNotFound');
};


/**
 * Receiving OnNetworkDisconnected event means media player already succeed to connect to streaming server.
 * Usually this event means network is disconnected during the streaming.
 */
PlayerSamsungSef.prototype.onNetworkDisconnected = function() {
    log('onNetworkDisconnected');
};


/**
 * OnRenderError event is sent by media player when it found that there are some problem in rendering because of
 * the reason specified by parameter.
 * Parameter value of OnRenderError means as follow:
 * 1. Unsupported container
 * 2. Unsupported video codec
 * 3. Unsupported audio codec
 * 4. Unsupported video resolution
 *
 * @param {number} error
 */
PlayerSamsungSef.prototype.onRenderError = function(error) {
    log('onRenderError');
    error = parseInt(error, 10);

    var message = '';

    switch(error){
        case 1:
            message = 'Unsupported container';
            break;
        case 2:
            message = 'Unsupported video codec';
            break;
        case 3:
            message = 'Unsupported audio codec';
            break;
        case 4:
            message = 'Unsupported video resolution';
            break;
        default:
            message = 'renderError ' + error + ' ' + typeof error;
            break;
    }

    log( message );
};


PlayerSamsungSef.prototype.onRenderingStart = function() {
    log('onRenderingStart');
};

/**
 * The OnRenderingComplete event is sent by media player when it reaches to the end of stream.
 */
PlayerSamsungSef.prototype.onRenderingComplete = function() {
    log('onRenderingComplete');
    this.stop();
};


/**
 * OnBufferingStart event is sent by media player when it goes on buffering status.
 */
PlayerSamsungSef.prototype.onBufferingStart = function() {
    log('onBufferingStart');
};


/**
 * The OnBufferingComplete event is sent by media player when it gets out of buffering status.
 */
PlayerSamsungSef.prototype.onBufferingComplete = function() {
    log('onBufferingComplete');
};


/**
 * OnBufferingProgress event is sent by media play to notify how much data
 * it has to receive more to get out from buffering status.
 * @param {number} percent
 */
PlayerSamsungSef.prototype.onBufferingProgress = function(percent) {
    log('onBufferingProgress', 'percent', percent);
};


/**
 * OnCurrentPlayTime is sent by media player to notify current playback time.
 * @param {number}
 */
PlayerSamsungSef.prototype.onCurrentPlayTime = function(msec) {
    this.currentTime = this.timeToMseconds(msec);

    if(this.currentTime < 0){
        this.currentTime = 0;
    }

    this.emit('timeupdate', this.currentTime);
};


PlayerSamsungSef.prototype.onResolutionChanged = function () {
    log('onResolutionChanged');
};


PlayerSamsungSef.prototype.timeToMseconds = function (time) {
    return time;
};


PlayerSamsungSef.prototype.msecondsToPlugin = function (mseconds) {
    return mseconds;
};


extend(PlayerSamsungPlugin, PlayerSamsungSef);

function PlayerSamsungPlugin (options) {
    PlayerSamsungSef.superclass.constructor.apply(this, arguments);
    log('player samsung plugin create');
};


PlayerSamsungPlugin.prototype.getPlugin = function () {
    if(!this.plugin){
        var plugin = document.createElement('object');
        plugin.setAttribute('id', 'pluginPlayer');
        plugin.setAttribute('border', '0');
        plugin.setAttribute('class', 'player');
        plugin.setAttribute('classid', 'clsid:SAMSUNG-INFOLINK-PLAYER');
        plugin.style.position = 'relative';

        document.getElementById('playerContainer').appendChild(plugin);
        this.plugin = plugin;
    }

    if(!this.plugin){
        throw new Error('player not found');
    }

    return this.plugin;
};


PlayerSamsungPlugin.prototype.execute = function () {
    var method = Array.prototype.slice.call( arguments, 0, 1 );
    var args = Array.prototype.slice.call( arguments, 1);
    var plugin = this.getPlugin();

    if(typeof plugin[ method ] === 'undefined'){
        log('plugin have not method', method);
        return false;
    }

    return plugin[ method ].apply( plugin, args );
};

module.exports = {
    Plugin: PlayerSamsungPlugin,
    SEF: PlayerSamsungSef
};