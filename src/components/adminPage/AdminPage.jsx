import React from 'react'
import { DiAndroid, DiVim } from 'react-icons/di'

const AdminPage = () => {
  return (
    <div className='flex h-screen'>
      {/* Reporte de asistencias */}
      <div className='flex-1 flex flex-col h-[800px] justify-evenly items-center'>
        <h2 className='text-black text-5xl font-bebas'>REPORTES TOTALES</h2>
        <div>
          <div className='flex justify-center items-center text-black text-2xl font-bebas'>
            <h3>CANTIDAD DE PERSONAS POR SEDE</h3>
          </div>
          <div className='flex justify-center items-center gap-5 text-white'>
            <div className=' bg-zinc-800 w-[250px] h-[250px] flex flex-col justify-evenly items-center'>
              <h4>Sede Rioja</h4>
              <span className='flex'>
                <p className='text-8xl'>80</p>
                <p className='text-sm flex items-end pb-3'>Usuarios</p>
              </span>
            </div>
            <div className=' bg-zinc-800 w-[250px] h-[250px] flex flex-col justify-evenly items-center'>
              <h4>Sede Abasto</h4>
              <span className='flex'>
                <p className='text-8xl'>35</p>
                <p className='text-sm flex items-end pb-3'>Usuarios</p>
              </span>
            </div>
            <div className=' bg-zinc-800 w-[250px] h-[250px] flex flex-col justify-evenly items-center'>
              <h4>Sede Pichincha</h4>
              <span className='flex'>
                <p className='text-8xl'>109</p>
                <p className='text-sm flex items-end pb-3'>Usuarios</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 flex flex-col h-[800px] justify-center items-center gap-6'>
        {/* Valoración de planes nutricionales */}
        <div>
          <div className='flex justify-center items-center text-black text-3xl font-bebas'>
            <h3>VALORACIÓN DE PLANES NUTRICIONALES</h3>
          </div>
          <div className='flex flex-col justify-center items-center gap-5 text-white'>
            <div className=' bg-zinc-800 w-[450px] h-[100px] flex justify-evenly items-center '>
              <div className='flex flex-col'>
                <h4>Plan 1</h4>
                <p>Profesor:</p>
              </div>

              <span className='flex'>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </span>
            </div>
            <div className=' bg-zinc-800 w-[450px] h-[100px] flex justify-evenly items-center '>
              <div className='flex flex-col'>
                <h4>Plan 2</h4>
                <p>Profesor:</p>
              </div>

              <span className='flex'>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </span>
            </div>
            <div className=' bg-zinc-800 w-[450px] h-[100px] flex justify-evenly items-center '>
              <div className='flex flex-col'>
                <h4>Plan 3</h4>
                <p>Profesor:</p>
              </div>

              <span className='flex'>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </span>
            </div>
          </div>
        </div>

        {/*Valoración de rutinas*/}
        <div>
          <div className='flex justify-center items-center text-black text-3xl font-bebas '>
            <h3>VALORACIÓN DE RUTINAS</h3>
          </div>
          <div className='flex flex-col justify-center items-center gap-5 text-white'>
            <div className=' bg-zinc-800 w-[450px] h-[100px] flex justify-evenly items-center '>
              <div className='flex flex-col'>
                <h4>Rutina 1</h4>
                <p>Profesor:</p>
              </div>

              <span className='flex'>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </span>
            </div>
            <div className=' bg-zinc-800 w-[450px] h-[100px] flex justify-evenly items-center '>
              <div className='flex flex-col'>
                <h4>Rutina 2</h4>
                <p>Profesor:</p>
              </div>

              <span className='flex'>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </span>
            </div>
            <div className=' bg-zinc-800 w-[450px] h-[100px] flex justify-evenly items-center '>
              <div className='flex flex-col'>
                <h4>Rutina 3</h4>
                <p>Profesor:</p>
              </div>

              <span className='flex'>
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminPage