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
for ( let i = 0; i < 101; i++ ) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz');
} else if (i % 5 === 0) {
  console.log('Buzz')
}
}
