import { useEffect, useState } from "react";
import { formartCurrency } from "../../util/main";
import { Products } from "../../util/ProductType";
import { API } from "../../util/config";

const ListProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const fechProduct = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    fechProduct();
  }, []);
  const deleteProduct = async (id: string) => {
    try {
      if (id) {
        const cf = confirm("Are you sure you want to delete");
        if (cf) {
          await fetch(`${API}/${id}`, {
            method: "DELETE",
          })
            .then((response) => response.text())
            .then((data) => {
              alert(data);
              fechProduct();
            });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className=" w-full mb-0 align-top border-gray-200 text-slate-500">
      <thead className="align-bottom">
        <tr>
          <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none  border-b-solid tracking-none text-slate-400 opacity-70">
            Image
          </th>
          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none  border-b-solid tracking-none text-slate-400 opacity-70">
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
                  <img width={80} src={product.image} alt="" />
                </div>
              </td>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <h6 className="mb-0 text-sm leading-normal">
                  {product.nameProduct}
                </h6>
              </td>
              <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span>{product.category?.name}</span>
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
  );
};

export default ListProducts;
