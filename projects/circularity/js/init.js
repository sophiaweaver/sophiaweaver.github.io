var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; // iteration for a single circle
        var circles = []; // stores all circles in a single array

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){//a named function with a block of code stating what that function should do when it is called (has no parameters)
             // Code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); //draws a random circle of any size location and color
            physikz.addRandomVelocity(circle, canvas, 5, 5); //sets the random speed and direction of each circle
            view.addChild(circle); //to make the cirle show on the screen a "child" is added
            circles.push(circle); //this saves each new circle using the .push()

        };

        // TODO 3 / 7 : Call the drawCircle() function 
        //drawCircle();// calls the drawCircle function 5 times
        //drawCircle();
        //drawCircle();
        //drawCircle();
        //drawCircle();
        for (var drawCircles = 0; drawCircles < 100; drawCircles++) {
            drawCircle();//this loop starts at 0 circles draws 100 circles then stops drawing and increases from 0 one cirtcle at a time
        }
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
        
                // TODO 4 : Update the circle's position //
           
            //physikz.updatePosition(circles[0]);//this function takes the circle argument and assigns it a new position, the number is pertaining to the index of the array circle 1 or [0]
            //physikz.updatePosition(circles[1]);
            //physikz.updatePosition(circles[2]);
            //physikz.updatePosition(circles[3]);
            //physikz.updatePosition(circles[4]);
            
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            //game.checkCirclePosition(circles[0]);//helps keep circles on screen 
            //game.checkCirclePosition(circles[1]);
            //game.checkCirclePosition(circles[2]);
            //game.checkCirclePosition(circles[3]);
            //game.checkCirclePosition(circles[4]);

            // TODO 9 : Iterate over the array
            for (var i = 0; i < circles.length; i++) {//this loop uses variable "i" starting at 0, ending at the end of the circles array value and increasing by one each time it runs
                var eachValue = circles[i];//the each value is being assigned to circles so that we know every circle is being included
                
                physikz.updatePosition(circles[i]);//all circles are given a random position on the screen using the variable "i" from the loop
                game.checkCirclePosition(circles[i]);//this keeps all circles on screen now using "i" in the loop
             }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if( circle.x < 0){//if the circle has gone too far on the left side of the screen it should return on the right
                circle.x = canvas.width;
            }

            if(circle.y < 0){//if the circle has gone too far up, it will return at the bottom of the screen
                circle.y = canvas.height;
            }
            if(circle.y > canvas.height){//if the circle has gone too far down, it will return at the top of the screen
                circle.y = 0;
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
