//original: https://editor.p5js.org/hanxyn888@gmail.com/sketches/ZxECx8dXY
var paddle;

var ball = [];
var bricks = [];
var brick2 = [];
var playingGame = false;
var youWin = false;
var life=3;
var score=0;
var sp=5;
function preload() {
  endgame = loadSound("sounds/over.wav")
  eaten = loadSound("sounds/win.wav")
  win = loadSound("sounds/winning.wav")
}
function setup() {
  createCanvas(640, 480);
  paddle = new Paddle();
  ball[0]= new Ball();
  brick2[0] = new Brick2();
 
 // a = createA('https://editor.p5js.org/Tedy/full/nNjCKIUM_', 'Like this game? Here is another one. Try it as well!', 'blank');
  //a.position(650, 10)
  for (let i = 0; i < 25 ; i++) {
    bricks.push(new Brick());
  } 
  h=createElement('p', 'Lives: '+ 3)
   s=createElement('p', 'Score: '+ 0)
   
}

function draw() {
  background(255, 240, 241);

  
  paddle.display();
//  ball.color(0,149,221);
  ball[0].display();
    if (playingGame) {
    paddle.update();
    paddle.checkEdges();
    ball[0].update();
    ball[0].checkEdges();
    }
if(brick2.length>0){
  brick2[0].display()
 if (ball[0].hits(brick2[0])){
   //console.log('10')
   ball[1]=new Ball()
   ball[2]=new Ball()
   brick2.splice(0, 1);
 }
}
  
//for b
//  if(ball.length>0){
 // for(var f=0; f<=ball.length; f=f+1){
    ball[0].update();
    ball[0].checkEdges();
   // console.log('10')
  if (ball[0].meets(paddle) && ball[0].direction.y > 0) {
    ball[0].direction.y *= -1;
  }

  for (var j = bricks.length - 1; j >= 0; j--) {
    if (ball[0].hits(bricks[j])) {
      if (bricks[j].r > 20) {
        bricks[j].r = bricks[j].r / 2;
      } else {
        bricks.splice(j, 1);
      }
      ball[0].direction.y *= -1;
    } else {
      bricks[j].display();
    }
  }
// Losing the game
  //if (ball.length==1)
  if (ball[0].pos.y > height) {
    playingGame = false;
    life=life-1
   sp=sp-random(1,2)
    h.html("Lives: " + life)
  if(life==2){
    for (let i = 0; i < 10 ; i++) {
    bricks.push(new Brick());
  } 
    }
    //for e
 if(life==1){
      sp=-sp
    }
    if(life==0){
    background(	188, 4, 30);
      h2 = createElement('h2', 'GAME OVER')
    h2.position(width / 2 - 160, 170)
    var button = createButton('try again')
    button.mousePressed(resetGame)
    button.position(width / 2 - 20, 290)
    endgame.play()
    noLoop();}
    ball[0].pos = createVector(width / 2, height / 2);
   //}}
  }

  if (bricks.length+brick2.length === 0) {
    youWin = true;
    playingGame = false;
    win.play()
    noLoop();
  }
//Winning game
  if (youWin) {
   // textSize(32);
    //fill(0);
   // noStroke();
    background(	255, 205, 215)
    // text("You win!", width / 2 - 50, 80);
    h1 = createElement('h1', 'YOU WIN!!!')
    h1.position(width / 2 - 130, 170)
    var button = createButton('try again')
    button.mousePressed(resetGame)
    button.position(width / 2 - 20, 290)
  }
}

function keyPressed() {
  if (key === "a" || key === "A" || keyCode === LEFT_ARROW) {
    paddle.isMovingLeft = true;
  } else if (key === "d" || key === "D" || keyCode === RIGHT_ARROW) {
    paddle.isMovingRight = true;
  } else if (key === "s" || key === "S" || key === " ") {
    playingGame = true;
    youWin = false;
    if (bricks.length === 0) {
      for (var i = 0; i < bricks.length; i++) {
        bricks.push(new Bricks());
      }
    }
  }
}

function keyReleased() {
  paddle.isMovingLeft = false;
  paddle.isMovingRight = false;
}

function resetGame() {
  location.reload();
}