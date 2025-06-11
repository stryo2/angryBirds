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
            // Create two smaller birds when divided
            const smallBird1 = new BlueBird(this.body.position.x, this.body.position.y-10, this.r /1.5);
            const smallBird2 = new BlueBird(this.body.position.x, this.body.position.y+10, this.r /1.5);
            const smallBird3= new BlueBird(this.body.position.x, this.body.position.y, this.r /1.5);
            Matter.Body.mass = 0.1;
            Matter.World.add(world, [smallBird1.body, smallBird2.body, smallBird3.body]);
              // Apply velocity to split birds to give them different trajectories
             const speed = 7;

             Matter.Body.setVelocity(smallBird2.body, { x: speed*1.5, y: -speed });      // top-right
             Matter.Body.setVelocity(smallBird3.body, { x: speed*1.5, y: 0 });           // middle-right
             Matter.Body.setVelocity(smallBird1.body, { x: speed*1.5, y: speed });       // bottom-right

             
            splitBirds.push(smallBird1, smallBird2, smallBird3);
           
            Matter.World.remove(world, this.body);
            this.divided = true; // Set the flag to true to prevent further division
        }
    }
}