import WeightPicker from "../heightWeightPicker/WeightPicker";
import HeightPicker from "../heightWeightPicker/HeightPicker";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CiCircleInfo } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";

const RoutinePlan = () => {
  const [routine, setRoutine] = useState({});
  const [exercises, setExercises] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [objective, setObjective] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(1);

  const [selectedDay, setSelectedDay] = useState('');
  const daysOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const uniqueDays = [...new Set(exercises.map(exercise => exercise.day))]
    .sort((a, b) => daysOrder.indexOf(a) - daysOrder.indexOf(b));
  const exercisesForSelectedDay = exercises.filter(exercise => exercise.day === selectedDay);

  const groupedExercises = exercisesForSelectedDay.reduce((acc, { exercise, series, breaktime }) => {
    // Si el grupo muscular no existe en el acumulador, lo creamos
    if (!acc[exercise.musclegroup]) {
      acc[exercise.musclegroup] = [];
    }
    // Agregamos el ejercicio al grupo correspondiente
    acc[exercise.musclegroup].push({ exercise, series, breaktime });
    return acc;
  }, {});
  const handleDaysChange = (e) => setDays(e.target.value);

  useEffect(() => {
    getRoutine();
  }, []);

  const getRoutine = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://localhost:7179/api/Routinesexercise/GetMyRoutinesExercise",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) throw new Error("Error al obtener la rutina");

      const data = await response.json();
      if (data && data.routine) {
        const { routine, exercises } = data;
        setRoutine(routine);
        setExercises(exercises);
        setIsPending(routine.status === "In Progress");
      } else {
        console.error("La respuesta no contiene una rutina válida");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const addRoutine = async (routineRequest) => {
    const response = await fetch("https://localhost:7179/api/Routine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(routineRequest),
      credentials: "include",
    });

    if (!response.ok) throw new Error("Error al crear la rutina");
    return response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    if (objective.length < 5 || objective.length > 50) return setError(true);
    document.getElementById("my_modal_10").close();
    const routineRequest = { weight, height, description: objective, days };

    try {
      setLoading(true);
      await addRoutine(routineRequest);
      toast.success("Rutina solicitada correctamente.");
      setIsPending(true);
      setObjective("");
    } catch (error) {
      console.error("Error capturado en handleSubmit:", error);
      toast.error("Error al solicitar la rutina");
    } finally {
      setLoading(false);
    }
  };

  const getIconForMuscleGroup = (musclegroup) => {
    switch (musclegroup) {
      case "Pecho":
        return <img src="/png/chest.png" className="h-36 w-36 p-2" alt="imagen de pecho" />;
      case "Espalda":
        return <img src="/png/back2.png" className="h-36 w-36 " alt="imagen de espalda" />;
      case "Piernas":
        return <img src="/png/backleg.png" className="h-36 w-36 p-4" alt="imagen de piernas" />;
      case "Hombros":
        return <img src="/png/shoulder.png" className="h-36 w-36 p-6" alt="imagen de hombros" />;
      case "Abdominales":
        return <img src="/png/abd.png" className="h-36 w-36 p-4" alt="imagen de abdominales" />;
      case "Bíceps":
        return <img src="/png/biceps.png" className="h-36 w-36 p-6" alt="imagen de biceps" />;
      case "Tríceps":
        return <img src="/png/triceps.png" className="h-36 w-36 p-6" alt="imagen de triceps" />;
      default:
        return null;
    }
  };


  // Agrupar ejercicios sin eliminar duplicados, pero permitiendo que un ejercicio aparezca en distintos días

  return (
    <>
      <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-black via-zinc-800 to-black p-6">
        {!loading && (
          <div className="max-w-4xl w-full">
            <h3 className="text-6xl font-bebas text-white mb-6 flex justify-between">
              Rutina de Ejercicio
            </h3>
            {routine?.status === "Done" ? (
              <>
                <p className="text-lg mb-4 text-white">
                  <span className="font-medium text-yellow-400">Objetivo:</span> {routine.description}
                </p>

                <div className="flex flex-wrap justify-between gap-6 text-black">
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
                    <h4 className="flex items-center gap-1 text-xl font-semibold ">
                      Días: {routine.days}
                    </h4>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
                    <h4 className="flex items-center gap-1 text-xl font-semibold ">
                      Peso: {routine.weight} kg
                    </h4>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
                    <h4 className="flex items-center gap-1 text-xl font-semibold ">
                      Altura: {routine.height} m
                    </h4>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="mb-6">
                    <label htmlFor="day-select" className="block text-xl font-semibold text-white mb-2">Seleccione un día:</label>
                    <select
                      id="day-select"
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(e.target.value)}
                      className="p-2 bg-zinc-800 text-white hover:bg-zinc-800 rounded-md"
                    >
                      <option value="" >Seleccione un día</option>
                      {uniqueDays.map((day) => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>

                  {/* Mostrar ejercicios del día seleccionado */}
                  {console.log(exercisesForSelectedDay)}
                  {selectedDay && exercisesForSelectedDay.length > 0 ? (
                    <div>
                      <h4 className="text-5xl flex justify-center items-center font-bebas text-yellow-400  uppercase mb-5">{selectedDay}</h4>
                      <div className="flex flex-wrap justify-center items-center gap-8">
                        {Object.keys(groupedExercises).map((muscleGroup) => (
                          <div key={muscleGroup} className="flex flex-row  gap-5  justify-start items-center ">
                            {/* Mostrar el icono solo una vez por grupo muscular */}
                            <div className="flex flex-col gap-3 justify-center items-center h-full ">
                              <div className="bg-white rounded-full w-[150px] h-[150px]">

                              {getIconForMuscleGroup(muscleGroup)}
                              </div>
                              <h4 className="text-white uppercase font-bebas text-2xl ">{muscleGroup}</h4>
                            </div>

                            {/* Mostrar los ejercicios correspondientes a ese grupo */}
                            <div className="flex flex-wrap gap-5">

                            {groupedExercises[muscleGroup].map(({ exercise, series, breaktime }) => (
                              <div key={exercise.idexercise} className="bg-zinc-900 shadow-black rounded-lg shadow-md text-white flex flex-col  justify-center items-center ">
                                {/* Ejercicios a la derecha */}
                                <div className="w-[200px] h-[150px] px-4 flex flex-col justify-center items-center">
                                  <h5 className="text-xl font-semibold ">{exercise.name}</h5>
                                  <p>Series: {series}</p>
                                  <p>Descanso: {breaktime}</p>
                                </div>
                              </div>
                            ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    selectedDay && <p className="text-white">No hay ejercicios para este día.</p>
                  )}
                </div>

              </>
            ) : (
              <div className="flex flex-col justify-center items-center w-full mb-10">
                <button
                  className="uppercase font-bebas bg-white text-black p-5 w-full text-2xl rounded-md"
                  onClick={() =>
                    document.getElementById("my_modal_10").showModal()

                  }
                  disabled={isPending}
                >
                  Solicitar Rutina
                </button>
                {isPending && (
                  <span className="text-amber-400 mt-5 w-full ml-auto font-bebas text-2xl">
                    El entrenador esta evaluando el plan
                  </span>
                )}
                <div className="flex gap-3 items-center justify-center mt-10 text-zinc-400">
                  <CiCircleInfo className="text-xl" />
                  <p>SE NECESITA TENER UN TURNO ACTIVO PARA SOLICITAR UNA RUTINA</p>
                </div>
              </div>
              
            )}
          </div>
        )}
        <dialog id="my_modal_10" className="modal ">
          <div className="modal-box bg-gradient-to-br from-black via-zinc-900 to-black  p-10 justify-center">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">
                ✕
              </button>
            </form>
            {/* <div className="flex flex-col justify-center items-center w-full mb-10"> */}
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex flex-col w-full">
                <label className="text-white text-md p-2 font-bebas">
                  OBJETIVO:
                </label>
                <input
                  type="text"
                  maxLength="50"
                  minLength="5"
                  className={`w-full bg-white text-black p-2 rounded-lg border-2 ${error ? "border-red-600" : "border-gray-300"
                    } transition-colors duration-200`}
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-white text-md pt-3 font-bebas">
                  Días:
                  <input
                    selected
                    type="number"
                    value={days}
                    onChange={handleDaysChange}
                    min="1"
                    max="6"
                    className={`w-full bg-white text-black p-2 rounded-lg border-2 ${error ? "border-red-600" : "border-gray-300"
                      } transition-colors duration-200`}
                    required
                  />
                </label>
                {/* Mostrar mensaje de error si el valor no es válido */}
                {days < 1 || days > 6 ? (
                  <p className="text-red-500 text-sm mt-2">El día debe estar entre 1 y 6.</p>
                ) : null}
              </div>

              <div className="flex w-full mt-5 gap-4 justify-center ">
                <div className="flex flex-col items-center justify-center">
                  <label className="text-white text-md p-2 font-bebas">
                    PESO:
                  </label>
                  <div className="">
                    <WeightPicker
                      initialWeight="20"
                      onWeightChange={setWeight}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <label className="text-white text-md p-2 font-bebas">
                    ALTURA:
                  </label>
                  <div className="">
                    <HeightPicker onHeightChange={setHeight} />
                  </div>
                </div>

              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded font-semibold flex justify-center items-center text-center"
              >
                Enviar
              </button>
            </form>
            {error && (
              <p className="text-red-500 mt-2">
                La descripción debe tener entre 5 y 50 caracteres.
              </p>
            )}
          </div>
        </dialog>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar theme="dark" />

        {loading && (
          <div className="fixed inset-0 z-[500000] flex items-center justify-center bg-black/45">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-solid border-r-transparent" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RoutinePlan;
