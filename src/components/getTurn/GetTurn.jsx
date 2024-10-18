import { useState } from "react";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { locations, shifts } from "../../data/data";

const GetTurn = () => {
  const [selectedSede, setSelectedSede] = useState(null);

  const handleSedeChange = (sede) => {
    setSelectedSede(sede);
  };

  return (
    <div className="flex flex-col justify-evenly items-center h-screen bg-gradient-to-bl from-black via-zinc-900 to-black text-white">
      <div className="w-full">
        <h2 className="font-bebas text-6xl text-center mb-6">
          RESERVA TU TURNO DE HOY!
        </h2>
        <div className="flex justify-center items-center w-full font-bebas  bg-yellow-500">
          <p className="text-3xl">PRIMERO SELECCIONA TU SEDE:</p>
        </div>
        <div>
          <div className="flex w-full justify-center items-center gap-4 my-10">
            {locations.map((branch) => (
              <button
                key={branch.id}
                className={`bg-gray-200 font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center ${
                  selectedSede === branch.name
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

          {selectedSede && (
            <div className="flex justify-center items-center w-full font-bebas bg-yellow-500 p-4">
              <p className="text-3xl">AHORA SELECCIONA TU TURNO:</p>
            </div>
          )}
        </div>
      </div>

      {selectedSede && (
        <div className="flex flex-wrap gap-4 justify-center items-center w-full p-4">
          {shifts
            .filter((turn) => {
              return (
                !selectedSede ||
                turn.sede
                  .toLowerCase()
                  .includes(selectedSede.toLowerCase().replace("sede ", ""))
              );
            })
            .map((turn) => (
              <div
                key={turn.id}
                className="bg-white rounded-lg shadow-lg p-4 w-[350px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-gray-800 text-white font-bold py-1 px-3 rounded-full text-lg">
                    {turn.hora}
                  </div>
                  <div className="flex items-center">
                    <FaUserAlt className="mr-2 text-gray-500 text-3xl" />{" "}
                    <div className="flex flex-col">
                      <p className="text-gray-600 font-semibold text-sm">
                        Instructor
                      </p>{" "}
                      <p className="text-gray-800 font-bold">
                        {turn.profesorAsignado}
                      </p>{" "}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg font-bold">{turn.dia}</p>
                  <p className="text-gray-500 text-sm">
                    Cupo disponible: {turn.cupoDisponible}/30
                  </p>
                </div>

                <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                  <div
                    className={`h-2.5 rounded-full ${
                      turn.cupoDisponible > 15
                        ? "bg-green-500"
                        : turn.cupoDisponible > 5
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${(turn.cupoDisponible / 30) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default GetTurn;
