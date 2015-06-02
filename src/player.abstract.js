var extend = require('./helpers.js').extend,
    merge = require('./helpers.js').merge,
    Observer = require('./observer.js'),
    log = require('./log.js');

extend(PlayerAbstract, Observer);

/**
 * Player Abstract
 * @abstract
 */
function PlayerAbstract (options) {
    this.state = this.STATE_NOT_INIT;
    this.options = merge({
        bufferSize: (400 * 1024),
        drm: {
            heartbeatPeriod: 30
        }
    }, options);
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
    log('change status', stateCode, this.states[stateCode]);
    return this;
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


PlayerAbstract.prototype.getWindowSize = function () {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    return [x, y];
};


PlayerAbstract.prototype.getDeviceScreenSize = function() {
    var sw = window.screen.availWidth,
        sh = window.screen.availHeight;

    return [sw, sh];
};


/**
 * @abstract
 */
PlayerAbstract.prototype.getInfo = function () {
    throw new Error('getInfo not implemented');
};


module.exports = PlayerAbstract;