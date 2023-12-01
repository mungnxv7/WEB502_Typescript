import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API, loadingPage } from "../../util/main";
import validateProduct from "../../validations/productsValidate";
import { configHeadres } from "../../config/config";

export const FormProduct = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [form, setForm] = useState<FormProduct>({} as FormProduct);
  const [errorProduct, setErrorProduct] = useState<ValidateProduct>(
    {} as ValidateProduct
  );
  useEffect(() => {
    axios.get(`${API}/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files && e.target.files[0];
    setForm({
      ...form,
      [name]: file,
    });
  };

  console.log(form);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const error = validateProduct(form);
      setErrorProduct(error);
      if (Object.keys(error).length === 0) {
        loadingPage(true);
        const data = { ...form, price: parseInt(form.price) };
        const reponse = await axios.post(`${API}/products`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            ...configHeadres,
          },
        });
        loadingPage(false);
        const { message } = reponse.data;
        toast.success(message);
        setTimeout(() => {
          location.href = "/admin";
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white rounded-md">
      <form
        id="form_submit"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block" htmlFor="">
            Name Product
          </label>
          <input
            onChange={handleChange}
            name="nameProduct"
            className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
            type="text"
          />
          <p className="text-xs text-red-400">{errorProduct.nameProduct}</p>
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="">
            Category
          </label>
          <select
            onChange={handleChange}
            className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
            name="id_category"
            value={form.id_category}
          >
            <option value="" className="hidden">
              --Chọn danh mục--
            </option>
            {categories?.map((category) => {
              return (
                <option key={category._id} value={category._id}>
                  {category.nameCategory}
                </option>
              );
            })}
          </select>
          <p className="text-xs text-red-400">{errorProduct.id_category}</p>
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="">
            Price
          </label>
          <input
            onChange={handleChange}
            name="price"
            className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
            type="number"
          />
          <p className="text-xs text-red-400">{errorProduct.price}</p>
        </div>
        <div className="mt-5">
          <label className="block mb-3" htmlFor="">
            Image
          </label>
          <input
            name="image"
            type="file"
            onChange={handleChangeFile}
            className="h-10 outline-gray-300 w-[300px] mt-2"
          />
          <p className="text-xs text-red-400">{errorProduct.image}</p>
        </div>
        <div>
          <button className="px-4 py-2 bg-blue-500 rounded-md mt-12 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
