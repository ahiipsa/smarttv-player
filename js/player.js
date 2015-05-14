(function () {

    function extend(Child, Parent) {
        var F = function() { };
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.superclass = Parent.prototype;
    }

    function merge(obj1, obj2){
        var obj3 = {};
        for (var attrName1 in obj1) { obj3[attrName1] = obj1[attrName1]; }
        for (var attrName2 in obj2) { obj3[attrName2] = obj2[attrName2]; }
        return obj3;
    }

    var ERROR   = -1,
        NOT_INIT= 0,
        INIT    = 1,
        STOP    = 2,
        PLAY    = 3,
        PAUSE   = 4;

    var states = {};
    states[ERROR]   = 'error';
    states[NOT_INIT]= 'not_init';
    states[INIT]    = 'init';
    states[STOP]    = 'stop';
    states[PLAY]    = 'play';
    states[PAUSE]   = 'pause';


    function Observer() {}

    Observer.prototype.listeners = {};

    Observer.prototype.on = function (event, callback) {
        if(typeof this.listeners[event] === 'undefined'){
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    };


    Observer.prototype.off = function (event, callback) {
        var index = this.listeners[event].indexOf(callback);
        if(index !== 0){
            this.listeners[event].splice(index, 1);
        }
    };


    Observer.prototype.emit = function (event) {
        var listeners = this.listeners[event];

        if( typeof listeners === 'undefined' || listeners.length == 0 ){
            return;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for(var i = 0; i < listeners.length; i++){
            listeners[i].apply(listeners[i], args);
        }
    };


    function VideoPlayer(type, options) {
        log('video player create', type);
        this.player = this.playerFactory(type, options);
    }


    VideoPlayer.prototype.playerFactory = function (type, options) {
        var player;
        switch (type){
            case 'samsung-plugin':
                player = new PlayerPlugin(options);
                break;
            case 'samsung-plugin-sef':
                player = new PlayerSEF(options);
                break;
            default :
                throw new Error('player ' + type + ' is not declared');
                break;
        }

        player.init();
        return player;
    };


    /**
     * Set video url
     * @param {string} url
     * @param {object} options
     */
    VideoPlayer.prototype.setVideo = function (url, options) {
        this.player.setVideo(url, options);
    };


    /**
     * Set options for player
     * @param {object} options
     */
    VideoPlayer.prototype.setOptions = function (options) {
        this.player.setOptions(options);
    };


    /**
     * Play/pause method
     * @param {number} seconds
     * @returns {boolean}
     */
    VideoPlayer.prototype.play = function (seconds) {
        var state = this.player.getState();
        var result = false;

        log('play', 'state', states[state], state);
        switch(state){
            case ERROR:
            case NOT_INIT:
                this.player.init();
                result = this.startPlayback(seconds);
                if(result){
                    this.player._setState(PLAY);
                }
                break;
            case INIT:
                result = this.startPlayback(seconds);
                if(result){
                    this.player._setState(PLAY);
                }
                break;
            case STOP:
                result = this.startPlayback(seconds);
                if(result){
                    this.player._setState(PLAY);
                }
                break;
            case PAUSE:
                result = this.resume();
                if(result){
                    this.player._setState(PLAY);
                }
                break;
            case PLAY:
                result = this.pause();
                if(result){
                    this.player._setState(PAUSE);
                }
                break;
            default:
                log('state not declared ' + status);
                return false;
                break;
        }

        log( 'play result', !!result, 'state',  states[this.getState()], this.getState() );
        return result;
    };


    VideoPlayer.prototype.startPlayback = function (seconds) {
        return this.player.startPlayback(seconds);
    };


    VideoPlayer.prototype.onEvent = function () {
        log('event');
    };


    VideoPlayer.prototype.pause = function(){
        return this.player.pause();
    };


    VideoPlayer.prototype.resume = function(){
        return this.player.resume();
    };


    VideoPlayer.prototype.stop = function(){
        return this.player.stop();
    };


    VideoPlayer.prototype.stepForward = function(seconds){
        return this.player.stepForward(seconds);
    };


    VideoPlayer.prototype.stepBackward = function(seconds){
        return this.player.stepBackward(seconds);
    };


    VideoPlayer.prototype.setPlaybackSpeed = function(speed){
        return this.player.setPlaybackSpeed(speed);
    };


    VideoPlayer.prototype.setCurrentTime = function(seconds){
        return this.player.setCurrentTime(seconds);
    };


    VideoPlayer.prototype.getCurrentTime = function(){
        return this.player.getCurrentTime();
    };


    VideoPlayer.prototype.getState = function(){
        return this.player.getState();
    };


    VideoPlayer.prototype.getDuration = function(){
        return this.player.getDuration();
    };


    VideoPlayer.prototype.setScreenSize = function(width, height){
        return this.player.setScreenSize(width, height);
    };


    VideoPlayer.prototype.on = function (event, callback) {
        this.player.on(event, callback);
    };


    VideoPlayer.prototype.getInfo = function () {
        return this.player.getInfo();
    };


    VideoPlayer.prototype.off = function (event, callback) {
        this.player.on(event, callback);
    };



    extend(PlayerInterface, Observer);
    /**
     * @interface
     */
    function PlayerInterface (options) {
        this.state = NOT_INIT;
        this.currentTime = 0;
        this.duration = 0;
        this.options = merge({}, options);
    }


    PlayerInterface.prototype.setVideo = function (url, options) {
        this.options.url = url;
        this.options = merge(this.options, options);
        this.deinit();
        this.init();
    };


    PlayerInterface.prototype.setOptions = function (options) {
        this.options = merge(this.options, options);
    };


    PlayerInterface.prototype.getState = function () {
        return this.state;
    };


    /**
     * change status
     * @param {number} stateCode
     * @returns {PlayerInterface}
     */
    PlayerInterface.prototype._setState = function (stateCode) {
        if(stateCode === this.state){
            return this;
        }

        this.state = stateCode;
        log('change status', stateCode, states[stateCode]);
        return this;
    };


    PlayerInterface.prototype.getCurrentTime = function () {
        return this.currentTime;
    };


    PlayerInterface.prototype.getDuration = function () {
        return this.duration;
    };


    PlayerInterface.prototype.setDuration = function (sec) {
        this.duration = sec;
    };


    PlayerInterface.prototype.pause = function () {
        throw new Error('not implemented');
    };


    PlayerInterface.prototype.stop = function () {
        throw new Error('not implemented');
    };


    PlayerInterface.prototype.stepForward = function(sec) {
        throw new Error('not implemented');
    };

    PlayerInterface.prototype.stepBackward = function(sec) {
        throw new Error('not implemented');
    };


    PlayerInterface.prototype.setCurrentTime = function(sec){
        throw new Error('not implemented');
    };


    PlayerInterface.prototype.play = function () {
        throw new Error('not implemented');
    };


    PlayerInterface.prototype.getScreenSize = function() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        log('window: ' + x + 'x' + y);

        var sh = window.screen.availHeight,
            sw = window.screen.availWidth;

        log('screen: ' + sw + 'x' + sh);

        return sw;
    };


    /* ******************************* */
    extend(PlayerSEF, PlayerInterface);


    function PlayerSEF (options) {
        PlayerSEF.superclass.constructor.apply(this, arguments);
        log('player sef create');
    }


    PlayerSEF.prototype.getPluginObject = function () {
        if(!this.plugin){
            var plugin = document.createElement('object');
            plugin.setAttribute('id', 'pluginSEF');
            plugin.setAttribute('border', '0');
            plugin.setAttribute('class', 'player');
            plugin.setAttribute('classid', 'clsid:SAMSUNG-INFOLINK-SEF');
            plugin.style.position = 'relative';

            document.getElementById('playerContainer').appendChild(plugin);
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
    PlayerSEF.prototype.execute = function () {
        return this.plugin.Execute.apply( this.plugin, arguments );
    };


    PlayerSEF.prototype.init = function () {
        // TODO: find element object with classid="clsid:SAMSUNG-INFOLINK-SEF"
        this.plugin = this.getPluginObject();
        var self = this;

        var createHandler = function (fnName) {
            return  function () {
                return self[fnName].apply(self, arguments);
            };
        };

        this.plugin.OnConnectionFailed      = createHandler('onConnectionFailed');
        this.plugin.OnAuthenticationFailed  = createHandler('onAuthenticationFailed');
        this.plugin.OnStreamNotFound        = createHandler('onStreamNotFound');
        this.plugin.OnNetworkDisconnected   = createHandler('onNetworkDisconnected');
        this.plugin.OnRenderingStart        = createHandler('onRenderingStart');
        this.plugin.OnRenderError           = createHandler('onRenderError');
        this.plugin.OnRenderingComplete     = createHandler('onRenderingComplete');
        this.plugin.OnStreamInfoReady       = createHandler('onStreamInfoReady');
        this.plugin.OnBufferingStart        = createHandler('onBufferingStart');
        this.plugin.OnBufferingComplete     = createHandler('onBufferingComplete');
        this.plugin.OnBufferingProgress     = createHandler('onBufferingProgress');
        this.plugin.OnCurrentPlayTime       = createHandler('onCurrentPlayTime');
        this.plugin.OnResolutionChanged     = createHandler('onResolutionChanged');
        this.plugin.OnCustomEvent           = createHandler('onCustomEvent');
        this.plugin.OnEvent                 = createHandler('onEvent');

        var BUFFER_SIZE = 400 * 1024;

        var params = {
            'trid': '23520697',
            'DEVICE_ID': this.options.duid,
            'DEVICE_TYPE_ID': '', // 60
            'STREAM_ID': this.options.streamId,
            'IP_ADDR': this.options.ip,
            'DRM_URL': 'https://drm.look1.ru/lic',
            'HEARTBEAT_URL': 'https://drm.look1.ru/hb',
            'HEARTBEAT_PERIOD': '30',
            'I_SEEK': 'TIME',
            'CUR_TIME': 'PTS',
            'COMPONENT': 'WV',
            'PORTAL': 'moreruswv',
            'USER_DATA': this.options.userData
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
        if(this.options.url.slice(-4) === '.wvm'){
            this.options.url = this.options.url +  '?' + queryString;
        }

        if(this.options.url.slice(-4) === '.mpd'){
            this.options.url = this.options.url + '|COMPONENT=HAS'
        }

        // for sef player
        if(typeof this.plugin.Open === "function"){
            this.plugin.Open('Player', '1.112', 'Player');
        }

        this.execute('InitPlayer', this.options.url);
        this.execute('SetPlayerProperty', 3, document.cookie, document.cookie.length);
        // this.execute('SetPlayerProperty', 4, 'https://drm.look1.ru/lic', 'https://drm.look1.ru/lic'.length);
        this.execute('SetInitialBuffer', BUFFER_SIZE);
        this.execute('SetTotalBufferSize', BUFFER_SIZE * 5);
        this.execute('SetPendingBuffer', BUFFER_SIZE * 5);
        this.setScreenSize(this.plugin.offsetWidth, this.plugin.offsetHeight);
        // this.execute('StartPlayback');


        this.state = INIT;
    };


    PlayerSEF.prototype.deinit = function(){
        log('deinit');
        var result = this.execute('Stop');
        this._setState(NOT_INIT);
        return result;
    };


    /**
     *
     * @param {number} width
     * @param {number} height
     */
    PlayerSEF.prototype.setScreenSize = function(width, height){

        var container = this.plugin;
        var clientRect = container.getBoundingClientRect();
        this.plugin.style.left = '0px';
        this.plugin.style.top = '0px';
        this.plugin.style.width = width + 'px';
        this.plugin.style.height = height + 'px';
        this.plugin.style.overflow = 'hidden';

        var size = getDisplaySize();
        var scaleRatio = 960 / size[0];

        width = width * scaleRatio;
        height = height * scaleRatio;

        var left = clientRect.left * scaleRatio;
        var top = clientRect.top * scaleRatio;

        this.execute('SetDisplayArea', left, top, width, height);
        this.execute('ClearScreen');
    };


    /**
     * Start playback from
     * @param {number} seconds
     * @returns {boolean}
     */
    PlayerSEF.prototype.startPlayback = function (seconds) {
        if (typeof seconds === 'undefined') {
            seconds = 0;
        }

        var result = this.execute('StartPlayback', seconds);
        this._setState(PLAY);
        return result;
    };


    /**
     * Jump to timestamp
     * @param {number} timestamp
     * @returns {boolean}
     */
    PlayerSEF.prototype.setCurrentTime = function (timestamp) {
        var currentTime = this.getCurrentTime();
        var jump = 0;

        if(timestamp > this.currentTime){
            jump = timestamp - currentTime;
            return this.execute('JumpForward', jump );
        }

        if(timestamp < this.currentTime){
            jump = currentTime - timestamp;
            return this.execute('JumpBackward', jump );
        }
    };


    /**
     * Paused video
     * @returns {boolean} result
     */
    PlayerSEF.prototype.pause = function () {
        var result = this.execute('Pause');
        this._setState(PAUSE);
        return result;
    };


    /**
     * Resume playback
     * @returns {boolean}
     */
    PlayerSEF.prototype.resume = function () {
        var result = this.execute('Resume');
        this._setState(PLAY);
        return result;
    };


    PlayerSEF.prototype.stepBackward = function (sec) {
        return this.execute('JumpBackward', sec);
    };


    PlayerSEF.prototype.stepForward = function (sec) {
        return this.execute('JumpForward', sec);
    };


    PlayerSEF.prototype.stop = function () {
        var result = this.execute('Stop');
        this._setState(STOP);
        this.deinit();
        this.emit('stop');
        return result;
    };


    PlayerSEF.prototype.setPlaybackSpeed = function (speed) {
        return this.execute('SetPlaybackSpeed', speed);
    };


    PlayerSEF.prototype.onCustomEvent = function () {
        log('onCustomEvent');
        log(arguments);

        var args = Object.keys(arguments).map(function (name) {
            return arguments[name];
        });

        Array.prototype.apply(log, args);
    };


    PlayerSEF.prototype.onEvent = function (event, arg1, arg2) {
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
                break
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
    PlayerSEF.prototype.onStreamInfoReady = function () {
        log( 'onStreamInfoReady' );
        // duration = Math.round(duration / 1000);
        // this.setDuration( duration );
        // document.getElementById('duration').innerText = duration.toString();

        var info = this.getInfo();
        this.emit('info', info);

        this.setScreenSize(this.plugin.offsetWidth, this.plugin.offsetHeight);
    };


    PlayerSEF.prototype.getInfo = function () {

        log('GET INFO');
        var info = {
            duration: this.execute('GetDuration'),
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

        var videoRatio = info.width / info.height;
        var size = getDisplaySize();

        log('videoRatio', videoRatio);
        log('scaleRatio', 960 / size[0]);

        return info;
    }

    /**
     * The SetPlaybackSpeed function sets the playback speed of the currently playing content.
     *
     * @param {number} speed
     * @return {boolean}
     */
    PlayerSEF.prototype.setPlaybackSpeed = function (speed) {
        return this.execute('SetPlaybackSpeed', speed);
    };


    /**
     * SetInitialTimeOut sets the maximum time out value for initial buffering before starting playback.
     * @param {number} seconds
     */
    PlayerSEF.prototype.setInitialTimeOut = function (seconds) {
        return this.execute('SetInitialTimeOut', seconds);
    };


    /**
     * OnConnectionFailed event is different from OnNetworkDisconnected. This event is sent only when
     * media player fails to connect to server at the begining or at the jump in HTTP and HTTPS streaming.
     */
    PlayerSEF.prototype.onConnectionFailed = function() {
        log('onConnectionFailed');
        this._setState(ERROR);
    };


    /**
     * The OnAuthenticationFailed event is sent by media player when it fails to play
     * because authentication process has been failed.
     */
    PlayerSEF.prototype.onAuthenticationFailed = function() {
        log('onAuthenticationFailed');
    };


    /**
     * OnStreamNotFound event is sent by meida player when it fails to play because streaming server replys
     * that the stream specified by url parameter of Play() API is not exist.
     */
    PlayerSEF.prototype.onStreamNotFound = function() {
        log('onStreamNotFound');
    };


    /**
     * Receiving OnNetworkDisconnected event means media player already succeed to connect to streaming server.
     * Usually this event means network is disconnected during the streaming.
     */
    PlayerSEF.prototype.onNetworkDisconnected = function() {
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
     * @param {number} number
     */
    PlayerSEF.prototype.onRenderError = function(error) {
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


    PlayerSEF.prototype.onRenderingStart = function() {
        log('onRenderingStart');
    };

    /**
     * The OnRenderingComplete event is sent by media player when it reaches to the end of stream.
     */
    PlayerSEF.prototype.onRenderingComplete = function() {
        log('onRenderingComplete');
        this.stop();
    };


    /**
     * OnBufferingStart event is sent by media player when it goes on buffering status.
     */
    PlayerSEF.prototype.onBufferingStart = function() {
        log('onBufferingStart');
    };


    /**
     * The OnBufferingComplete event is sent by media player when it gets out of buffering status.
     */
    PlayerSEF.prototype.onBufferingComplete = function() {
        log('onBufferingComplete');
    };


    /**
     * OnBufferingProgress event is sent by media play to notify how much data
     * it has to receive more to get out from buffering status.
     * @param {number} percent
     */
    PlayerSEF.prototype.onBufferingProgress = function(percent) {
        log('onBufferingProgress', 'percent', percent);
    };


    /**
     * OnCurrentPlayTime is sent by media player to notify current playback time.
     * @param {number} msec
     */
    PlayerSEF.prototype.onCurrentPlayTime = function(msec) {
        this.currentTime = Math.floor( msec / 1000 );

        if(this.currentTime < 0){
            this.currentTime = 0;
        }

        var percent = this.currentTime / (this.getDuration() / 100);
        this.emit('currentTime', this.currentTime);
    };


    PlayerSEF.prototype.onResolutionChanged = function () {
        log('onResolutionChanged');
    };


    extend(PlayerPlugin, PlayerSEF);

    function PlayerPlugin (options) {
        PlayerSEF.superclass.constructor.apply(this, arguments);
        log('player plugin create');
    };


    PlayerPlugin.prototype.getPluginObject = function () {
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


    PlayerPlugin.prototype.execute = function () {
        var method = Array.prototype.slice.call( arguments, 0, 1 );
        var args = Array.prototype.slice.call( arguments, 1);

        if(typeof this.plugin[ method ] === 'undefined'){
            log('plugin have not method', method);
            return false;
        }

        return this.plugin[ method ].apply( this.plugin, args );
    };

    var getDisplaySize = function() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        log('window: ' + x + 'x' + y);

        var sh = window.screen.availHeight,
            sw = window.screen.availWidth;

        log('screen: ' + sw + 'x' + sh);

        return [sw, sh];
    };

    window.VideoPlayer = VideoPlayer;
})();

