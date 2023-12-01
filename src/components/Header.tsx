import { useEffect, useState } from "react";
import logo from "../assets/Genshin_Impact_logo.png";
import localUserService from "../service/localService";
import { logOut } from "../util/main";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed-screen ${isSticky ? "sticky" : ""}`}>
      <div className="container mx-auto flex items-center py-4">
        <div className="w-[322px]">
          <a href="/">
            <img width={200} src={logo} />
          </a>
        </div>
        <div>
          <ul className="flex">
            <li>
              <a className="nav_link font-bold p-5 pl-0" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav_link font-bold p-5" href="#">
                Shop
              </a>
            </li>
            <li>
              <a className="nav_link font-bold p-5" href="#">
                About
              </a>
            </li>
            <li>
              <a className="nav_link font-bold p-5" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center ml-auto w-max">
          <form className="flex mr-3">
            <input
              className="h-10 pl-1 outline-none border rounded-l-lg"
              type="text"
            />
            <button className="btn_search h-10 bg-[#ECAF82] w-10 rounded-r-lg">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
          <div className="px-3 avatar relative">
            {localUserService.get() ? (
              <div className="relative">
                <p className=" text-gray-400">
                  Hi!:
                  <span className="capitalize">
                    {localUserService.get().name}
                  </span>
                </p>
                <div className="bg-white rounded-md w-40 py-1 user_menu">
                  <ul>
                    <li
                      className="contronl_user hover:bg-[#ecaf82] hover:text-white duration-300 py-2 rounded-md pl-4"
                      onClick={logOut}
                    >
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <a href="/login">
                <div className="bg-[#ECAF82] text-sm hover:bg-[#f0a36c] hover:text-white p-2 rounded-md cursor-pointer">
                  <span className="mr-2 font-medium">Login</span>
                  <i className="fa-solid fa-right-to-bracket"></i>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
