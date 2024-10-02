import React, { useState } from 'react'
import './ProfessorPage.css'
import { Link } from 'react-router-dom';
import CalendarProf from '../calendarProf/CalendarProf';
import { FaArrowRight } from 'react-icons/fa';

const ProfessorPage = () => {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido <strong className="text-yellow-400">Jhon Doe</strong>
        </h1>
      </header>
      <div className='flex text-black justify-evenly items-center'>

        <div className='flex flex-col flex-1 justify-center items-center text-white h-full'>
          <h2 className='font-bebas text-5xl text-black mb-10'>ASIGNACIONES PENDIENTES:</h2>
          <div className='flex flex-col gap-5 font-bebas w-full justify-center'>
            <div className='flex justify-center'>
              <article className="w-3/4">
                <div className="bg-amber-400 flex items-center justify-between p-2">
                  <h2 className="text-3xl  font-bebas text-white">RUTINAS</h2>
                </div>
                <ul>
                  <li>
                    <Link
                      className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                      to="/profesorid/assing-routine"
                    >
                      5 Rutinas pendientes de Asignación<FaArrowRight className="animate-bounce" />
                    </Link>
                  </li>
                </ul>
              </article>
            </div>
            <div className='flex justify-center'>
              <article className="w-3/4">
                <div className="bg-amber-400 flex items-center justify-between p-2">
                  <h2 className="text-3xl  font-bebas text-white">PLANES NUTRICIONALES</h2>
                </div>
                <ul>
                  <li>
                    <Link
                      className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                      to="/profesorid/assing-nutritional-plan"
                    >
                      2 Planes pendientes de Asignación<FaArrowRight className="animate-bounce" />
                    </Link>
                  </li>
                </ul>
              </article>
            </div>
          </div>

          <div className='flex flex-col font-bebas text-xl bg-gradient-to-br from-black via-zinc-800 to-black text-white w-3/4 p-3 mt-10'>
            <p className='border-b'>Proximo Turno:</p>
            <div className='flex mt-1'>
              <p className='flex-1'>Dia: <strong>10/10/24</strong></p>
              <div className="divider divider-horizontal bg-white w-[1px]"></div>
              <p className='flex-1'>Hora: <strong>15:00 HS</strong></p>
            </div>
          </div>
        </div>


        <div className='flex flex-col flex-1 justify-center items-center my-10'>
          <div className='bg-white w-[600px] h-full text-black uppercase font-bebas text-xl mb-4 shadow-lg'>
            <CalendarProf />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessorPage