function Brick() {
  this.r = random(10, 40);
  this.pos = createVector(random(50, width - 50), random(50, height - 200));
  this.total = 5;
  
  this.display = function() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(254, 192, 201);
    stroke(	130, 3, 21);
    strokeWeight(2);
    beginShape();
    for (var i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      var x = this.r * cos(angle);
      var y = this.r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  };
}