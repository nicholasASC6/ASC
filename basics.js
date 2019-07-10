const hi = 21;

const the = "no";

const know = true;

console.log(hi);

console.log(the);

console.log(know);

console.log('Cost:' + (45 * 4 + 75 * 2));
const regTic = 45 * 4;
const frontTic = 75 * 2;
console.log('Cost:' + (regTic + frontTic));
const total = regTic + frontTic;
console.log('Cost:' + (total));

console.log('Selling price:' + (45 * 4 + 75 * 2) * 1.5);
const more = 1.5;
console.log('Selling price:' + (total) * more);
const newcost = (total) * more;
console.log('Selling price:' + (newcost));

console.log('seller fee' + (45 * 4 + 75 * 2) * 1.5 * .2);
const discount = .2;
console.log = 'seller fee' + (newcost) * discount;
const newercost = (newcost) * discount;
console.log = 'seller fee' + newercost;

console.log('total profit' + (45 * 4 + 75 * 2) * 1.5 - (45 * 4 + 75 * 2) * 1.5 * .2 - (45 * 4 + 75 * 2));
console.log('total profit' + (newcost) - (newercost) - (total));
