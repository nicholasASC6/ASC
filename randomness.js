//////////////////////
// GLOBAL VARIABLES //
//////////////////////

function rand (){
    let numbers = Math.random();
    numbers *= 20;
    numbers = Math.ceil(numbers);
    console.log(numbers);
};

rand();

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function randomAlphabet() {
    let randAlphabetIndex = Math.ceil(Math.random() * alphabet.length);
    let randAlphabet = alphabet[randAlphabetIndex];
    console.log(randAlphabet);
};

randomAlphabet();

const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];

function randomFood() {
    let randFoodIndex = Math.floor(Math.random() * foods.length);
    let randFood = foods[randFoodIndex]; 
    console.log(randFood);

}

randomFood();


const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

function randomStudent() {
    let randStudentIndex = Math.floor(Math.random() * students.length);
    let randStudent = students[randStudentIndex]; 
    console.log(randStudent);
    
}
    
randomStudent();


/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////