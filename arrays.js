const nfl = ['Jaguars', 'Dolphins', 'Packers', 'Eagles', 'Giants'];

console.log("The length is", nfl.length);

nfl.pop();

console.log('The new length is', nfl.length);

nfl[1] = 'Vikings';

nfl.push('Jets');

console.log(nfl);

nfl.splice(0,1);

console.log(nfl);

const result = nfl.filter(word => word.length > 4);

console.log(result);