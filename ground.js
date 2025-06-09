
class Ground extends Box{
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.body.isStatic = true; // Make the ground static
    }
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(20, 150, 20);
        stroke(0);
        strokeWeight(2);
        rotate(angle);
         rectMode(CENTER);
        rect(0, 0, this.width, this.height);
       
       
        pop();
    }
}