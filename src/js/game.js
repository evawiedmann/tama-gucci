import { Pet } from './pet.js';

export class Game {
  constructor() {
    this.petTypes = ['dog','cat'];
  }

  choosePet(petType) {
    this.pet = new Pet(petType);
  }

  formChangeCheck() {
    if (this.pet.age + this.pet.level >= 66) {
      this.pet.form = "old";
    } else if (this.pet.age + this.pet.level >= 33) {
      this.pet.form = "mid";
    }
  }

  isAlive() {
    if (this.pet.health < 1) {
      this.pet.alive = false;
      this.pet.hunger = 0;
      this.pet.hygiene = 0;
      this.pet.happiness = 0;
      this.pet.wellness = 0;
    }
  }

  isSick() {
    if(this.pet.poop > 7 ||
      this.pet.wellness < 10 ||
      this.pet.hunger < 10 ||
      this.pet.happiness < 5
    ) {
      this.pet.sick = true;
      this.pet.modify('wellness' -15);
    }
  }

  minuteTasks() {
    if (this.pet.alive) {
      this.pet.modify('hunger', -2);
      this.pet.modify('hygiene', -1);
      this.pet.modify('age', 1);
      this.isSick();
      if (this.pet.sick) {
        this.pet.modify('health', -10);
        this.pet.modify('hygiene', -5);
        this.pet.modify('happiness', -15);
        this.pet.modify('wellness', -5);
      }
      this.isAlive();
    }
  }

  startGame() {
    setInterval(() => this.minuteTasks(),6000);
  }


}
