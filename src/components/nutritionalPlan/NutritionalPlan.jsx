import { CiForkAndKnife } from "react-icons/ci";
import WeightPicker from "../heightWeightPicker/WeightPicker";
import HeightPicker from "../heightWeightPicker/HeightPicker";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { AiOutlineFilePdf } from "react-icons/ai";

const NutritionalPlan = () => {
  const [nutritionalPlan, setNutritionalPlan] = useState();
  const [isPending, setIsPending] = useState(false);
  const [objective, setObjective] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNutritionalPlan();
  }, []);

  const getNutritionalPlan = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://localhost:7179/api/NutritionalPlan/GetMyPlans",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener el plan nutricional");
      }

      const data = await response.json();
      const pending = data.some((n) => n.status === "Pending");
      const filteredDate = data.find((n) => n.status === "Enabled");
      setNutritionalPlan(filteredDate);
      setIsPending(pending);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const AddNutritionalPlan = async (NutritionalPlanRequest) => {
    const response = await fetch("https://localhost:7179/api/NutritionalPlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(NutritionalPlanRequest),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error al obtener los detalles del cliente");
    }

    return response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    if (objective.length < 5 || objective.length > 50) return setError(true);
    document.getElementById("my_modal_10").close();
    const NutritionalPlanRequest = {
      weight: weight,
      height: height,
      description: objective,
    };

    try {
      setLoading(true);
      const response = await AddNutritionalPlan(NutritionalPlanRequest);
      console.log("Rutina enviada correctamente:", response);
      toast.success("Plan solicitado correctamente.");
      setIsPending(true);
      setObjective("");
    } catch (error) {
      console.error("Error capturado en handleSubmit:", error);
      toast.error("Error al solicitar el plan");
    } finally {
      setLoading(false);
    }
  };
  const handleDownloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4"); // Formato A4 en mm (p para orientación vertical)

    const imageUrl = "/img/logoTC.png";

    // Agregar el logo
    doc.addImage(imageUrl, "PNG", 80, 10, 60, 30);

    // Agregar un título al PDF
    doc.setFontSize(18);
    doc.text("PLAN NUTRICIONAL:", 10, 60);

    // Detalles del cliente
    doc.setFontSize(14);
    doc.text(`Nombre y Apellido: ${nutritionalPlan.clientName}`, 10, 70);

    doc.text(
      `Peso de: ${nutritionalPlan.weight}kg Altura:${nutritionalPlan.height}m`,
      10,
      80
    );

    // Crear tabla para mostrar las comidas
    const tableColumn = ["Comida", "Descripción"];
    const tableRows = [
      ["Desayuno", nutritionalPlan.breakfast],
      ["Almuerzo", nutritionalPlan.lunch],
      ["Merienda", nutritionalPlan.brunch],
      ["Cena", nutritionalPlan.dinner],
      ["Snack post-entrenamiento", nutritionalPlan.snack],
    ];

    // Establecer las columnas y las filas de la tabla
    doc.autoTable({
      startY: 100, // Comienza la tabla en la posición Y 90 mm (debajo del título "Comidas")
      head: [tableColumn],
      body: tableRows,
      theme: "grid", // Usar un tema de cuadrícula para las celdas
      headStyles: {
        fillColor: "#FFA500", // Color de fondo del título de las columnas (amarillo/naranja)
        textColor: [255, 255, 255], // Color del texto (blanco)
        fontSize: 12,
        halign: "center", // Alinear el texto al centro
      },
      styles: { fontSize: 12 },
    });

    // Descarga el PDF
    doc.save(`plan_nutricional_de_${nutritionalPlan.clientName}.pdf`);
  };

  console.log(nutritionalPlan);
  return (
    <>
      <div className=" flex h-screen justify-center items-center bg-gradient-to-br from-black via-zinc-800 to-black p-6">
        {!loading && (
          <div className="max-w-4xl w-full ">
            <h3 className="text-6xl font-bebas text-white mb-6 flex justify-between">
              Plan Nutricional
            </h3>
            {nutritionalPlan?.status === "Enabled" ? (
              <>
                <p className="text-lg mb-4  text-white">
                  <span className="font-medium text-yellow-400">Objetivo:</span>{" "}
                  {nutritionalPlan.description}
                </p>

                <div
                  className="flex flex-wrap justify-between  gap-6 text-black"
                  id="nutritional-plan-content"
                >
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
                    <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
                      <CiForkAndKnife />
                      Desayuno
                    </h4>
                    <p>{nutritionalPlan.breakfast}</p>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
                    <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
                      <CiForkAndKnife /> Almuerzo
                    </h4>
                    <p>{nutritionalPlan.lunch}</p>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
                    <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
                      <CiForkAndKnife /> Merienda
                    </h4>
                    <p>{nutritionalPlan.brunch}</p>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
                    <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
                      <CiForkAndKnife /> Cena
                    </h4>
                    <p>{nutritionalPlan.dinner}</p>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-lg shadow-md">
                    <h4 className="flex items-center gap-1 text-xl font-semibold mb-2">
                      <CiForkAndKnife /> Snack post-entrenamiento
                    </h4>
                    <p>{nutritionalPlan.snack}</p>
                  </div>
                </div>
                <div className="flex items-center mt-16">
                  {isPending && (
                    <span className="text-amber-400">
                      El entrenador esta evaluando el cambio de plan
                    </span>
                  )}

                  <button onClick={handleDownloadPDF} className="flex w-50 p-3 text-white items-center justify-center gap-3 border border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-200">
                    DESCARGAR
                    <img src="/svg/pdfsvg.svg" alt="PDF" className="w-12 h-8" />
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_10").showModal()
                    }
                    className="text-md rounded border text-white p-4 ml-auto hover:bg-white/5 "
                  >
                    Solicitar cambio de plan
                  </button>
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
                  Solicitar Plan Nutricional
                </button>
                {isPending && (
                  <span className="text-amber-400 mt-5 w-full ml-auto font-bebas text-2xl">
                    El entrenador esta evaluando el plan
                  </span>
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
                    className="flex bg-yellow-500 w-full text-white font-bebas text-xl justify-center p-2 mt-7 rounded-xl hover:bg-yellow-400 transition-all duration-200"
                  >
                    <p>ENVIAR</p>
                  </button>
                </form>
              </div>
            </dialog>
          </div>
        )}

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
          transition:Bounce
        />
      </div>

      {loading && (
        <div className="fixed inset-0 z-[500000] flex items-center justify-center bg-black/45">
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

export default NutritionalPlan;
