const Rover = require('./Rover');

class Plateau {
  constructor (height, width) {
    this.height = height;
    this.width = width;
    this.rovers = [];
  }

  addRover (currentPosition) {
    let newRover = new Rover(currentPosition);
    this.rovers.push(newRover);
  }

  calculateRoverFinalPosition (directions) {

    let currentRover = this.rovers[this.rovers.length - 1];

    currentRover.followDirections(directions, this.height, this.width);

    if (currentRover.xPosition > this.width || currentRover.yPosition > this.height) {
      return 'instructions would take rover outside of plateau boundary';
    } else {
      return currentRover.getFinalPosition();
    }

  }

}

module.exports = Plateau;