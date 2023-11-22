import axios from "axios";
import React, { useState } from "react";
import { API } from "../../util/config";
import { useParams } from "react-router-dom";

export const FormProduct = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    nameProduct: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData();
    formData.append("nameProduct", form.nameProduct);
    formData.append("price", form.price);
    formData.append("category", form.category);
    formData.append("image", form.image);
    try {
      e.preventDefault();
      if (id) {
        axios
          .put(API, formData, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log(response.data);
          });
      } else {
        const reponse = await axios.post(API, formData, {
          headers: { "Content-Type": "application/json" },
        });
        const { messege } = reponse.data;
        alert(messege);
        location.href = "/admin";
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
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
        </div>
        <div className="mt-5">
          <label className="block" htmlFor="">
            Category
          </label>
          <input
            onChange={handleChange}
            name="category"
            className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
            type="text"
          />
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
        </div>
        <div className="mt-5">
          <label className="block mb-3" htmlFor="">
            Image
          </label>
          <input
            name="image"
            type="text"
            onChange={handleChange}
            className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
          />
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
