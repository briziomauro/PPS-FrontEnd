import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CiCalendar, CiLocationOn, CiUser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const ClientPage = () => {
  return (
    <>
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido <strong className="text-yellow-400">Jhon Doe</strong>
        </h1>
      </header>

      <main className="px-20  text-zinc-800 flex flex-col md:flex-row gap-10 py-10 ">
        <div className="w-1/2 flex flex-col gap-5 ">
          <article className="bg-amber-300 h-24  p-4 rounded-lg shadow-md text-zinc-800 flex flex-col items-center">
            <Link
              to="get-turn"
              className="text-lg cursor-pointer uppercase w-full bg-black/10 rounded hover:opacity-50 h-28 flex items-center justify-center"
            >
              Reservar turno
            </Link>
          </article>
          <article className="bg-yellow-300  p-6 rounded-lg shadow-md text-zinc-800 flex flex-col items-center">
            <h2 className="flex items-center w-full gap-1 text-2xl font-bold uppercase  mb-4  pb-2 border-black">
              <CiCalendar className="text-black " />
              Turno de Hoy
              <FaCheck className="text-green-400 ml-auto" />
            </h2>

            <div className="text-lg w-full">
              <p className="text-gray-700 flex items-center gap-1">
                <CiLocationOn />
                Locacion
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

          <article>
            <Calendar className="rounded" />
          </article>
        </div>

        <div className="w-full flex flex-col gap-5">
          <article className="w-full">
            <div className="bg-amber-400 flex items-center justify-between ">
              <h2 className="text-3xl  font-bebas p-1">Mi plan nutricional</h2>
            </div>

            <ul>
              <li>
                <Link
                  className="bg-zinc-700 flex justify-center items-center gap-3 text-white p-10 text-2xl rounded-b-3xl text-center hover:bg-zinc-800"
                  to="nutritional-plan"
                >
                  Ver mi plan nutricional <FaArrowRight />
                </Link>
              </li>
              <li></li>
              {/* <li className="bg-zinc-700 shadow-lg rounded-lg p-6 text-white ">
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
                </li> */}
            </ul>
          </article>

          <article className="w-full">
            <div className="bg-amber-400 flex items-center justify-between ">
              <h2 className="text-3xl  font-bebas p-1">Mis rutinas</h2>
            </div>

            <ul>
              <li>
                <Link
                  className="bg-zinc-700 flex justify-center items-center gap-3 text-white p-10 text-2xl rounded-b-3xl text-center hover:bg-zinc-800"
                  to="routine"
                >
                  Ver mis rutinas <FaArrowRight />
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </main>
    </>
  );
};

export default ClientPage;
