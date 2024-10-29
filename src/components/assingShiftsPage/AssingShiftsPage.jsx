import FullCalendar from "@fullcalendar/react";
import React, { useEffect, useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import { useLocation } from "../../contexts/LocationContext";
import { useTrainer } from "../../contexts/TrainerContext";
import { FaArrowRightLong } from "react-icons/fa6";

const AssingShiftsPage = () => {
  const [selectlocation, setSelectlocation] = useState("");
  const { locations, GetLocations } = useLocation();
  const { getAllTrainers } = useTrainer();
  const [trainers, setTrainers] = useState([]);
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setSelectlocation(selectedLocation);
  };

  useEffect(() => {
    GetLocations();
  }, []);
  const activeLocation = locations.filter((l) => l.isactive === 1);
  useEffect(() => {
    const fetchTrainers = async () => {
      const allTrainers = await getAllTrainers(); // Asegúrate de que esta función devuelva los datos
      setTrainers(allTrainers); // Actualiza el estado con los entrenadores
    };

    fetchTrainers();
  }, [getAllTrainers]);
  return (
    <div className="flex flex-col h-screen bg-gradient-to-tl from-black via-zinc-900 to-black">
      <div className="flex items-center justify-center">
        <h2 className="font-bebas text-white text-5xl mt-5">
          ASIGANCIÓN DE TURNOS
        </h2>
      </div>
      <div className="flex gap-4 justify-evenly h-full">
        <div>
          <div className="flex gap-10 w-full justify-center items-center">
            <div className="flex justify-center items-center text-white mt-10">
              <select
                className="select w-full max-w-xs rounded-none border border-yellow-400 bg-zinc-800"
                onChange={handleLocationChange}
                value={selectlocation}
              >
                <option value="" disabled selected>
                  Seleccione sede
                </option>
                {activeLocation.map((location) => (
                  <option key={location.idlocation} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex  justify-center items-center mt-8">
              <FaArrowRightLong />
            </div>
            <div className="flex justify-center items-center text-white mt-10">
              <select className="select w-full max-w-xs rounded-none border border-yellow-400 bg-zinc-800">
                <option disabled selected>
                  Seleccione dia
                </option>
                {selectlocation && (
                  <>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes"> Martes</option>
                    <option value="Miercoles">Miercoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sabado">Sabado</option>
                  </>
                )}
              </select>
            </div>
          </div>
          <div className="items-center justify-center flex mt-8">
            <div className="flex items-center justify-between text-white bg-black w-[1010px] h-[40px] border border-yellow-400">
              <p className="ml-3">Turno 1</p>
              <p className="m-1">7:00hs - 15:00hs</p>
              <label className="flex items-center transform scale-150">
                <input type="checkbox" className="mr-6 " />
              </label>
            </div>
          </div>

          <div className="flex justify-center items-center text-white mt-10 gap-3">
            <div className="flex justify-center">
              <button className="flex items-center justify-center gap-3  p-4 text-white border-white border my-4 hover:scale-105 transition-all rounded-full ">
                Confirmar turno Para{" "}
                <FaArrowRightLong className="animate-bounce" />
              </button>
            </div>
            <select
              className="select w-full max-w-xs rounded-none border border-yellow-400 bg-zinc-800"
              onChange={handleLocationChange}
              value={selectlocation}
            >
              <option value="" disabled selected>
                Seleccione Profesor
              </option>
              {trainers.map((trainer) => (
                <option
                  key={trainer.userDto.id}
                  value={trainer.trainerDto.dniTrainer}
                >
                  {trainer.trainerDto.firstName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="bg-white w-[700px] h-[600px] text-black uppercase font-bebas text-xl mt-10 rounded-xl">
          <div className="container mx-auto p-4">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              locales={[esLocale]}
              locale="es"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssingShiftsPage;
