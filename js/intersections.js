var cam; 
var user_input;

var d = 0.5; 

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background("black");
    normalMaterial(); 
    cam = createCamera(); 
    // noLoop();

    user_input = createInput(); 
    user_input.position(25, 25); 
    user_input.size(50); 

    submit = createButton('submit'); 
    submit.position(user_input.x + user_input.width, user_input.y); 
    console.log("This is user: ", user_input.value());
    submit.mousePressed(generate); 
}

function draw() {
    background("black");
    cam.move(d, d, 0);

    if (frameCount % 150 === 0) {
        d *= -1;
    }

    var x = windowWidth/2; 
    var y = windowHeight/2; 
    
    diagonals(x, y, 10);
}

function tori(stop) {
    translate(100, 0, 0);
    push();
    rotateZ(frameCount * 0.001);
    rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.01);
    torus(random(70), random(20));
    pop(); 

    if (stop > 1) {
        stop = stop - 1; 
        tori(stop);
    }

}

function diagonals(x, y, stop) {

    // fill(random(255), random(255), random(255)); 

    ellipse(x, y, 200); 

    if (stop > 1) {
        x = x * 1.125; 
        y = y*1.125

        stop = stop - 1; 

        console.log(stop);

        console.log(x);

        diagonals(x, y, stop);  
    } 

}

function generate() {
    num_torus = user_input.value(); 
    tori(num_torus); 
}

function adjust()
{
    resizeCanvas(windowWidth, windowHeight); 
}

