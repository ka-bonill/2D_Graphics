var counter = 0; 

var circle_keeper = []; 

function inc() {
    counter++; 
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background("black");

    setInterval(inc, 4000); 

    noStroke();

    noLoop();
}

function draw() {
    // mouseClicked();

    c_instance = new coCircles()
}


class coCircles {

    constructor(x, y, d, r, g, b) {
        this.x = x;
        this.y= y;
        this.d = d; 
        this.r = r;
        this.g= g;
        this.b = b; 
    }

    create() {

        fill(r, g, b)

        ellipse(x, y, d, d); 

    }
}

function mouseClicked(){

    pos_quant = Math.random() * 10;

    x = Math.random() * windowWidth; 
    y = Math.random() * windowHeight; 

    for (var calc = 0; calc < pos_quant; calc = calc + 1) {
        
        d = (Math.random() * 60) * (pos_quant - calc);
                
        r = Math.random() * 255; 
        g = Math.random() * 255;
        b = Math.random() * 255;


        new_circle = new coCircles(x, y, d, r, g, b)

        new_circle.create(); 

        circle_keeper.push(new_circle);
        
    }

    if (circle_keeper.length >= 110) {
        clear(); 
        background(0);
        circle_keeper.length = 0;
    }

    console.log(circle_keeper);
}

function adjust()
{
    resizeCanvas(windowWidth, windowHeight); 
}

