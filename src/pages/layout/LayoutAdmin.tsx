import { Loading } from "../../components/Loading";
import { SidebarAdmin } from "../../components/SidebarAdmin";
import localUserService from "../../service/localService";
import { logOut } from "../../util/main";
import userAdmin from "../../assets/userAdmin.jpg";

export const LayoutAdmin = ({ Component }: Component) => {
  return (
    <>
      <div className="m-0 font-sans min-h-screen absolute w-full text-base antialiased font-normal leading-default bg-gray-200 text-slate-500">
        <SidebarAdmin />
        <div className="ease-soft-in-out float-right w-3/4 xl:ml-68.5 relative h-full rounded-xl transition-all duration-200 mt-4 mr-5">
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="py-5 rounded-lg px-3 bg-white border-l-4 border-r-4 border-[#ECAF82] flex justify-end mb-5">
              <div className="avatar_user relative">
                <div className="flex items-center">
                  <div className="mr-3">
                    <img
                      width={40}
                      height={40}
                      className="object-cover rounded-full"
                      src={userAdmin}
                      alt=""
                    />
                  </div>
                  <div>
                    <p>Welcome</p>
                    <span className="font-medium">
                      {localUserService.get().name}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-md w-40 py-1 user_menu_admin">
                  <ul>
                    <li
                      onClick={logOut}
                      className="contronl_user hover:bg-[#ecaf82] hover:text-white duration-300 py-2 rounded-md pl-4"
                    >
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-0 overflow-x-auto">{<Component />}</div>
          </div>
        </div>
      </div>
      <Loading />
    </>
  );
};
