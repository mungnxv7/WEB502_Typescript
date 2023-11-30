
type FormProduct={
    nameProduct :string
    price:string
    id_category:string
    image:object
}

type FormProductUpdate={
    nameProduct :string
    price:string
    id_category:string
    image:{
        fieldname?: string,
        originalname?: string,
        encoding?: string,
        mimetype?: string,
        path?: string,
        size?: number,
        filename?: string
    }
}