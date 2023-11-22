import img_logo from "../assets/Genshin_Impact_logo.png";
export const SidebarAdmin = () => {
  return (
    <aside className="max-w-[260px] ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-white">
      <div className="h-19.5">
        <a
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
          href=""
          target="_blank"
        >
          <img
            src={img_logo}
            className="inline h-full transition-all duration-200 ease-nav-brand"
            alt="main_logo"
          />
        </a>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <li className="mt-0.5 w-full">
            <a
              className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
              href="/admin"
            >
              <div className="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                <i className="fa-solid fa-table"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                List Products
              </span>
            </a>
          </li>
          <li className="mt-0.5 w-full">
            <a
              className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
              href="/admin/create"
            >
              <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                <i className="fa-solid fa-boxes-packing"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
                Create Product
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
