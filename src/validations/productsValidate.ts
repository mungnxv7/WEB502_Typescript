
const validateProduct = (formData:FormProduct)=>{
    const errorProduct:ValidateProduct={} as ValidateProduct

    if(formData.nameProduct?.length == 0 ||!formData.nameProduct ){
        errorProduct.nameProduct = 'Tên sản phẩm không được để trống'
    }

    if(formData.price?.length == 0 ||!formData.price ){
        errorProduct.price = 'Giá tiền không được để trống'
    }
    const parsenPrice = parseInt(formData?.price)
    if(parsenPrice == 0 ){
        errorProduct.price = 'Giá tiền phải lớn hơn 0'
    }
    
    if(formData.image?.length == 0 ||!formData.image ){
        errorProduct.image = 'Ảnh không được để trống'
    }
    if(formData.id_category?.length == 0 ||!formData.id_category ){
        errorProduct.id_category = 'Vui long chọn danh mục'
    }
    return errorProduct
}
export default validateProduct
