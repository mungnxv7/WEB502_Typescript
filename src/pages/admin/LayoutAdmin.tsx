import { SidebarAdmin } from "../../components/SidebarAdmin";

export const LayoutAdmin = ({ Component }: Component) => {
  return (
    <div className="m-0 font-sans min-h-screen text-base antialiased font-normal leading-default bg-gray-200 text-slate-500">
      <SidebarAdmin />
      <div className="ease-soft-in-out float-right w-3/4 xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200 bg-white mt-4 mr-5">
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">{<Component />}</div>
        </div>
      </div>
    </div>
  );
};
