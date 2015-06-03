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
    log('player lg create');
}

PlayerLG.prototype._currentTimeInterval = null;

PlayerLG.prototype.getPlugin = function () {
    if(!this.plugin){
        var plugin = document.createElement('object');
        plugin.setAttribute('id', 'pluginPlayer');
        plugin.setAttribute('type', 'video/x-ms-wmv');
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
    log('init');
    this.getContainer();
    var plugin = this.getPlugin();
    var self = this;

    var createHandler = function (fnName) {
        return  function () {
            return self[fnName].apply(self, arguments);
        };
    };

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
 * The NetCast Platform provides an onPlayStateChange event in the Media Player plugin object. Developers can receive play state change event. Developer can receive a play state change event when the play state of currently playing media item is changed.
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
        this._createInterval();
    } else {
        this._deleteInterval();
    }

    log('playState', playState, typeof playState);

    if(typeof playStates[playState] !== 'undefined'){
        log('onPlayStateChange', playState, playStates[playState]);
    } else {
        log('undeclared onPlayStateChange', playState);
    }
};

/**
 * The NetCast Platform provides an onBuffering event in the Media Player plugin object. Developers can receive buffering event. Developers can receive a buffering event when the media player begins and ends buffering. A Boolean type parameter specifies whether data buffering has started or finished. A value of true indicates that the data buffering has started. Buffering also occurs whenever playback stops and then restarts (either from calls to play() and stop()) methods or when network congestion occurs during playing streamed media.
 */
PlayerLG.prototype.onBuffering = function () {
    log('onBuffering', this.getPlugin().bufferingProgress);
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
        log('onError', error, errors[error]);
    } else {
        log('onError ', error, 'undeclared');
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
    this.play();
    return true;
};


PlayerLG.prototype._createInterval = function () {
    var self = this;
    this._deleteInterval();
    this._currentTimeInterval = setInterval(function () {
        var currentTime = self.getCurrentTime();
        self.emit('timeupdate', currentTime);
        log('currentTime', currentTime);
    }, 300);
};


PlayerLG.prototype._deleteInterval = function () {
    if(this._currentTimeInterval){
        clearInterval(this._currentTimeInterval);
    }
};


PlayerLG.prototype.stepBackward = function (ms) {
    var ms = parseInt(ms, 10);
    var jumpTo = (this.getCurrentTime() - ms);
    this.setCurrentTime(jumpTo);
};


PlayerLG.prototype.stepForward = function (ms) {
    var ms = parseInt(ms, 10);
    var jumpTo = (this.getCurrentTime() + ms);
    this.setCurrentTime(jumpTo);
};


PlayerLG.prototype.getCurrentTime = function () {
    var playPosition = parseInt(this.getPlugin().playPosition, 10);
    return playPosition;
};


PlayerLG.prototype.getDuration = function () {
    var duration = parseInt(this.getPlugin().playTime, 10);
    return duration;
};


PlayerLG.prototype.setCurrentTime = function (ms) {
    this.plugin.seek(ms);
};


PlayerLG.prototype.setPlaybackSpeed  = function (speed) {
    var speed = parseInt(speed, 10);
    log('speed', speed, typeof speed);
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


module.exports = PlayerLG;