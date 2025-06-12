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
        fill(89, 91, 92); // Gray color for rigid box
        stroke(145, 148, 146); // White stroke for rigid effect
        strokeWeight(6);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height); 
        fill(160, 218, 235); 
        stroke(145, 148, 146);
        strokeWeight(6);
        rect(0, 0, this.width*0.5, this.height*0.5);
       
        stroke(255, 255, 255, 150); // Lighter stroke for inner lines
        strokeWeight(2);
        line(-this.width /4+10, -this.height / 4+10, this.width / 8, this.height / 8);
        line(this.width / 4-20, this.height / 4-20, -this.width / 8+10, -this.height / 8);
        // line(-this.width / 4+10, this.height / 4-10, this.width / 8, this.height / 8);
        pop();
    }
}