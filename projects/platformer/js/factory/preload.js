(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    
    // TODO : Load config for url //
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannon.png');
        game.load.image('projectile', './asset/projectile.png');
        game.load.image('platform', './asset/platform.png');
        game.load.image('db', './asset/collectable/database.png');
        game.load.image('steve', './asset/collectable/steve-head.png');
        game.load.image('ruby', './asset/collectable/ruby.png');
        game.load.image('kennedi', './asset/collectable/kennedi-head.png');
        game.load.image('emerald', './asset/collectable/emerald.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
        game.load.image('diamond', './asset/collectable/glowing-diamond.png');
    };
})(window);
