import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RutinaPending from "./RoutinasPending";

const AssingRoutine = () => {
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRoutine();
  }, []);

  const getRoutine = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://localhost:7179/api/Routine/GetMyRoutines",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener la rutina");
      }

      const data = await response.json();
      const filteredData = data.filter((r) => r.status === "In Progress");
      setRoutines(filteredData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const SendRoutine = async (routine, id) => {
    const response = await fetch(
      `https://localhost:7179/api/Routine/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(routine),
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Error al enviar la rutina al cliente");
    }
  };

  const handleSendRoutine = async (routine, id) => {
    try {
      setLoading(true);
      await SendRoutine(routine, id);
      console.log("Rutina enviada correctamente:");
      setRoutines((prevRoutines) =>
        prevRoutines.filter((routine) => routine.idroutine !== id)
      );
      toast.success("Rutina enviada correctamente.");
    } catch (error) {
      console.error("Error capturado en handleSendRoutine:", error);
      toast.error("Error al enviar la rutina");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-bl from-black via-zinc-900 to-black">
          <h3 className="font-bebas text-5xl text-white mt-5 mb-10">
            ASIGNAR RUTINA:
          </h3>
          <div className="overflow-y-auto h-[600px]">
            <div className="flex flex-col gap-5 mx-10">
              {routines.map((r) => (
                <RutinaPending
                  key={r.idroutine}
                  id={r.idroutine}
                  name={r.name}
                  age={r.clientBirthdate}
                  weight={r.weight}
                  height={r.height}
                  description={r.description}
                  days={r.days}
                  onSendRoutine={handleSendRoutine}
                />
              ))}
              {routines.length === 0 && !loading && (
                <p className="text-4xl text-gray-200 mt-10 mb-10">
                  No tienes rutinas pendientes
                </p>
              )}
            </div>
          </div>
        </div>
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
        transition:Bounce
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

export default AssingRoutine;
