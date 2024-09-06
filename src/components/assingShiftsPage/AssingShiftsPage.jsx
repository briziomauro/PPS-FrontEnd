import React from 'react'

const AssingShiftsPage = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <h2 className='font-bebas text-black text-3xl'>ASIGANCIÓN DE TURNOS</h2>
            </div>
            <div className='text-white ml-3 '>
                <select className="select w-full max-w-xs rounded-none border border-yellow-400">
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
        </div>
    )
}

export default AssingShiftsPage