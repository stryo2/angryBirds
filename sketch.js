const { Engine, World, Bodies, MouseConstraint,Mouse,Constraint} = Matter;

let ground;
const boxes = [];
let bird;
let engine;
let world;
let mConstraint;
let slingshot;

function setup() {
    const  canvas =createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2, height - 10, width, 20);
    for(let i = 0; i < 4; i++){
        boxes[i] = new Box(450, 300-(i*75),75, 75);
    }
    bird = new Bird(100,300,20);
    slingshot = new SlingShot(100, 300, bird.body);

    const mouse = Mouse.create(canvas.canvas);
    mouse.pixelRatio = pixelDensity(); 
    const options = {
        mouse: mouse,
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
}
function keyPressed() {
    if (key == ' ') { // Space key
       //
    }
}
function mouseReleased() {
    setTimeout(() => {
        slingshot.fly();
    }, 120);
}
function draw(){
    background(0);
    Matter.Engine.update(engine);
    for(let i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
    slingshot.show();
    bird.show();
    
    ground.show();
    
   
    
}