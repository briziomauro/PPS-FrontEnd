import React from "react";
import { CiCalendar, CiLocationOn, CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import { useClient } from "../../contexts/ClientContext";
import { useQueryClient } from "@tanstack/react-query";

const ClientPage = () => {
  const { clientDetails, isLoading, error } = useClient();
  const queryClient = useQueryClient(); // Obtén el queryClient para usarlo en logout

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los detalles del cliente: {error.message}</div>;
  }


  return (
    <div>
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido{" "}
          <strong className="text-yellow-400">
            {clientDetails.clientDto.firstName} {clientDetails.clientDto.lastName}
          </strong>
        </h1>
      </header>

      <div className="px-20 flex flex-col md:flex-row gap-10 py-10 ">
        <div className="w-1/2 flex flex-col gap-5 ">
          <article className="bg-gradient-to-br from-black via-zinc-800 to-black p-6 rounded-lg shadow-md text-white flex flex-col items-center">
            <h2 className="flex items-center w-full gap-1 text-2xl font-bebas uppercase  mb-4  pb-2 border-black">
              <CiCalendar />
              Turno de Hoy
              <FaCheck className="text-green-400 ml-auto" />
            </h2>

            <div className="text-lg w-full">
              <p className="flex items-center gap-1">
                <CiLocationOn />
                Sede Pichincha
              </p>

              <p className="flex items-center gap-1">
                <CiUser /> <span className="font-semibold">Entrenador:</span>{" "}
                Carlos Pérez
              </p>

              <p className="flex items-center gap-1">
                <MdAccessTime />
                17:00
              </p>
            </div>
          </article>
          <article className="bg-yellow-400 h-24 p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-all duration-200">
            <Link
              to="get-turn"
              className="text-3xl font-bebas cursor-pointer uppercase w-full h-28 flex items-center justify-center text-white"
            >
              Reservar turno
            </Link>
          </article>
        </div>

        <div className="w-full flex flex-col gap-5">
          <article className="w-full">
            <div className="bg-amber-400 flex items-center justify-between p-2">
              <h2 className="text-3xl  font-bebas text-white">Mi plan nutricional</h2>
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
              <h2 className="text-3xl  font-bebas text-white">Mis rutinas</h2>
            </div>

            <ul>
              <li>
                <Link
                  className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900  transition-all duration-200"
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
