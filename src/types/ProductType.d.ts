type CategoryProduct = {
    _id : string,
    nameCategory : string,
}


type ImageProduct = {
    fliename : string,
    path : string,
}

type Products = {
    _id:string
    nameProduct: string,
    price: number,
    id_category: CategoryProduct,
    image: ImageProduct
}