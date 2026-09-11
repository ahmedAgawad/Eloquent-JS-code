let horse = "🐴";

console.log(horse.length);
console.log(horse[0]);
console.log(horse[1]);

let horseShoe = "🐴👟";

console.log(horseShoe.charCodeAt(0)); 
console.log(horseShoe.codePointAt(0)); 
console.log(horseShoe.codePointAt(1));

// for of iteration is unicode aware so it reads the astral plane chars