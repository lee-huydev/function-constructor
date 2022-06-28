function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    console.log(`Car ${this.make} goes with speed ${this.speed += 10}KM/H`)
}

Car.prototype.brake = function () {
   console.log(`Car ${this.make} goes with speed ${this.speed -= 5}KM/H`)
}
// Car 1
const car1 = new Car("BMW", 120)
console.log(car1)
car1.accelerate()
car1.accelerate()
car1.accelerate()
car1.brake()
car1.brake()
car1.brake()
car1.brake()
console.log("===============================")
// Car 2
const car2 = new Car("Mercedes", 90)
console.log(car2)
car2.accelerate()
car2.accelerate()
car2.accelerate()
car2.brake()
car2.brake()
car2.brake()
car2.brake()