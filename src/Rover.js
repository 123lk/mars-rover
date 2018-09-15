class Rover {
  constructor (currentPosition = '0 0 N') {

    const currentPositionArray = currentPosition.split(' ');

    this.xPosition = Number(currentPositionArray[0]);
    this.yPosition = Number(currentPositionArray[1]);
    this.orientation = currentPositionArray[2];
    this.errors = [];
  }

  followDirections (directions, plateauHeight, plateauWidth) {

    const directionsArray = directions.split('');

    directionsArray.forEach((instruction) => {
      switch (instruction) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'M':
          this.move(plateauHeight, plateauWidth);
          break;
        default:
          this.errors.push({source: 'followDirections', message: 'invalid instruction'});
      }
    });
  }

  turnLeft () {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'W';
        break;
      case 'E':
        this.orientation = 'N';
        break;
      case 'S':
        this.orientation = 'E';
        break;
      case 'W':
        this.orientation = 'S';
        break;
      default:
        this.errors.push({source: 'turnLeft', message: 'invalid orientation'});
    }
  }

  turnRight () {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'N';
        break;
      default:
        this.errors.push({source: 'turnRight', message: 'invalid orientation'});
    }
  }

  move () {
    switch (this.orientation) {
      case 'N':
          this.yPosition++;
        break;
      case 'E':
          this.xPosition++;
        break;
      case 'S':
          this.yPosition--;
        break;
      case 'W':
        this.xPosition--;
        break;
      default:
        this.errors.push({source: 'move', message: 'invalid input'});
    }
  }

  getFinalPosition () {
    return `${this.xPosition} ${this.yPosition} ${this.orientation}`;
  }
  

}

module.exports = Rover;