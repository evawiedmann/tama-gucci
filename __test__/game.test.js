import { Game } from './../src/js/game.js';
import { Pet } from './../src/js/pet.js';

describe('Pet constructor', () => {

  let pet;

  beforeEach(() => {
    pet = new Pet('dog');
  });

  test('should take in argument for dog type and store as type', () => {
    expect(pet.petType).toEqual("dog");
  });

  test('should construct a Pet object with age and level and unscooped poops set to zero', () => {
    expect(pet.age).toEqual(0);
    expect(pet.level).toEqual(0);
    expect(pet.poop).toEqual(0);
  });

  test('should start with form of baby, the state of not sick, and the state of alive', () => {
    expect(pet.form).toEqual('baby');
    expect(pet.sick).toEqual(false);
    expect(pet.alive).toEqual(true);
  });

  test('should begin with health equal to one hundred', () => {
    expect(pet.health).toEqual(100);
  });

  test('should begin with hunger, hygiene, happiness, and wellness at fifty', () => {
    expect(pet.hunger).toEqual(50);
    expect(pet.hygiene).toEqual(50);
    expect(pet.happiness).toEqual(50);
    expect(pet.wellness).toEqual(50);
  });

  test('should begin with an empty array of skills', () => {
    expect(pet.skills).toEqual([]);
  });
});

describe('Pet methods', () => {

  let pet;

  beforeEach(() => {
    pet = new Pet('flamingo');
  });

  test('should decriment the poop count by 1', () => {
    pet.poop = 5;
    pet.scoop();
    expect(pet.poop).toEqual(4);
  });

  test('should add 10 to hunger when fed', () => {
    pet.hunger = 50;
    pet.feed();
    expect(pet.hunger).toEqual(60);
  });

  // test('should add one to poop count 120 seconds after feed', () => {
  //   pet.feed();
  //   // expect(pet.poop).toEqual(0);
  //   setTimeout(() => expect(pet.poop).toEqual(1), 13000);
  // });

  test('exercise should effect health, happiness, wellness, hunger, and hygiene', () => {
    pet.health = 75;
    pet.exercise();
    expect(pet.health).toEqual(76);
    expect(pet.happiness).toEqual(55);
    expect(pet.wellness).toEqual(60);
    expect(pet.hunger).toEqual(45);
    expect(pet.hygiene).toEqual(45);
  });

  test('vet visit should effect happiness, health, and wellness', () => {
    pet.health = 75;
    pet.vet();
    expect(pet.happiness).toEqual(40);
    expect(pet.health).toEqual(80);
    expect(pet.wellness).toEqual(65);
  });

  test('snuggle should effect happiness', () => {
    pet.snuggle();
    expect(pet.happiness).toEqual(51);
  });

});

describe('Game constructor', () => {
  let pet;
  let game;

  beforeEach(() => {
    pet = new Pet('flamingo');
    game = new Game();
  });

  test('should create a new game with an array of possible pet types', () => {
    expect(game.petTypes[0]).toEqual('dog');
  });

});

describe('Game methods', () => {

  let game;

  beforeEach(() => {
    game = new Game();
    game.choosePet(2);
  });

  test('should change form when age plus level reaches 33 or 66', () => {
    game.pet.age = 34;
    game.formChangeCheck();
    expect(game.pet.form).toEqual("mid");
  });

  test('should set alive to false if health is less than one', () => {
    game.pet.health = 0;
    game.isAlive();
    expect(game.pet.alive).toEqual(false);
  });

  test('should set sick to true if poop is greater than five', () => {
    game.pet.poop = 8;
    game.isSick();
    expect(game.pet.sick).toEqual(true);
  });

  test('should set sick to true if wellness is less than 10', () => {
    game.pet.wellness = 7;
    game.isSick();
    expect(game.pet.sick).toEqual(true);
  });

  test('should adjust hunger, hygiene, and age when everyMin is called', () => {
    game.minuteTasks();
    expect(game.pet.hunger).toEqual(48);
    expect(game.pet.age).toEqual(1);
    expect(game.pet.hygiene).toEqual(49);
  });


});
