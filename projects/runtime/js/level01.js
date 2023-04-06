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
                { "type": "fireball", "x": 400, "y": groundY - 110, "damage": 25}, //an object that ssigns different x,y,velocity, and damage values
                { "type": "fireball", "x": 3000, "y": groundY - 110, "damage": 15},
                { "type": "fireball", "x": 1000, "y": groundY - 110, "damage": 5},
                { "type": "fireball", "x": 8000, "y": groundY - 110, "damage": 25},
                { "type": "fireball", "x": 7400, "y": groundY - 110, "damage": 15},
                { "type": "fireball", "x": 2900, "y": groundY - 110, "damage": 5},
                { "type": "fireball", "x": 1000, "y": groundY - 110, "damage": 25},
                { "type": "fireball", "x": 6050, "y": groundY - 10, "damage": 15},
                { "type": "fireball", "x": 1800, "y": groundY - 110, "damage": 5},
                { "type": "fireball", "x": 1000, "y": groundY - 110, "damage": 25},


                { "type": "enemy", "image": "img/vampire.png", "x": 400, "y": groundY - 70, "velocity": 2, "scale": 0.1},
                { "type": "enemy", "image": "img/vampire.png", "x": 4000, "y": groundY - 70, "velocity": 6, "scale": 0.1},
                { "type": "enemy", "image": "img/vampire.png", "x": 2000, "y": groundY - 70, "velocity": 7, "scale": 0.1},
                { "type": "enemy", "image": "img/vampire.png", "x": 5400, "y": groundY - 70, "velocity": 3, "scale": 0.1},
                { "type": "enemy", "image": "img/vampire.png", "x": 8400, "y": groundY - 70, "velocity": 4, "scale": 0.1},
                { "type": "enemy", "image": "img/vampire.png", "x": 7000, "y": groundY - 70, "velocity": 4, "scale": 0.1},
                { "type": "enemy", "image": "img/vampire.png", "x": 6500, "y": groundY - 70, "velocity": 2, "scale": 0.1},
                { "type": "enemy", "image": "img/vampire.png", "x": 9400, "y": groundY - 70, "velocity": 3, "scale": 0.1},
                { "type": "enemy", "image": "img/vampire.png", "x": 1000, "y": groundY - 70, "velocity": 3, "scale": 0.1},

                { "type": "heart", "x": 400, "y": groundY - 11, "velocity": 5},
                { "type": "heart", "x": 900, "y": groundY - 15, "velocity": 5},
                { "type": "heart", "x": 4000, "y": groundY - 11, "velocity": 5},
                { "type": "heart", "x": 5000, "y": groundY - 11, "velocity": 5},
                { "type": "heart", "x": 5500, "y": groundY - 11, "velocity": 5},

                { "type": "coin", "x": 1700, "y": groundY - 110, "velocity": 25},
                { "type": "coin", "x": 7000, "y": groundY - 10, "velocity": 25},
                { "type": "coin", "x": 4700, "y": groundY - 100, "velocity": 25},
                { "type": "coin", "x": 8700, "y": groundY - 110, "velocity": 25},
                { "type": "coin", "x": 600, "y": groundY - 10, "velocity": 25},
                { "type": "coin", "x": 5300, "y": groundY - 110, "velocity": 25},
                { "type": "coin", "x": 9000, "y": groundY - 110, "velocity": 25},
                { "type": "coin", "x": 3400, "y": groundY - 110, "velocity": 25},
                { "type": "coin", "x": 6400, "y": groundY - 10, "velocity": 25},
                { "type": "coin", "x": 1300, "y": groundY - 110, "velocity": 25},
                { "type": "coin", "x": 7200, "y": groundY - 110, "velocity": 25},
                { "type": "coin", "x": 8300, "y": groundY - 110, "velocity": 25},


                { "type": "bush", "image": "img/bush.png", "x": 500, "y": groundY - 10, "damage": 25},
                { "type": "bush", "image": "img/bush.png", "x": 5800, "y": groundY - 10, "damage": 25},
                { "type": "bush", "image": "img/bush.png", "x": 1400, "y": groundY - 10, "damage": 25},
                { "type": "bush", "image": "img/bush.png", "x": 6200, "y": groundY - 10, "damage": 25},
                { "type": "bush", "image": "img/bush.png", "x": 2800, "y": groundY - 10, "damage": 25},
                { "type": "bush", "image": "img/bush.png", "x": 3600, "y": groundY - 10, "damage": 25},
                { "type": "bush", "image": "img/bush.png", "x": 4200, "y": groundY - 10, "damage": 25},
                { "type": "bush", "image": "img/bush.png", "x": 2600, "y": groundY - 10, "damage": 25},
                
            ]

        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

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

        function createBush(image, positionX, positionY, damage){
            var hitZoneSize = 25;//assigns a value of 25 as the size of the hitzone
            var damageFromObstacle = damage;//assigns a value as the damage from the obstacle
            var bushHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the obstacle and stores it in the variable sawBladeHitZone
            bushHitZone.x = positionX;//stores a value as the x postition for the hit zone
            bushHitZone.y = positionY;//stores a value as the y postition for the hit zone
            game.addGameItem(bushHitZone);//adds the hitzone as a game item
            var obstacleImage = draw.bitmap(image);//draws the image and stores it in the variable obstacleImage
            bushHitZone.addChild(obstacleImage);//adds obstacle image as a child sawBladeHitZone
            obstacleImage.x = - 25;//assigna a value to the x positin of obstacle image
            obstacleImage.y = - 25;//assigna a value to the y positin of obstacle image
        }


        function createEnemy(image, x, y, velocity, scale){
        var enemy = game.createGameItem("enemy", 25);//names the object enemy in order to assign it arguments in other code and
        var gameItem = draw.bitmap(image);//draws the image and uses the parameter image to be later assigned a certain image
        gameItem.x = -40;
        gameItem.y = -150;
        enemy.addChild(gameItem);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = - velocity;
        gameItem.scaleX = scale;
        gameItem.scaleY = scale;

        enemy.onPlayerCollision = function () {
            game.changeIntegrity(-50)
        };

        enemy.onProjectileCollision = function () {
            game.increaseScore(100);
            enemy.shrink();
        };
    }



    function createReward(x, y, velocity){
        var heart = game.createGameItem("heart", 25);
        var gameItem = draw.bitmap("img/heart.png");
        gameItem.x = -15;
        gameItem.y = -10;
        heart.addChild(gameItem);
        heart.x = x;
        heart.y = y;
        game.addGameItem(heart);
        heart.velocityX = - 2;

        heart.onPlayerCollision = function () {
            game.changeIntegrity(+10)
            game.increaseScore(50);
            heart.shrink();
        }
    }

    function createRewardCoin(x, y, velocity){
        var coin = game.createGameItem("coin", 25);
        var gameItem = draw.bitmap("img/coin.png");
        gameItem.x = -355;
        gameItem.y = -95;
        coin.addChild(gameItem);
        coin.x = x;
        coin.y = y;
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
                createEnemy(gameItem.image, gameItem.x, gameItem.y, gameItem.velocity, gameItem.scale);
            }
            
            if(gameItem.type === "heart"){
                createReward(gameItem.x, gameItem.y, gameItem.velocity);
            }

            if(gameItem.type === "coin"){
                createRewardCoin(gameItem.x, gameItem.y, gameItem.velocity);
            }

            if(gameItem.type === "bush"){
                createBush(gameItem.image, gameItem.x, gameItem.y, gameItem.damage);
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
