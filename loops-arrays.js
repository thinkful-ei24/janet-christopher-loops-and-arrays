'use-strict';
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
  numbers.forEach((number) => sum += number);
  return sum/numbers.length;
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


let hazardWarningCreator = typeOfWarning => {
  let warningCounter = 0;
  let position= location=>{
    warningCounter++;
    console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
  return position;
};
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Flooding in the area');
const hailWarning = hazardWarningCreator('Crazy hail in your area, yo');
rocksWarning();
rocksWarning();
rocksWarning();
floodWarning();
hailWarning();


let turtles = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtles = turtles.filter( step  => step[0] >= 0 && step[1] >= 0 );

console.log(turtles);

turtles = turtles.map(step => step[0] + step[1] );

console.log(turtles);

turtles.forEach(step => console.log(`The turtle moved ${step} steps.`));


const firstCode = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const inputArray = firstCode.split(' ');

const decoded = inputArray.reduce((total, val) => val.length === 3 ? total += ' ' : total += val[val.length-1].toUpperCase(),'');

console.log(decoded);
// if (val.length === 3){
//   total += " ";
// } else {
//   total += val[val.length-1].toUpperCase();
// }

// return total;
// }, '' );



// console.log(ninjaTurtles.reduce((a, b) => a + b));
// console.log(ninjaTurtles);
// ninjaTurtles.forEach(function(step){
//   console.log(`The turtle moved ${step} steps.`);
// });