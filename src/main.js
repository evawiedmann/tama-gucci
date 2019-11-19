// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { Game } from './js/game.js';

import poopImg from './img/poop.png';
import blankImg from './img/blank.png';

import dogImg from './img/dog.gif';
import dogRunImg from './img/dogRun.gif';
import dogEatImg from './img/dogEat.gif';
import dogBathImg from './img/dogBath.gif';
import dogVetImg from './img/dogVet.gif';


import catImg from './img/cat.gif';
import catRunImg from './img/catRun.gif';
import catEatImg from './img/catEat.gif';
import catBathImg from './img/catBath.gif';
import catVetImg from './img/catVet.gif';

const imgObj =  {
  dog: {
    main: dogImg,
    exercise: dogRunImg,
    feed: dogEatImg,
    bathe: dogBathImg,
    vet: dogVetImg,
    snuggle: dogImg,
    scoop: dogImg
  },
  cat: {
    main: catImg,
    exercise: catRunImg,
    feed: catEatImg,
    bathe: catBathImg,
    vet: catVetImg,
    snuggle: catImg,
    scoop: catImg
  }
};

// AUDIO
// import sunMp3 from './mp3/sun.mp3';
// const sunSound = new Audio();
// sunSound.src = sunMp3;

// TEMPLATING
const makeAnimalRadio = (game) => {
  let result = '';
  game.petTypes.forEach(pet => {
    result += `
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="petRadio" id="${pet}" value="${pet}">
        <label class="form-check-label" for="exampleRadios1">
          ${pet}
        </label>
      </div>
    `;
  });
  return result;
};

const makePooImages = (poop) => {
  let result = '';
  for (var i = 0; i < 10; i++) {
    if (i < poop) {
      result += `
        <img src="${poopImg}" alt="poop">
      `;
    } else {
      result += `
        <img src="${blankImg}" alt="">
      `;
    }
  }
  return result;
};

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
      if (!game.pet.alive) {
        $('.buttons').fadeOut();
      }
    },1000);
  };

  let game = new Game();
  const petRadios = makeAnimalRadio(game);
  $('#animal-choice').prepend(petRadios);
  let images;

  // let animalGif;


  $('#animal-choice').submit(async (event) => {
    event.preventDefault();
    const chosenPet = $('input:checked').val();
    game.choosePet(chosenPet);
    images = imgObj[chosenPet];
    const imgHtml = `<img src="${images.main}" alt="${chosenPet}">`;
    console.log(imgHtml);
    $('.animal').append(imgHtml);
    runGame();
    $('.start-game').hide();
    $('.main').fadeIn();
  });

  $('.buttons').on('click', 'button', (event) => {
    const buttonId = event.target.id;
    game.pet[buttonId]();
    const imgHtml = `<img src="${images[buttonId]}" alt="${buttonId}">`;
    $('.animal').text('');
    $('.animal').append(imgHtml);
  });

});
