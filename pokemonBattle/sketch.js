function setup() {
    createCanvas(600, 600);
    background ("purple");
};

let boxColor;
let boxColorCheck = true;

function mousePressed({clientX, clientY}){
    if(clientX >= 35 && clientY >= 450 && clientX <=135 && clientY <=480)
    {
        if(l >= 0){
            l -= 1;
        }
    } else if (clientX >= 495 && clientY >= 450 && clientX <= 595 && clientY <=480) 
    {
        if(r >= 0){
            r -=1;
        }
    }
};

let l = 100;
let r = 100;
function healthBar(){
    fill("red");
    rect(35, 30, 100, 20);
    fill("green");
    rect(35, 30, r, 20);
    
}

function healthBar2(){
    fill("red");
    rect(495, 30 , 100, 20);
    fill("green");
    rect(495, 30, l, 20);

}

function settings(){
    fill(0, 0, 0);
    rect(0, 0, 50, 20);
}

function attackOptions1(){
    fill(125, 125, 125);
    rect(495, 450, 100, 30);
}

function attackOptions2(){
    fill(125, 125, 125);
    rect(35, 450, 100, 30);
}

function characters(){
    if(boxColorCheck == true)
    {
        boxColor = "blue";
    }
    else
    {
        boxColor = "red";
    }
    fill(boxColor);
    square(40,300,90);
    fill('yellow');
    square(500,300,80);
};

function draw(){
    settings();
    healthBar();
    healthBar2();
    attackOptions1();
    attackOptions2();
    characters();
}

setInterval(function(){ alert("Game Over! Restart the page."); }, 100000);





// let score = ;
// mousePressed({clientX, ClientY}){
//     if (clientX
// };

// let printTime = function (){console.log('2:00');}