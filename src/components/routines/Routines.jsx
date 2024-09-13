import { GiWeightLiftingUp } from "react-icons/gi";

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
    <div className="bg-yellow-400  min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-black mt-12 mb-12">
        Mis Rutinas
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mx-auto max-w-6xl">
        {routines.map((routine) => (
          <div
            key={routine.id}
            className="bg-white rounded-xl shadow-lg p-10 w-full max-w-3xl mx-auto"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routines;
