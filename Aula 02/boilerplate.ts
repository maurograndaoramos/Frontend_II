type Address = {
    street: string,
    number: number,
    city: string,
    country: string,
    zip: number
};

type User = {
    name: string,
    transactions: Transaction[],
    points: number,
    email: string,
    password: string,
    address: Address
};

type Transaction = {
    uID: number,
    products: Product[],
    totalPrice: number
    method: string
};

type Product = {
    uID: number,
    name: string,
    listPrice: number,
    actualPrice: number,
    quantity: number
};

type Cart = {
    products: Product[],
    totalPrice: number
};

const newUser = {products
    name : "",
    transactions : [],
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

const newTransaction = {
    uID: 1,
    products: [],
    totalPrice: 0,
    method: ""
};

const newProduct = {
    uID: 1,
    name: "",
    listPrice: 0,
    actualPrice: 0,
    quantity: 0
};




