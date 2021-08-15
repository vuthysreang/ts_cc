class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    };

    describe() {
        console.log(`A ${this.year} ${this.model} ${this.color} car.`)
    }
}

const myToyota = new Car("Toyota", "green", 2021);
console.log(myToyota);

myToyota.describe();