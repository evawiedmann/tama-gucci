import { Pet } from './pet.js';

export class Game {
  constructor() {
    this.petTypes = ['dog','cat','flamingo'];
  }

  choosePet(index) {
    this.pet = new Pet(this.petTypes[index]);
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
    if(this.pet.poop > 7 ||
      this.pet.wellness < 10 ||
      this.pet.hunger < 10 ||
      this.pet.happiness < 5
    ) this.pet.sick = true;
  }

  minuteTasks() {
    if (this.pet.alive) {
      this.pet.modify('hunger', -2);
      this.pet.modify('hygiene', -1);
      this.pet.modify('age', 1);
      this.isSick();
      if (this.pet.sick) {
        this.pet.modify('health', 5);
        this.pet.modify('hygiene', -2);
        this.pet.modify('happiness', -10);
      }
      this.isAlive();
    }
  }

  startGame() {
    setInterval(this.minuteTasks(),60000);
  }


}
