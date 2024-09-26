import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

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
      className={`navbar fixed top-0 w-full z-10 justify-evenly ${isScrolled
        ? "bg-black bg-opacity-60 text-white "
        : "bg-transparent text-black "
        } transition-all duration-300`}
    >
      <div>
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
        <a href="#Main">
          <img
            src={isScrolled ? "/img/LogoLight.png" : "/img/logoTraining2.png"}
            alt=""
            className="h-[40px] w-[130px] my-6"
          />
        </a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bebas text-2xl">
          <li className="hover:scale-110 ">
            <a href="#Memberships">MEMBRESIAS</a>
          </li>
          <li className="hover:scale-110">
            <a href="#Trainers">ENTRENADORES</a>
          </li>
          <li className="hover:scale-110">
            <a href="#AboutUs">SOBRE NOSOTROS</a>
          </li>
        </ul>
      </div>
      <div>
        <button
          onClick={navigateLogin}
          className="btn bg-yellow-500 rounded-full w-[120px] border-none hover:bg-yellow-400 text-white transition-all duration-300"
        >
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
