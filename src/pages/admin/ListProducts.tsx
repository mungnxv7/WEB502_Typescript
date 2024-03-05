import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { formartCurrency, loadingPage } from "../../util/main";
import { API } from "../../util/main";
import { configHeadres } from "../../config/config";
import axios from "axios";
const ListProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const fechProduct = () => {
    loadingPage(true);
    fetch(`${API}/products`)
      .then((response) => response.json())
      .then((data) => {
        loadingPage(false);
        setProducts(data);
      });
  };
  useEffect(() => {
    fechProduct();
  }, []);
  const deleteProduct = async (id: string) => {
    try {
      if (id) {
        const cf = confirm("Bạn chắc chắn muốn xóa sản phẩm ?");
        if (cf) {
          axios
            .delete(`${API}/products/${id}`, { headers: configHeadres })
            .then((response) => {
              toast.success(response.data.message);
              fechProduct();
            })
            .catch((error) => {
              toast.error(error.response.data.message);
            });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" bg-white rounded-lg">
        <table className=" w-full mb-0 align-top border-gray-200 text-slate-500 ">
          <thead className="align-bottom">
            <tr>
              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none  border-b-solid tracking-none text-slate-400 opacity-70">
                Image
              </th>
              <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none  border-b-solid text-slate-400 opacity-70">
                Name Product
              </th>
              <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none  border-b-solid tracking-none text-slate-400 opacity-70">
                Category
              </th>
              <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none  border-b-solid tracking-none text-slate-400 opacity-70">
                Price
              </th>
              <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none text-slate-400 opacity-70" />
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <div className="px-2 py-1">
                      <img width={80} src={product.image.path} alt="" />
                    </div>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b shadow-transparent">
                    <h6 className="mb-0 text-sm leading-normal">
                      {product.nameProduct}
                    </h6>
                  </td>
                  <td className="p-2 text-sm leading-normal text-center  bg-transparent border-b shadow-transparent">
                    <span>{product.id_category.nameCategory}</span>
                  </td>
                  <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <span className="text-xs font-semibold leading-tight text-slate-400">
                      {formartCurrency(product.price)}
                    </span>
                  </td>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <a
                      href={`/admin/${product._id}`}
                      className="text-xs font-semibold leading-tight text-slate-400 hover:text-[#ECAF82]"
                    >
                      Edit
                    </a>
                    <br />
                    <button
                      onClick={() => deleteProduct(product._id as string)}
                      className="mt-3 text-xs font-semibold leading-tight text-slate-400 hover:text-[#ECAF82]"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProducts;
