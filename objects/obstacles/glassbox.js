// extends box class and adds glassbox class basic functionality it breaks when hit by bird
class GlassBox extends Box {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.body.restitution =0; // Higher bounciness
        this.body.friction = 0.5; // Lower friction
        this.body.density = 1; // Lower density for glass-like behavior
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(84, 230, 235); // Light blue color for glass
        stroke(255); // White stroke for glass effect
        strokeWeight(3);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height); // Draw the glass box
        // draw white lines to give it a glass effect
        stroke(255, 150); // Lighter stroke for glass effect
        strokeWeight(1.5);
        line(0, -this.height / 2, 0, this.height / 2); // Vertical line
        line(-this.width / 2, -this.height / 2, this.width / 2, this.height / 2); 
        line(-this.width / 2, this.height / 2, this.width / 2, -this.height / 2);
        pop();
    }   
//   //function to break the glass box when hit by bird
//     break() {
//         // Remove the glass box from the world
//         Matter.World.remove(world, this.body);
//     }
}