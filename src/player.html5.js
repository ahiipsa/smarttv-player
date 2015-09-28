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
    var rate = parseFloat(this.playBackRate).toFixed(1);
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