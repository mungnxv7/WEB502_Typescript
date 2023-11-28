import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import localUserService from "../service/localService";
import bg_login from "../assets/bg-login.png";
import { API } from "../util/config";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  const onSubmit: SubmitHandler<Login> = (data) => {
    if (data) {
      axios
        .post(`${API}/users/signin`, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          const userData = {
            ...response.data.isUser,
            accessToken: response.data.accessToken,
          };

          localUserService.set(userData);
          location.href = "/";
        });
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg_login})` }}
    >
      <div className="absolute top-0 left-0 min-h-screen sm:flex sm:gap-10 w-full sm:flex-row justify-center bg-[rgba(0,0,0,0.4)]">
        <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div className="self-start hidden lg:flex flex-col  text-gray-300">
            <h1 className="my-3 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#1CA7EC] to-[#4ADEDE]">
              Welcome
            </h1>
            <p className="pr-3 opacity-75">
              You are ready to become a
              <span className="text-[#ECAF82] font-medium"> WIBU</span>. Log in
              to get a ticket to
              <span className="text-[#ECAF82] font-medium"> "ISEKAI"</span> into
              a<span className="text-[#ECAF82] font-medium"> WIBU</span>.
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-400">
                Don'thave an account?{" "}
                <a
                  href="#"
                  className="text-sm text-[#ECAF82] hover:text-[#f0a36c]"
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="space-y-6">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    {...register("email", {
                      required: "Email không được bỏ trống",
                    })}
                    className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-[#ECAF82]"
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="relative mt-5" x-data="{ show: true }">
                  <input
                    {...register("password", {
                      required: "Password không được để trống",
                    })}
                    type="password"
                    placeholder="Password"
                    className="text-sm px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-[#ECAF82]"
                  />
                  {errors.password && (
                    <span className="text-xs text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-10">
                  <div className="text-sm ml-auto">
                    <a href="#" className="text-[#ECAF82] hover:text-[#f0a36c]">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-[#ECAF82]  hover:bg-[#f0a36c] text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormLogin;
