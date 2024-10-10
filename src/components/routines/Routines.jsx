import { GiWeightLiftingUp } from "react-icons/gi";
import RequestRoutine from "../requestRoutine/RequestRoutine";

const Routines = () => {

  const routines = [
    {
      id: 1,
      name: "Rutina de Fuerza",
      exercises: [
        { name: "Sentadillas", sets: 4, reps: 8 },
        { name: "Press de banca", sets: 3, reps: 10 },
        { name: "Peso muerto", sets: 4, reps: 6 },
        { name: "Dominadas", sets: 3, reps: 8 },
      ],
    },
    {
      id: 2,
      name: "Rutina de Volumen",
      exercises: [
        { name: "Press militar", sets: 4, reps: 12 },
        { name: "Curl de bíceps", sets: 3, reps: 15 },
        { name: "Extensiones de tríceps", sets: 3, reps: 12 },
        { name: "Remo con barra", sets: 4, reps: 10 },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-bl from-black via-zinc-900 to-black h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bebas text-center text-white mb-12">
        Mis Rutinas
      </h1>

      <RequestRoutine />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mx-auto max-w-6xl">
        {routines.map((routine) => (
          <div
            key={routine.id}
            className="bg-white rounded-xl shadow-lg p-10 w-full max-w-3xl mx-auto flex flex-col justify-evenly"
          >
            <div className="flex items-center justify-center mb-4">
              <GiWeightLiftingUp className="text-black text-5xl mr-3" />
              <h2 className="text-2xl font-semibold text-black text-center">
                {routine.name}
              </h2>
            </div>
            <h3 className="text-lg font-medium text-black mb-4 text-center">
              Ejercicios:
            </h3>
            <ul className="list-disc list-inside text-black space-y-2 text-center">
              {routine.exercises.map((exercise, index) => (
                <li key={index} className="flex justify-between">
                  <span>{exercise.name}</span>
                  <span>
                    {exercise.sets}x{exercise.reps}
                  </span>
                </li>
              ))}
            </ul>
            <button className="flex w-50 p-3 mt-6 text-black items-center justify-center gap-3 border border-black rounded-2xl hover:bg-black hover:text-white transition-all duration-200">
              DESCARGAR
              <img src="/svg/pdfsvg.svg" alt="PDF" className="w-12 h-8" />
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Routines;
