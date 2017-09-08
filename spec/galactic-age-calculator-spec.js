import {GalacticAge} from './../js/galactic-age-calculator.js'

const newAge = new GalacticAge(new Date(1993, 11, 1), "male");
const twoAge = new GalacticAge(new Date(1997, 11, 2), "female");

describe('GalacticAge', function() {

  it('should return an age in seconds', function() {
    expect(newAge.ageInSeconds()).toEqual(Math.floor((Date.now() - newAge.birthday)/1000));
  });

  it('should return an age in earth years', function() {
    expect(newAge.ageInEarthYears()).toEqual(23);
  });

  it('should return an age in mercury years', function() {
    expect(newAge.ageInMercuryYears()).toEqual(Math.floor(23/.24));
  });

  it('should return an age in venus years', function() {
    expect(newAge.ageInVenusYears()).toEqual(Math.floor(23/.62));
  });

  it('should return an age in mars years', function() {
    expect(newAge.ageInMarsYears()).toEqual(Math.floor(23/1.88));
  });

  it('should return an age in jupiter years', function() {
    expect(newAge.ageInJupiterYears()).toEqual(Math.floor(23/11.86));
  });

  it('should return average life expectancy in earth years', function() {
    expect(newAge.lifeExpectancyOnEarth()).toEqual(76.9);
  });

  it('should return average life expectancy in mercury years', function() {
    expect(twoAge.lifeExpectancyOnMercury()).toEqual(Math.floor(81.6*(365/88)));
  });

  it('should return average life expectancy in venus years', function() {
    expect(twoAge.lifeExpectancyOnVenus()).toEqual(Math.floor(81.6*(365/225)));
  });

  it('should return average life expectancy in mars years', function() {
    expect(newAge.lifeExpectancyOnMars()).toEqual(Math.floor(76.9/1.88));
  });

  it('should return average life expectancy in jupiter years', function() {
    expect(newAge.lifeExpectancyOnJupiter()).toEqual(Math.floor(76.9/11.86));
  });

  it('should return a congratulatory message if the user has surpassed their life expectancy', function() {
    let oldAge = new GalacticAge(new Date(1920, 3, 6), "female");
    expect(oldAge.olderThanLifeExpectancyEarth()).toEqual("You survived past your life expectancy! Congratulations!");
    expect(oldAge.olderThanLifeExpectancyMercury()).toEqual("You survived past your life expectancy! Congratulations!");
    expect(oldAge.olderThanLifeExpectancyVenus()).toEqual("You survived past your life expectancy! Congratulations!");
    expect(oldAge.olderThanLifeExpectancyMars()).toEqual("You survived past your life expectancy! Congratulations!");
    expect(oldAge.olderThanLifeExpectancyJupiter()).toEqual("You survived past your life expectancy! Congratulations!");
    expect(newAge.olderThanLifeExpectancyMars()).toEqual("How exciting!");
    expect(twoAge.olderThanLifeExpectancyVenus()).toEqual("How exciting!");
  });
});
