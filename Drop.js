class Drop {
    constructor(x, y, radius) {
        // console.log(x, y, radius);
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0,
            'setStatic': false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        fill("blue");
        circle(pos.x, pos.y, this.radius);

        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) })
        }

    }
};
