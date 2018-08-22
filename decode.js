const firstCode = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const decoded = firstCode.split(' ').reduce((total, val) => val.length === 3 ? total += ' ' : total += val[val.length-1].toUpperCase(),'');

console.log(decoded);