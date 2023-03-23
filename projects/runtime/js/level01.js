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
                { "type": "sawblade", "x": 400, "y": groundY - 110 },
                { "type": "sawblade", "x": 600, "y": groundY - 10 },
                { "type": "sawblade", "x": 900, "y": groundY - 110},
                { "type": "enemy", "x": 400, "y": groundY - 50 },
                { "type": "enemy", "x": 400, "y": groundY - 400 }
                { "type": "reward", "x": 400, "y": groundY - 110 }
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
            obstacleImage.x = - 25;//assigna a value to the x positin of obstacle image
            obstacleImage.y = - 25;//assigna a value to the y positin of obstacle image
        }
        createFireball(400, groundY - 110, 25);
        createFireball(600, groundY - 10, 5);
        createFireball(800, groundY - 110, 15);
        createFireball(1000, groundY - 110, 10);

        function createEnemy(x, y, color, velocity){
        var enemy = game.createGameItem("enemy", 25);
        var gameItem = draw.rect(50, 50, color);
        gameItem.x = -25;
        gameItem.y = -25;
        enemy.addChild(gameItem);
        enemy.x = x;
        enemy.y = y  ;
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



    function createReward(x, y, color, velocity){
        var reward = game.createGameItem("reward", 25);
        var gameItem = draw.rect(50, 50, color);
        gameItem.x = -25;
        gameItem.y = -25;
        reward.addChild(gameItem);
        reward.x = x;
        reward.y = y  ;
        game.addGameItem(reward);
        reward.velocityX = - velocity;

        reward.onPlayerCollision = function () {
            game.changeIntegrity(+10)
            game.increaseScore(50);
            reward.shrink();
        };
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
