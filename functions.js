function riseNshine(name, time, day) {
    console.log('Wake up ' + name + '!' + ' It is ' + time + ' a.m.' + ' It is ' + day + '.');
}


let name = process.argv[2];
let time = process.argv[3];
let day = process.argv[4];
riseNshine(name, time, day);


function makefavfood (pasta, sauce){
    console.log('Be hungry.');
    console.log('Get a pot and boil water.');
    console.log('Put a box of ' + pasta + ' inside.');
    console.log('Heat up some ' + sauce + ' sauce.');
    console.log('Drain the pasta and put the ' + sauce + ' sauce on top.');
};

let pasta = process.argv[5];
let sauce = process.argv[6];

makefavfood (pasta, sauce);