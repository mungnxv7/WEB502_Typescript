type CategoryProduct = {
    _id : string,
    nameCategory : string,
}

type Products = {
    _id:string
    nameProduct: string,
    price: number,
    id_category: CategoryProduct,
    image: string
}