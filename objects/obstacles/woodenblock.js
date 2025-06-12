class WoodenBlock extends Box {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.body.restitution = 0; // Lower bounciness
        this.body.friction = 3; // Higher friction
        this.body.density = 2; // Lower density for wooden-like behavior
        this.image = loadImage('data/obstacles/woodenblock.png'); 
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(139, 69, 19); // Brown color for wood
        stroke(255); // White stroke for wood effect
        strokeWeight(2);
        rotate(angle);
         imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height); // Draw the wooden box
        pop();
    }   
  
    // //function to break the wooden box when hit by bird
    // break() {
    //     // Remove the wooden box from the world
    //     Matter.World.remove(world, this.body);
    // }
}