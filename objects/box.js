//imports bird class and adds redbird class basic functionality
class Box{
    constructor(x, y, width, height) {
       var options={
            restitution: 0.2, // Bounciness
            friction: 0.1, // Friction
        }
        this.body = Matter.Bodies.rectangle(x , y , width, height,options);
        Matter.World.add(world, this.body);
        this.width = width;
        this.height = height;
}    
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(200, 100, 200);
        stroke(0);
        strokeWeight(2);
        rotate(angle);
        // imageMode(CENTER);
        // image(piggy,0, 0, this.width, this.height);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height); // Draw the box
       
       
        pop();
    }
}