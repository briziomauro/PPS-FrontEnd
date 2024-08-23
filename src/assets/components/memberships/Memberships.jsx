import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'

const Memberships = () => {
    return (
        <div className='bg-gradient-to-t from-yellow-500 to-whte mb-10 rounded-xl h-[800px]'>
            
            <div className='flex justify-center gap-28 items-center h-full text-white'>
                <div className='flex flex-col text-center bg-zinc-800 h-[500px] w-[330px] shadow-lg shadow-black rounded-md hover:scale-105 transition-all duration-200'>
                    <h3 className='mt-10 text-2xl'>MEMBRESIA 1</h3>
                    <p className='mt-3 '>Mejor opcion para principiantes</p>
                    <p className='mt-6 text-4xl'>$25/MES</p>
                    <ul className='flex flex-col items-center mt-10 text-lg'>
                        <li className='flex items-center'>
                            <GoDotFill />
                            <p>Condicion 1</p>
                        </li>
                        <li className='flex items-center'>
                            <GoDotFill />
                            <p>Condicion 2</p>
                        </li>
                        <li className='flex items-center'>
                            <GoDotFill />
                            <p>Condicion 3</p>
                        </li>
                        <li className='flex items-center'>
                            <GoDotFill />
                            <p>Condicion 4</p>
                        </li>
                    </ul>
                    <div className='flex justify-center mt-10'>
                        <button className='flex w-[200px] p-3 rounded-full bg-zinc-700 items-center gap-2 justify-center hover:bg-yellow-500 hover:shadow-md hover:shadow-zinc-900 transition-all duration-200'>
                            <p>EMPEZA AHORA</p>
                            <FaArrowRightLong className='animate-bounce' />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col text-center bg-zinc-800 h-[500px] w-[330px] shadow-lg shadow-black rounded-md hover:scale-105 transition-all duration-200'>
                    <h3 className='mt-10 text-2xl'>MEMBRESIA 1</h3>
                    <p className='mt-3 '>Mejor opcion para principiantes</p>
                    <p className='mt-6 text-4xl'>$25/MES</p>
                    <ul className='flex flex-col items-center mt-10 text-lg'>
                        <li className='flex items-center'>
                            <GoDotFill />
                            <p>Condicion 1</p>
                        </li>
                        <li className='flex items-center'>
                            <GoDotFill />
                            <p>Condicion 2</p>
                        </li>
                        <li className='flex items-center'>
                            <GoDotFill />
                            <p>Condicion 3</p>
                        </li>
                        <li className='flex items-center'>
                            <GoDotFill />
                            <p>Condicion 4</p>
                        </li>
                    </ul>
                    <div className='flex justify-center mt-10'>
                        <button className='flex w-[200px] p-3 rounded-full bg-zinc-700 items-center gap-2 justify-center hover:bg-yellow-500 hover:shadow-md hover:shadow-zinc-900 transition-all duration-200'>
                            <p>EMPEZA AHORA</p>
                            <FaArrowRightLong className='animate-bounce' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Memberships