// extends bird class and has bluebird class basic functionality that is divide into 3 bluebirds
import { Bird } from './bird.js';
import { loadImage } from 'p5';
export class BlueBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        this.image = loadImage('data/birds/bluebird.png'); // Load the blue bird image
        this.divided = false; // Flag to check if the bird has divided
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(255);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r * 2, this.r * 2); // Draw the blue bird image
        pop();
    }

    divide() {
        if (!this.divided) {
            // Create two smaller birds when divided
            const smallBird1 = new BlueBird(this.body.position.x - 10, this.body.position.y, this.r / 3);
            const smallBird2 = new BlueBird(this.body.position.x + 10, this.body.position.y, this.r / 3);
            const smallBird3= new BlueBird(this.body.position.x, this.body.position.y, this.r / 3);
            Matter.World.add(world, [smallBird1.body, smallBird2.body, smallBird3.body]);
            // Remove the original bird from the world
            Matter.World.remove(world, this.body);
            this.divided = true; // Set the flag to true to prevent further division
        }
    }
}