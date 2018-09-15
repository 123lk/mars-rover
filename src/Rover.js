class Rover {
  constructor (currentPosition) {

    const currentPositionArray = currentPosition.split(' ');

    this.xPosition = Number(currentPositionArray[0]);
    this.yPosition = Number(currentPositionArray[1]);
    this.orientation = currentPositionArray[2];
    this.errors = [];
  }

  followDirections (directions) {

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
          this.move();
          break;
        default:
          this.errors.push('invalid instruction');
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
        this.errors.push('invalid orientation');
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
        this.errors.push('invalid orientation');
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
        this.errors.push('unable to calculate');
    }
  }

  getfinalPosition () {
    console.log(`${this.xPosition} ${this.yPosition} ${this.orientation}`);
  }
  

}

module.exports = Rover;