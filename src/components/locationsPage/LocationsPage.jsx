import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { locations } from "../../data/data";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { useState } from "react";
import ModalMaps from "../modalMaps/ModalMaps";

const LocationsPage = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center font-bebas text-white bg-zinc-900 p-3">
        <Link to='/' className="px-5 py-2 hover:bg-zinc-800 transition-all duration-200 rounded-sm">
          <img className="h-[40px] w-[120px]" src="/img/LogoLight.png" alt="" />
        </Link>
      </div>


      <div className="flex flex-grow flex-col items-center justify-center my-10">
        <div className="font-bebas">
          <h1 className="text-6xl text-black">SEDES</h1>
        </div>
        <div className="flex justify-center w-[90%] bg-black h-[2px] my-5"/>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-wrap gap-6 justify-center font-roboto w-[60%]">
            {locations.map((branch) => (
              <div
                key={branch.id}
                className="flex flex-col bg-zinc-900 text-white p-6 rounded-lg shadow-md w-80"
              >
                <h2 className="text-2xl font-bebas mb-2">
                  {branch.name}
                </h2>
                <hr className="border-white border-t-2 mb-4" />
                <div className="flex items-center text-lg mb-2">
                  <IoLocationSharp className="h-6 w-6" />
                  <p className="text-lg px-2">{branch.address}</p>
                </div>
                <div className="flex items-center text-lg mb-2 ">
                  <FaPhoneAlt className="h-6 w-6" />
                  <p className="px-2">{branch.phone}</p>
                </div>
                <div className="text-lg mb-2">
                  <div className="flex items-center mb-1">
                    <GoClockFill className="h-6 w-6" />
                    <p className="text-lg px-2 ">Horarios:</p>
                  </div>
                  <ul className="pl-8">
                    <li className="mb-1">
                      <strong>L a V:</strong> {branch.hours.weekday}
                    </li>
                    {branch.hours.saturday && (
                      <li className="mb-1">
                        <strong>S:</strong> {branch.hours.saturday}
                      </li>
                    )}
                    {branch.hours.sunday ? (
                      <li>
                        <strong>D:</strong> {branch.hours.sunday}
                      </li>
                    ) : (
                      <li>
                        <strong>D:</strong> Cerrado
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex items-center text-lg mb-2">
                  <MdEmail className="h-6 w-6" />
                  <a
                    href={`mailto:${branch.email}`}
                    className="text-black-500 underline"
                  >
                    <p className="text-lg px-2">
                      {branch.email}
                    </p>
                  </a>
                </div>
                <ModalMaps id={branch.id} position={branch.position}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocationsPage
