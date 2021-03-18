const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const maxDrops = 50;
const drops = [];
let frameCount = 0;
var thunder1;
var thunder2;
var thunder;

function preload() {
    thunder1 = loadImage("Images/thunderbolt/1.png");
    thunder2 = loadImage("Images/thunderbolt/2.png");
}

function setup() {
    var canvas = createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;

    umbrella=new Umbrella(300,450,300,250)

    for (let i = 0; i < maxDrops; i++) {
        // drop = new Drop(300, 800, 60);
        // drop.scale = 0.1
        const drop1 = new Drop(random(0, 800), random(0, 600), 10);
        drops.push(drop1);
    }
    thunder = createSprite(random(10, 400), random(10, 30), 10, 10);
    thunder.addImage(thunder1);
}

function draw() {
    background(0);
    frameCount++;
    if (frameCount % 20 === 0) {
        for (let i = 0; i < maxDrops; i++) {
            drop1 = drops[i];
            drop1.display();
        }
    }
    rand = Math.round(random(1, 2))
    if (frameCount % 50 === 0) {
        thunderCreatedFrame = frameCount
        thunder = createSprite(random(10, 400), random(10, 30), 10, 10)
        switch (rand) {
            case 1: thunder.addImage(thunder1);
                break;
            case 2: thunder.addImage(thunder2);
                break;
            default: break;
        }
        thunder.display();
    //    thunder.scale(0.3, 0.6)
    }
    umbrella.display();
}

