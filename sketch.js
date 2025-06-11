const { Engine, World, Bodies, MouseConstraint,Mouse,Constraint} = Matter;

let ground;
const boxes = [];
let birds =[];
let bird;
let engine;
let world;
let mConstraint;
let slingshot;
let currentBirdIndex = 0;
let splitBirds = []; // stores clones created by blue bird


function setup() {
    const  canvas =createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2, height - 10, width, 20);
    // push 2 rigid boxes to the boxes array
    boxes.push(new RigidBox(700, 500, 100, 100));
    boxes.push(new RigidBox(800, 500, 100, 100));
    // push 2 glass boxes to the boxes array
    boxes.push(new WoodenBox(700, 500-75, 20, 75));
    boxes.push(new WoodenBox(800, 500-75, 20, 75));
    // push 1 wooden boxes to the boxes array
    boxes.push(new GlassBox(750,500-150, 150, 20));
    // push 1 normal box to the boxes array
    boxes.push(new Box(750, 500-200, 50, 50));

    // push 1 redbird to the birds array
    birds.push(new RedBird(150, 400,20,20));
    // push 1 bluebird to the birds array
    birds.push(new BlueBird(150, 400,20,20));
    // push 1 yellowbird to the birds array
    birds.push(new YellowBird(150, 400,20,20));
    
    currentBirdIndex = 0;
     bird = birds[currentBirdIndex];
    slingshot = new SlingShot(150, 400, bird.body);


    const mouse = Mouse.create(canvas.canvas);
    mouse.pixelRatio = pixelDensity(); 
    const options = {
        mouse: mouse,
        render: { visible: false },
        collisionFilter: {
            category: 0x0002,  // same as bird’s category
            mask: 0xFFFFFFFF   // allow all to interact with bird
        }
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
}
function keyPressed() {
    if(key ==' '){
        // use space to use powerup of the bird currently in use and after that switch to next bird 
            bird.powerup(); // Use the powerup of the blue bird
         setTimeout(() => {
            currentBirdIndex = (currentBirdIndex + 1) % birds.length;
            bird = birds[currentBirdIndex];
            slingshot.attach(bird.body);
        }, 1000);


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
    for (let b of splitBirds) {
    b.show();
  }
    
    ground.show();
    
   
    
}