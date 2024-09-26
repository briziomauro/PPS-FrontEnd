import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import { locations, shifts } from "../../data/data";
import { div } from "framer-motion/client";

const GetTurn = () => {
  const [selectedSede, setSelectedSede] = useState(null);
  // const [selectedPage, setSelectedPage] = useState(1);

  const handleSedeChange = (sede) => {
    setSelectedSede(sede);
  };

  // const handlePagination = (direction) => {
  //   setSelectedPage((prevPage) => {
  //     if (direction === "prev") {
  //       return prevPage > 1 ? prevPage - 1 : 1;
  //     } else if (direction === "next") {
  //       return prevPage + 1;
  //     }
  //   });
  // };

  return (
    <div className="flex flex-col justify-evenly items-center h-screen bg-gradient-to-bl from-black via-zinc-900 to-black text-white">
      <div className="w-full">
        <h2 className="font-bebas text-6xl text-center mb-6">
          RESERVA TU TURNO DE HOY!
        </h2>
        <div className="flex justify-center items-center w-full font-bebas  bg-yellow-500">
          <p className="text-3xl">
            PRIMERO SELECCIONA TU SEDE:
          </p>
        </div>
        <div>
          <div className="flex w-full justify-center items-center gap-4 my-10">
            {locations.map((branch) => (
              <button
                key={branch.id}
                className={`bg-gray-200 font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center ${selectedSede === branch.name
                  ? "bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-800 text-yellow-300"
                  : "bg-gray-200 text-black"
                  }`}
                onClick={() => handleSedeChange(branch.name)}
              >
                <FaMapMarkerAlt className="mr-2" />
                {branch.name}
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center w-full font-bebas  bg-yellow-500">
            <p className="text-3xl">
              AHORA SELECCIONA TU HORARIO:
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {shifts.map((turn) => (
          <div key={turn.id} className="bg-zinc-800 h-[200px] w-[200px]">
            <p>{turn.dia}</p>
            <p>{turn.hora}</p>
            <p>{turn.cupo}</p>
            <p>{turn.sede}</p>
            <p>{turn.profesorAsignado}</p>
          </div>
        ))}
      </div>

      {/* <div className="mt-6 text-center">
        <div className="flex justify-center items-center">
          <button
            className="p-2 font-bold text-2xl"
            onClick={() => handlePagination("prev")}
          >
            <FaChevronLeft />
          </button>

          <span className="font-bold text-lg">
            {String(selectedPage).padStart(2, "0")}
          </span>

          <button
            className="p-2 font-bold text-2xl"
            onClick={() => handlePagination("next")}
          >
            <FaChevronRight />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default GetTurn;
