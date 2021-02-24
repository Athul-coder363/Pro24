class Paper {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
      };
     
      this.body = Bodies.circle(this.x, this.y, 35, this.options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      fill("green");
     ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, 30, 30);
      pop();
    }
  }