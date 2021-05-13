function Ball() {
  this.pos = createVector(width / 2, height / 2);
  this.r = 15;
  this.direction = createVector(0.5, 0.5);
  this.vel = createVector(4, 4);
  this.color = function(r, g, b) {
   // fill(	207, 5, 34);
  }
  this.display = function() {
    fill(207, 5, 34);
    stroke(	130, 3, 21);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  };
  
  this.update = function() {
    this.pos.x += this.vel.x * this.direction.x;
    this.pos.y += this.vel.y * this.direction.y;
  };
  
  this.checkEdges = function() {
    if (this.pos.y < this.r && this.direction.y < 0) {
      this.direction.y *= -1;
    //  ball.color(100,149,221);
    } else if (this.pos.x < this.r && this.direction.x < 0) {
      this.direction.x *= -1;
    } else if (this.pos.x > width - this.r && this.direction.x > 0) {
      this.direction.x *= -1;
     // ball.color(100,149,221);
    }
  };
  
  this.meets = function(paddle) {
    if (this.pos.y < paddle.pos.y &&
        this.pos.y > paddle.pos.y - this.r &&
        this.pos.x > paddle.pos.x - this.r &&
        this.pos.x < paddle.pos.x + paddle.w + this.r) {eaten.play()                                        
      return true;
      
    } else {
      return false;
    }
    
  };
  
  this.hits = function(brick) {
    var distance = dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y);
    if (distance < this.r + brick.r) {
      eaten.play()                               
        score = score+1                                  
      s.html("Score: "+ score) 
      return true;
    } else {
      return false;
    }
  };
}

