// extends bird class and has bluebird class basic functionality that is divide into 3 bluebirds

class BlueBird extends Bird {
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

    powerup() {
        if (!this.divided) {
             const x = this.body.position.x;
        const y = this.body.position.y;
        const r = this.r / 2;

        // Create 3 small birds with vertical offsets
        const smallBird1 = new BlueBird(x, y - 15, r); // top
        const smallBird2 = new BlueBird(x, y, r);      // middle
        const smallBird3 = new BlueBird(x, y + 15, r); // bottom

        // Add to Matter.js world
        Matter.World.add(world, [smallBird1.body, smallBird2.body, smallBird3.body]);

        // Add to splitBirds array
        splitBirds.push(smallBird1, smallBird2, smallBird3);

        // Use the same moderate rightward speed
        const vx = 10;
        const vy = 2;

        Matter.Body.setVelocity(smallBird1.body, { x: vx, y: -vy }); // top-right
        Matter.Body.setVelocity(smallBird2.body, { x: vx, y: 0 });   // middle-right
        Matter.Body.setVelocity(smallBird3.body, { x: vx, y: vy });  // bottom-right

        // Remove the original bird
        Matter.World.remove(world, this.body);
        this.divided = true;
        }
    }
}