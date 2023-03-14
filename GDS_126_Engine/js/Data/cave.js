var x=false;
var caveData ={
	info:{
		layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,6,6,6,6,6,6,6,6,6,6,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,0,6,6,6,6,6,6,7,7,x,x,x,x,x,x,x,x,x,6,x,x,x,x],
			[x,x,x,x,x,x,x,x,0,6,6,6,7,7,7,7,7,7,x,x,x,x,x,x,x,x,x,x,x,x,3,6,x,x,x],
			[0,6,6,6,6,6,6,6,7,x,7,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,6,x,x],
			[x,x,7,x,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,6,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,6],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
		],
		src:`images/bg2.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6,6,6,3,3,3,3,3,3,3,3,3,3,3,6,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,8,8,8,8,8,8,8,8,8,3,3,x,x,3,3,8,8,8,8,3,6,x,x,x],
			[x,x,x,x,x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,3,x,x,3,3,8,8,8,8,8,8,3,6,x,x],
			[3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,3,x,x,3,3,8,8,8,8,8,8,8,8,3,6,x],
			[3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,3,x,x,3,3,8,8,8,8,8,8,8,8,8,8,3,6],
			[3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,3,x,x,3,3,8,8,8,8,8,8,8,8,8,8,8,8,3,6],
			//Hidden layer here subsituted by ground.png
			],
			src:`images/bg2.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,6,6,6,6,6,6,6,6,6,6,x,x,x,x,8],
					[x,x,x,x,x,x,x,x,x,x,x,x,0,6,6,6,6,6,6,x,x,x,x,x,x,x,x,x,x,x,6,x,x,x,8],
					[x,x,x,x,x,x,x,x,0,6,6,6,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,6,x,x,8],
					[0,6,6,6,0,6,6,6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,6,x,8],
					[7,x,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,6,8],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,6],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,6],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]//Ground
				],
				src:`images/bg2.png`,
			},
			states:caveData.states
			
			}