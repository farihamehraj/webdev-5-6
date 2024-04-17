//Chapter 2

/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle
#
##
###
####
#####
######
#######
*/
for(let str="#"; str.length<=7; str = str + "#") {
  console.log(str);
}

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
for(let num=1; num<=100; num++){
  if(num%3 && num%5){
    console.log("FizzBuzz");
  }
  else if(num % 3){
    console.log("Fizz");
  }
  else if(num % 5){
    console.log("Buzz");
  }
  else {
    console.log(num);
  }
}

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
*/
str = "";
for(let row = 0; row < 8; row++){
  for(let col = 0; col < 8; col++){
    //if(row%2 && col%2){
    if((row+col)%2 == 0){
      str += " ";
    }
    else {
      str += "#";
    }
  }
  str += "\n";
}
console.log(str)

//Chapter 3

/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
*/
function min(x,y){
  if(x<y){
    return x;
  }
  else {
    return y;
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


/*
Recursion
We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/
function isEven(num){
  if(num < 0){
    return isEven(-num);
  }
  else if(num == 0){
    return true;
  }
  else if(num == 1){
    return false;
  }
  else {
    return isEven(num - 2);
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


/*
BEAN COUNTING
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.
*/
function countBs(str){ 
  return countChar(str, 'B')
}
function countChar(str, char){
  let count = 0;
  for(i = 0; i < str.length; i++) {
    if(str[i] == char){
      count++;
    }
  }
  return count;
}
console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// Chapter 4

/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end, step = 1) {
  let array = []; 
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  }
  else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let swap = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = swap;
  }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/*
A list
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
*/

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list}; 
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, index) {
  if (!list){
    return undefined;
  }
  else if (index === 0){
    return list.value;
  }
  else {
    return nth(list.rest, index - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20