import React from 'react'

const AssingRoutine = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <h3 className='font-bebas text-5xl text-black mb-10'>ASIGNAR RUTINAS:</h3>
        <div className='overflow-y-scroll h-[600px]'>
          <div className='flex flex-col gap-5 mx-10'>
            <div className='bg-zinc-900 w-[800px] h-[150px] flex justify-evenly items-center text-white'>
              <div className='bg-zinc-500 rounded-full h-[100px] w-[100px]' />
              <div className='flex flex-col'>
                <p>Nombre Cliente</p>
                <p>Edad</p>
                <div className='flex'>
                  <p className='flex-1'>Peso:</p>
                  <p className='flex-1'>Altura:</p>
                </div>
              </div>
              <div className='flex flex-col justify-evenly gap-2'>
                <p>Objetivo Rutina:</p>
                <button className='bg-white text-black p-3'>AGREGAR RUTINA</button>
              </div>
            </div>
            <div className='bg-zinc-900 w-[800px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[800px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[800px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[800px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[800px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[800px] h-[150px]'>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AssingRoutine