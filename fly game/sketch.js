//variable time :)
var screenlength =  800;
var backgroundimg;
var fly1;
var flyimg;
var swatterimg;
var swatterscore = 0;
var flyscore = 0;
var timer = 0;
var running = true;

//class time
class fly{
	constructor(){
		this.x = 300;
		this.y = 400;
	}
}

class swatter{
	constructor(){
		this.x = 500;
		this.y = 200;
	}
}

//function time :)
function won(){
	fly1 = new fly();
	swatter1 = new swatter();
	running = true;
	swattertext = false;
	flytext = false;
	timer = 0;
}

function setup() {
	createCanvas(screenlength,screenlength);
	backgroundimg = loadImage('assets/kitchen-background.jpg');
	swatterimg = loadImage('assets/swatter-sprite.png');
	flyimg = loadImage('assets/fly-sprite.png');
	won();
}

function draw() {
	background(0);
	image(backgroundimg, 0, 0);
	image(flyimg, fly1.x, fly1.y, flyimg.width/2, flyimg.height/2);
	image(swatterimg, swatter1.x, swatter1.y, swatterimg.width*1.5, swatterimg.height*1.5);
	textSize(50);
	fill(0);
	text(flyscore, 50, 60);
	fill(245,66,230);
	text(swatterscore, 700, 60);
	fill(0,26,255);
	text(round(timer), 400, 700);
	if(flytext){
		fill(255,0,0);
		text("FLY WON", 320, 400);
	}
	if(swattertext){
		fill(255,0,0);
		text("SWATTER WON", 220, 400);
	}
	if(round(timer) == 15 && running == true){
		flyscore += 1;
		running = false;
		flytext = true;
		setTimeout(function(){
			won();
		}, 5000);
	}
	//fly controls
	if(running == true){	
		if(keyIsDown(87) && fly1.y > 0){
			fly1.y -= 10;
		}
		if(keyIsDown(83) && fly1.y < 750){
			fly1.y += 10;
		}
		if(keyIsDown(65) && fly1.x > 0){
			fly1.x -= 10;
		}
		if(keyIsDown(68) && fly1.x < 750){
			fly1.x += 10;
		}
		//swatter controls
		if(keyIsDown(UP_ARROW) && swatter1.y > 0){
			swatter1.y -= 5;
		}
		if(keyIsDown(DOWN_ARROW) && swatter1.y < 750){
			swatter1.y += 5;
		}
		if(keyIsDown(LEFT_ARROW) && swatter1.x > 0){
			swatter1.x -= 5;
		}
		if(keyIsDown(RIGHT_ARROW) && swatter1.x < 750){
			swatter1.x += 5;
		}
	}
}

function keyPressed(){
	if(key == '0'){
		if(fly1.x + flyimg.width/2 > swatter1.x && fly1.x + flyimg.width/2< swatter1.x + swatterimg.width*1.5){;
			if(fly1.y + flyimg.height/2 > swatter1.y && fly1.y + flyimg.height/2 < swatter1.y + swatterimg.height/2){
				swatterscore += 1;
				running = false;
				swattertext = true;
				setTimeout(function(){
					won();
				}, 5000);
			}
		}
	}
}

setInterval(function(){
	if(running == true){
		timer += 0.1;
	}
}, 100);

