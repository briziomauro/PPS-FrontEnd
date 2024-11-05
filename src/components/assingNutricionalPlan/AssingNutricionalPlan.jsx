import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlanPending from "./PlanPending";

const AssingNutricionalPlan = () => {
  const [nutritionalPlans, setNutritionalPlans] = useState([]);
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
            "Cache-Control": "no-cache",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener el plan nutricional");
      }

      const data = await response.json();
      const filteredData = data.filter((n) => n.status == "In Progress");
      setNutritionalPlans(filteredData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const SendNutritionalPlan = async (plan, id) => {
    console.log(plan);
    console.log(id);
    const response = await fetch(
      `https://localhost:7179/api/NutritionalPlan/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plan),
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Error al enviar el plan nutricional al cliente");
    }
  };

  const handleSendPlan = async (plan, id) => {
    try {
      setLoading(true);
      await SendNutritionalPlan(plan, id);
      console.log("Plan enviado correctamente:");
      setNutritionalPlans((prevPlans) =>
        prevPlans.filter((plan) => plan.idNutritionalPlan !== id)
      );
      toast.success("Plan enviado correctamente.");
    } catch (error) {
      console.error("Error capturado en handleSubmit:", error);
      toast.error("Error al enviar el plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-bl from-black via-zinc-900 to-black">
          <h3 className="font-bebas text-5xl text-white mt-5 mb-10">
            ASIGNAR PLAN NUTRICIONAL:
          </h3>
          <div className="overflow-y-auto h-[600px]">
            <div className="flex flex-col gap-5 mx-10">
              {nutritionalPlans.map((n) => (
                <PlanPending
                  key={n.idNutritionalPlan}
                  id={n.idNutritionalPlan}
                  name={n.clientName}
                  age={n.clientBirthdate}
                  weight={n.weight}
                  height={n.height}
                  description={n.description}
                  onSendPlan={handleSendPlan}
                />
              ))}
              {nutritionalPlans.length === 0 && !loading && (
                <p className=" text-4xl text-gray-200 mt-10 mb-10">
                  No tienes planes nutricionales pendientes
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

export default AssingNutricionalPlan;
