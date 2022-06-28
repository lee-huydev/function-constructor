function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    let speed = this.speed
    const speedUp = () => {
        const newSpeed = speed += 10
        this.speed = newSpeed
        console.log(`${newSpeed}KM/H`)
    }
    return speedUp
}

Car.prototype.brake = function () {
    let speed = this.speed;
    const speedDown = () => {
        const newSpeed = speed -= 5;
        this.speed = newSpeed;
        console.log(`${newSpeed}KM/H`)
    }
    return speedDown
}
// Car 1
const carBmw = new Car("BMW", 120)
console.log(carBmw)
const speedUpCar1 = carBmw.accelerate() // Function speedUp: accelerate after every times call function
speedUpCar1()
speedUpCar1()
speedUpCar1()
const speedDownCar1 = carBmw.brake() // Function speedDown: brake after every times call function
speedDownCar1()
speedDownCar1()
speedDownCar1()
speedDownCar1()
// Car 2
console.log("===============================================================")
const carMer = new Car("Mercedes", 95)
console.log(carMer)
const speedUpCar2 = carMer.accelerate()
speedUpCar2()
speedUpCar2()
const speedDownCar2 = carMer.brake()
speedDownCar2()
speedDownCar2()
speedDownCar2()

