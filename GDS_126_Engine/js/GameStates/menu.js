/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/






//console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/MenuBackgroundSmall1024x512 VERSION 2.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

var startButton = new GameObject({/*width:100, height:50*/});
startButton.img.src="images/StartButton.jpg"
startButton.width=100
startButton.height=50
startButton.hitBoxWidth=100  //800



gameStates[`menu`] =function(){
	
	var ctx = canvas.getContext(`2d`);
	ctx.font = "40px Georgia"
	ctx.fillStyle = "black";
	ctx.fillText("BEGIN", canvas.width/2, canvas.height/2-100);

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
}
	
	
