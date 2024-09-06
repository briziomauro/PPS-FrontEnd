import React, { useState } from 'react'
import Calendar from 'react-calendar';
import './ProfessorPage.css'
import { Link } from 'react-router-dom';

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
      <div className='flex text-black justify-center items-center h-[700px]'>
        <div className='flex  flex-col flex-1 justify-center items-center'>
          <h2 className='font-bebas text-5xl'>MIS TURNOS</h2>
          <div className='bg-white w-[300px] h-full text-black uppercase font-bebas text-xl mb-4'>
            <Calendar onChange={onChangeDate} value={date} />
          </div>
          <div className='flex flex-col font-bebas text-xl bg-zinc-800 text-white w-[500px] p-3'>
            <p className='border-b'>Proximo Turno:</p>
            <div className='flex mt-1'>
              <p className='flex-1'>Dia: <strong>10/10/24</strong></p>
              <div className="divider divider-horizontal bg-white w-[1px]"></div>
              <p className='flex-1'>Hora: <strong>15:00 HS</strong></p>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal bg-zinc-500 w-[1px]"></div>
        <div className='flex flex-col flex-1 justify-center items-center text-white h-full'>
          <h2 className='font-bebas text-5xl text-black mb-10'>ASIGNACIONES PENDIENTES:</h2>
          <div className='flex flex-col gap-5 font-bebas'>
            <Link to="/profesorid/assing-routine">
              <div className=' w-[450px] h-[150px] bg-zinc-900 border border-white flex justify-evenly items-center cursor-pointer hover:scale-105 hover:rotate-2 hover:bg-zinc-800 transition-all duration-200'>
                <p className='text-2xl'>RUTINAS PENDIENTES:</p>
                <p className='text-7xl'>5</p>
              </div>
            </Link>
            <Link to="/profesorid/assing-nutritional-plan">
              <div className='w-[450px] h-[150px] bg-zinc-900 border border-white flex justify-evenly items-center cursor-pointer hover:scale-105 hover:-rotate-2 hover:bg-zinc-800 transition-all duration-200'>
                <p className='text-2xl'>PLANES NUTRICIONALES PENDIENTES:</p>
                <p className='text-7xl'>7</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessorPage