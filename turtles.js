let turtles = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtles = turtles.filter( step  => step[0] >= 0 && step[1] >= 0 );

console.log(turtles);

turtles = turtles.map(step => step[0] + step[1] );

console.log(turtles);

turtles.forEach(step => console.log(`The turtle moved ${step} steps.`));