type Product = {
    uID: number;
    name: string;
    listPrice: number;
    actualPrice: number;
    quantity: number;
};

const Transactions = {
    uID: 1,
    products: [],
    totalPrice: 0
};

const Products = {
    uID: 1,
    name: "",
    listPrice: 0,
    actualPrice: 0,
    quantity: 0
};

interface User {
    name: string;
    transactions: typeof Transactions;
    points: number;
    email: string;
    password: string;
    address: {
        street: string;
        number: number;
        city: string;
        country: string;
        zip: number;
    };
}

const User : User = {
    name : "",
    transactions : Transactions,
    points : 0,
    email : "",
    password : "",
    address : {
        street : "",
        number : 0,
        city : "",
        country : "",
        zip : 0
    }
};


