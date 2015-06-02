var extend = require('./helpers.js').extend,
    merge = require('./helpers.js').merge,
    PlayerAbstract = require('./player.abstract.js'),
    log = require('./log.js');

extend(PlayerHtml5, PlayerAbstract);

function PlayerHtml5 (options) {
    PlayerHtml5.superclass.constructor.apply(this, arguments);
    log('player html5 create 123');
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
    log('init');
    this.getContainer();
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
    return {
        duration: plugin.duration,
        currentTime: plugin.currentTime,
        bufferedLenght: plugin.buffered.length
        //bufferedStart: plugin.buffered.start(),
        //bufferedEnd: plugin.buffered.end()
    };
};


PlayerHtml5.prototype.getCurrentTime = function () {
    return this.getPlugin().currentTime.toFixed(3);
};


PlayerHtml5.prototype.getDuration = function () {
    return this.getPlugin().duration.toFixed(3);
};


module.exports = PlayerHtml5;