const Plateau = require('../src/Plateau.js');
const expect = require('chai').expect;

describe('Plateau', () => {
  it('is a function', () => {
    expect(Plateau).to.be.a('function');
  });
  it('returns an object',() => {
    let newPlateau = new Plateau();
    expect(newPlateau).to.be.an('object');
  });
  it('has a method to add a rover to the plateau', () => {
    let newPlateau = new Plateau(5, 5);
    newPlateau.addRover('1 2 N');
    expect(newPlateau.rovers.length).to.equal(1);
  });
  it('has a method to calculate the final position of a rover', () => {
    let newPlateau = new Plateau(5, 5);
    newPlateau.addRover('3 3 E');
    expect(newPlateau.calculateRoverFinalPosition('MMRMMRMRRM')).to.equal('5 1 E');
  });
  it('will return an error message if the directions take the rover outside of the plateau boundary', () => {
    let newPlateau = new Plateau(3, 3);
    newPlateau.addRover('0 0 N');
    expect(newPlateau.calculateRoverFinalPosition('MMMM')).to.equal('instructions would take rover outside of plateau boundary');
  });
});
