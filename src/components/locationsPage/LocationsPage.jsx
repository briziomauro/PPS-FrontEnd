import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { locations } from "../../data/data";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoClockFill } from "react-icons/go";

const LocationsPage = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center font-bebas text-white bg-zinc-900 p-3">
        <Link to='/' className="px-5 py-2 hover:bg-zinc-800 transition-all duration-200 rounded-sm">
          <img className="h-[40px] w-[120px]" src="/img/LogoLight.png" alt="" />
        </Link>
      </div>


      <div className="flex flex-col flex-grow items-center justify-center my-10">
        <div className="font-bebas">
          <h1 className="text-6xl text-black">SEDES</h1>
        </div>
        <div className="flex justify-center w-[90%] bg-black h-[2px] my-5"/>
        <div className="flex">
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
                <button
                  className="flex justify-center items-center text-xl px-5 py-3 bg-yellow-500 text-white rounded-sm hover:bg-yellow-600 transition-colors font-bebas"
                >
                  VER DIRECCION
                </button>
              </div>
            ))}
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.2250704708895!2d-60.65439582354715!3d-32.94506667181009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab368e3c9ab9%3A0x674070ccfacf0b55!2sTraining%20Center%20Rioja!5e0!3m2!1ses!2sar!4v1726170813749!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default LocationsPage;
