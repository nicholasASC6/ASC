let student = {};
let car = {name:'Toyota', road_miles: 0};

student.grade = 12;
student.skills = ['Computation', 'Takes good notes', 'Communication'];
student.attention_span = 100;

student.read = function(book){console.log('I read', book)};

student.drive = function(car){car.road_miles += 100};

function draw(url){
    let img = document.createElement('img');
    img.src = url;
    document.body.append(img);
};
student.draw = draw;

student.money = 20;

student.buy = function(price){
    if(this.money >= price){
        console.log('Buy it!')
    }else{console.log('Not enough money!')}
};