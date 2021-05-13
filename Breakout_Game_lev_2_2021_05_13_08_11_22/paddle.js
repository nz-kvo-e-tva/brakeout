function Paddle() {
  this.w = 80;
  this.h = 10;
  
  this.isMovingLeft = false;
  this.isMovingRight = false;
  
  this.pos = createVector(width / 2, height - 20);
  
  this.display = function() {
     fill(207, 5, 34);
    stroke(	130, 3, 21);
    strokeWeight(2);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  };
  
  this.move = function(step) {
    this.pos.x += step;
  };
  
  this.update = function() {
    if (this.isMovingRight) {
      this.move(sp);
    } else if (this.isMovingLeft) {
      this.move(-sp);
    }
  };
  
  this.checkEdges = function() {
    if (this.pos.x < 0) {
      this.pos.x = 0;
    } else if (this.pos.x > width - this.w) {
      this.pos.x = width - this.w;
    }
  };
}