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

  test('should change form when age plus level reaches 33 or 66', () => {
    pet.age = 34;
    pet.formChangeCheck();
    expect(pet.form).toEqual("mid");
  });

  test('should set alive to false if health is less than one', () => {
    pet.health = 0;
    pet.isAlive();
    expect(pet.alive).toEqual(false);
  });

  test('should set sick to true if poop is greater than five', () => {
    pet.poop = 8;
    pet.isSick();
    expect(pet.sick).toEqual(true);
  });

  test('should set sick to true if wellness is less than 10', () => {
    pet.wellness = 7;
    pet.isSick();
    expect(pet.sick).toEqual(true);
  });

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
