
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
        fill(24, 115, 57);
        stroke(4, 99, 39);
        strokeWeight(4);
        rotate(angle);
         rectMode(CENTER);
        rect(0, 0, this.width, this.height);
       
       
        pop();
    }
}