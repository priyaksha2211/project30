class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed < 4){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect( 0, 0, this.width, this.height);
          pop();
        }
        else{
        World.remove(world,this.body);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        pop();
        }
      }
}