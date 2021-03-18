class Umbrella {
    constructor(x, y, width,height) {
        // console.log(x, y, radius);
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0,
            setStatic:false
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        //this.radius = radius;
        this.width = width;
        this.height = height;
        this.image=loadImage("Images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        imageMode(CENTER);
        fill("blue");
        image(this.image,pos.x, pos.y, this.height,this.width);

        // if (this.body.position.y > height) {
        //     Matter.Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) })
        // }

    }
};
