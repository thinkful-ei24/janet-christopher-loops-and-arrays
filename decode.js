const decoded = inputArray.reduce((total, val) => val.length === 3 ? total += ' ' : total += val[val.length-1].toUpperCase(),'');

console.log(decoded);