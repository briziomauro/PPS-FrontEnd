import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-black text-white items-center py-4 rounded-t-2xl">
        <aside className="flex flex-1 flex-col items-center justify-center w-full">
          <Link to="/">
            <img src="/img/LogoLight.png" alt="" className="w-[330px] h-[110px]" />
          </Link>
        </aside>
        <div className="flex flex-1 flex-col font-bebas text-xl">
          <Link to="locations">
            <h6>SEDES</h6>
          </Link>
          <Link>
            <h6>CONTACTO</h6>
          </Link>
        </div>
        <div className="font-bebas">
          <h6 className="text-xl">SOCIAL</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="w-8 h-8">
              <img src="/svg/Facebook.svg" alt="" />
            </a>
            <a className="w-9 h-9">
              <img src="/svg/Instagram.svg" alt="" />
            </a>
            <a className="w-8 h-8">
              <img src="/svg/Whatsapp.svg" alt="" />
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer bg-black text-white border-zinc-800 border-t justify-evenly py-4 font-bebas text-lg">
        <aside className="grid-flow-col items-center pr-16">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
