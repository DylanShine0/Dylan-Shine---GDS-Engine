/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:100, height:50});
startButton.img.src="images/StartButton.jpg"

startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/MenuBackgroundSmall1024x512 VERSION 2.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){


	
	
	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			sounds.play(`backgroundMusic`, 0, true)
			//Changes to the game state
			gameStates.changeState(`level1`)

			
		}

		//Hover Effect Graffic
		startButton.color = `Orange`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `White`
	}
	
	menuBackground.drawStaticImage();
	startButton.render()

	//context.font = "40px Georgia"
	//context.fillStyle = "black";
	//context.fillText("BEGIN", canvas.width/2, canvas.height/2);
	
}
	
	
