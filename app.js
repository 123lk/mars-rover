const Plateau = require('./src/Plateau');

const plateau = new Plateau(5,5);
plateau.addRover('1 2 N');
console.log(plateau.calculateRoverFinalPosition('LMLMLMLMM'));
plateau.addRover('3 3 E');
console.log(plateau.calculateRoverFinalPosition('MMRMMRMRRM'));
