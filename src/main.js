// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { Game } from './js/game.js';

// Images from https://space-facts.com/transparent-planet-pictures/
// import earth from './img/earth.png';

// AUDIO
// import sunMp3 from './mp3/sun.mp3';
// const sunSound = new Audio();
// sunSound.src = sunMp3;


// TEMPLATING
// import { buildPlanetInfo, buildSunInfo } from './js/templates.js';


// USER INTERFACE
$(document).ready(function(){



  let game = new Game();

  $('#pet').click(() => {
    game.choosePet(2);
    console.log(game.pet.petType);
  });

  $('#go').click(() => {
    game.pet.exercise();
    game.pet.vet();
    game.pet.feed();
    console.log(game.pet);
  });
  // $('.sun').append(`<img id="Sun" class"sun" src="${sun}" alt="sun">`);

});
