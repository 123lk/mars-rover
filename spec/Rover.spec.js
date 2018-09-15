const Rover = require('../src/Rover.js');
const expect = require('chai').expect;

describe('Rover',() => {
  it('is a function', () => {
    expect(Rover).to.be.a('function');
  });
  it('returns an object', () => {
    let rover1 = new Rover();
    expect(rover1).to.be.an('object');
  });
  it('sets the rovers starting position', () => {
    let rover1 = new Rover('1 3 N');
    expect(rover1.xPosition).to.equal(1);
    expect(rover1.yPosition).to.equal(3);
    expect(rover1.orientation).to.equal('N');
  });
  it('can turn left', () => {
    let rover1 = new Rover('2 4 S');
    rover1.turnLeft('S');
    expect(rover1.orientation).to.equal('E');
  });
  it('can turn right', () => {
    let rover1 = new Rover('2 4 N');
    rover1.turnRight('N');
    expect(rover1.orientation).to.equal('E');
  });
  it('can move forward one grid point', () => {
    let rover1 = new Rover('1 2 N');
    rover1.followDirections('M');
    expect(rover1.yPosition).to.equal(3);
  });
  it('will store error messages if invalid input is provided', () => {
    let rover1 = new Rover('1 4 S');
    rover1.followDirections('XYZ');
    expect(rover1.errors.length).to.equal(3);
  });

});
