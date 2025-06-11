//imports bird class and adds redbird class basic functionality
class Box{
    constructor(x, y, width, height) {
       var options={
            restitution: 0.2, // Bounciness
            friction: 0.6, // Friction
            mass:2,
        }
        this.body = Matter.Bodies.rectangle(x , y , width, height,options);
        Matter.World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage('data/obstacles/greenpig.png'); // Load the box image
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
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       
       
        pop();
    }
}