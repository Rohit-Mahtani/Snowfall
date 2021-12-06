class Snow {
    constructor(x, y, r) {
     
      this.r = r;
      this.image = loadImage("snow4.webp")
      this.body = Bodies.circle(x, y, this.r , {restitution:0.8} );
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      
      rotate(angle)
      fill("white")
      imageMode(CENTER);
      image(this.image , 0 , 0 , this.r , this.r)
      pop();
    }
  };
  