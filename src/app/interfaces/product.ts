export interface Product {
    id: number,
    title: string,
    price: number,
    description: String,
    images: Array<string>,
    creationAt: string,
    updatedAt: string,
    category: {
        id: number,
        name: string,
        image: string,
        creationAt: string,
        updatedAt: string
    }
}