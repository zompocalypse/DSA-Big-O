// 1. Counting Sheep

function countingSheep(number) {
  for (let i = number; i > 0; i--) {
    if (i > 1) {
      console.log(`${i}: Another sheep jumps over the fence`);
    } else {
      console.log('All sheep jumped over the fence');
    }
  }
}

countingSheep(5);

// 2. Power Calculator

function powerCalculator(number, exponent) {
  return Math.pow(number, exponent);
}

console.log(powerCalculator(10, 3));

// 3. Reverse String

function reverseString(string) {
  let accumulator = '';
  while (string !== '') {
    accumulator = string[0] + accumulator;
    string = string.slice(1);
  }
  return accumulator;
}

console.log(reverseString('hello'));

// 4. nth Triangluar Number

function nthTriangleNumber(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}

console.log(nthTriangleNumber(5));

// 5. String Splitter

function stringSplitter(string, div) {
  const splitString = [''];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === div) {
      splitString.push('');
    } else {
      splitString[splitString.length - 1] =
        splitString[splitString.length - 1] + string[i];
    }
  }
  return splitString;
}
console.log(stringSplitter('02/20/2020', '/'));

// 6. Fibonacci

function fibonacci(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(1);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

console.log(fibonacci(7));

// 7. Factorial

function factorial(number) {
  let newNumber = 1;
  for (let i = 1; i <= number; i++) {
    newNumber *= i; 
  }
  return newNumber;
}

console.log(factorial(5));