import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 w-full z-10 transition-all duration-300 justify-evenly ${
        isScrolled
          ? "bg-gradient-to-b from-zinc-800 bg-opacity-10 text-white "
          : "bg-white text-black"
      }`}
    >
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-zinc-950 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>VENTAJAS</a>
            </li>
            <li>
              <a>MEMBRESIAS</a>
            </li>
            <li>
              <a>SOBRE NOSOTROS</a>
            </li>
            <li>
              <a>ENTRENADORES</a>
            </li>
          </ul>
        </div>
        <img
          src="./img/logoTraining.png"
          alt=""
          className="h-[80px] w-[120px]"
        />
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:scale-110 hover:bg-transparent hover:border-none">
              <a href="#Benefits">VENTAJAS</a>
            </li>
            <li className="hover:scale-110">
              <a href="#Memberships">MEMBRESIAS</a>
            </li>
            <li className="hover:scale-110">
              <a>SOBRE NOSOTROS</a>
            </li>
            <li className="hover:scale-110">
              <a>ENTRENADORES</a>
            </li>
          </ul>
        </div>
        <div>
          <a className="btn bg-yellow-500 rounded-full w-[120px] border-none hover:bg-zinc-800 text-white transition-all duration-200">
            LOGIN
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
