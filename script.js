let markHeight = 1.65;
let markMass = 70;
let JopalHeight = 1.50;
let jopalMass = 80;

let calMarkBmi = markMass / markHeight ** 2;
let calJopalBmi = jopalMass / JopalHeight ** 2;

console.log(calMarkBmi);
console.log(calJopalBmi);

console.log(calJopalBmi > calMarkBmi);
console.log(calJopalBmi < calMarkBmi);