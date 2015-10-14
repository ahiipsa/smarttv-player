(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var PlayerSamsung = require('./player.samsung.js'),
    PlayerHtml5 = require('./player.html5.js'),
    PlayerLG = require('./player.lg.js'),
    log = require('./log.js');

function VideoPlayer(type, options) {
    this.player = this.playerFactory(type, options);
};


VideoPlayer.prototype.playerFactory = function (type, options) {
    var player;
    switch (type){
        case 'samsung':
            player = new PlayerSamsung.Plugin(options);
            break;
        case 'samsung-sef':
            player = new PlayerSamsung.SEF(options);
            break;
        case 'html5':
            player = new PlayerHtml5(options);
            break;
        case 'lg':
            player = new PlayerLG(options);
            break;
        default :
            throw new Error('player ' + type + ' is not declared');
            break;
    }

    player.init();
    return player;
};


VideoPlayer.prototype.getPlugin = function () {
    return this.player.getPlugin();
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
 * @param {number} [seconds]
 * @returns {boolean}
 */
VideoPlayer.prototype.play = function (seconds) {
    var state = this.getState();
    var result = false;
    var player = this.player;

    switch(state){
        case player.STATE_ERROR:
        case player.STATE_NOT_INIT:
            player.init();
            result = this.startPlayback(seconds);
            if(result){
                player._setState(player.STATE_PLAY);
            }
            break;
        case player.STATE_INIT:
            result = this.startPlayback(seconds);
            if(result){
                player._setState(player.STATE_PLAY);
            }
            break;
        case player.STATE_STOP:
            result = this.startPlayback(seconds);
            if(result){
                player._setState(player.STATE_PLAY);
            }
            break;
        case player.STATE_PAUSE:
            result = this.resume();
            if(result){
                player._setState(player.STATE_PLAY);
            }
            break;
        case player.STATE_PLAY:
            result = true;
            //result = this.pause();
            //if(result){
            //    player._setState(player.STATE_PAUSE);
            //}
            break;
        default:
            console.error('State not declared: ' + state);
            return false;
            break;
    }

    return result;
};


VideoPlayer.prototype.startPlayback = function (seconds) {
    return this.player.startPlayback(seconds);
};


VideoPlayer.prototype.onEvent = function () {
    console.log('event');
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
    console.log('setPlaybackSpeed deprecated method use setPlaybackRate');
    return this.player.setPlaybackSpeed(speed);
};


VideoPlayer.prototype.setPlaybackRate = function(speed){
    return this.player.setPlaybackRate(speed);
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

window.VideoPlayer = VideoPlayer;
},{"./log.js":3,"./player.html5.js":6,"./player.lg.js":7,"./player.samsung.js":8}],2:[function(require,module,exports){
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

module.exports = {
    extend: extend,
    merge: merge
};
},{}],3:[function(require,module,exports){
function log(){
    var string = Array.prototype.join.call(arguments, ' : ');
    console.log( string );

    var consoleDom = document.getElementById('console');

    if(null == consoleDom){
        return;
    }

    var div = document.createElement('div');
    div.innerHTML = string.replace(/(?:\r\n|\r|\n)/g, '<br />');
    consoleDom.appendChild( div );

    consoleDom.scrollTop = consoleDom.scrollHeight;
}


module.exports = log;
},{}],4:[function(require,module,exports){
function Observer() {}

Observer.prototype.listeners = {};

/**
 *
 * @param event
 * @param callback
 */
Observer.prototype.on = function (event, callback) {
    if(typeof this.listeners[event] === 'undefined'){
        this.listeners[event] = [];
    }

    if(typeof callback !== "function"){
        callback = function () {}
    }

    this.listeners[event].push(callback);
};


Observer.prototype.off = function (event, callback) {
    var index = this.listeners[event].indexOf(callback);
    if(index !== 0){
        this.listeners[event].splice(index, 1);
    }
};

/**
 *
 * @param event {string}
 */
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

module.exports = Observer;
},{}],5:[function(require,module,exports){
var extend = require('./helpers.js').extend,
    merge = require('./helpers.js').merge,
    Observer = require('./observer.js'),
    log = require('./log.js');

extend(PlayerAbstract, Observer);

/**
 * Player Abstract
 * @constructor
 * @param {object} options
 */
function PlayerAbstract (options) {
    this.state = this.STATE_NOT_INIT;
    this.options = merge({
        bufferSize: (400 * 1024),
        drm: {
            heartbeatPeriod: 30
        }
    }, options);
    this._playbackRate = 1;
}


PlayerAbstract.prototype.STATE_ERROR      = -1;
PlayerAbstract.prototype.STATE_NOT_INIT   = 0;
PlayerAbstract.prototype.STATE_INIT       = 1;
PlayerAbstract.prototype.STATE_STOP       = 2;
PlayerAbstract.prototype.STATE_PLAY       = 3;
PlayerAbstract.prototype.STATE_PAUSE      = 4;

PlayerAbstract.prototype.state = PlayerAbstract.prototype.STATE_NOT_INIT;
PlayerAbstract.prototype.states = {};
PlayerAbstract.prototype.states[PlayerAbstract.prototype.STATE_ERROR]   = 'error';
PlayerAbstract.prototype.states[PlayerAbstract.prototype.STATE_NOT_INIT]= 'not_init';
PlayerAbstract.prototype.states[PlayerAbstract.prototype.STATE_INIT]    = 'init';
PlayerAbstract.prototype.states[PlayerAbstract.prototype.STATE_STOP]    = 'stop';
PlayerAbstract.prototype.states[PlayerAbstract.prototype.STATE_PLAY]    = 'play';
PlayerAbstract.prototype.states[PlayerAbstract.prototype.STATE_PAUSE]   = 'pause';


/**
 * Initialize player
 * @abstract
 */
PlayerAbstract.prototype.init = function () {
    throw new Error('init not implemented');
};


/**
 * Deinitialize player
 * @abstract
 */
PlayerAbstract.prototype.deinit = function () {
    throw new Error('deinit not implemented');
};


/**
 * Init and return video player DOM container
 * @abstract
 * @returns {HTMLElement}
 */
PlayerAbstract.prototype.getContainer = function () {
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
PlayerAbstract.prototype.getPlugin = function () {
    throw new Error('init not implemented');
};


/**
 * Set video url
 * @param {string} url
 * @param {object} options
 */
PlayerAbstract.prototype.setVideo = function (url, options) {
    this.setOption('url', url);
    this.setOptions(options);
    this.deinit();
    this.init();
};


/**
 * Setup options
 * @param {object} options
 */
PlayerAbstract.prototype.setOptions = function (options) {
    this.options = merge(this.options, options);
};


/**
 * Setup option value by name
 * @param {string} name
 * @param {*} value
 * @returns {PlayerAbstract}
 */
PlayerAbstract.prototype.setOption = function (name, value) {
    this.options[name] = value;
    return this;
};


/**
 * Return option value by name
 * @param {string} name
 * @returns {*}
 */
PlayerAbstract.prototype.getOption = function (name) {
    return this.options[name];
};


/**
 * Return video player code state
 * @returns {number}
 */
PlayerAbstract.prototype.getState = function () {
    return this.state;
};


/**
 * Change state
 * @param {number} stateCode
 * @returns {PlayerAbstract}
 */
PlayerAbstract.prototype._setState = function (stateCode) {
    if(stateCode === this.state){
        return this;
    }

    this.state = stateCode;

    var stateName = this.getStateName(stateCode);
    this.emit('statechange', stateName);
    return this;
};


/**
 * Return state name
 * @param stateCode {number}
 */
PlayerAbstract.prototype.getStateName = function (stateCode) {
    if(this.states[stateCode]){
        return this.states[stateCode];
    }

    throw new Error('undeclared state code: ' + stateCode);
};


/**
 * @abstract
 * @return {number}
 */
PlayerAbstract.prototype.getCurrentTime = function () {
    throw new Error('getCurrentTime not implemented');
};

/**
 * @abstract
 * @return {number}
 */
PlayerAbstract.prototype.getDuration = function () {
    throw new Error('getDuration not implemented');
};


/**
 * @abstract
 */
PlayerAbstract.prototype.pause = function () {
    throw new Error('pause not implemented');
};


/**
 * @abstract
 */
PlayerAbstract.prototype.stop = function () {
    throw new Error('stop not implemented');
};

/**
 * @abstract
 */
PlayerAbstract.prototype.resume = function () {
    throw new Error('resume not implemented');
};


/**
 * @abstract
 * @param {number} sec
 */
PlayerAbstract.prototype.stepForward = function(sec) {
    throw new Error('stepForward not implemented');
};


/**
 * @abstract
 * @param {number} sec
 */
PlayerAbstract.prototype.stepBackward = function(sec) {
    throw new Error('stepBackward not implemented');
};


/**
 * @abstract
 * @param {number} sec
 */
PlayerAbstract.prototype.setCurrentTime = function(sec){
    throw new Error('setCurrentTime not implemented');
};


/**
 * @abstract
 */
PlayerAbstract.prototype.play = function () {
    throw new Error('play not implemented');
};


/**
 * @abstract
 */
PlayerAbstract.prototype.startPlayback = function () {
    throw new Error('startPlayback not implemented');
};


/**
 * @abstract
 * @param {number} speed
 */
PlayerAbstract.prototype.setPlaybackSpeed = function (speed) {
    throw new Error('setPlaybackSpeed not implemented');
};


/**
 * @abstract
 * @param rate
 */
PlayerAbstract.prototype.setPlaybackRate = function (rate) {
    throw new Error('setPlaybackRate not implemented');
};


/**
 * @abstract
 * @return {number} rate
 */
PlayerAbstract.prototype.getPlaybackRate = function () {
    throw new Error('getPlaybackRate not implemented');
};

/**
 * @abstract
 */
PlayerAbstract.prototype.setScreenSize = function () {
    throw new Error('setScreenSize not implemented');
};


/**
 * @abstract
 */
PlayerAbstract.prototype.requestFullscreen = function () {
    throw new Error('setScreenSize not implemented');
};


/**
 * @abstract
 */
PlayerAbstract.prototype.exitFullscreen = function () {
    throw new Error('exitFullscreen not implemented');
};


/**
 * Return window size [width, height]
 * @returns {number[]}
 */
PlayerAbstract.prototype.getWindowSize = function () {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        width = w.innerWidth || e.clientWidth || g.clientWidth,
        height = w.innerHeight|| e.clientHeight|| g.clientHeight;

    return [width, height];
};


/**
 * Return device screen size [width, height]
 * @returns {number[]}
 */
PlayerAbstract.prototype.getDeviceScreenSize = function() {
    var width = window.screen.availWidth,
        height = window.screen.availHeight;

    return [width, height];
};


/**
 * @abstract
 */
PlayerAbstract.prototype.getInfo = function () {
    throw new Error('getInfo not implemented');
};


/**
 * @abstract
 */
PlayerAbstract.msecondsToPlugin = function () {
    throw new Error('msecondsToPlugin not implemented');
};


/**
 * @abstract
 */
PlayerAbstract.timeToMseconds = function () {
    throw new Error('toToPlugin not implemented');
};


module.exports = PlayerAbstract;
},{"./helpers.js":2,"./log.js":3,"./observer.js":4}],6:[function(require,module,exports){
var extend = require('./helpers.js').extend,
    merge = require('./helpers.js').merge,
    PlayerAbstract = require('./player.abstract.js'),
    log = require('./log.js');

extend(PlayerHtml5, PlayerAbstract);

function PlayerHtml5 (options) {
    PlayerHtml5.superclass.constructor.apply(this, arguments);
}


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
    this.getContainer();
    var plugin = this.getPlugin();
    var self = this;

    plugin.addEventListener('loadedmetadata', function () {
        self.emit('loadmetadata');
    });

    plugin.addEventListener('ended', function () {
        self.emit('ended');
        self._setState(self.STATE_PAUSE);
        self.stop();
    });

    plugin.addEventListener('timeupdate', function () {
        self.emit('timeupdate', self.getCurrentTime());
    });

    plugin.addEventListener('durationchange', function () {
        self.emit('durationchange', self.getDuration());
    });

    plugin.addEventListener('play', function () {
        self.emit('play');
    });

    plugin.addEventListener('loadedmetadata', function () {
        self.emit('info', self.getInfo());
    });

    plugin.addEventListener('loadeddata', function () {
        self.emit('info', self.getInfo());
    });

    var lastTime = 0;
    var bufferingStart = false;
    plugin.addEventListener('progress', function () {
        var seconds = self.getCurrentTime();
        var isWait = lastTime === seconds;
        lastTime = seconds;

        if(isWait){
            if(!bufferingStart){
                bufferingStart = true;
                self.emit('bufferingstart');
            }

            self.emit('buffering');

            return;
        }

        if(bufferingStart){
            bufferingStart = false
            self.emit('bufferingend');
            return;
        }
    });

    this._setSource(this.options.url);
    this._setState(this.STATE_INIT);
};


PlayerHtml5.prototype.deinit = function () {
    var container = this.getContainer();
    container.removeChild(this.getPlugin());
    this.plugin = null;
    this._setState(this.STATE_NOT_INIT);
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
    this._setState(this.STATE_PLAY);
    return true;
};


PlayerHtml5.prototype.play = function () {
    this.getPlugin().play();
    this._setState(this.STATE_PLAY);
    return true;
};


PlayerHtml5.prototype.pause = function () {
    this.getPlugin().pause();
    this._setState(this.STATE_PAUSE);
    return true;
};


PlayerHtml5.prototype.resume = function () {
    this.getPlugin().play();
    this._setState(this.STATE_PLAY);
    return true;
};


PlayerHtml5.prototype.stop = function () {
    var plugin = this.getPlugin();
    plugin.pause();
    plugin.currentTime = 0;
    this._setState(this.STATE_STOP);
    return true;
};


PlayerHtml5.prototype.setCurrentTime = function (msec) {
    this.getPlugin().currentTime = this.msecondsToPlugin(msec);
    return true;
};


PlayerHtml5.prototype.stepForward = function (ms) {
    this.setCurrentTime(this.getCurrentTime() + ms);
};


PlayerHtml5.prototype.stepBackward = function (ms) {
    this.setCurrentTime(this.getCurrentTime() - ms);
};


PlayerHtml5.prototype.setPlaybackSpeed = function (speed) {
    var rate = parseFloat(speed).toFixed(1);
    
    this.getPlugin().playbackRate = rate;
};


PlayerHtml5.prototype.setPlaybackRate = function (speed) {
    this._playBackRate = speed;
    this.emit('ratechange', this._playBackRate);
    var rate = parseFloat(this._playBackRate).toFixed(1);
    this.getPlugin().playbackRate = rate;
};


PlayerHtml5.prototype.getPlaybackRate = function () {
    return this._playbackRate;
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
    return {
        duration: this.getDuration(),
        currentTime: this.getCurrentTime(),
        bufferedLenght: plugin.buffered.length
        //bufferedStart: plugin.buffered.start(),
        //bufferedEnd: plugin.buffered.end()
    };
};


PlayerHtml5.prototype.getCurrentTime = function () {
    return this.timeToMseconds(this.getPlugin().currentTime);
};


PlayerHtml5.prototype.getDuration = function () {
    return Math.round((this.getPlugin().duration * 1000));
};


PlayerHtml5.prototype.timeToMseconds = function (time) {
    return Math.round(time * 1000);
};


PlayerHtml5.prototype.msecondsToPlugin = function (mseconds) {
    return mseconds / 1000;
};

module.exports = PlayerHtml5;
},{"./helpers.js":2,"./log.js":3,"./player.abstract.js":5}],7:[function(require,module,exports){
var extend = require('./helpers.js').extend,
    merge = require('./helpers.js').merge,
    PlayerAbstract = require('./player.abstract.js'),
    log = require('./log.js');

extend(PlayerLG, PlayerAbstract);

/**
 *
 * @param options
 * @constructor
 */
function PlayerLG (options) {
    PlayerLG.superclass.constructor.apply(this, arguments);
}

PlayerLG.prototype._currentTimeInterval = null;

PlayerLG.prototype.getPlugin = function () {
    if(!this.plugin){
        var plugin = document.createElement('object');
        plugin.setAttribute('id', 'pluginPlayer');
        plugin.setAttribute('type', 'video/mp4');
        plugin.setAttribute('border', '0');
        plugin.setAttribute('width', this.getOption('width'));
        plugin.setAttribute('height', this.getOption('height'));
        plugin.setAttribute('VideoMaxWidth', '1280');
        plugin.setAttribute('VideoMaxHeight', '720');
        plugin.setAttribute('data', this.getOption('url'));
        plugin.setAttribute('playCount', '1');
        plugin.setAttribute('preBufferingTime', '5');
        plugin.setAttribute('autoStart', 'false');
        plugin.style.position = 'relative';

        document.getElementById('playerContainer').appendChild(plugin);
        this.plugin = plugin;
    }

    if(!this.plugin){
        throw new Error('player not found');
    }

    return this.plugin;
};


PlayerLG.prototype.init = function () {
    this.getContainer();
    var plugin = this.getPlugin();
    var self = this;

    var createHandler = function (fnName) {
        return  function () {
            return self[fnName].apply(self, arguments);
        };
    };

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

    var queryString = Object.keys( params ).map(function(param){
        return param + '=' + params[ param ];
    }).join('|');

    // if DRM
    if(this.getOption('url').slice(-4) === '.wvm'){
        /*
         media.setWidevineDrmURL(DrmServerURL);
         media.setWidevineDeviceID(DeviceID);
         media.setWidevineStreamID(StreamID);
         media.setWidevineClientIP(ClientIP);
         media.setWidevineUserData(UserData);
         media.setWidevineDrmAckURL(DrmAckServerURL);
         media.setWidevineHeartbeatURL(HeartbeatURL);
         media.setWidevineHeartbeatPeriod(HeartbeatPeriod);
         media.setWidevineDeviceType(DeviceType);
         */
        plugin.setAttribute('type', 'application/x-netcast-av');
        plugin.setAttribute('drm_type', 'widevine');

        plugin.setWidevineDeviceID(this.getOption('drm').duid);
        plugin.setWidevinePortalID(this.getOption('drm').portal);
        plugin.setWidevineDrmURL(this.getOption('drm').url);
        plugin.setWidevineHeartbeatURL(this.getOption('drm').heartbeatUrl);
        plugin.setWidevineHeartbeatPeriod(this.getOption('drm').heartbeatPeriod);
        plugin.setWidevineDeviceType("33");
        plugin.setWidevineClientIP(this.getOption('drm').ip);
        plugin.setWidevineStreamID(this.getOption('drm').streamId);
        plugin.setWidevineUserData(this.getOption('drm').userData);

        this.setOption('url', (this.getOption('url') + '?' + queryString));
    }

    plugin.onPlayStateChange    = createHandler('onPlayStateChange');
    plugin.onBuffering          = createHandler('onBuffering');
    plugin.onError              = createHandler('onError');
    plugin.onDRMRightsError     = createHandler('onDRMRightsError');

    this._setState(this.STATE_INIT);
};


PlayerLG.prototype.deinit = function () {
    var container = this.getContainer();
    container.removeChild(this.getPlugin());
    this.plugin = null;
    this._deleteInterval();
    this._setState(this.STATE_NOT_INIT);
};


/**
 * The NetCast Platform provides an onPlayStateChange event in the Media Player plugin object. Developers can
 * receive play state change event. Developer can receive a play state change event when the play state of currently
 * playing media item is changed.
 *
 * To refer to the values of the playState property, see playState.
 */
PlayerLG.prototype.onPlayStateChange = function () {
    var playStates = {
        0: 'Stopped',
        1: 'Playing',
        2: 'Paused',
        3: 'Connecting',
        4: 'Buffering',
        5: 'Finished',
        6: 'Error'
    };

    var plugin = this.getPlugin();
    var playState = plugin.playState;

    if(playState == 1){
        var mediaPlayInfo = plugin.mediaPlayInfo();
        var duration = this.getDuration();
        this.emit('durationchange', duration);
        this.emit('info', {
            duration: duration
        });
        this._createInterval();
    } else {
        this._deleteInterval();
    }

    if(playState == 5){
        this.emit('ended');
    }

    if(typeof playStates[playState] !== 'undefined'){
        console.log('onPlayStateChange', playState, playStates[playState]);
    } else {
        console.log('undeclared onPlayStateChange', playState);
    }
};

/**
 * The NetCast Platform provides an onBuffering event in the Media Player plugin object. Developers can receive buffering event. Developers can receive a buffering event when the media player begins and ends buffering. A Boolean type parameter specifies whether data buffering has started or finished. A value of true indicates that the data buffering has started. Buffering also occurs whenever playback stops and then restarts (either from calls to play() and stop()) methods or when network congestion occurs during playing streamed media.
 */
PlayerLG.prototype.onBuffering = function () {
    console.log('onBuffering', this.getPlugin().bufferingProgress);
};

/**
 * The NetCast Platform provides an onError event in the Media Player plugin object. Developers can receive error event. Developers can receive an error event when the media player encounters an error while playing.
 */
PlayerLG.prototype.onError = function () {
    var errors = {
        0: 'A/V format not supported',
        1: 'Cannot connect to server or connection lost',
        2: 'Unidentified error',
        1000: 'File is not found',
        1001: 'Invalid protocol',
        1002: 'DRM failure',
        1003: 'Play list is empty',
        1004: 'Unrecognized play list',
        1005: 'Invalid ASX format',
        1006: 'Error in downloading play list',
        1007: 'Out of memory',
        1008: 'Invalid URL list format',
        1009: 'Not playable in play list',
        1100: 'Unidentified WM-DRM error',
        1101: 'Incorrect license in local license store',
        1102: 'Fail in receiving correct license from server',
        1103: 'Stored license is expired'
    };

    var error = this.getPlugin().error;

    if(typeof errors[error] !== 'undefined'){
        console.log('onError', error, errors[error]);
    } else {
        console.log('onError ', error, 'undeclared');
    }
};

/**
 * Optional element indicating the value of the rightsIssuerURL that can be used to non-silently obtain the rights for the content item currently being played for which this DRM error is generated, in cases whereby the rightsIssuerURL is known. If different URLs are retrieved from the stream and the metadata, then the conflict resolution is implementation-dependent.
 *
 * @param errorState Error code detailing the type of error (0 : no license, 1 : invalid license)
 * @param contentID Unique ID of the content in the scope of DRM system that raises the error
 * @param DRMSystemID For PlayReady, the value is “urn:dvb:casystemid:19219”.
 * @param rightsIssuerURL Optional element indicating the value of the rightsIssuerURL that can be used to non-silently obtain the rights for the content item currently being played for which this DRM error is generated, in cases whereby the rightsIssuerURL is known. If different URLs are retrieved from the stream and the metadata, then the conflict resolution is implementation-dependent.
 */
PlayerLG.prototype.onDRMRightsError = function (errorState, contentID, DRMSystemID, rightsIssuerURL) {
    console.log('DRMRightsError');
};


PlayerLG.prototype.startPlayback = function (seconds) {
    this.play();
    this._setState(this.STATE_PLAY);
    return true;
};


PlayerLG.prototype.play = function () {
    this.getPlugin().play(1);
    this._setState(this.STATE_PLAY);
    return true;
};


PlayerLG.prototype.pause = function () {
    this.getPlugin().play(0);
    this._setState(this.STATE_PAUSE);
    return true;
};


PlayerLG.prototype.stop = function () {
    this.getPlugin().stop();
    return true;
};


PlayerLG.prototype.resume = function () {
    this.play(1);
    return true;
};


PlayerLG.prototype._createInterval = function () {
    var self = this;
    this._deleteInterval();
    this._currentTimeInterval = setInterval(function () {
        var currentTime = self.getCurrentTime();
        self.emit('timeupdate', currentTime);
        console.log('currentTime', currentTime);
    }, 300);
};


PlayerLG.prototype._deleteInterval = function () {
    if(this._currentTimeInterval){
        clearInterval(this._currentTimeInterval);
    }
};


PlayerLG.prototype.stepBackward = function (ms) {
    var ms = parseInt(ms, 10);
    this.setCurrentTime(this.getCurrentTime() - ms);
};


PlayerLG.prototype.stepForward = function (ms) {
    var ms = parseInt(ms, 10);
    this.setCurrentTime(this.getCurrentTime() + ms);
};


PlayerLG.prototype.getCurrentTime = function () {
    return this.timeToMseconds( parseInt(this.getPlugin().playPosition, 10) );
};


PlayerLG.prototype.getDuration = function () {
    return this.timeToMseconds(parseInt(this.getPlugin().playTime, 10));
};


PlayerLG.prototype.setCurrentTime = function (ms) {
    this.plugin.seek( this.msecondsToPlugin(ms) );
};


PlayerLG.prototype.setPlaybackSpeed  = function (speed) {
    var speed = parseInt(speed, 10);
    this.getPlugin().play(speed);
};


PlayerLG.prototype.requestFullscreen = function () {
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


PlayerLG.prototype.exitFullscreen = function () {
    var plugin = this.getPlugin();

    plugin.width = this.getOption('width');
    plugin.height = this.getOption('height');

    plugin.style.position = 'relative';
    plugin.style.width = plugin.width + 'px';
    plugin.style.height = plugin.height + 'px';
    return true;
};


PlayerLG.prototype.timeToMseconds = function (time) {
    return time;
};


PlayerLG.prototype.msecondsToPlugin = function (mseconds) {
    return mseconds;
};


module.exports = PlayerLG;
},{"./helpers.js":2,"./log.js":3,"./player.abstract.js":5}],8:[function(require,module,exports){
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
},{"./helpers.js":2,"./log.js":3,"./player.abstract.js":5}]},{},[1]);
