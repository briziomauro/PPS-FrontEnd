import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useLocation } from '../../contexts/LocationContext';
import { GoClock } from "react-icons/go";

const LocationsPage = () => {
  const { locations, GetLocations } = useLocation();
  const [loc, setLoc] = useState();
  const userTypeFromStorage = localStorage.getItem("userTypeResponse");


  const getLink = () => {
    switch (userTypeFromStorage) {
      case 'Client':
        return '/client';
      case 'Trainer':
        return '/profesor';
      case 'Admin':
        return '/admin';
      default:
        return '/';
    }
  };

  useEffect(() => {
    GetLocations();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center font-bebas text-white bg-zinc-900 p-3">
        <Link to={getLink()} className="px-5 py-2 hover:bg-zinc-800 transition-all duration-200 rounded-sm">
          <img className="h-[40px] w-[120px]" src="/img/LogoLight.png" alt="" />
        </Link>
      </div>


      <div className="flex flex-grow flex-col items-center justify-center my-10">
        <div className="font-bebas">
          <h1 className="text-6xl text-black">SEDES</h1>
        </div>
        <div className="flex justify-center w-[90%] bg-black h-[2px] my-5" />
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-wrap gap-6 justify-center font-roboto w-[60%]">
            {locations.map((location) => (
              <div
                key={location.idlocation}
                className="flex flex-col bg-zinc-900 text-white p-6 rounded-lg shadow-md w-80"
              >
                <h2 className="text-2xl font-bebas mb-2">
                  {location.name}
                </h2>
                <hr className="border-yellow-400 border-t-2 mb-4" />
                <div className="flex flex-col gap-5 items-center text-lg mb-2">
                  <div className="flex gap-2 items-center">
                    <IoLocationSharp className="h-6 w-6" />
                    <p className="text-lg px-2 text-white">{location.adress}</p>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <div className="flex items-center gap-2">
                      <GoClock className="h-5 w-5" />
                      <p className="text-lg font-semibold">Horarios:</p>
                    </div>
                    <ul className="list-disc pl-6">
                      <li><strong>Lunes a viernes:</strong> 7hs a 21hs</li>
                      <li><strong>Sábados:</strong> 7hs a 13hs</li>
                    </ul>
                  </div>
                </div>
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