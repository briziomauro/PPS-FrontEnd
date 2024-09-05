import React from 'react'

const UserCenterClient = () => {
  return (
    <div>
      <p className='text-3xl text-black ml-10'>ALUMNOS</p>
      <div className='flex bg-zinc-800 w-[500px] h-[150px] ml-10 justify-evenly items-center'>
        <span className='rounded-full bg-white w-[100px] h-[100px]'></span>
        <div className='text-sm'>
          <p>Nombre Completo: Vanesa Perez</p>
          <p>Id:</p>
          <div>
            <button className='bg-red-600 text-white rounded-lg w-[100px] h-[25px] m-1'> Eliminar </button>
            <button className='bg-blue-600 text-white rounded-lg w-[100px] h-[25px] m-1'> Editar </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCenterClient