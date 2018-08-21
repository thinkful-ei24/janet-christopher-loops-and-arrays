// console.log("Testing");
'use strict';

let arr = [-5, 54, 28, 98, -20013, 0.7878, 22, 115];

function max(numbers) {
  let greatNum = numbers[0];
  let count = 0;
  while(count < numbers.length - 1){
    count++;
    if(greatNum < numbers[count]){
      greatNum = numbers[count];   
    } 
  } return greatNum;
}
  
console.log(max(arr));

function min(numbers) {
  let greatNum = numbers[0];
  let count = 0;
  while(count < numbers.length - 1){
    count++;

    if(greatNum > numbers[count]){
      greatNum = numbers[count];   
    } 
  } return greatNum;
}
console.log(min(arr));
  
  
  
  
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function average(numbers) {
  let sum = 0;
  numbers.forEach(number =>  {
    sum += number;

    return sum / numbers.length;   
  });
}
  
console.log(average(array));
  

function repeat(fn, n){
  for (let i=0; i <= n; i++){
    fn();
  }
}

function hello (){
  console.log('Hello World');
}

function goodBye (){
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodBye, 5);


function filter(arr, fn) {
  // TASK: Define your function here
  let newArr = [];
  for (let i =0; i < arr.length; i++){
    if(fn(arr[i])===true){
      newArr.push(arr[i]);
    }
  }
  return newArr;

}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

