

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_die=loadSound("mariodie.wav");
	mario_kick=loadSound("kick.wav");
	game_over=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
}

function modelLoaded(){
	console.log("posenet is loaded");
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
		nose_x=results[0].pose.nose.x;
		nose_y=results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






