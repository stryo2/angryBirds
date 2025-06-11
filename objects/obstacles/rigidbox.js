// a regid box that stays in place and does not break
class RigidBox extends Box {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.body.restitution = 0.1; // Low bounciness
        this.body.friction = 0.5; // Higher friction
        this.body.density = 0.001; // Lower density for rigid-like behavior
        this.body.isStatic = true;
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(200); // Gray color for rigid box
        stroke(255); // White stroke for rigid effect
        strokeWeight(2);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height); // Draw the rigid box
        pop();
    }
}