import { Pet } from './../src/js/pet.js';

describe('Pet', () => {

  let pet;

  beforeEach(() => {
    pet = new Pet('dog');
  });

  test('should take in arguments', () => {
    expect(pet.petType).toEqual("dog");
  });

  test('should construct a Pet object with age and level set to zero', () => {
    expect(pet.age).toEqual(0);
    expect(pet.level).toEqual(0); 
  });

});
