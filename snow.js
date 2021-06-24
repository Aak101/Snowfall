class Snow {
    constructor(x,y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.y = 20 ;
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
     ellipseMode(RADIUS);
        ellipse(0,20,this.r,this.r);   
        pop();
    }

};