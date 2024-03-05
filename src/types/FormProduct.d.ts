type FormPet={
    name :string
    price:string
    promotional_price:string
    id_category:string
    images:object
    description:string
    info_details: {
        age: number
        father: string
        mother: string
        health: string
        sex:string
        vaccination:string
    }
}
type FormAacessory= Omit<FormPet, "info_details">


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