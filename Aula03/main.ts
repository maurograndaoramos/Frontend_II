class Vehicle {
    constructor(public brand: string, public model: string, public year: string) { }
}


class Car extends Vehicle {
    constructor(brand: string, model: string, year: string, public doors: number) {
        super(brand, model, year);
    }
}

const myCar = new Car('Honda', 'Civic', '2007', 4);
console.log(myCar);
