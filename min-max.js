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