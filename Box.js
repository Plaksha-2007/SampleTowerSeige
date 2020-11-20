class Box {
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height,{isStatic:false});
    this.width = width;
    this.height = height;
    this.image = loadImage("green button.jpg");
    this.visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed<5){
      var pos =this.body.position;
      var angle = this.body.angle;
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(0);
      imageMode(CENTER);
	    image(this.image, 0, 0, 60,60);
     } else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity-5;
      tint(255,this.visiblity);
      image(this.image,pos.x,pos.y,50,50);
      pop();
    }
  }
};