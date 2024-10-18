import { PiWarningCircleLight } from "react-icons/pi";
import { useMembership } from "../../contexts/MembershipContext";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SiMercadopago } from "react-icons/si";
import { div } from "framer-motion/client";
const MembershipPayment = ({ previousStep }) => {
  const { membershipData, errorMemberhsip, isLoadingMember } = useMembership();
  const [clientStoredData, setClientStoredData] = useState(null);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [error, setError] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    const getStoredClient = async () => {
      try {
        const response = await fetch(
          "https://localhost:7179/api/Client/GetStoredClientUserData",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener los detalles del cliente");
        }

        const data = await response.json();
        setClientStoredData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getStoredClient();
  }, []);

  if (isLoadingMember) {
    return <div>Cargando...</div>;
  }

  if (errorMemberhsip) {
    return <div>Error al cargar las membresías</div>;
  }

  // Filtrar la membresía seleccionada basada en el tipo de membresía del cliente
  const selectedMembership =
    clientStoredData && clientStoredData.clientRequest.typememberships
      ? membershipData.find(
          (membership) =>
            membership.type === clientStoredData.clientRequest.typememberships
        )
      : null;

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoadingPayment(true);

    const createUrlPreference = async () => {
      try {
        const response = await fetch(
          "https://localhost:7179/api/Payments/create-preference",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Type: selectedMembership.type,
              BackUrls: {
                Success: "http://localhost:5173/register/3",
                Failure: "http://localhost:5173/register/2",
                Pending: "http://localhost:5173/register/2",
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Error al crear la preferencia de pago");
        }

        const data = await response.json();

        window.location.href = data.init_point;
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadingPayment(false);
      }
    };

    await createUrlPreference();
  };

  const handleChangeData = () => {
    previousStep();
  };

  return (
    <div className="flex flex-col text-center text-black justify-center ">
      <h2 className="font-bebas mt-6 text-4xl text-zinc-700 text-center ">
        PAGO DE MEMBRESIA
      </h2>
      <form onSubmit={handlePayment}>
        <h3>Información de su membresía</h3>
        {selectedMembership && (
          <div className="flex justify-center items-center flex-col">
            <div className="w-[500px] p-4 mt-5 text-center font-poppins text-xl">
              <div className="flex gap-3 justify-center w-full text-center items-center">
                <p className="uppercase font-bebas text-3xl">
                  {selectedMembership.type}
                </p>
                <p>-</p>
                <p>
                  ${selectedMembership.price}
                  <strong> ARS/MES</strong>
                </p>{" "}
              </div>
              <ul className="list-disc list-inside mt-4 text-left">
                {selectedMembership.description
                  .split(".")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
            <div className="h-[1px] bg-black flex w-2/3 mt-5" />
          </div>
        )}
        <div className="flex justify-center p-10 items-center ">
          <button
            type="submit"
            className={`relative overflow-hidden border px-4 py-2 flex items-center gap-3 w-[200px] rounded-full text-white justify-center text-3xl font-bebas bg-cyan-500 hover:scale-105 transition-all ${
              loadingPayment ? "pointer-events-none" : ""
            }`}
            disabled={loadingPayment}
            onClick={handlePayment}
          >
            <SiMercadopago className="text-5xl" />
            {loadingPayment ? "..." : "PAGAR"}

            {loadingPayment && (
              <span className="absolute left-0 top-0 h-full bg-cyan-400 animate-progress-loading"></span>
            )}
          </button>
        </div>
        {error && <p className="text-red-600">{error}</p>}
      </form>
      <div className="flex items-center gap-2 justify-center ">
        <PiWarningCircleLight className="text-xl" />
        <p className="">
          <strong>VERIFICA TUS DATOS</strong> - DESPUES DE PAGAR NO SE PUEDE
          VOLVER ATRAS.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleChangeData}
          className="flex items-center justify-center gap-3  p-4 text-black border-black border my-4 hover:scale-105 transition-all rounded-full "
        >
          <FaArrowLeftLong className="animate-bounce" /> Modificar mis datos
        </button>
      </div>
    </div>
  );
};

export default MembershipPayment;
