const Plateau = require('./src/Plateau');
const Rover = require('./src/Rover');

const newPlateau = new Plateau(5,5);
const rover1 = new Rover('1 2 N');
rover1.followDirections('LMLMLMLMM');
rover1.getfinalPosition();
const rover2 = new Rover('3 3 E');
rover2.followDirections('MMRMMRMRRM');
rover2.getfinalPosition();