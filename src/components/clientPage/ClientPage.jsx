import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiTimer } from "react-icons/ci";

const ClientPage = () => {
  return (
    <>
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido <strong className="text-yellow-400">Jhon Doe</strong>
        </h1>
      </header>

      <main className="px-20 mt-10 text-zinc-800  ">
        <div className="flexmin-w-80 text-2xl flex flex-col gap-3  bg-teal-500 text-white font-bold p-5 rounded">
          <div className="border-b pb-2 flex justify-between ">
            <h2 className="font-bebas text-4xl">Mi turno de hoy</h2>
            <p className="flex items-center gap-2">
              Pendiente <CiTimer />
            </p>
          </div>

          <div className="flex justify-between text-zinc-700">
            <h3 className="">Musculación Rioja</h3>
            <p className="">Jueves 29/08/2024 07:00</p>
          </div>
        </div>

        <div className="my-10 w-full">
          <div className="bg-amber-400 flex items-center justify-between ">
            <h2 className="text-3xl  font-bebas p-1">Mi plan nutricional</h2>
            <span>
              <MdOutlineKeyboardArrowDown size={40} />
            </span>
          </div>
          <a
            className="bg-zinc-700 block text-white p-10 text-2xl rounded-b-3xl text-center hover:bg-zinc-800"
            href=""
          >
            Solicitar plan nutricional
          </a>
        </div>

        <div className="my-10 w-full">
          <div className="bg-amber-400 flex items-center justify-between ">
            <h2 className="text-3xl  font-bebas p-1">Mis rutinas</h2>
            <span>
              <MdOutlineKeyboardArrowDown size={40} />
            </span>
          </div>
          <a
            className="bg-zinc-700 block text-white p-10 text-2xl rounded-b-3xl text-center hover:bg-zinc-800"
            href=""
          >
            Solicitar rutinas
          </a>
        </div>
      </main>
    </>
  );
};

export default ClientPage;

{
  /* <div className="bg-zinc-900 shadow-lg rounded-lg p-6 text-yellow-400 max-w-lg">
          <h3 className="font-bold text-xl mb-4 text-yellow-500">
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
              <strong>Desayuno:</strong> Avena con leche descremada, 1 banana, 1
              huevo duro.
            </li>
            <li>
              <strong>Almuerzo:</strong> Pechuga de pollo a la plancha, arroz
              integral, ensalada de espinaca.
            </li>
            <li>
              <strong>Merienda:</strong> Batido de proteínas, 1 manzana.
            </li>
            <li>
              <strong>Cena:</strong> Salmón al horno, batata asada, brócoli al
              vapor.
            </li>
            <li>
              <strong>Snack post-entrenamiento:</strong> Yogur griego con
              almendras.
            </li>
          </ul>
        </div> */
}
