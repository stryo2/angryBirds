const { Engine, World, Bodies, MouseConstraint,Mouse,Constraint} = Matter;

let ground;
let box;
let bird;
let engine;
let world;
let mConstraint;

function setup() {
    const  canvas =createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2, height - 10, width, 20);
    box = new Box(450, 300, 50, 75);
    bird = new Bird(100,320,25);
    const mouse = Mouse.create(canvas.elt);
     const options= {
        mouse : mouse
    }
    mConstraint = MouseConstraint.create(engine , options);
    World.add(world, mConstraint);
}
function draw(){
    background(0);
    Matter.Engine.update(engine);
    box.show();
    bird.show();
    ground.show();
    
}