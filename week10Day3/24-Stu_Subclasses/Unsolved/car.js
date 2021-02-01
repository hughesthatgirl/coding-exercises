// TODO: Import the parent class
const Vehicle = require('./vehicle');

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle{
  constructor(id, color, passengers){
    super(id, 4, beep);
    this.color = color;
    this.passengers = passengers;
  }
}

const carPassengers = [
  'Aristotle',
  'Mary Wolstonecraft',
  'Mary Shelley',
  'Socrates',
  'Lao-Tzu'
];

// const car = new Car(15, 'blue', carPassengers);

// console.log('---CAR---');
// car.printInfo();
// car.useHorn();
// car.checkPassengers();
