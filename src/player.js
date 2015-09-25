var PlayerSamsung = require('./player.samsung.js'),
    PlayerHtml5 = require('./player.html5.js'),
    PlayerLG = require('./player.lg.js'),
    log = require('./log.js');

function VideoPlayer(type, options) {
    log('video player create', type);
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
    var state = this.getState();
    var result = false;
    var player = this.player;

    log('play', 'state', player.states[state], state);
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
            log('state not declared ' + state);
            return false;
            break;
    }

    log( 'play result', !!result, 'state',  player.states[this.getState()], this.getState() );
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

window.VideoPlayer = VideoPlayer;