// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { Game } from './js/game.js';

import poopImg from './img/poop.png';
import blankImg from './img/blank.png';

// AUDIO
// import sunMp3 from './mp3/sun.mp3';
// const sunSound = new Audio();
// sunSound.src = sunMp3;


// TEMPLATING
const makeAnimalRadio = (game) => {
  let result = '';
  game.petTypes.forEach(pet => {
    result += `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="${pet}" value="${pet}">
        <label class="form-check-label" for="exampleRadios1">
          ${pet}
        </label>
      </div>
    `
  });
  return result;
}

const makePooImages = (poop) => {
  let result = '';
  for (var i = 0; i < 10; i++) {
    if (i < poop) {
      result += `
        <img src="${poopImg}" alt="poop">
      `
    } else {
      result += `
        <img src="${blankImg}" alt="">
      `
    }
  }
  return result;
}

// USER INTERFACE
$(document).ready(function(){


  const runGame = () => {
    game.startGame();
    setInterval(() => {
      $('#age').css("width",`${game.pet.age}%`);
      $('#hunger').css("width",`${game.pet.hunger}%`);
      $('#wellness').css("width",`${game.pet.wellness}%`);
      $('#hygiene').css("width",`${game.pet.hygiene}%`);
      $('#happiness').css("width",`${game.pet.happiness}%`);
      $('#health').css("width",`${game.pet.health}%`);
      const pooImages = makePooImages(game.pet.poop);
      $('.poopGrid').text("");
      $('.poopGrid').append(pooImages);

    },1000);
  };

  let game = new Game();
  const petRadios = makeAnimalRadio(game);
  $('#animal-choice').append(petRadios);

  $('#choice-form').submit(event => {
    event.preventDefault();
    const chosenPet = $('input:checked').val();
    game.choosePet(chosenPet);
    runGame();
  });

  $('.buttons').on('click', 'button', (event) => {
    const buttonId = event.target.id;
    game.pet[buttonId]();
  });


  // $('.sun').append(`<img id="Sun" class"sun" src="${sun}" alt="sun">`);

});
