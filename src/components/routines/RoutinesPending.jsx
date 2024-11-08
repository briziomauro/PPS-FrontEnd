
import { useState } from "react";
import AssignExerciseToRoutine from "./AssignExerciseToRoutine";


const RoutinesPending = ({ id, name, age, weight, height, description, days,dniClient, handleSendRoutine, ChangeRoutineStatus }) => {

  const [message, setMessage] = useState("");
  const [isRechazarModalOpen, setIsRechazarModalOpen] = useState(false);
  const [errors, setErrors] = useState({});


 
  const handleSendRoutineObj = (routineExerciseObject) =>
    {
      //mapear para devolver bien
    const routineExerciseData =  Object.values(routineExerciseObject).flatMap(dayExercises => 
        dayExercises.map(exercise => ({
            idexercise: exercise.idexercise,
            series: exercise.series,
            breaktime: exercise.breaktime,
            day: exercise.day,  // Puedes agregar aquí algún valor por defecto si es necesario
        }))
    );
    console.log("Id de la rutina", id)
    handleSendRoutine(routineExerciseData,id)

    }
  
  const handleDeny = () => {
    if (validateDenyMessage()) {
     

      ChangeRoutineStatus(dniClient);
    }
  };

  const validateDenyMessage = () => {
    const newErrors = {};
    if (message && (message.length < 5 || message.length > 50)) {
      newErrors.message = "El mensaje debe tener entre 5 y 50 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setErrors({ ...errors, message: "" });
  };





  function calcularEdad(fechaNacimiento) {
    console.log(fechaNacimiento);
    if (!fechaNacimiento) return null; // Si no hay fecha, devuelve null o un valor adecuado

    const partes = fechaNacimiento.split("/");
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const año = parseInt(partes[2], 10);

    const hoy = new Date();
    const nacimiento = new Date(año, mes, dia);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesDif = hoy.getMonth() - mes;

    if (mesDif < 0 || (mesDif === 0 && hoy.getDate() < dia)) {
      edad--;
    }

    return edad;
  }


  return (
    <div className="bg-zinc-800 rounded-2xl w-[1000px] h-[150px] flex justify-evenly items-center text-white">
      <div className="bg-zinc-500 rounded-full h-[100px] w-[100px]">
        <img src="/img/person.png" className="w-full" alt="" />
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="font-bold text-lg">{name}</p>
        <p>
          <strong>Edad:</strong> {calcularEdad(age)}
        </p>
        <p>
          <strong>Peso:</strong> {weight} kg
        </p>
        <p>
          <strong>Altura:</strong> {height} m
        </p>
      </div>
      <div className="flex flex-col justify-evenly gap-2">
        <p>
          <strong>Objetivo Rutina:</strong> {description}
        </p>
        <p>
          <strong>Días:</strong> {days}
        </p>
        <div className="max-w-[400px] w-full flex gap-3">
          {console.log(name)}
          <AssignExerciseToRoutine key={id} routineId={id} name={name} days={days} handleSendRoutineObj = {handleSendRoutineObj}/>

          <button
            className="bg-red-600 text-white px-5 py-3 rounded-lg uppercase font-bebas text-xl hover:text-white hover:bg-red-800 transition-all duration-200"
            onClick={() => setIsRechazarModalOpen(true)}
          >
            Rechazar Rutina
          </button>
        </div>

        {isRechazarModalOpen && (
          <dialog open className="modal">
            <div className="modal-box bg-white text-black">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setIsRechazarModalOpen(false)}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">
                Seguro que desea rechazar la rutina?
              </h3>
              <div className="flex flex-col pt-4">
                <p className="font-bold">{name}</p>
                <p>
                  <strong>Edad:</strong> {calcularEdad(age)}
                </p>
                <p>
                  <strong>Peso:</strong> {weight} kg
                </p>
                <p>
                  <strong>Altura:</strong> {height} m
                </p>
              </div>
              <div className="flex flex-col w-full py-4">
                <label className="text-black text-md p-2 font-bebas">
                  Mensaje (opcional):
                </label>
                <input
                  type="text"
                  maxLength="50"
                  minLength="5"
                  className="w-full bg-white text-black p-2 rounded-lg border-2 transition-colors duration-200"
                  value={message}
                  onChange={handleMessageChange}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  className="bg-red-600 text-white px-5 py-2 rounded-lg uppercase font-bebas text-lg hover:bg-red-800 transition-all duration-200"
                  onClick={handleDeny}
                >
                  Rechazar
                </button>
                <button
                  className="bg-black text-white px-5 py-2 rounded-lg uppercase font-bebas text-lg hover:bg-black/50 transition-all duration-200"
                  onClick={() => setIsRechazarModalOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default RoutinesPending;
