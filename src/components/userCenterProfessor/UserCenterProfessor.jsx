import { Input } from 'postcss'
import React from 'react'

const UserCenterProfessor = () => {
    return (
        <div className="ml-10">
            <div className='flex justify-evenly items-center mb-4'>
                <p className="text-4xl text-white uppercase font-bebas">Profesores</p>
                <input type="text" className='bg-white rounded-full p-2' placeholder="Buscar..." />
            </div>
            <div className='overflow-y-scroll h-[600px] flex flex-col gap-5 p-3'>
                <div className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                    <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                    <div className="ml-4 text-sm text-gray-100">
                        <p className="font-semibold">Nombre Completo: Pepe Rodriguez</p>
                        <p className="text-gray-400">ID: #12345</p>
                        <div className="mt-2">
                            <button className="bg-red-600 text-white rounded-lg w-[100px] h-[30px] mr-2 hover:bg-red-700 transition-all duration-300">
                                Eliminar
                            </button>
                            <button className="bg-blue-600 text-white rounded-lg w-[100px] h-[30px] hover:bg-blue-700 transition-all duration-300">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                    <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                    <div className="ml-4 text-sm text-gray-100">
                        <p className="font-semibold">Nombre Completo: Pepe Rodriguez</p>
                        <p className="text-gray-400">ID: #12345</p>
                        <div className="mt-2">
                            <button className="bg-red-600 text-white rounded-lg w-[100px] h-[30px] mr-2 hover:bg-red-700 transition-all duration-300">
                                Eliminar
                            </button>
                            <button className="bg-blue-600 text-white rounded-lg w-[100px] h-[30px] hover:bg-blue-700 transition-all duration-300">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                    <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                    <div className="ml-4 text-sm text-gray-100">
                        <p className="font-semibold">Nombre Completo: Pepe Rodriguez</p>
                        <p className="text-gray-400">ID: #12345</p>
                        <div className="mt-2">
                            <button className="bg-red-600 text-white rounded-lg w-[100px] h-[30px] mr-2 hover:bg-red-700 transition-all duration-300">
                                Eliminar
                            </button>
                            <button className="bg-blue-600 text-white rounded-lg w-[100px] h-[30px] hover:bg-blue-700 transition-all duration-300">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                    <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                    <div className="ml-4 text-sm text-gray-100">
                        <p className="font-semibold">Nombre Completo: Pepe Rodriguez</p>
                        <p className="text-gray-400">ID: #12345</p>
                        <div className="mt-2">
                            <button className="bg-red-600 text-white rounded-lg w-[100px] h-[30px] mr-2 hover:bg-red-700 transition-all duration-300">
                                Eliminar
                            </button>
                            <button className="bg-blue-600 text-white rounded-lg w-[100px] h-[30px] hover:bg-blue-700 transition-all duration-300">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                    <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                    <div className="ml-4 text-sm text-gray-100">
                        <p className="font-semibold">Nombre Completo: Pepe Rodriguez</p>
                        <p className="text-gray-400">ID: #12345</p>
                        <div className="mt-2">
                            <button className="bg-red-600 text-white rounded-lg w-[100px] h-[30px] mr-2 hover:bg-red-700 transition-all duration-300">
                                Eliminar
                            </button>
                            <button className="bg-blue-600 text-white rounded-lg w-[100px] h-[30px] hover:bg-blue-700 transition-all duration-300">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                    <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                    <div className="ml-4 text-sm text-gray-100">
                        <p className="font-semibold">Nombre Completo: Pepe Rodriguez</p>
                        <p className="text-gray-400">ID: #12345</p>
                        <div className="mt-2">
                            <button className="bg-red-600 text-white rounded-lg w-[100px] h-[30px] mr-2 hover:bg-red-700 transition-all duration-300">
                                Eliminar
                            </button>
                            <button className="bg-blue-600 text-white rounded-lg w-[100px] h-[30px] hover:bg-blue-700 transition-all duration-300">
                                Editar
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UserCenterProfessor