// yellow bird class extends the bird class and adds yellowbird class basic functionality speed boost 

class YellowBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        this.image = loadImage('data/birds/yellowbird.png'); // Load the yellow bird image
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(255);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r * 2, this.r * 2); // Draw the yellow bird image
        pop();
    }

    powerup() {
        Matter.Body.setVelocity(this.body, {
            x: this.body.velocity.x *3, // Double the x velocity for speed boost
            y: this.body.velocity.y
        });
    }
}