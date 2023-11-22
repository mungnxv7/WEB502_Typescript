import { Products } from "../util/ProductType";
import { formartCurrency } from "../util/main";

const ProductItem = ({
  _id,
  nameProduct,
  price,
  category,
  image,
}: Products) => {
  return (
    <a href={`/product/${_id}`}>
      <div className="relative p-1 product_item">
        <span className="absolute top-2 left-2 bg-cyan-500 px-1 uppercase text-white text-xs z-10">
          new
        </span>
        <div className="overflow-hidden">
          <img className="img" src={image} />
        </div>
        <div className="text-center">
          <h2 className="name-product font-medium mb-1 h-12 overflow-hidden">
            {nameProduct}
          </h2>
          <span className="text-sm text-gray-400">{category.name}</span>
          <div className="flex items-center text-sm justify-center my-2">
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
            <i className="fa-regular fa-star" />
          </div>
          <span className="text-lg font-bold text-[#ECAF82]">
            {formartCurrency(price)}
          </span>
        </div>
      </div>
    </a>
  );
};
export default ProductItem;
