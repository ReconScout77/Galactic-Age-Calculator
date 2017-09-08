import {GalacticAge} from './../js/galactic-age-calculator.js';

$(function() {
  $('#galactic-age').submit(function(event) {
    event.preventDefault();
    let birthInput = new Date($('#birthday').val());
    let genderInput = $('#gender').val();
    let chosenPlanet = $('#planet').val();
    let userDay = new GalacticAge(birthInput, genderInput);


    if (chosenPlanet === "Mercury") {
    $('#result').text(`You are ${userDay.ageInMercuryYears()} years old on ${chosenPlanet} years! Incidentally this means that your average life expectancy is ${userDay.lifeExpectancyOnMercury()} years! ${userDay.olderThanLifeExpectancyMercury()}`);
    } else if (chosenPlanet === "Venus") {
      $('#result').text(`You are ${userDay.ageInVenusYears()} years old on ${chosenPlanet} years! Incidentally this means that your average life expectancy is ${userDay.lifeExpectancyOnVenus()} years! ${userDay.olderThanLifeExpectancyVenus()}`);
    } else if (chosenPlanet === "Mars") {
      $('#result').text(`You are ${userDay.ageInMarsYears()} years old on ${chosenPlanet} years! Incidentally this means that your average life expectancy is ${userDay.lifeExpectancyOnMars()} years! ${userDay.olderThanLifeExpectancyMars()}`);
    } else if (chosenPlanet === "Jupiter") {
      $('#result').text(`You are ${userDay.ageInJupiterYears()} years old on ${chosenPlanet} years! Incidentally this means that your average life expectancy is ${userDay.lifeExpectancyOnJupiter()} years! ${userDay.olderThanLifeExpectancyJupiter()}`);
    } else {
      $('#result').text(`You are ${userDay.ageInEarthYears()} years old on ${chosenPlanet} years! Incidentally this means that your average life expectancy is ${userDay.lifeExpectancyOnEarth()} years! ${userDay.olderThanLifeExpectancyEarth()}`);
    }
  });
});
