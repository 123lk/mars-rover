const Plateau = require('../src/Plateau.js');
const expect = require('chai').expect;

describe('Plateau', function () {
  it('is a function', function () {
    expect(Plateau).to.be.a('function');
  });
  it('returns an object', function () {
    var actual = new Plateau();
    expect(actual).to.be.an('object');
  });
});
