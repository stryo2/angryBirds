// extends box class and adds glassbox class basic functionality it breaks when hit by bird
class GlassBox extends Box {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.body.restitution = 0.5; // Higher bounciness
        this.body.friction = 0.05; // Lower friction
        this.body.density = 0.001; // Lower density for glass-like behavior
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(135, 206, 235); // Light blue color for glass
        stroke(255); // White stroke for glass effect
        strokeWeight(2);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height); // Draw the glass box
        pop();
    }   
//   //function to break the glass box when hit by bird
//     break() {
//         // Remove the glass box from the world
//         Matter.World.remove(world, this.body);
//     }
}