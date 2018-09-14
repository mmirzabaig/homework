// 1- What is the difference between a parameter and an argument?
// Answer- you give paramaters when u create the function, you pass arguments when you invoke the function

// 2- Within a function, what is the difference between return and console.log?
// Answer- return, returns whatever u created the function for and ends the function, console log can log whatever you like within the function and you cant return any log as an arument for anything else

// 3- What are the implications of the ability of a function to return a value?
// Answer- you can use return values as arguments for other actions in your code. Return also stops the function from running any further

 const checkPalindrome = (str) => {
   str = str.toUpperCase();
   let str2 = str.split('').reverse().join('');
   return str === str2;
 }
console.log(checkPalindrome("Radar"));

const sumDigit = (num) => {
  num.toString();
  num = num.split('');
  let sum = 0;
  for ( let i = 0; i < num.length; i++ ) {
    sum += Number(num[i]);
  }
  return sum;
}
console.log(sumDigit('42'))

const calculateSide = (sideA, sideB) => {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
calculateSide(8, 6);

const sumArray = (array) => {
  let sum = 0;
  for ( let i = 0; i < array.length; i++ ) {
    sum += array[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));


function isPrime(value) {
  for(var i = 2; i < value; i++) {
    if(value % i === 0) {
      return false;
    }
  }
  return true;
}
isPrime(11)

const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}
isPrime(53)

const printPrimes = (num) => {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
printPrimes(53)
