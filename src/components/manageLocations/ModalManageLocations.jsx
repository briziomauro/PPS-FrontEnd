import React from 'react';
import { IoIosRefresh } from "react-icons/io";

const ModalManageLocations = ({ idlocation, name }) => {
    return (
        <dialog id={`location_${idlocation}`} className="modal text-center">
            <div className="modal-box rounded-md items-center w-[500px] h-[510px] bg-gradient-to-br from-black via-zinc-900 to-black">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="text-3xl font-bebas mb-2 text-white">{name}</h3>
                <div className='mb-4 h-[2px] flex w-full bg-yellow-500' />
                <form className="max-w-lg mx-auto p-6  rounded-lg space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white text-start">Nombre</label>
                        <div className="mb-4 h-[2px] flex justify-start">
                            <div className="w-[30px] bg-yellow-500"></div>
                        </div>
                        <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Introduce el nombre" required />
                    </div>


                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-white text-start">Dirección</label>
                        <div className="mb-4 h-[2px] flex justify-start">
                            <div className="w-[30px] bg-yellow-500"></div>
                        </div>
                        <input type="text" id="address" name="address" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="Introduce la dirección" required />
                    </div>


                    <div>
                        <label htmlFor="isActive" className="block text-sm font-medium text-white text-start">Estado</label>
                        <div className="mb-4 h-[2px] flex justify-start">
                            <div className="w-[30px] bg-yellow-500"></div>
                        </div>
                        <select id="isActive" name="isActive" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm">
                            <option value="true">Activo</option>
                            <option value="false">Inactivo</option>
                        </select>
                    </div>


                    <div className="flex justify-center">
                        <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 flex gap-2 items-center font-bebas text-xl">
                        <IoIosRefresh /> Actualizar
                        </button>
                    </div>
                </form>

            </div>
        </dialog>

    )
}

export default ModalManageLocations