var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var bigTree;
        var bubbleTree;
        var bush;
        var flower;
        var largeTree;

        //var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#0c1424');//creates a variable to dtermine how large the background wil be and what color
            background.addChild(backgroundFill);//adds background child to make it visible
            
            
            // TODO: 3 - Add a moon and starfield
            for(var i = 0; i < 300; i++){//a loop saying that the star count starts at zero, ends at 300, and increases star count by 1 each time
                var circle = draw.bitmap("img/star.png");//variable called circle assigns what the stars look like(i inserted and image)
                circle.x = canvasWidth * Math.random();//ensures the stars are randomly placed around the canvas
                circle.y = (groundY - 15) * Math.random();//ensures that the stars a=stay within the assigned "ground" we have given the game
                background.addChild(circle);//calls the child of the stars to make them visible
            }
           
            var moon = draw.bitmap("img/moon.png");//declares a variable named mon and assigns it an imported image
            moon.x = canvasWidth - 300;//determines the moon's x position
            moon.y = groundY - 450;///determines the moon's y positiob
            moon.scaleX = .50;//gives the moon the proper x size
            moon.scaleY = .50;//gives the moon the proper y size
            background.addChild(moon);//declares the child making the moon visible


            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            /*for (var i = 0; i < 5; ++i) {//creates a loop starting at 0 ending at 5 and increasing by 1
                var buildingHeights = [100, 50, 75, 46, 240];//declares an array of 5 different buliding heights

                var buildingColors = ["#2f0f79", "#a78ee1", "#1c262d", "#9fbed4", "#075464"]// decalres an array of colors of 5 different indexes
                var building = draw.rect(75, buildingHeights[i], buildingColors[i], "Black", 1);//creates a variable assigning different parameters for different parts of the buildings such as height, color, width, and outline color
                building.x = 200 * i;//
                building.y = groundY - buildingHeights[i];
                background.addChild(building);
                buildings.push(building);
              }
            */
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");
            tree.x = canvasWidth - 200;
            tree.y = groundY - 230;
            background.addChild(tree);

            bigTree = draw.bitmap("img/bigTree.png");
            bigTree.x = canvasWidth - 20;
            bigTree.y = groundY - 230;
            background.addChild(bigTree);

            bubbleTree = draw.bitmap("img/bubbleTree.png");
            bubbleTree.x = canvasWidth - 900;
            bubbleTree.y = groundY - 250;
            background.addChild(bubbleTree);

            largeTree = draw.bitmap("img/largeTree.png");
            largeTree.x = canvasWidth - 600;
            largeTree.y = groundY - 250;
            background.addChild(largeTree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1;
            bigTree.x = bigTree.x - 1;
            bubbleTree.x = bubbleTree.x - 1;
            largeTree.x = largeTree.x - 1;

            if (tree.x < -200) {
                tree.x = canvasWidth;
            }

            if (bigTree.x < -200) {
                bigTree.x = canvasWidth;
            }

            if (bubbleTree.x < -200) {
                bubbleTree.x = canvasWidth;
            }

            if (largeTree.x < -200) {
                largeTree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            /*for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                building.x = building.x - 1;
                if(building.x < 100){
                    building.x = canvasWidth;
                }
                
              }
            */

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
