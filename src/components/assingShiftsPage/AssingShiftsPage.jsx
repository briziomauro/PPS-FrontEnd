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
  const [dayForLocation, setDayForLocation] = useState("");
  const [shiftsDayLocation, setShiftsDayLocation] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [selectedShifts, setSelectedShifts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setSelectlocation(selectedLocation);
    setDayForLocation("-");
  };

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      await GetLocations();
      setLoading(false);
    };

    fetchLocations();
  }, []);

  const activeLocation = locations.filter((l) => l.isactive === 1);

  useEffect(() => {
    const fetchTrainers = async () => {
      setLoading(true);
      const allTrainers = await getAllTrainers();
      setTrainers(allTrainers);
      setLoading(false);
    };

    fetchTrainers();
  }, [getAllTrainers]);

  const getShiftsByDayLocation = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://localhost:7179/api/Shift/GetShiftsByLocationAndDate?locationId=${selectlocation}&day=${dayForLocation}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener los trainers");
      }

      const data = await response.json();
      setShiftsDayLocation(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectlocation && dayForLocation) {
      getShiftsByDayLocation();
    }
  }, [selectlocation, dayForLocation]);

  const handleCheckboxChange = (shiftId) => {
    setSelectedShifts((prevSelectedShifts) =>
      prevSelectedShifts.includes(shiftId)
        ? prevSelectedShifts.filter((id) => id !== shiftId)
        : [...prevSelectedShifts, shiftId]
    );
  };

  const handleAssignShiftTrainer = async (e) => {
    e.preventDefault();
    setLoading(true);

    const shiftTrainerData = {
      shiftIds: selectedShifts,
      dnitrainer: selectedTrainer,
    };

    const assignTrainerToShift = async (shiftTrainerData) => {
      try {
        const response = await fetch("https://localhost:7179/api/Shift/AssignTrainerToShift", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shiftTrainerData),
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Error al asignar trainer");
        }

        const updatedShifts = shiftsDayLocation.map((shift) => {
          if (selectedShifts.includes(shift.idshift)) {
            return {
              ...shift,
              dnitrainer: selectedTrainer
            };
          }
          return shift;
        });

        setShiftsDayLocation(updatedShifts);
        setSelectedShifts([]);
        setSelectedTrainer("");
        setLoading(false);

      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    await assignTrainerToShift(shiftTrainerData);
  };


  return (
    <div className="flex flex-col h-screen bg-gradient-to-tl from-black via-zinc-900 to-black">
      {loading && (
        <div className="fixed inset-0 z-[50000] flex items-center justify-center bg-black/45">
          <div
            className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-solid border-r-transparent"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
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
                  <option key={location.idlocation} value={location.idlocation}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex  justify-center items-center mt-8">
              <FaArrowRightLong />
            </div>
            <div className="flex justify-center items-center text-white mt-10">
              <select onChange={(e) => setDayForLocation(e.target.value)} value={dayForLocation} className="select w-full max-w-xs rounded-none border border-yellow-400 bg-zinc-800">
                <option disabled selected>
                  Seleccione dia
                </option>
                {selectlocation && (
                  <>
                    <option value="-" selected>-</option>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes"> Martes</option>
                    <option value="Miércoles">Miercoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sábado">Sabado</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className='overflow-y-scroll h-[600px] flex flex-col gap-3 mt-5 p-2 overflow-x-hidden'>
            {shiftsDayLocation &&
              shiftsDayLocation.map((shiftDay) => {

                const startTime = new Date();
                startTime.setHours(parseInt(shiftDay.hour), 0, 0);
                const endTime = new Date(startTime);
                endTime.setHours(startTime.getHours() + 1);

                const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
                const assignedTrainer = trainers.find(trainer => trainer.trainerDto.dniTrainer === shiftDay.dnitrainer);


                return (
                  <div key={shiftDay.idshift} className="items-center justify-center flex mt-8">
                    <div className="flex items-center justify-between text-white bg-black w-[1010px] h-[40px] border border-yellow-400">
                      <p className="ml-3">Turno {shiftDay.idshift}</p>
                      <p className="m-1">{formatTime(startTime)} h - {formatTime(endTime)} h</p>
                      {assignedTrainer ? (
                        <p className="pr-3">Trainer Asignado: <span className="text-yellow-400">{assignedTrainer.trainerDto.firstName} {assignedTrainer.trainerDto.lastName}</span></p>
                      ) : (
                        <label className="flex items-center transform scale-150">
                          <input
                            type="checkbox"
                            className="mr-6"
                            onChange={() => handleCheckboxChange(shiftDay.idshift)}
                            checked={selectedShifts.includes(shiftDay.idshift)}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                )
              })
            }
          </div>


          <div className="flex justify-center items-center text-white my-5 gap-3">
            <form onSubmit={handleAssignShiftTrainer} className="flex items-center w-full justify-center gap-5">
              <div className="flex justify-center">
                <button type="submit" className="flex items-center justify-center gap-3  p-4 text-white border-white border my-4 hover:scale-105 transition-all rounded-full ">
                  Confirmar turno Para{" "}
                  <FaArrowRightLong className="animate-bounce" />
                </button>
              </div>
              <select
                className="select w-full max-w-xs rounded-none border border-yellow-400 bg-zinc-800"
                onChange={(e) => setSelectedTrainer(e.target.value)}
                value={selectedTrainer}
              >
                <option value="" disabled selected>
                  Seleccione Profesor
                </option>
                {trainers.map((trainer) => (
                  <option key={trainer.userDto.id} value={trainer.trainerDto.dniTrainer}>
                    {trainer.trainerDto.firstName} {trainer.trainerDto.lastName}
                  </option>
                ))}
              </select>

            </form>
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
