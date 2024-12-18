import { useState } from "react";

const PlanPending = ({
  id,
  name,
  age,
  weight,
  height,
  description,
  onSendPlan,
}) => {
  const [nutritionalPlan, setNutritionalPlan] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
    brunch: "",
    snack: "",
  });
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRechazarModalOpen, setIsRechazarModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const validateNutritionalPlan = () => {
    const newErrors = {};
    const fields = ["breakfast", "lunch", "dinner", "brunch", "snack"];

    fields.forEach((field) => {
      if (nutritionalPlan[field].trim().length < 5) {
        newErrors[field] = "Debe contener al menos 5 caracteres";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateDenyMessage = () => {
    const newErrors = {};
    if (message && (message.length < 5 || message.length > 50)) {
      newErrors.message = "El mensaje debe tener entre 5 y 50 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setNutritionalPlan({ ...nutritionalPlan, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpiar error al modificar el campo
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setErrors({ ...errors, message: "" });
  };

  const handleSubmit = () => {
    if (validateNutritionalPlan()) {
      const plan = {
        breakfast: nutritionalPlan.breakfast,
        lunch: nutritionalPlan.lunch,
        dinner: nutritionalPlan.dinner,
        brunch: nutritionalPlan.brunch,
        snack: nutritionalPlan.snack,
      };

      onSendPlan(plan, id);

      setIsModalOpen(false);
    }
  };

  const handleDeny = () => {
    if (validateDenyMessage()) {
      let plan = {
        status: "Denied",
        ...(message && { message }),
      };

      onSendPlan(plan, id);

      setIsModalOpen(false);
    }
  };

  function calcularEdad(fechaNacimiento) {
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
    <div className="bg-zinc-800 w-[1000px] h-[150px] flex justify-evenly items-center text-white">
      <div className="bg-zinc-500 rounded-full h-[100px] w-[100px]">
        <img src="/img/person.png" className="w-full" alt="" />
      </div>
      <div className="flex flex-col">
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
          <strong>Objetivo Plan:</strong> {description}
        </p>
        <div className="max-w-[300px] w-full flex gap-3">
          <button
            className="bg-white text-black px-5 py-3 rounded-lg uppercase font-bebas text-xl hover:text-white hover:bg-yellow-500 transition-all duration-200"
            onClick={() => setIsModalOpen(true)}
          >
            Agregar Plan
          </button>
          <button
            className="bg-red-600 text-white px-5 py-3 rounded-lg uppercase font-bebas text-xl hover:text-white hover:bg-red-800 transition-all duration-200"
            onClick={() => setIsRechazarModalOpen(true)}
          >
            Rechazar Plan
          </button>
        </div>

        {/* Modal de Agregar Plan */}
        {isModalOpen && (
          <dialog open className="modal">
            <div className="modal-box bg-white text-black p-6 rounded-lg flex flex-col">
              <h3 className="font-bold text-lg">Nuevo Plan Nutricional</h3>
              <p className="text-sm text-gray-600 py-4">
                Ingresa los detalles del plan para cada comida:
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex-1 overflow-y-auto pb-24 px-2"
              >
                <div className="flex flex-col gap-4">
                  {[
                    { key: "breakfast", label: "Desayuno" },
                    { key: "brunch", label: "Brunch" },
                    { key: "lunch", label: "Almuerzo" },
                    { key: "dinner", label: "Cena" },
                    { key: "snack", label: "Merienda" },
                  ].map(({ key, label }) => (
                    <div key={key}>
                      <label className="block text-gray-700 font-semibold mb-1 capitalize">
                        {label}
                      </label>
                      <textarea
                        name={key}
                        value={nutritionalPlan[key]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg bg-white resize-none"
                        placeholder={`Descripción de ${label.toLowerCase()}`}
                        rows={2}
                      />
                      {errors[key] && (
                        <p className="text-red-500 text-sm">{errors[key]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </form>


              <div className="mt-6 flex justify-end gap-3 bg-white p-4 fixed bottom-0 left-0 right-0 border-t">
                <button
                  type="button"
                  className="bg-gray-300 text-black px-5 py-2 rounded-lg font-bebas text-lg hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="bg-yellow-500 text-white px-5 py-2 rounded-lg font-bebas text-lg hover:bg-yellow-600"
                  onClick={handleSubmit}
                >
                  Enviar Plan
                </button>
              </div>
            </div>
          </dialog>
        )}

        {/* Modal de Rechazar Plan */}
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
                Seguro que desea rechazar el plan?
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

export default PlanPending;
