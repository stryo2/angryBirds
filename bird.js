

class Bird{
    constructor(x, y, r) {
       var  options = {    
            restitution: 0.5, // Bounciness
            friction: 0.1, // Friction
            density: 0.5 // Density
        };
        this.body = Matter.Bodies.circle(x, y, r, options);
        Matter.World.add(world, this.body);
        this.r = r;
    }
    show(){
         const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(255);
        rotate(angle);
        imageMode(CENTER);
        image(birdy,0, 0, this.r * 2, this.r * 2); // Draw the bird image
        pop();
    }
}