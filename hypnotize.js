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

    pos_quant = Math.random() * 10;


    for (var i = 0; i < pos_quant; i++) {
        
    }
}

function draw() {
    mouseClicked();
}

class coCircles {

    constructor(x, y, d) {
        this.x = x;
        this.y= y;
        this.d = d; 
    }

    create() {

        x = Math.random() * windowWidth; 
        y = Math.random() * windowHeight; 
        
        d = (Math.random() * 60) * (pos_quant - calc);
                
        r = Math.random() * 255; 
        g = Math.random() * 255;
        b = Math.random() * 255;

        fill(r, g, b)

        ellipse(x, y, d, d); 

    }
}

    // create() {

    //     for (var calc = 0; calc < pos_quant; calc = calc + 1) {
    //         var d = (Math.random() * 60) * (pos_quant - calc);
            
    //         r = Math.random() * 255; 
    //         g = Math.random() * 255;
    //         b = Math.random() * 255;

    //         fill(r, g, b); 

    //         ellipse(x, y, d, d); 
    //     }

    // }
}

function mouseClicked(){

    var new_circle = new coCircles(); 

    console.log("X: ", new_circle.x); 

    circle_keeper.push(new_circle); 
}

function keyPressed() {
    if (keyCode == 32 ) {
        console.log(circle_keeper);
        circle_keeper.slice(circle_keeper.length - 1, 1);
    }
}

function adjust()
{
    resizeCanvas(windowWidth, windowHeight); 
}

