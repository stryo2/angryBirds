class Bird{
    constructor(x, y, r) {
       var  options = {    
            restitution: 0.5, // Bounciness
            friction: 0.2, // Friction
            density: 0.3, // Density
           collisionFilter: {
           group: -1, // so it's isolated
           category: 0x0002, // assign a custom category
       }
        };
        
        this.body = Matter.Bodies.circle(x, y, r, options);
       
        Matter.World.add(world, this.body);
        // Matter.Body.setVelocity(this.body, { x: 2, y: 2 });
        this.r = r;
    }
    show(){
         const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(255);
        rotate(angle);
        // imageMode(CENTER);
        // image(redbird,0, 0, this.r * 2, this.r * 2); // Draw the bird image
        circle(0, 0, this.r * 2); // Draw the bird as a circle
        rectMode(CENTER);
        pop();
    }
}