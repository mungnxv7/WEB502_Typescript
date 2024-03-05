import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API, loadingPage } from "../../util/main";
import Info_pet from "../../components/Info_pet";
import { configHeadres } from "../../config/config";

export const FormProduct = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategories[]>([]);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    axios.get(`${API}/categories`).then((response) => {
      setCategories(response.data);
    });
    axios.get(`${API}/sub_category`).then((response) => {
      setSubCategories(response.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormPet | FormAacessory>();
  const onSubmit: SubmitHandler<FormPet | FormAacessory> = async (data) => {
    const reponse = await axios.post(`${API}/products`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...configHeadres,
      },
    });
    loadingPage(false);
    const { message } = reponse.data;
    toast.success(message);
  };

  const handChangeCate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idCategory = e.target.selectedOptions[0].getAttribute("data-id");
    if (idCategory != "6593e95510cf78c1972f2f95") {
      setShowInfo(true);
    } else {
      setShowInfo(false);
      reset({ info_details: undefined });
    }
  };
  console.log(showInfo);

  // const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
  //   try {
  //     e.preventDefault();
  //     const error = validateProduct(form);
  //     setErrorProduct(error);
  //     if (Object.keys(error).length === 0) {
  //       loadingPage(true);
  //       const data = { ...form, price: parseInt(form.price) };
  //
  //       });

  //       toast.success(message);
  //       setTimeout(() => {
  //         location.href = "/admin";
  //       }, 1000);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white rounded-md p-10">
      <form
        id="form_submit"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap gap-5">
          <div>
            <label className="block font-medium text-black" htmlFor="">
              Name
            </label>
            <input
              {...register("name", {
                required: "Vui lòng điền vào trường này",
              })}
              className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
              type="text"
            />
            {errors.name && (
              <p className="text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-black" htmlFor="">
              Category
            </label>
            <select
              {...register("id_category", {
                required: "Vui lòng điền vào trường này",
              })}
              className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
              name="id_category"
              onChange={handChangeCate}
            >
              <option value="" className="hidden">
                --Chọn danh mục--
              </option>
              {categories?.map((category) => {
                return (
                  <optgroup label={category.nameCategory}>
                    {subCategories
                      .filter(
                        (subCategory) =>
                          subCategory.id_category === category._id
                      )
                      .map((subCategory) => (
                        <option
                          data-id={category._id}
                          key={subCategory._id}
                          value={subCategory._id}
                        >
                          {subCategory.name}
                        </option>
                      ))}
                  </optgroup>
                );
              })}
            </select>
            {errors.id_category && (
              <p className="text-xs text-red-400">
                {errors.id_category.message}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium text-black" htmlFor="">
              Price
            </label>
            <input
              {...register("price", {
                required: "Vui lòng điền vào trường này",
              })}
              name="price"
              className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
              type="number"
            />
            {errors.price && (
              <p className="text-xs text-red-400">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-black" htmlFor="">
              Promotional Price
            </label>
            <input
              {...register("promotional_price")}
              className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
              type="text"
            />
          </div>
          {errors.promotional_price && (
            <p className="text-xs text-red-400">
              {errors.promotional_price.message}
            </p>
          )}
          <div>
            <label className="block font-medium text-black mb-3" htmlFor="">
              Image
            </label>
            <input
              {...register("images", {
                required: "Vui lòng điền vào trường này",
              })}
              name="images"
              type="file"
              className="h-10 outline-gray-300 w-[300px] mt-2"
            />
            {errors.images && (
              <p className="text-xs text-red-400">{errors.images.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-black" htmlFor="">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Vui lòng điền vào trường này",
              })}
              name="description"
              className="border rounded-md px-2 h-10 outline-gray-300 w-[300px] mt-2"
            ></textarea>
            {errors.description && (
              <p className="text-xs text-red-400">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        {showInfo && <Info_pet errors={errors} register={register} />}
        <div>
          <button className="px-4 py-2 bg-blue-500 rounded-md mt-12 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
