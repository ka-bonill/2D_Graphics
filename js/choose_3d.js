var cam; 
var user_input;
var choices; 


var d = 0.5; 

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background("black");
    normalMaterial(); 
    cam = createCamera(); 
    
    choices = createRadio(); 
    choices.option('torus'); 
    choices.option('box'); 
    choices.option('plane');
    choices.position(25, 100);
    choices.style('color', 'white');
    choices.style('width', '60px');

    directions = createElement('h3', 'Enter number of shape: ');
    directions.position(20, 5);
    directions.style('color', 'white');

    user_input = createInput(); 
    user_input.position(25, 50); 
    user_input.size(50); 

}

function draw() {
    background("black");

    cam.move(d, d, 0);


    var choice_value = choices.value();
    console.log(choice_value);

    if (choice_value == "torus") {
        tori(user_input.value()); 
    }
    else if (choice_value == "box") {
        boxes(user_input.value()); 
    }
    else {
        planes(user_input.value()); 
    }


}

function tori(stop) {
    for (var i = 0; i <= stop; i++) {
        translate(width/4, height/4, 0);
        translate(p5.Vector.fromAngle(millis() / 1000, 40));

        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        torus(70, 20);
        pop();
      }

}

function boxes(stop) {
    for (var i = 0; i <= stop; i++) {
        translate(width/4, height/4, 0);
        translate(p5.Vector.fromAngle(millis() / 1000, 40));

        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        box(70, 70, 70); 
        pop();
      }
}

function planes(stop) {
    for (var i = 0; i <= stop; i++) {
        translate(width/4, height/4, 0);
        translate(p5.Vector.fromAngle(millis() / 1000, 40));

        push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        plane(100);
        pop();
      }
}


function adjust()
{
    resizeCanvas(windowWidth, windowHeight); 
}
