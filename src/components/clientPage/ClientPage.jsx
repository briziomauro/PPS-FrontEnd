import React, { useState } from "react";
import {
  MdAccessTime,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { CiCalendar, CiLocationOn, CiTimer, CiUser } from "react-icons/ci";
import { CgGym } from "react-icons/cg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCheck } from "react-icons/fa";

const ClientPage = () => {
  const [togglePlans, setTogglePlans] = useState(true);
  const [toggleRoutines, setToggleRoutines] = useState(true);
  return (
    <>
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido <strong className="text-yellow-400">Jhon Doe</strong>
        </h1>
      </header>

      <main className="px-20  text-zinc-800 flex flex-col md:flex-row gap-10 py-10 ">
        <div className="w-1/2 flex flex-col gap-5 ">
          <article className="bg-yellow-300  p-6 rounded-lg shadow-md text-zinc-800 flex flex-col items-center">
            {/* Título */}
            <h2 className="flex items-center w-full gap-1 text-2xl font-bold uppercase  mb-4  pb-2 border-black">
              <CiCalendar className="text-black " />
              Turno de Hoy
              <FaCheck className="text-green-400 ml-auto" />
            </h2>

            <div className="text-lg w-full">
              {/* Tipo de entrenamiento */}
              <p className="text-gray-700 flex items-center gap-1">
                <CiLocationOn />
                Locacion
              </p>

              {/* Entrenador */}
              <p className="flex items-center gap-1">
                <CiUser /> <span className="font-semibold">Entrenador:</span>{" "}
                Carlos Pérez
              </p>

              {/* Horario */}
              <p className="flex items-center gap-1">
                <MdAccessTime />
                17:00
              </p>
            </div>
          </article>
          <article className="bg-yellow-300  p-6 rounded-lg shadow-md text-zinc-800 flex flex-col items-center">
            {/* Título */}
            <h2 className="flex items-center w-full gap-1 text-2xl font-bold uppercase  mb-4  pb-2 border-black">
              <CiCalendar className="text-black " />
              Turno de Hoy
            </h2>

            <a className="text-lg cursor-pointer w-full bg-black/10 rounded hover:opacity-50 h-28 flex items-center justify-center">
              Solicitar turno
            </a>
          </article>
          <article className="">
            <Calendar className="rounded !bg-zinc-700 text-white" />
          </article>
        </div>

        <div className="w-full flex flex-col gap-5">
          <article className="w-full">
            <div className="bg-amber-400 flex items-center justify-between ">
              <h2 className="text-3xl  font-bebas p-1">Mi plan nutricional</h2>
              <span
                onClick={() => setTogglePlans((prev) => !prev)}
                className="cursor-pointer hover:opacity-40"
              >
                {!togglePlans ? (
                  <MdOutlineKeyboardArrowDown size={40} />
                ) : (
                  <MdOutlineKeyboardArrowUp size={40} />
                )}
              </span>
            </div>
            {togglePlans && (
              <div>
                <a
                  className="bg-zinc-700 block text-white p-10 text-2xl rounded-b-3xl text-center hover:bg-zinc-800"
                  href=""
                >
                  Solicitar plan nutricional
                </a>
                <div className="bg-zinc-700 shadow-lg rounded-lg p-6 text-white ">
                  <h3 className="font-bold text-xl mb-4 ">
                    Plan nutricional básico
                  </h3>
                  <p>
                    <strong>Objetivo:</strong> Ganancia de masa muscular
                  </p>
                  <p>
                    <strong>Calorías diarias:</strong> 2,500 kcal
                  </p>
                  <ul className="list-disc ml-5 mt-4">
                    <li>
                      <strong>Desayuno:</strong> Avena con leche descremada, 1
                      banana, 1 huevo duro.
                    </li>
                    <li>
                      <strong>Almuerzo:</strong> Pechuga de pollo a la plancha,
                      arroz integral, ensalada de espinaca.
                    </li>
                    <li>
                      <strong>Merienda:</strong> Batido de proteínas, 1 manzana.
                    </li>
                    <li>
                      <strong>Cena:</strong> Salmón al horno, batata asada,
                      brócoli al vapor.
                    </li>
                    <li>
                      <strong>Snack post-entrenamiento:</strong> Yogur griego
                      con almendras.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </article>

          <article className="w-full">
            <div className="bg-amber-400 flex items-center justify-between ">
              <h2 className="text-3xl  font-bebas p-1">Mis rutinas</h2>
              <span
                onClick={() => setToggleRoutines((prev) => !prev)}
                className="cursor-pointer hover:opacity-40"
              >
                {!toggleRoutines ? (
                  <MdOutlineKeyboardArrowDown size={40} />
                ) : (
                  <MdOutlineKeyboardArrowUp size={40} />
                )}
              </span>
            </div>
            {toggleRoutines && (
              <div>
                <a
                  className="bg-zinc-700 block text-white p-10 text-2xl rounded-b-3xl text-center hover:bg-zinc-800"
                  href=""
                >
                  Solicitar rutinas
                </a>
              </div>
            )}
          </article>
        </div>
      </main>
    </>
  );
};

export default ClientPage;

{
  /*  */
}
