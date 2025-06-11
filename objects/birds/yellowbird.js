// yellow bird class extends the bird class and adds yellowbird class basic functionality speed boost 
import { Bird } from './bird.js';
import { loadImage } from 'p5'; 
export class YellowBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        this.image = loadImage('data/birds/yellowbird.png'); // Load the yellow bird image
        this.speedBoost = 0.05; // Speed boost factor
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

    boostSpeed() {
        Matter.Body.setVelocity(this.body, {
            x: this.body.velocity.x + this.speedBoost,
            y: this.body.velocity.y
        });
    }
}