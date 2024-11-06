import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { useLocation } from "../../contexts/LocationContext";
import { useTrainer } from "../../contexts/TrainerContext";
import { GiClick } from "react-icons/gi";
import { FaCircleInfo } from "react-icons/fa6";


const GetTurn = () => {
  const { locations, GetLocations } = useLocation();
  const { getAllTrainers } = useTrainer();

  const [trainers, setTrainers] = useState([]);
  const [selectedLocationClient, setSelectedLocationClient] = useState("");
  const [shiftsForToday, setShiftsForToday] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      await GetLocations();
      setLoading(false);
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    const fetchTrainersShift = async () => {
      setLoading(true);
      const allTrainers = await getAllTrainers();
      setTrainers(allTrainers);
      setLoading(false);
    };
    fetchTrainersShift();
  }, [getAllTrainers]);

  const getToday = () => {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const hoy = new Date();
    return dias[hoy.getDay()];
  };

  const [today] = useState(() => getToday());

  useEffect(() => {
    if (selectedLocationClient) {
      setShiftsForToday([]);
      const getShiftsByDayLocationClient = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://localhost:7179/api/Shift/GetShiftsByLocationAndDate?locationId=${selectedLocationClient}&day=${today}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );

          if (!response.ok) {
            throw new Error("Error al obtener los turnos");
          }

          const data = await response.json();
          setShiftsForToday(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      getShiftsByDayLocationClient();
    } else {
      setShiftsForToday([]);
    }
  }, [selectedLocationClient, today]);

  const handleLocationClick = (locationId) => {
    setSelectedLocationClient(locationId);
  };

  const handleReserveShift = async (idReserveShift) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setLoading(true); // Show loading during reservation
    try {
      const response = await fetch(
        "https://localhost:7179/api/Shift/ReserveShift",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(idReserveShift),
          credentials: "include",
        }
      );

      if (!response.ok) {
        const contentType = response.headers.get("Content-Type");

        let errorMessage = "Error al reservar el turno";
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } else {
          errorMessage = await response.text();
        }

        throw new Error(errorMessage);
      }

      const contentType = response.headers.get("Content-Type");
      let successMessage = "Turno reservado exitosamente!";
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        successMessage = data.message || successMessage;
      } else {
        successMessage = await response.text();
      }
      toast.success(successMessage);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-evenly items-center min-h-screen bg-gradient-to-bl from-black via-zinc-900 to-black text-white">
        <div className="w-full">
          <h2 className="font-bebas text-6xl text-center mb-6">
            RESERVA TU TURNO DE HOY!
          </h2>
          <div className="flex justify-center items-center w-full font-bebas bg-yellow-500 p-2">
            <p className="text-3xl">PRIMERO SELECCIONA TU SEDE:</p>
          </div>
          <div>
            <div className="flex flex-wrap w-full justify-center items-center gap-4 my-10">
              {locations.map((branch) => (
                <button
                  key={branch.id}
                  className={`bg-gray-200 font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center ${selectedLocationClient === branch.idlocation
                    ? "bg-gradient-to-br from-zinc-800 via-zinc-800 to-zinc-800 text-yellow-300"
                    : "bg-gray-200 text-black"
                    }`}
                  onClick={() => handleLocationClick(branch.idlocation)}
                >
                  <FaMapMarkerAlt className="mr-2" />
                  {branch.name}
                </button>
              ))}
            </div>

            {selectedLocationClient && (
              <div className="flex relative justify-center items-center w-full font-bebas bg-yellow-500 p-2 group">
                <p className="text-3xl">AHORA SELECCIONA TU TURNO:</p>
                <div className="absolute right-5 hover:scale-110 cursor-pointer transition-all duration-300">
                  <FaCircleInfo className="text-2xl" />
                </div>
                <div className="absolute right-14 bottom-10 transform translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="bg-black text-white text-md p-1 rounded">SOLO HAZ CLICK EN EL TURNO QUE DESEES!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedLocationClient && (
          <div className="flex flex-wrap gap-4 justify-center items-center w-full p-4">
            {shiftsForToday.length > 0 ? (
              shiftsForToday
                .filter((turn) => {
                  const [turnHour, turnMinutes] = turn.hour.split(":").map(Number);
                  const currentTime = new Date();
                  const turnTime = new Date();
                  turnTime.setHours(turnHour, turnMinutes, 0, 0);
                  return turnTime > currentTime;
                })
                .map((turn) => {
                  const assignedTrainer = trainers.find(
                    (trainer) => trainer.trainerDto.dniTrainer === turn.dnitrainer
                  );

                  return (
                    <div
                      key={turn.idshift}
                      className="bg-white rounded-lg shadow-lg p-4 w-[350px] flex flex-col cursor-pointer hover:scale-105 transition-all duration-200"
                      onClick={() => handleReserveShift(turn.idshift)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <FaUserAlt className="mr-2 text-zinc-500 text-3xl" />
                          <div className="flex flex-col">
                            <p className="text-zinc-600 font-semibold text-sm">Entrenador/a</p>
                            <p className="text-zinc-800 font-bold">
                              {assignedTrainer
                                ? `${assignedTrainer.trainerDto.firstName} ${assignedTrainer.trainerDto.lastName}`
                                : "Sin asignar"}
                            </p>
                          </div>
                        </div>
                        <div className="bg-zinc-800 text-white font-bold py-1 px-3 rounded-full text-lg">
                          {turn.hour}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-3">
                        <p className="text-gray-500 text-sm">Cupo disponible: {turn.actualpeople ?? "0"}/30</p>
                      </div>

                      <div>
                        <div className="flex bg-gray-300 rounded-full h-2.5 mb-4">
                          <div
                            className={`h-2.5 rounded-full ${turn.peoplelimit > 15
                              ? "bg-green-500"
                              : turn.peoplelimit > 5
                                ? "bg-orange-500"
                                : "bg-red-500"
                              }`}
                            style={{
                              width: `${(turn.peoplelimit / 30) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
            ) : (
              <p className="text-center text-xl text-yellow-300">No hay turnos disponibles en este momento.</p>
            )}
          </div>
        )}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
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
    </>
  );
};

export default GetTurn;
