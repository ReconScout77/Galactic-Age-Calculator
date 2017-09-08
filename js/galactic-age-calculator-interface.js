import {GalacticAge} from './../js/galactic-age-calculator.js';

$(function() {
  $('#galactic-age').submit(function(event) {
    event.preventDefault();
    let birthInput = new Date($('#birthday').val());
    let chosenPlanet = $('#planet').val();
    let userDay = new GalacticAge(birthInput);


    if (chosenPlanet === "Mercury") {
      $('#result').text("You are " + userDay.ageInMercuryYears() + " years old in " + chosenPlanet + " years!");
    } else if (chosenPlanet === "Venus") {
      $('#result').text("You are " + userDay.ageInVenusYears() + " years old in " + chosenPlanet + " years!");
    } else if (chosenPlanet === "Mars") {
      $('#result').text("You are " + userDay.ageInMarsYears() + " years old in " + chosenPlanet + " years!");
    } else if (chosenPlanet === "Jupiter") {
      $('#result').text("You are " + userDay.ageInJupiterYears() + " years old in " + chosenPlanet + " years!");
    } else {
      $('#result').text("You are " + userDay.ageInEarthYears() + " years old in " + chosenPlanet + " years!");
    }
  });
});
