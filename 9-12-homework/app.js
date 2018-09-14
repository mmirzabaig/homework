console.log('hello');
// Eqasy going | Answer # 1
for ( let i = 0; i < 21; i++ ) {
  console.log(i);
}

// Get Even | Answer # 2
for ( let i = 0; i < 200; i+=2 ) {
  console.log(i);
}

// Excited Kitchen | Answer # 3
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var array = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for ( let i = 0; i < 21; i++ ) {
  console.log('Love me, pet me! HSSSSSS!');
  if ( i % 2 === 0 ) {
  console.log(array[getRandomInt(0, 2)])
  }
}

// Fizz Buzz | Answer # 4
for ( let i = 1; i < 101; i++ ) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz ' + i)
  } else if (i % 3 === 0) {
    console.log('Fizz ' + i);
} else if (i % 5 === 0) {
  console.log('Buzz ' + i)
  }
}

// Getting To Know You || Answer # 5
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

// #1
shahzad[0] = 'Gameboy';
console.log(shahzad);
// #2
daniel[1] = 187;
console.log(daniel);
// #3
ryan[2] = 'Gotham City';
console.log(ryan);
// #4
reuben.pop();
reuben.push('Chicago');
console.log(reuben);
 // #5
 jim.pop();
 jim.pop();
 jim.pop();
 jim.push('Los Angeles', 'Dubai', 'Toronto');
 console.log(jim);

 // #6
 jim.splice (0, 1)
 console.log(jim);

//  Yell at the Ninja Turtle || Answer # 6
let tmnt = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

var bonus = [];

tmnt = tmnt.splice('');

for ( let i = 0; i < tmnt.length; i++ ) {
  let temp = tmnt[i].split('');
  for ( let k = 0; k < temp.length; k+=2 ) {
    temp[k] = temp[k].toUpperCase();
  }
  bonus.push(temp.join(''));
}
console.log(bonus)
