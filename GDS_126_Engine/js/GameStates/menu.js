/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/






//console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/MenuBackgroundSmall1024x512 VERSION 2.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

var startButton = new GameObject(/*{width:100, height:50}*/);
startButton.img.src = "images/StartButton.png"
startButton.hitBoxWidth = 100  //800
startButton.x = canvas.width/2;
startButton.y = canvas.height/1.5;
startButton.width = 100;
startButton.height = 50;

var Title = new GameObject(/*{width:100, height:50}*/);
Title.img.src = "images/GameTitle.png"
Title.x = canvas.width/2;
Title.y = canvas.height/1.5;
Title.width = 1024;
Title.height = 512;


gameStates[`menu`] =function(){

	menuBackground.drawStaticImage();

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
	
	startButton.render()
	startButton.drawStaticImage()

}
	
	
