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
let gameStarted = false;


function realSetup() {
    // const  canvas =createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    
    // push 2 rigid boxes to the boxes array
    boxes.push(new RigidBox(800,525,150, 100));
    boxes.push(new RigidBox(650,535, 150, 80));
    //push wooden blocks on top of first rigid box
    boxes.push(new WoodenBox(800-(75/2), 400, 75, 75));
    boxes.push(new WoodenBox(800+(75/2), 400, 75, 75));
    boxes.push(new WoodenBlock(800, 400-(75/2), 50, 50));
    boxes.push(new WoodenBlock(800+50, 400-(75/2), 50, 50));
    boxes.push(new WoodenBlock(800-50, 400-(75/2), 50, 50));
    //push 2 woodenbox on top of wooden blocks
    boxes.push(new WoodenBox(800-(75/2), 300, 25, 75));
    boxes.push(new WoodenBox(800+(75/2), 300, 25, 75));
    // push 1 glass box on top of wooden blocks
    boxes.push(new GlassBox(800, 275, 150,25));
    //push 1 box below the glass box
    boxes.push(new Box(800, 300+25, 50, 50));
    boxes.push(new WoodenBlock(800, 250-(75/2), 75,75));
    // push 2 wooden box on top of second rigid box
    boxes.push(new WoodenBox(650-(75/2), 450, 25, 75));
    boxes.push(new WoodenBox(650+(75/2), 450, 25, 75));
    //push one box in the middle of the two wooden boxes
    boxes.push(new Box(650, 450-(50/2), 50, 50));
    // push 1 glass box on top of wooden blocks
    boxes.push(new GlassBox(650, 400, 150,25));
    boxes.push(new GlassBox(650-25, 350, 25,75));
    boxes.push(new GlassBox(650+25, 350, 25,75));
    //push 1  wooden box on top of glass box
     boxes.push(new WoodenBox(650, 325, 150,25));
     boxes.push(new Box(650, 300, 30, 30));

    // // push 1 wooden boxes to the boxes array
    // boxes.push(new GlassBox(750,500-150, 150, 20));
    // // push 1 normal box to the boxes array
    // boxes.push(new Box(750, 500-200, 50, 50));

    // push 1 redbird to the birds array
    birds.push(new RedBird(150, 400,20,20));
    // push 1 bluebird to the birds array
    birds.push(new BlueBird(150, 400,20,20));
    // push 1 yellowbird to the birds array
    birds.push(new YellowBird(150, 400,20,20));
    
    currentBirdIndex = 0;
    bird = birds[currentBirdIndex];
    slingshot = new SlingShot(150, 400, bird.body);
    ground = new Ground(width/2, height - 10, width, 20);

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
            bird.powerup(); // Use the powerup
         setTimeout(() => {
            currentBirdIndex = (currentBirdIndex + 1) % birds.length;
            bird = birds[currentBirdIndex];

             const slingX = 150;
             const slingY = 400;

              Matter.Body.setPosition(bird.body, { x: slingX, y: slingY });
              Matter.Body.setVelocity(bird.body, { x: 0, y: 0 });
              Matter.Body.setAngularVelocity(bird.body, 0);
              Matter.Body.setAngle(bird.body, 0);
              bird.body.force.x = 0;
              bird.body.force.y = 0;
              slingshot = new SlingShot(slingX, slingY, bird.body);
        }, 1000);
     

    }
}
function mouseReleased() {
    if (!gameStarted) return;
    setTimeout(() => {
        slingshot.fly();
    }, 120);
}
function draw(){
    // set background color
    background(145, 215, 235);
    
    //draw clouds
    fill(255);
    noStroke();
    ellipse(100, 100, 100, 70); 
    ellipse(200, 100, 80, 50); 
    ellipse(300, 70, 100, 80); 
    ellipse(500, 100, 100, 70);
    ellipse(700, 80, 100, 70); 
    ellipse(800, 100, 80, 50); 
    ellipse(900, 100, 100, 70);
    Matter.Engine.update(engine);
    for(let i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
    
    slingshot.show();
    fill(82, 55, 32);
    rect(117, 530, 100, 50);
    bird.show();
    for (let b of splitBirds) {
         Matter.Body.applyForce(b.body, b.body.position, { x: 0, y: -0.05 });
    b.show();
  }
  
    ground.show();
    
   
    
}