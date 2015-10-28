function Observer() {}

/**
 *
 * @param event
 * @param callback
 */
Observer.prototype.on = function (event, callback) {
    if(!this.listeners){
        this.listeners = {};
    }

    if(typeof this.listeners[event] === 'undefined'){
        this.listeners[event] = [];
    }

    if(typeof callback !== "function"){
        callback = function () {}
    }

    this.listeners[event].push(callback);
};


Observer.prototype.off = function (event, callback) {
    if(!this.listeners){
        this.listeners = {};
    }

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
    if(!this.listeners){
        return;
    }
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