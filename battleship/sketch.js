// let a = 1;
// let b = 1;

// function setup(){
//     createCanvas(400, 400);
// };

let X;
let Y;
let L = 40;
let W = 40;

let r = 255;
let g = 255;
let e = 255;

function setup(){
   createCanvas(400,400);
};

function draw(){
    for(X=0; X<400; X+=L){
        for(Y=0; Y<400; Y+=W){
            fill(r,g,e);
            rect(X,Y,L,W);
};
    };
};

function mousePressed({clientX, clientY}){
    if (r == 255 && g == 255 && e == 255 && clientX <= 39 && clientX >= 0 && clientY <= 40){
    r = 255;
    g = 0;
    e = 0;
    };
    // else if(r==255 && g==0 && b==0) {
    // r = 0;
    // g = 0;
    // b = 255;};
};


//  let a = 0;
//  let b = 0;
//  let c = 0;
//  let d = 0;
// function draw(){
    
//     for(let a = 0; a <= 500; a+=50){
//         for(let b = 0; b <= 500; b+=50){
//             line(a, b, a , 500);
//     }
// }

//     for(let c = 0; c <= 500; c+=50){
//         for(let d = 0; d <= 500; d+=50){
//             line(0, c, 500 , c);
// }
// }
// };




// function mousePressed({clientX, clientY}){
//     if (r==0 && g==0 && b==255){
//     r = 255;
//     g = 0;
//     b = 0;
//     } 
//     else if(r==255 && g==0 && b==0) {
//     r = 0;
//     g = 0;
//     b = 255;};
// };

