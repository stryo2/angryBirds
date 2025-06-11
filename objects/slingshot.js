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
    }
 attach(body) {
    this.sling.bodyB = body; // Attach the body to the slingshot
 }
 fly(){
                this.sling.bodyB = null; // Detach the body from the slingshot
 }

 show() {
                if (this.sling.bodyB) {
                    const posA = this.sling.pointA;
                    const posB = this.sling.bodyB.position;
                    stroke(255);
                    line(posA.x, posA.y, posB.x, posB.y);
                }    
    }
}
