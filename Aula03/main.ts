// // Exercicio 1

// class Vehicle {
//     brand: T;
//     model: T;
//     year: T;

//     constructor(
//         brand: T,
//         model: T,
//         year: T
        
//     ) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//      }

//      descriptionOfVehicle(): T {
//             return `This is a ${this.year} ${this.brand} ${this.model} car.`;
//         }
// }


// class Car extends Vehicle {
//     constructor(brand: T, model: T, year: T, public doors: number) {
//         super(brand, model, year);
//     }

//     descriptionOfVehicle(): T {
//         return super.descriptionOfVehicle() + ` It has ${this.doors} doors!`;
//     }
// }

// const myCar = new Car('Honda', 'Civic', '2007', 4);
// console.log(myCar);
// console.log(myCar.brand);
// console.log(myCar.model);
// console.log(myCar.year);
// console.log(myCar.doors);
// console.log("---------//---------//---------//---------//---------//---------");
// console.log(myCar.descriptionOfVehicle());

// // Exercicio 2

// type Player = {
//     name: T;
//     age: number;
//     game: T;
//   }
   
// const playerParcial: Partial<Player> = {
//     name: "1337z0r",
//     game: "Counter Strike 2 Electric Boogaloo",
// };

// console.log(playerParcial);

// const playerReadOnly: Readonly<Player> = {
//     name: "1337z0r",
//     age: 25,
//     game: "Counter Strike 2 Electric Boogaloo",
// };

// // playerReadOnly.name = "Carlos";
// console.log(playerReadOnly);

// const playerPick: Pick<Player, "name" | "game"> = {
//     name: "1337z0r",
//     game: "Counter Strike 2 Electric Boogaloo",
// };

// console.log(playerPick);


// const playerOmit: Omit<Player, "age"> = {
//     name: "1337z0r",
//     // age: 25,
//     game: "Counter Strike 2 Electric Boogaloo",
// };

// console.log(playerOmit);

// // Exercicio 3

class ListHandler <T> {
    list: T[] = [];

    addTask(task: T): void {
        this.list.push(task);
    }

    listAllTasks(): void {
        this.list.forEach((task) => {
            console.log(task);
        });
    }

    deleteTask(task: T): void {
        const taskIndex = this.list.indexOf(task);
        if (taskIndex !== -1) {
            this.list.splice(taskIndex, 1);
        }
    }
}

const listHandler = new ListHandler();
console.log("---------//---------//---------//---------//---------//---------");
console.log("Adding Tasks:");
listHandler.addTask('Task 1');
console.log("Added Task 1");
listHandler.addTask('Task 2');
console.log("Added Task 2");
listHandler.addTask('Task 3');
console.log("Added Task 3");
console.log("---------//---------//---------//---------//---------//---------");
console.log("List of Tasks:");
listHandler.listAllTasks();
console.log("---------//---------//---------//---------//---------//---------");
console.log("Deleting Tasks:");
listHandler.deleteTask('Task 2');
console.log("Deleted Task 2");
console.log("---------//---------//---------//---------//---------//---------");
console.log("List of Tasks:");
listHandler.listAllTasks();