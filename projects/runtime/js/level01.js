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
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
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
            fireballHitZone.y = groundY - positionY;//stores a value as the y postition for the hit zone
            game.addGameItem(fireballHitZone);//adds the hitzone as a game item
            var obstacleImage = draw.bitmap("img/fireball.png");//draws the image and stores it in the variable obstacleImage
            fireballHitZone.addChild(obstacleImage);//adds obstacle image as a child sawBladeHitZone
            obstacleImage.x = - 25;//assigna a value to the x positin of obstacle image
            obstacleImage.y = - 25;//assigna a value to the y positin of obstacle image
        }
        createFireball(400, groundY - 110, 25);
        createFireball(800, groundY, 5);
        createFireball(300, groundY, 15);
        createFireball(950, groundY, 10);

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
