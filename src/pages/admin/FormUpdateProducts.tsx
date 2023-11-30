import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../util/main";
import validateProduct from "../../validations/productsValidate";
import { configHeadres } from "../../config/config";

export const FormUpdateProduct = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState<Categories[]>([]);
  const [form, setForm] = useState<FormProductUpdate>({
    nameProduct: "",
    price: "",
    image: {},
    id_category: "",
  });
  const [errorProduct, setErrorProduct] = useState<ValidateProduct>(
    {} as ValidateProduct
  );
  useEffect(() => {
    axios.get(`${API}/products/${id}`).then((response) => {
      const { nameProduct, price, image, id_category } = response.data;
      setForm({
        nameProduct: nameProduct,
        price: price,
        image: image,
        id_category: id_category._id,
      });
    });
  }, [id]);
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
  console.log(form);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files && e.target.files[0];
    setForm({
      ...form,
      [name]: file,
    });
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const error = validateProduct(form);
      setErrorProduct(error);

      if (Object.keys(error).length === 0) {
        const data = { ...form, price: parseInt(form.price) };
        console.log(data);

        const reponse = await axios.put(`${API}/products/${id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            ...configHeadres,
          },
        });
        const { message } = reponse.data;
        alert(message);
        location.href = "/admin";
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
            value={form.nameProduct}
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
            value={form.price}
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
          <img src={form.image?.path} alt="" />
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
