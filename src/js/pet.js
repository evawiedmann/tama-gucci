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
    this.modify('poop', -1);
  }

  feed() {
    this.modify('hunger', 10);
    this.modify('happiness', 5);
    setTimeout(() => {
      this.modify('poop',1);
      console.log('POOP!');
    },120000);
  }

  exercise() {
    this.modify('health', 1);
    this.modify('happiness', 5);
    this.modify('wellness', 10);
    this.modify('hunger', -5);
    this.modify('hygiene', -5);
  }

  vet() {
    this.modify('health', 5);
    this.modify('happiness', -10);
    this.modify('wellness', 15);
  }

  snuggle() {
    this.modify('happiness', 1);
  }

  modify(what, amount) {
    if ((this[what] + amount) > 100) {
      this[what] = 100;
    } else if ((this[what] + amount) < 1) {
      this[what] = 0;
    } else {
      this[what] += amount;
    }
  }

}
