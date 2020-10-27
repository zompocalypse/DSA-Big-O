// 1. What is the Big O for this?
//    1.1 - O(1)
//    1.2 - O(n)

// 2. Even or odd - O(1) - Constant since it was an arithemic approach
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else return false;
}

// 3. Are you here? - O(n^2) - Quadtratic due to nested loops
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// 4. Doubler - O(n) - Linear, looping through array once
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// 5. Naive search - O(n) - Linear, looping through array once
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// 6. Creating pairs - O(n^2) - Quadratic due to nested loops
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

// 7. Compute the sequence - O(n) - Linear, single loop for the number passed in
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// 8. An efficient search - O(log n) - Splits array in half, time it takes is minimal due to that
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

// 9. Random element - O(1) - Constant, simply finding a random element in the array
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 10. What am I? - O(n) - searches for prime numbers, worst case scenario, it always has to count to the number itself.
function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

// 11. Tower of Hanoi
function solveTowerOfHanoi() {
  
}


// 12. Interative version
//    12.1. Counting Sheep

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

//    12.2. Power Calculator

function powerCalculator(number, exponent) {
  return Math.pow(number, exponent);
}

console.log(powerCalculator(10, 3));

//    12.3. Reverse String

function reverseString(string) {
  let accumulator = '';
  while (string !== '') {
    accumulator = string[0] + accumulator;
    string = string.slice(1);
  }
  return accumulator;
}

console.log(reverseString('hello'));

//    12.4. nth Triangluar Number

function nthTriangleNumber(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}

console.log(nthTriangleNumber(5));

//    12.5. String Splitter

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

//    12.6. Fibonacci

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

function fibonacci2(number) {
  let [num1, num2] = [1, 0];
  while(number-- > 0) {
    [num1, num2] = [num2 + num1, num1];
  }
  return num2;
}

console.log(fibonacci(7));
console.log(fibonacci2(7));

//    12.7. Factorial

function factorial(number) {
  let newNumber = 1;
  for (let i = 1; i <= number; i++) {
    newNumber *= i;
  }
  return newNumber;
}

console.log(factorial(5));

// 13. Recursive Big O
//    13.1 - Counting Sheep - O(n) - linear, runs n number of times, each run is the same set of actions
//    13.2 - Power Calculator - O(n) - linear, runs n number of times, each run is the same set of actions
//    13.3 - Reverse String - O(n) - Linear, runs through each character in the string
//    13.4 - nth Triangluar Number - O(n) - Linear, counts down from the provided number until is reaches base case
//    13.5 - String Splitter - O(n) - Linear, calls itself based on how many dividers exist in the string
//    13.6 - Fibonacci - O(n^2) - Exponential, because it calls itself twice which then causes each of those to call itself twice
//    13.7 - Factorial - O(n) - Linear, each call subtracts one until base case
//    13.8 - Find a way out of the maze - 
//    13.9 - Find ALL ways out of the maze - 
//    13.10 - Anagrams - O(n!) - Factorial, as you add a letter, the possible permutations increases insanely
//    13.11 - Organization Chart - O(n) - Linear, each node is only visited once.
//    13.12 - Binary Representation - O(log n) - the number of ticks increases but only a little if a larger number was used

// 14. Interative Big O
//    14.1. Counting Sheep - O(n) - Linear, runs n number of times, each run is the same set of actions
//    14.2. Power Calculator - O(n) - Linear, math.
//    14.3. Reverse String - O(n) - Linear, loops and reverses.
//    14.4. nth Triangluar Number - O(n) - Linear, loops through once and maths it up.
//    14.5. String Splitter - O(n) - Linear, loops and splits.
//    14.6. Fibonacci - O(n) - Linear, math.
//    14.7. Factorial - O(n) - Linear, looping until we reach the answer using the provided param