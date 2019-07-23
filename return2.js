function randomNumber(max){
    let decimal = Math.random();
    let times10 = decimal * max;
    let number = Math.floor(times10);
    return number;
};
let number = randomNumber(35);
console.log('I am ' + number + ' years old.');