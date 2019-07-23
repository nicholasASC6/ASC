let r = 0;
let g = 0;
let b = 255;
let a = 0;
let d = 0;
let c = 255;

function setup(){
    createCanvas(600, 600);
}

function draw(){
    fill(r,g,b);
    rect(1, 1, 300, 600);
    fill(a,d,c);
    rect(300, 1, 300, 600);
}

function mousePressed({clientX, clientY}){
    if (r==0 && g==0 && b==255 && clientX <= 299 && clientY <=600){
    r = 255;
    g = 0;
    b = 0;
    } 
    else if (r==255 && g==0 && b==0 && clientX <= 299) {
    r = 0;
    g = 0;
    b = 255;};

    if (a==0 && d==0 && c==255 && clientX >= 301 && clientX <= 600 && clientY <=600){
        a = 255;
        d = 0;
        c = 0;
        } 
        else if (a==255 && d==0 && c==0 && clientX >= 301 && clientX <= 600) {
        a = 0;
        d = 0;
        c = 255;}
};

// function mousePressed({clientX, clientY}){
//     if (a==0 && d==0 && c==255 && clientX <= 1 && clientY <=600){
//     a = 255;
//     d = 0;
//     c = 0;
//     } 
//     else if (a==255 && d==0 && c==0 && clientX <= 1) {
//     a = 0;
//     d = 0;
//     c = 255;};
// };