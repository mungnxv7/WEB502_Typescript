import logo from "../assets/Genshin_Impact_logo.png";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center py-4">
        <div className="w-[322px]">
          <a href="#">
            <img width={200} src={logo} />
          </a>
        </div>
        <div>
          <ul className="flex">
            <li>
              <a className="nav_link font-bold p-5 pl-0" href="#">
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
            <li>
              <a className="nav_link font-bold p-5" href="/admin">
                Admin
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
            <a href="/login">
              <div className="bg-[#ECAF82] text-sm hover:bg-[#f0a36c] hover:text-white p-2 rounded-md cursor-pointer">
                <span className="mr-2 font-medium">Login</span>
                <i className="fa-solid fa-right-to-bracket"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
