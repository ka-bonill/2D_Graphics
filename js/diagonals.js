function setup() {

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