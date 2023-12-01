import { useEffect, useState } from "react";

import Banner from "../components/Banner";
// import ListProduct from "../components/ListProducts"
import ProductItem from "../components/ProductItem";
import { API } from "../util/main";
import { loadingPage } from "../util/main";
const HomePage = () => {
  const [products, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    loadingPage(true);
    fetch(`${API}/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        loadingPage(false);
      });
  }, []);
  return (
    <>
      <Banner />
      <div className="mt-20 mx-auto text-center">
        <h1 className="font-bold text-4xl">Product</h1>
        <div className="h-1 w-16 mx-auto my-5 bg-[#ECAF82]"></div>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-5">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              _id={product._id}
              nameProduct={product.nameProduct}
              price={product.price}
              id_category={product.id_category}
              image={product.image}
            />
          );
        })}
      </div>
    </>
  );
};
export default HomePage;
