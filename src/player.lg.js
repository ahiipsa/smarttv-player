var extend = require('./helpers.js').extend,
    merge = require('./helpers.js').merge,
    PlayerAbstract = require('./player.abstract.js'),
    log = require('./log.js');

extend(PlayerLG, PlayerAbstract);

function PlayerLG (options) {
    PlayerLG.superclass.constructor.apply(this, arguments);
    log('player lg create');
}


module.exports = PlayerLG;