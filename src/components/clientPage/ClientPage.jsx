import React, { useEffect, useState } from "react";
import { CiCalendar, CiLocationOn, CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { LuClock2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useClient } from "../../contexts/ClientContext";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify"; // Asegúrate de importar toast si lo usas

const ClientPage = () => {
  const { clientDetails, isLoading, error } = useClient();
  const [shiftDetails, setShiftDetails] = useState({});
  const queryClient = useQueryClient(); // Obtén el queryClient para usarlo en logout

  // Efecto para obtener detalles del turno
  useEffect(() => {
    const getMyShiftDetails = async () => {
      try {
        const response = await fetch(
          "https://localhost:7179/api/Shift/GetMyShiftDetails",
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
        setShiftDetails(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    // Solo llama a la función si no se está cargando y no hay error
    if (!isLoading && !error) {
      getMyShiftDetails();
    }
  }, [isLoading, error]); // Dependencias del useEffect

  // Manejo de carga
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  // Manejo de errores
  if (error) {
    return <div>Error al cargar los detalles del cliente: {error.message}</div>;
  }

  return (
    <div>
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider">
        <h1 className="text-white text-4xl">
          Bienvenido{" "}
          <strong className="text-yellow-400">
            {clientDetails.clientDto.firstName} {clientDetails.clientDto.lastName}
          </strong>
        </h1>
      </header>

      <div className="px-20 flex flex-col md:flex-row gap-10 py-10">
        <div className="w-1/2 flex flex-col gap-5">
          <article className="bg-gradient-to-br from-black via-zinc-800 to-black p-6 rounded-lg shadow-md text-white flex flex-col items-center">
            <h2 className="flex items-center w-full gap-1 text-2xl font-bebas uppercase mb-4 pb-2 border-black">
              <CiCalendar />
              Turno de Hoy
              {Object.keys(shiftDetails).length > 0 ? (
                <FaCheck className="text-green-400 ml-auto" />
              ) : (
                <LuClock2 className="text-yellow-500 ml-auto" />
              )}
            </h2>

            <div className="text-lg w-full">
              <p className="flex items-center gap-1">
                <CiLocationOn />
                <span className="text-yellow-400 font-bold">{shiftDetails.namelocation || " - "}</span>
              </p>

              <p className="flex items-center gap-1">
                <CiUser />
                <span className="font-semibold">Entrenador/a:</span>{" "}
                {shiftDetails.firstname && shiftDetails.lastname ? `${shiftDetails.firstname} ${shiftDetails.lastname}` : " - "}
              </p>

              <p className="flex items-center gap-1">
                <MdAccessTime />
                {shiftDetails.hour ? `${shiftDetails.hour} hs` : " - "}
              </p>
            </div>
          </article>

          <article className={`bg-yellow-400 h-24 p-4 rounded-lg flex flex-col items-center transition-all duration-200 ${Object.keys(shiftDetails).length > 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
            <Link
              to={Object.keys(shiftDetails).length > 0 ? "#" : "get-turn"}
              className={`text-3xl font-bebas cursor-pointer uppercase w-full h-28 flex items-center justify-center text-white ${Object.keys(shiftDetails).length > 0 ? "pointer-events-none" : ""}`}
            >
              {Object.keys(shiftDetails).length > 0 ? "Ya tienes un turno para hoy" : "Reservar turno"}
            </Link>
          </article>
        </div>

        <div className="w-full flex flex-col gap-5">
          <article className="w-full">
            <div className="bg-amber-400 flex items-center justify-between p-2">
              <h2 className="text-3xl font-bebas text-white">Mi plan nutricional</h2>
            </div>

            <ul>
              <li>
                <Link
                  className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                  to="nutritional-plan"
                >
                  Ver mi plan nutricional <FaArrowRight className="animate-bounce" />
                </Link>
              </li>
            </ul>
          </article>

          <article className="w-full">
            <div className="bg-amber-400 flex items-center justify-between p-2 ">
              <h2 className="text-3xl font-bebas text-white">Mis rutinas</h2>
            </div>

            <ul>
              <li>
                <Link
                  className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                  to="routine"
                >
                  Ver mis rutinas <FaArrowRight className="animate-bounce" />
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
