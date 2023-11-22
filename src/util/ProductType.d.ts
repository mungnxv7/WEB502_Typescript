type CategoryProduct = {
    _id : string,
    name : string,
}

export type Products = {
    _id:string
    nameProduct: string,
    price: number,
    category: CategoryProduct,
    image: string
}