import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

const AssingShiftsPage = () => {

    return (
        <div className='flex flex-col h-screen bg-gradient-to-tl from-black via-zinc-900 to-black'>
            <div className='flex items-center justify-center'>
                <h2 className='font-bebas text-white text-5xl mt-5'>ASIGANCIÓN DE TURNOS</h2>
            </div>
            <div className='flex gap-4 justify-evenly h-full'>
                <div>
                    <div className='flex justify-center items-center text-white mt-10'>
                        <select className="select w-full max-w-xs rounded-none border border-yellow-400 bg-zinc-800">
                            <option disabled selected>Seleccione sede</option>
                            <option>Pichincha</option>
                            <option>Abasto</option>
                            <option>Shopping del siglo</option>
                            <option>Belgrano</option>
                            <option>Rioja</option>
                        </select>
                    </div>
                    <div className='items-center justify-center flex mt-8 '>
                        <div className='flex items-center justify-between text-white bg-black w-[1010px] h-[40px] border border-yellow-400'>
                            <p className='ml-3'>Turno 1</p>
                            <p className='m-1'>7:00hs - 15:00hs</p>
                            <select className="h-auto rounded-lg mr-3">
                                <option disabled selected>Seleccione Profesor</option>
                                <option>Joaquin</option>
                                <option>Mauro</option>
                                <option>Mateo</option>
                                <option>Nicolás 1</option>
                                <option>Nicolás 2</option>
                                <option>Santiago</option>
                                <option>Valentin</option>
                            </select>
                        </div>
                    </div>
                    <div className='items-center justify-center flex mt-8 '>
                        <div className='flex items-center justify-between text-white bg-black w-[1010px] h-[40px] border border-yellow-400'>
                            <p className='ml-3'>Turno 2</p>
                            <p className='m-1'>7:00hs - 15:00hs</p>
                            <select className="h-auto rounded-lg mr-3">
                                <option disabled selected>Seleccione Profesor</option>
                                <option>Joaquin</option>
                                <option>Mauro</option>
                                <option>Mateo</option>
                                <option>Nicolás 1</option>
                                <option>Nicolás 2</option>
                                <option>Santiago</option>
                                <option>Valentin</option>
                            </select>
                        </div>
                    </div>
                    <div className='items-center justify-center flex mt-8 '>
                        <div className='flex items-center justify-between text-white bg-black w-[1010px] h-[40px] border border-yellow-400'>
                            <p className='ml-3'>Turno 3</p>
                            <p className='m-1'>7:00hs - 15:00hs</p>
                            <select className="h-auto rounded-lg mr-3">
                                <option disabled selected>Seleccione Profesor</option>
                                <option>Joaquin</option>
                                <option>Mauro</option>
                                <option>Mateo</option>
                                <option>Nicolás 1</option>
                                <option>Nicolás 2</option>
                                <option>Santiago</option>
                                <option>Valentin</option>
                            </select>
                        </div>
                    </div>
                    <div className='items-center justify-center flex mt-8 '>
                        <div className='flex items-center justify-between text-white bg-black w-[1010px] h-[40px] border border-yellow-400'>
                            <p className='ml-3'>Turno 4</p>
                            <p className='m-1'>7:00hs - 15:00hs</p>
                            <select className="h-auto rounded-lg mr-3">
                                <option disabled selected>Seleccione Profesor</option>
                                <option>Joaquin</option>
                                <option>Mauro</option>
                                <option>Mateo</option>
                                <option>Nicolás 1</option>
                                <option>Nicolás 2</option>
                                <option>Santiago</option>
                                <option>Valentin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-[700px] h-[600px] text-black uppercase font-bebas text-xl mt-10 rounded-xl'>
                    <div className="container mx-auto p-4">
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            locales={[esLocale]}
                            locale="es"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssingShiftsPage