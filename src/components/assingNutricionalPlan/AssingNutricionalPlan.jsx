import React from 'react'

const AssingNutricionalPlan = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-bl from-black via-zinc-900 to-black'>
        <h3 className='font-bebas text-5xl text-white mb-10'>ASIGNAR PLAN NUTRICIONAL:</h3>
        <div className='overflow-y-scroll h-[600px]'>
          <div className='flex flex-col gap-5 mx-10'>
            <div className='bg-zinc-800 w-[1000px] h-[150px] flex justify-evenly items-center text-white'>
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
                <p>Objetivo Plan:</p>
                {/*Esto va a ser el endpoint de "POST Rutina" */}
                <button className="bg-white text-black px-5 py-3 rounded-lg uppercase font-bebas text-xl hover:text-white hover:bg-yellow-500 transition-all duration-200" onClick={() => document.getElementById('my_modal_3').showModal()}>Agregar Plan</button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-white text-black">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Plan Alimenticio para *Nombre Cliente*</h3>
                    <p className="py-4">Formulario de Nuevo Plan</p>
                  </div>
                </dialog>
              </div>
            </div>
            <div className='bg-zinc-800 w-[1000px] h-[150px] flex justify-evenly items-center text-white'>
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
                <p>Objetivo Plan:</p>
                {/*Esto va a ser el endpoint de "POST Plan Nutricional" */}
                <button className="bg-white text-black px-5 py-3 rounded-lg uppercase font-bebas text-xl hover:text-white hover:bg-yellow-500 transition-all duration-200" onClick={() => document.getElementById('my_modal_4').showModal()}>Ver Plan</button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box bg-white text-black">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Plan de *Nombre Cliente*</h3>
                    <p className="py-4">Ver Plan</p>
                    <div className='flex justify-evenly gap-3'>
                      {/*Esto va a ser el endpoint de "PUT/DELETE Plan Nutricional" */}
                      <button className='bg-zinc-800 text-white flex-1 p-2 rounded-sm font-bebas text-lg hover:bg-zinc-900'>Editar</button>
                      <button className='bg-zinc-800 text-white flex-1 p-2 rounded-sm font-bebas text-lg hover:bg-zinc-900'>Eliminar</button>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <div className='bg-zinc-900 w-[1000px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[1000px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[1000px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[1000px] h-[150px]'>

            </div>
            <div className='bg-zinc-900 w-[1000px] h-[150px]'>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AssingNutricionalPlan