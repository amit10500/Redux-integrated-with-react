class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return `I have a ${this.brand} Car`
    }
}

let myCar = new Car("Maruti");
const message = myCar.present();

console.log(message);

export default Car;

