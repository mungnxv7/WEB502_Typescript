import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { formartCurrency, loadingPage } from "../util/main";
import { API } from "../util/config";
import ProductItem from "../components/ProductItem";
export const ProductDetail = () => {
  const [product, setProduct] = useState<Products | null>(null);
  const [sameProduct, SetSameProduct] = useState<Products[]>([]);
  const { id } = useParams();
  useEffect(() => {
    loadingPage(true);
    fetch(`${API}/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      fetch(`${API}/products/same_product/${product?.id_category._id}`)
        .then((response) => response.json())
        .then((data) => {
          SetSameProduct(data);
        });
      loadingPage(false);
    }
  }, [product]);
  return (
    <>
      <section className="py-10 font-poppins">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-96">
                  <img
                    className="object-contain w-full lg:h-full"
                    src={product?.image}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <span className="px-2.5 py-0.5 text-xs bg-[#ECAF82] rounded-xl">
                    {product?.id_category.nameCategory}
                  </span>
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide md:text-2xl">
                    {product?.nameProduct}
                  </h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <ul className="flex mb-4 mr-2 lg:mb-0">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <a className="mb-4 text-xs underline  lg:mb-0" href="#">
                      View the acer store
                    </a>
                  </div>
                  <p className="inline-block text-2xl font-semibold ">
                    <span>{formartCurrency(product?.price)}</span>
                  </p>
                </div>
                <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                  <span className="text-base">In Stock</span>
                  <p className="mt-2 text-sm text-[#ECAF82]">
                    Ships from continent Teyvat.
                    <span className="ml-1 text-black">
                      Most customers receive within 3-31 days.
                    </span>
                  </p>
                </div>
                <div className="mb-6 " />
                <div className="flex flex-wrap items-center mb-6">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-28">
                      <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button className="w-20 h-full text-gray-600 bg-gray-300 border-r rounded-l outline-none cursor-pointer dark:text-gray-400 hover:text-black hover:bg-gray-400">
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                          type="text"
                          value="1"
                          className="flex items-center w-full font-semibold text-center text-black placeholder-gray-700 bg-gray-300 outline-none dark:placeholder-gray-400 focus:outline-none text-md"
                        />
                        <button className="w-20 h-full text-gray-600 bg-gray-300 border-l rounded-r outline-none cursor-pointer dark:text-gray-400 hover:text-gray-700 hover:bg-gray-400">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="w-full px-4 py-3 text-center font-medium text-white bg-[#ECAF82] border  hover:bg-[#f0a36c] lg:w-1/2 rounded-xl"
                  >
                    Add to cart
                  </a>
                </div>
                <div className="flex gap-4 mb-6">
                  <a
                    href="#"
                    className="w-full px-4 py-3 text-center text-white bg-[#ECAF82] border  hover:bg-[#f0a36c] rounded-xl"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 ">
        <div className="px-4 mx-auto">
          <h2>Sản phẩm liên quan</h2>
          <div className="grid grid-cols-6">
            {sameProduct.map((item) => {
              if (item._id !== product?._id) {
                return (
                  <ProductItem
                    key={item._id}
                    _id={item._id}
                    nameProduct={item.nameProduct}
                    price={item.price}
                    id_category={item.id_category}
                    image={item.image}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
