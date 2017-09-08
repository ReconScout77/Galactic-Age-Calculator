import {GalacticAge} from './../js/galactic-age-calculator.js'

const newAge = new GalacticAge(new Date(1993, 11, 1))

describe('GalacticAge', function() {

  it('should return an age in seconds', function() {
    expect(newAge.ageInSeconds()).toEqual(Math.floor((Date.now() - newAge.birthday)/1000));
  });

  it('should return an age in earth years', function() {
    expect(newAge.ageInEarthYears()).toEqual(23);
  });
});
