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

module.exports = Observer;