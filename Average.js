let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function average(numbers) {
  let sum = 0;
  numbers.forEach((number) => sum += number);
  return sum/numbers.length;
}
console.log(average(array));