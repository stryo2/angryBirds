class Box{
    constructor(x, y, width, height) {
        this.body = Matter.Bodies.rectangle(x , y , width, height);
        Matter.World.add(world, this.body);
        this.width = width;
        this.height = height;
}    
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(255);
        rotate(angle);
         rectMode(CENTER);
        rect(0, 0, this.width, this.height);
       
       
        pop();
    }
}