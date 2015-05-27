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

    var STATE_ERROR   = -1,
        STATE_NOT_INIT= 0,
        STATE_INIT    = 1,
        STATE_STOP    = 2,
        STATE_PLAY    = 3,
        STATE_PAUSE   = 4;

    var states = {};
    states[STATE_ERROR]   = 'error';
    states[STATE_NOT_INIT]= 'not_init';
    states[STATE_INIT]    = 'init';
    states[STATE_STOP]    = 'stop';
    states[STATE_PLAY]    = 'play';
    states[STATE_PAUSE]   = 'pause';


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
            case 'samsung':
                player = new PlayerSamsungPlugin(options);
                break;
            case 'samsung-sef':
                player = new PlayerSamsungSef(options);
                break;
            case 'html5':
                player = new PlayerHtml5(options);
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
            case STATE_ERROR:
            case STATE_NOT_INIT:
                this.player.init();
                result = this.startPlayback(seconds);
                if(result){
                    this.player._setState(STATE_PLAY);
                }
                break;
            case STATE_INIT:
                result = this.startPlayback(seconds);
                if(result){
                    this.player._setState(STATE_PLAY);
                }
                break;
            case STATE_STOP:
                result = this.startPlayback(seconds);
                if(result){
                    this.player._setState(STATE_PLAY);
                }
                break;
            case STATE_PAUSE:
                result = this.resume();
                if(result){
                    this.player._setState(STATE_PLAY);
                }
                break;
            case STATE_PLAY:
                result = this.pause();
                if(result){
                    this.player._setState(STATE_PAUSE);
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


    VideoPlayer.prototype.requestFullscreen = function(){
        return this.player.requestFullscreen();
    };


    VideoPlayer.prototype.exitFullscreen = function(){
        return this.player.exitFullscreen();
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
     * Player Interface
     * @interface
     */
    function PlayerInterface (options) {
        this.state = STATE_NOT_INIT;
        this.currentTime = 0;
        this.duration = 0;
        this.options = merge({
            bufferSize: (400 * 1024),
            drm: {
                heartbeatPeriod: 30
            }
        }, options);
    }

    /**
     * Initialize player
     * @abstract
     */
    PlayerInterface.prototype.init = function () {
        throw new Error('init not implemented');
    };


    /**
     * Deinitialize player
     * @abstract
     */
    PlayerInterface.prototype.deinit = function () {
        throw new Error('deinit not implemented');
    }


    /**
     * Init and return video player DOM container
     * @abstract
     * @returns {HTMLElement}
     */
    PlayerInterface.prototype.getContainer = function () {
        if(!this.options.containerId){
            throw new Error('containerId undefined');
        }

        if(!this.container){
            this.container = document.getElementById(this.getOption('containerId'));
        }

        if(!this.container){
            throw new Error('element by containerId (' + this.getOption('containerId') + ') not found');
        }

        this.container.style.width = this.getOption('width') + 'px';
        this.container.style.height = this.getOption('height') + 'px';

        return this.container;
    };


    /**
     * Init and retirn video player plugin
     * @abstract
     * @return {HTMLElement}
     */
    PlayerInterface.prototype.getPlugin = function () {
        throw new Error('init not implemented');
    };


    /**
     * Set video url
     * @param {string} url
     * @param {object} options
     */
    PlayerInterface.prototype.setVideo = function (url, options) {
        this.setOption('url', url);
        this.setOptions(options);
        this.deinit();
        this.init();
    };


    /**
     * Setup options
     * @param {object} options
     */
    PlayerInterface.prototype.setOptions = function (options) {
        this.options = merge(this.options, options);
    };


    /**
     * Setup option value by name
     * @param {string} name
     * @param {*} value
     * @returns {PlayerInterface}
     */
    PlayerInterface.prototype.setOption = function (name, value) {
        this.options[name] = value;
        return this;
    };


    /**
     * Return option value by name
     * @param {string} name
     * @returns {*}
     */
    PlayerInterface.prototype.getOption = function (name) {
        return this.options[name];
    };


    /**
     * Return video player code state
     * @returns {number}
     */
    PlayerInterface.prototype.getState = function () {
        return this.state;
    };


    /**
     * Change state
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


    /**
     * @abstract
     * @return {number}
     */
    PlayerInterface.prototype.getCurrentTime = function () {
        throw new Error('getCurrentTime not implemented');
    };

    /**
     * @abstract
     * @return {number}
     */
    PlayerInterface.prototype.getDuration = function () {
        throw new Error('getDuration not implemented');
    };


    /**
     * @abstract
     */
    PlayerInterface.prototype.pause = function () {
        throw new Error('pause not implemented');
    };


    /**
     * @abstract
     */
    PlayerInterface.prototype.stop = function () {
        throw new Error('stop not implemented');
    };


    /**
     * @abstract
     * @param {number} sec
     */
    PlayerInterface.prototype.stepForward = function(sec) {
        throw new Error('stepForward not implemented');
    };


    /**
     * @abstract
     * @param {number} sec
     */
    PlayerInterface.prototype.stepBackward = function(sec) {
        throw new Error('stepBackward not implemented');
    };


    /**
     * @abstract
     * @param {number} sec
     */
    PlayerInterface.prototype.setCurrentTime = function(sec){
        throw new Error('setCurrentTime not implemented');
    };


    /**
     * @abstract
     */
    PlayerInterface.prototype.play = function () {
        throw new Error('play not implemented');
    };


    /**
     * @abstract
     */
    PlayerInterface.prototype.startPlayback = function () {
        throw new Error('startPlayback not implemented');
    };


    /**
     * @abstract
     */
    PlayerInterface.prototype.setScreenSize = function () {
        throw new Error('setScreenSize not implemented');
    };


    /**
     * @abstract
     */
    PlayerInterface.prototype.reuestFullscreen = function () {
        throw new Error('setScreenSize not implemented');
    };


    /**
     * @abstract
     */
    PlayerInterface.prototype.exitFullscreen = function () {
        throw new Error('exitFullscreen not implemented');
    };


    PlayerInterface.prototype.getWindowSize = function () {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        return [x, y];
    };


    PlayerInterface.prototype.getDeviceScreenSize = function() {
        var sw = window.screen.availWidth,
            sh = window.screen.availHeight;

        log('screen: ' + sw + 'x' + sh);

        return [sw, sh];
    };


    /**
     * @abstract
     */
    PlayerInterface.prototype.getInfo = function () {
        throw new Error('getInfo not implemented');
    };


    /* ******************************* */
    extend(PlayerSamsungSef, PlayerInterface);


    function PlayerSamsungSef (options) {
        PlayerSamsungSef.superclass.constructor.apply(this, arguments);
        log('player samsung sef create');
    }


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
            'DEVICE_ID': this.getOption('duid'),
            'DEVICE_TYPE_ID': '', // 60
            'STREAM_ID': this.getOption('streamId'),
            'IP_ADDR': this.getOption('ip'),
            'DRM_URL': this.getOption('drm').url,
            'HEARTBEAT_URL': this.getOption('drm').heartbeatUrl,
            'HEARTBEAT_PERIOD': this.getOption('drm').heartbeatPeriod,
            'I_SEEK': 'TIME',
            'CUR_TIME': 'PTS',
            'COMPONENT': 'WV',
            'PORTAL': this.getOption('drm').portal,
            'USER_DATA': this.getOption('userData')
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

        this._setState(STATE_INIT);
    };


    PlayerSamsungSef.prototype.deinit = function(){
        log('deinit');
        var result = this.execute('Stop');
        this._setState(STATE_NOT_INIT);
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
        this._setState(STATE_PLAY);
        return result;
    };


    /**
     * Jump to timestamp
     * @param {number} timestamp
     * @returns {boolean}
     */
    PlayerSamsungSef.prototype.setCurrentTime = function (timestamp) {
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
     * @returns {boolean}
     */
    PlayerSamsungSef.prototype.pause = function () {
        var result = this.execute('Pause');
        this._setState(STATE_PAUSE);
        return result;
    };


    /**
     * Resume playback
     * @returns {boolean}
     */
    PlayerSamsungSef.prototype.resume = function () {
        var result = this.execute('Resume');
        this._setState(STATE_PLAY);
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
        this._setState(STATE_STOP);
        this.deinit();
        this.emit('stop');
        return result;
    };


    PlayerSamsungSef.prototype.setPlaybackSpeed = function (speed) {
        return this.execute('SetPlaybackSpeed', speed);
    };


    PlayerSamsungSef.prototype.onCustomEvent = function () {
        log('onCustomEvent');
        log(arguments);

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
    PlayerSamsungSef.prototype.onStreamInfoReady = function () {
        log( 'onStreamInfoReady' );
        // duration = Math.round(duration / 1000);
        // this.setDuration( duration );
        // document.getElementById('duration').innerText = duration.toString();

        var info = this.getInfo();
        var plugin = this.getPlugin();
        this.emit('info', info);
        this.setScreenSize(plugin.offsetWidth, plugin.offsetHeight);
    };


    PlayerSamsungSef.prototype.getInfo = function () {

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
        var size = this.getDeviceScreenSize();

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
        this._setState(STATE_ERROR);
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
     * @param {number} number
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
     * @param {number} msec
     */
    PlayerSamsungSef.prototype.onCurrentPlayTime = function(msec) {
        this.currentTime = Math.floor( msec / 1000 );

        if(this.currentTime < 0){
            this.currentTime = 0;
        }

        //var percent = this.currentTime / (this.getDuration() / 100);
        this.emit('timeupdate', this.currentTime);
    };


    PlayerSamsungSef.prototype.onResolutionChanged = function () {
        log('onResolutionChanged');
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

    extend(PlayerHtml5, PlayerInterface);

    function PlayerHtml5 (options) {
        PlayerHtml5.superclass.constructor.apply(this, arguments);
        log('player html5 create');
    };


    /**
     * Initialize and return video plugin
     * @returns {HTMLElement}
     */
    PlayerHtml5.prototype.getPlugin = function () {
        if(!this.plugin){
            var plugin = document.createElement('video');
            plugin.setAttribute('id', 'videoPlugin');
            plugin.setAttribute('class', 'player');
            plugin.setAttribute('width', this.options.width);
            plugin.setAttribute('height', this.options.height);
            plugin.style.position = 'relative';

            this.getContainer().appendChild(plugin);
            this.plugin = plugin;
        }

        if(!this.plugin){
            throw new Error('player not found');
        }

        return this.plugin;
    };


    PlayerHtml5.prototype.init = function () {
        log('init');
        var container = this.getContainer();
        var plugin = this.getPlugin();
        var self = this;

        plugin.addEventListener('timeupdate', function () {
            self.emit('timeupdate', self.getCurrentTime());
        });

        plugin.addEventListener('durationchange', function () {
            self.emit('durationchange', self.getDuration());
        });

        plugin.addEventListener('play', function () {
            self.emit('play');
        });


        this._setSource(this.options.url);
        this._setState(STATE_INIT);
    };


    PlayerHtml5.prototype.deinit = function () {
        var container = this.getContainer();
        container.removeChild(this.getPlugin());
        this.plugin = null;
        this._setState(STATE_NOT_INIT);
        return true;
    };


    PlayerHtml5.prototype._setSource = function(sourceUrl){
        var source = document.createElement('source');
        source.setAttribute('src', sourceUrl);
        this.getPlugin().appendChild(source);
    };


    PlayerHtml5.prototype.startPlayback = function () {
        var plugin = this.getPlugin();
        plugin.load();
        plugin.play();
        this._setState(STATE_PLAY);
        return true;
    };


    PlayerHtml5.prototype.play = function () {
        this.getPlugin().play();
        this._setState(STATE_PLAY);
        return true;
    };


    PlayerHtml5.prototype.pause = function () {
        this.getPlugin().pause();
        this._setState(STATE_PAUSE);
        return true;
    };


    PlayerHtml5.prototype.resume = function () {
        this.getPlugin().play();
        this._setState(STATE_PLAY);
        return true;
    };


    PlayerHtml5.prototype.stop = function () {
        var plugin = this.getPlugin();
        plugin.pause();
        plugin.currentTime = 0;
        this._setState(STATE_STOP);
        return true;
    };


    PlayerHtml5.prototype.setCurrentTime = function (sec) {
        this.getPlugin().currentTime = sec;
        return true;
    };


    PlayerHtml5.prototype.stepForward = function (sec) {
        this.getPlugin().currentTime = this.getPlugin().currentTime + sec;
    };


    PlayerHtml5.prototype.stepBackward = function (sec) {
        this.getPlugin().currentTime = this.getPlugin().currentTime - sec;
    };


    PlayerHtml5.prototype.setPlaybackSpeed = function (speed) {
        var rate = parseFloat(speed).toFixed(1);
        log('rate', rate);
        this.getPlugin().playbackRate = rate;
    };


    PlayerHtml5.prototype.requestFullscreen = function () {
        var windowSize = this.getWindowSize();
        var plugin = this.getPlugin();

        plugin.width = windowSize[0];
        plugin.height = windowSize[1];

        plugin.style.position = 'fixed';
        plugin.style.top = '0px';
        plugin.style.left = '0px';
        plugin.style.width = windowSize[0] + 'px';
        plugin.style.height = windowSize[1] + 'px';
        return true;
    };


    PlayerHtml5.prototype.exitFullscreen = function () {
        var plugin = this.getPlugin();

        plugin.width = this.getOption('width');
        plugin.height = this.getOption('height');

        plugin.style.position = 'relative';
        plugin.style.width = plugin.width + 'px';
        plugin.style.height = plugin.height + 'px';
        return true;
    };


    PlayerHtml5.prototype.getInfo = function () {
        var plugin = this.getPlugin();
        var info = {
            duration: plugin.duration,
            currentTime: plugin.currentTime,
            bufferedLenght: plugin.buffered.length,
            //bufferedStart: plugin.buffered.start(),
            //bufferedEnd: plugin.buffered.end()
        };

        return info;
    };


    PlayerHtml5.prototype.getCurrentTime = function () {
        var currentTime = this.getPlugin().currentTime.toFixed(3);
        return currentTime;
    };


    PlayerHtml5.prototype.getDuration = function () {
        var duration = this.getPlugin().duration.toFixed(3);
        return duration;
    };


    window.VideoPlayer = VideoPlayer;
})();

