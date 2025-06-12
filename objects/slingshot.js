class SlingShot{
    constructor(x,y, body) {
        var options = {
            pointA: {
                 x: x,
                 y: y
                },
            bodyB: body, 
            stiffness: 0.02, 
            angularStiffness: 0.2, 
            length: 30
        };
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        this.image = loadImage('data/slingshot.png'); // Load the slingshot image
    }
 attach(body) {
    this.sling.bodyB = body; // Attach the body to the slingshot
 }
 fly(){
                this.sling.bodyB = null; // Detach the body from the slingshot
 }

 show() {
                const posA = this.sling.pointA;
                const posB = this.sling.bodyB ? this.sling.bodyB.position : null;
                push();
               image(this.image, posA.x - 30, posA.y - 30, 75, 175); // Draw the slingshot image at point A
                pop();
                if (this.sling.bodyB) {
                    const posA = this.sling.pointA;
                    const posB = this.sling.bodyB.position;
                    stroke(0);
                    strokeWeight(4);
                    line(posA.x, posA.y, posB.x, posB.y);
                    line(posA.x+20, posA.y, posB.x, posB.y); // Draw the line to the body
                }    
    }
}