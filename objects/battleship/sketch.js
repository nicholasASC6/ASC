let grid = {};
let size = 50;

function setup(){
    createCanvas(1600, 1600);
};
function draw_grid(length){
    for(let w = 0; w < length*10; w+=length){
        if(!grid[w]) grid[w] = {};
        for(let h = 0; h < length*10; h+=length){
            if(!grid[w][h]) grid[w][h] = 'red';
            let color = grid[w][h];
            fill(color);
            rect(w, h, length, length);
        }
    }
};
function draw(){
   clear();
   draw_grid(size);
}