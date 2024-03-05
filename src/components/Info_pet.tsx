import { UseFormRegister, FieldErrors } from "react-hook-form";
interface InfoPetProps {
  register: UseFormRegister<FormPet | FormAacessory>;
  errors: FieldErrors<FormPet>;
}
const Info_pet: React.FC<InfoPetProps> = ({ register, errors }) => {
  return (
    <div
      id="box-info"
      className="w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md"
    >
      <div className="p-3">
        <p className="text-xl text-black font-medium">Thông tin thú cưng</p>
      </div>
      <div className="flex justify-center items-center py-4">
        <div className="w-1/2 p-4">
          <table className="table-auto">
            <tbody>
              <tr className="h-10">
                <td>
                  <label className="font-medium" htmlFor="">
                    Age:
                  </label>
                </td>
                <td>
                  <input
                    {...register("info_details.age", {
                      required: "Vui lòng điền vào trường này",
                    })}
                    type="text"
                    className="info_input_hidden border-b border-black bg-transparent outline-none pl-1"
                  />
                  {errors.info_details?.age && (
                    <p className="text-xs text-red-400">
                      {errors.info_details?.age.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr className="h-10">
                <td>
                  <label className="font-medium" htmlFor="">
                    Father:
                  </label>
                </td>
                <td>
                  <input
                    {...register("info_details.father", {
                      required: "Vui lòng điền vào trường này",
                    })}
                    type="text"
                    className="info_input_hidden border-b border-black bg-transparent outline-none pl-1"
                  />
                  {errors.info_details?.father && (
                    <p className="text-xs text-red-400">
                      {errors.info_details?.father.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr className="h-10">
                <td>
                  <label className="font-medium" htmlFor="">
                    Mother:
                  </label>
                </td>
                <td>
                  <input
                    {...register("info_details.mother", {
                      required: "Vui lòng điền vào trường này",
                    })}
                    type="text"
                    className="info_input_hidden border-b border-black bg-transparent outline-none pl-1"
                  />
                  {errors.info_details?.mother && (
                    <p className="text-xs text-red-400">
                      {errors.info_details?.mother.message}
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/2 p-4">
          <table>
            <tbody>
              <tr className="h-10">
                <td>
                  <label className="font-medium" htmlFor="">
                    Health:
                  </label>
                </td>
                <td>
                  <input
                    {...register("info_details.health", {
                      required: "Vui lòng điền vào trường này",
                    })}
                    type="text"
                    className="info_input_hidden border-b border-black bg-transparent outline-none pl-1"
                  />
                  {errors.info_details?.health && (
                    <p className="text-xs text-red-400">
                      {errors.info_details?.health.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr className="h-10">
                <td>
                  <label className="font-medium" htmlFor="">
                    Sex:
                  </label>
                </td>
                <td>
                  <input
                    {...register("info_details.sex", {
                      required: "Vui lòng điền vào trường này",
                    })}
                    type="text"
                    className="info_input_hidden border-b border-black bg-transparent outline-none pl-1"
                  />
                  {errors.info_details?.sex && (
                    <p className="text-xs text-red-400">
                      {errors.info_details?.sex.message}
                    </p>
                  )}
                </td>
              </tr>
              <tr className="h-10">
                <td>
                  <label className="font-medium" htmlFor="">
                    Vaccin:
                  </label>
                </td>
                <td>
                  <input
                    {...register("info_details.vaccination", {
                      required: "Vui lòng điền vào trường này",
                    })}
                    type="text"
                    className="info_input_hidden border-b border-black bg-transparent outline-none pl-1"
                  />
                  {errors.info_details?.vaccination && (
                    <p className="text-xs text-red-400">
                      {errors.info_details?.vaccination.message}
                    </p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Info_pet;
