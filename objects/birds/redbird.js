//imports bird class and adds redbird class basic functionality
import { Bird } from './bird.js';
import { loadImage } from 'p5';
export class RedBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        this.image = loadImage('data/birds/redbird.png'); // Load the red bird image
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(255);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r * 2, this.r * 2); // Draw the red bird image
        pop();
    }
}