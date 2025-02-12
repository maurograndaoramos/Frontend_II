export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

export class SingleProduct<Product> {
    private product: Product

    constructor(product: Product) {
        this.product = product
    }

    public getProduct(): Product {
        return this.product
    }
}