export class Pet {
  constructor(type) {
    this.petType = type;
    this.age = 0;
    this.level = 0;
    this.form = 'baby';
    this.health = 100;
    this.hunger = 50;
    this.hygiene = 50;
    this.happiness = 50;
    this.skills = [];
    this.poop = 0;
    this.alive = true;
    this.wellness = 50;
    this.sick = false;
  }

  scoop() {
    this.poop--;
  }

  feed() {
    this.hunger += 10;
  }

  formChangeCheck() {
    if (this.age + this.level >= 66) {
      this.form = "old";
    } else if (this.age + this.level >= 33) {
      this.form = "mid";
    }
  }

  isAlive() {
    if (this.health < 1) this.alive = false;
  }

  isSick() {
    if(this.poop > 7 || this.wellness < 10) this.sick = true;
  }

  exercise() {
    this.health++;
    this.happiness += 5;
    this.wellness += 10;
    this.hunger -= 5;
    this.hygiene -= 5;
  }

  vet() {
    this.health += 5;
    this.happiness -= 10;
    this.wellness += 15;
  }

  snuggle() {
    this.happiness++;
  }

}
