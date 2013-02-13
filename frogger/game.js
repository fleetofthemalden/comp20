var canvas;
var ctx;
var spriteSheet = new Image();
spriteSheet.src = "assets/frogger_sprites.png";


function start_game(){
	//initialization

	canvas_init();

	play_game();
	
}

//ctx.drawImage(imageName, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);

function canvas_init(){
	canvas = document.getElementById("game_canvas");
	ctx = canvas.getContext("2d");
	
	ctx.fillStyle = "#191970"; //water
	ctx.fillRect(2,2,395,280);
	
	ctx.fillStyle = "#000000"; //road
	ctx.fillRect(2,310,395,253);
	
	ctx.fillStyle = "#00FF00"; //text
	ctx.font = "20pt Helvetica";
	ctx.fillText("Level:", 65,535);
	ctx.font = "14pt Helvetica";
	ctx.fillText("Score:      Highscore:", 2,560);
	
	ctx.drawImage(spriteSheet, 13, 12, 324, 35, 25, 16, 324, 34); //header
	
	ctx.drawImage(spriteSheet, 0, 55, 399, 55, 2, 60, 395, 55); //grass
	
	ctx.drawImage(spriteSheet, 0, 119, 399, 35, 2, 279, 395, 35); //roadside
	ctx.drawImage(spriteSheet, 0, 119, 399, 35, 2, 480, 395, 35); //roadside
	
}

function draw_logs_long(dx){
	ctx.drawImage(spriteSheet, 0, 165, 185, 24, dx      , 175, 185, 24);
	ctx.drawImage(spriteSheet, 0, 165, 185, 24, dx + 240, 175, 185, 24);
}

function draw_logs_med(dx){
	ctx.drawImage(spriteSheet, 0, 196, 125, 24, dx - 180, 120, 125, 24);
	ctx.drawImage(spriteSheet, 0, 196, 125, 24, dx      , 120, 125, 24);
	ctx.drawImage(spriteSheet, 0, 196, 125, 24, dx + 180, 120, 125, 24);	
}

function draw_logs_short(dx){
	ctx.drawImage(spriteSheet, 0, 230, 88, 24, dx - 180, 117, 88, 24);
	ctx.drawImage(spriteSheet, 0, 230, 88, 24, dx      , 117, 88, 24);
	ctx.drawImage(spriteSheet, 0, 230, 88, 24, dx + 180, 117, 88, 24);
}

function draw_double_turtles_pos1(dx){
	ctx.drawImage(spriteSheet, 14, 406, 32, 22, dx     , 145, 32, 22);
	ctx.drawImage(spriteSheet, 14, 406, 32, 22, dx + 38, 145, 32, 22);
}

function draw_double_turtles_pos2(dx){
	ctx.drawImage(spriteSheet, 52, 406, 32, 22, dx     , 145, 32, 22);
	ctx.drawImage(spriteSheet, 52, 406, 32, 22, dx + 38, 145, 32, 22);
}

function draw_double_turtles_pos3(dx){
	ctx.drawImage(spriteSheet, 93, 406, 32, 22, dx     , 145, 32, 22);
	ctx.drawImage(spriteSheet, 93, 406, 32, 22, dx + 38, 145, 32, 22);
}

function draw_2_dive_turtles_pos2(dx){
	ctx.drawImage(spriteSheet, 133, 406, 32, 22, dx     , 145, 32, 22);
	ctx.drawImage(spriteSheet, 133, 406, 32, 22, dx + 38, 145, 32, 22);
}

function draw_2_dive_turtles_pos3(dx){
	ctx.drawImage(spriteSheet, 175, 407, 32, 22, dx     , 145, 32, 22);
	ctx.drawImage(spriteSheet, 175, 407, 32, 22, dx + 38, 145, 32, 22);
}

function draw_r1_turtles_pos1(dx){
	draw_double_turtles_pos1(dx);
	draw_double_turtles_pos1(dx + 130);
	draw_double_turtles_pos1(dx + 260);
	draw_double_turtles_pos1(dx + 390);
}

function draw_r1_turtles_pos2(dx){
	draw_2_dive_turtles_pos2(dx);
	draw_double_turtles_pos2(dx + 130);
	draw_double_turtles_pos2(dx + 260);
	draw_double_turtles_pos2(dx + 390);
}

function draw_r1_turtles_pos3(dx){
	draw_2_dive_turtles_pos3(dx);
	draw_double_turtles_pos3(dx + 130);
	draw_double_turtles_pos3(dx + 260);
	draw_double_turtles_pos3(dx + 390);
}

function draw_triple_turtles_pos1(dx){
	ctx.drawImage(spriteSheet, 14, 406, 32, 22, dx - 38, 254, 32, 22);
	ctx.drawImage(spriteSheet, 14, 406, 32, 22, dx     , 254, 32, 22);
	ctx.drawImage(spriteSheet, 14, 406, 32, 22, dx + 38, 254, 32, 22);
}

function draw_triple_turtles_pos2(dx){
	ctx.drawImage(spriteSheet, 52, 406, 32, 22, dx - 38, 254, 32, 22);
	ctx.drawImage(spriteSheet, 52, 406, 32, 22, dx     , 254, 32, 22);
	ctx.drawImage(spriteSheet, 52, 406, 32, 22, dx + 38, 254, 32, 22);
}

function draw_triple_turtles_pos3(dx){
	ctx.drawImage(spriteSheet, 93, 406, 32, 22, dx - 38, 254, 32, 22);
	ctx.drawImage(spriteSheet, 93, 406, 32, 22, dx     , 254, 32, 22);
	ctx.drawImage(spriteSheet, 93, 406, 32, 22, dx + 38, 254, 32, 22);
}

function draw_3_dive_turtles_pos2(dx){
	ctx.drawImage(spriteSheet, 133, 406, 32, 22, dx - 38, 254, 32, 22);
	ctx.drawImage(spriteSheet, 133, 406, 32, 22, dx     , 254, 32, 22);
	ctx.drawImage(spriteSheet, 133, 406, 32, 22, dx + 38, 254, 32, 22);
}

function draw_3_dive_turtles_pos3(dx){
	ctx.drawImage(spriteSheet, 175, 407, 32, 22, dx - 38, 254, 32, 22);
	ctx.drawImage(spriteSheet, 175, 407, 32, 22, dx     , 254, 32, 22);
	ctx.drawImage(spriteSheet, 175, 407, 32, 22, dx + 38, 254, 32, 22);
}

function draw_r2_turtles_pos1(dx){
	draw_triple_turtles_pos1(dx);
	draw_triple_turtles_pos1(dx + 130);
	draw_triple_turtles_pos1(dx + 260);
	draw_triple_turtles_pos1(dx + 390);
	draw_triple_turtles_pos1(dx + 520);
}

function draw_r2_turtles_pos2(dx){
	draw_triple_turtles_pos2(dx);
	draw_triple_turtles_pos2(dx + 130);
	draw_triple_turtles_pos2(dx + 260);
	draw_triple_turtles_pos2(dx + 390);
	draw_3_dive_turtles_pos2(dx + 520);
}

function draw_r2_turtles_pos3(dx){
	draw_triple_turtles_pos3(dx);
	draw_triple_turtles_pos3(dx + 130);
	draw_triple_turtles_pos3(dx + 260);
	draw_triple_turtles_pos3(dx + 390);
	draw_3_dive_turtles_pos3(dx + 520);
}

function draw_trucks(dx){	
	ctx.drawImage(spriteSheet, 104, 300, 50, 24, dx      , 315, 50, 24);
	ctx.drawImage(spriteSheet, 104, 300, 50, 24, dx + 150, 315, 50, 24);
}
	
function play_game(){

	draw_trucks(100);
	draw_logs_med(100);
	draw_logs_long(10);
	draw_r2_turtles_pos2(-200);
	draw_r1_turtles_pos2(0);
}	
