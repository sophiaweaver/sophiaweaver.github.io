var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "fireball", "x": 400, "y": groundY - 110, "damage": 25},
                { "type": "fireball", "x": 600, "y": groundY - 10, "damage": 25 },
                { "type": "fireball", "x": 800, "y": groundY - 110, "damage": 25},
                { "type": "fireball", "x": 1000, "y": groundY - 110, "damage": 25},

                { "type": "enemy", "x": 400, "y": groundY - 100, "velocity": 5},
                { "type": "enemy", "x": 400, "y": groundY - 400, "velocity": 5},

                { "type": "reward", "x": 400, "y": groundY - 110, "velocity": 5},

                { "type": "coin", "x": 5000, "y": groundY - 110, "velocity": 25},
            ]

        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        function createFireball(positionX, positionY, damage){
            var hitZoneSize = 25;//assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = damage;//assigns a value as the damage from the obstacle
            var fireballHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the obstacle and stores it in the variable sawBladeHitZone
            fireballHitZone.x = positionX;//stores a value as the x postition for the hit zone
            fireballHitZone.y = positionY;//stores a value as the y postition for the hit zone
            game.addGameItem(fireballHitZone);//adds the hitzone as a game item
            var obstacleImage = draw.bitmap("img/fireball.png");//draws the image and stores it in the variable obstacleImage
            fireballHitZone.addChild(obstacleImage);//adds obstacle image as a child sawBladeHitZone
            obstacleImage.x = - 95;//assigna a value to the x positin of obstacle image
            obstacleImage.y = - 105;//assigna a value to the y positin of obstacle image
        }


        function createEnemy(x, y, velocity){
        var enemy = game.createGameItem("enemy", 25);
        var gameItem = draw.bitmap("img/fireball.png");
        gameItem.x = -25;
        gameItem.y = -25;
        enemy.addChild(gameItem);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = - velocity;

        enemy.onPlayerCollision = function () {
            game.changeIntegrity(-10)
        };

        enemy.onProjectileCollision = function () {
            game.increaseScore(100);
            enemy.shrink();
        };
    }



    function createReward(x, y, velocity){
        var reward = game.createGameItem("reward", 25);
        var gameItem = draw.bitmap("img/heart.png");
        gameItem.x = -25;
        gameItem.y = -25;
        reward.addChild(gameItem);
        reward.x = x;
        reward.y = y  ;
        game.addGameItem(reward);
        reward.velocityX = - 2;

        reward.onPlayerCollision = function () {
            game.changeIntegrity(+10)
            game.increaseScore(50);
            reward.shrink();
        }
    }

    function createRewardCoin(x, y, velocity){
        var coin = game.createGameItem("coin", 25);
        var gameItem = draw.bitmap("img/coin.png");
        gameItem.x = -25;
        gameItem.y = -25;
        coin.addChild(gameItem);
        coin.x = x;
        coin.y = y  ;
        game.addGameItem(coin);
        coin.velocityX = - 2;

        coin.onPlayerCollision = function () {
            game.changeIntegrity(10)
            game.increaseScore(50);
            coin.shrink();
        }
    }

        for(var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];

            if(gameItem.type === "fireball"){
                createFireball(gameItem.x, gameItem.y, gameItem.damage);
            }

            if(gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y, gameItem.velocity);
            }
            
            if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y, gameItem.velocity);
            }

            if(gameItem.type === "coin"){
                createRewardCoin(gameItem.x, gameItem.y, gameItem.velocity);
            }
        }

        // DO NOT EDIT CODE BELOW HERE
    }
};

    // DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
    if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
