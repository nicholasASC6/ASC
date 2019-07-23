let x;
let y;

function setup (){
    createCanvas(600, 600);
    x = 0;
    y = 300;
}




// for(let x = 0; x < 600; x++){
//     console.log(x)
// }

function draw(){
    background(255, 0, 0);
    fill(0, 0, 255);
    ellipse(x, y, 80, 80);
    x++;

}
