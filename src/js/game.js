import { Pet } from './pet.js';

export class Game {
  constructor() {
    this.petTypes = ['dog','cat','flamingo'];
  }

  choosePet(index) {
    this.pet = new Pet(this.petTypes[index]);
    this.everyMin();
  }

  formChangeCheck() {
    if (this.pet.age + this.pet.level >= 66) {
      this.pet.form = "old";
    } else if (this.pet.age + this.pet.level >= 33) {
      this.pet.form = "mid";
    }
  }

  isAlive() {
    if (this.pet.health < 1) this.pet.alive = false;
  }

  isSick() {
    if(this.pet.poop > 7 || this.pet.wellness < 10) this.pet.sick = true;
  }

  everyMin() {
    while (this.pet.alive) {
      setInterval(() => {
        console.log('min!');
        this.pet.modify('hunger', -2);
        this.pet.modify('hygiene', -1);
        this.pet.modify('age', 1);
      },60000);
    }
  }


}
