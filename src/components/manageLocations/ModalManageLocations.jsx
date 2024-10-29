import React, { useState } from 'react';
import { IoIosRefresh } from "react-icons/io";
import { toast } from "react-toastify";

const ModalManageLocations = ({ idlocation, name, adress, isactive, handleGetLocations }) => {
    const [locUpdatedName, setLocUpdatedName] = useState(name);
    const [locUpdatedAdress, setLocUpdatedAdress] = useState(adress);

    const handleUpdateLocation = async (e) => {
        e.preventDefault();

        console.log(idlocation);

        const dataToUpdate = {
            adress: locUpdatedAdress,
            name: locUpdatedName,
        };

        try {
            const response = await fetch(`https://localhost:7179/api/Location/UpdateLocation/${idlocation}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(dataToUpdate),
            });

            if (!response.ok) {
                const errorDetail = await response.json();
                console.error("Detalles del error:", errorDetail);
                throw new Error('Error al actualizar la locación');
            }

            await handleGetLocations();
            document.getElementById(`update_location_${idlocation}`).close();
            toast.success("Sede actualizada correctamente.");
        } catch (error) {
            console.error('Hubo un problema con el fetch:', error);
            toast.error("Error al actualizar la sede.");
        }
    };

    return (
        <dialog id={`update_location_${idlocation}`} className="modal text-center">
            <div className="modal-box rounded-md items-center w-[500px] h-[510px] bg-gradient-to-br from-black via-zinc-900 to-black">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="text-3xl font-bebas mb-2 text-white">{name}</h3>
                <div className='mb-4 h-[2px] flex w-full bg-yellow-500' />
                <form className="max-w-lg mx-auto p-6 rounded-lg space-y-6" onSubmit={(e) => handleUpdateLocation(e)}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white text-start">Nombre</label>
                        <div className="mb-4 h-[2px] flex justify-start">
                            <div className="w-[30px] bg-yellow-500"></div>
                        </div>
                        <input
                            onChange={(e) => setLocUpdatedName(e.target.value)}
                            value={locUpdatedName}
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                            placeholder="Introduce el nombre"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-white text-start">Dirección</label>
                        <div className="mb-4 h-[2px] flex justify-start">
                            <div className="w-[30px] bg-yellow-500"></div>
                        </div>
                        <input
                            onChange={(e) => setLocUpdatedAdress(e.target.value)}
                            value={locUpdatedAdress}
                            type="text"
                            id="address"
                            name="address"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                            placeholder="Introduce la dirección"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 flex gap-2 items-center font-bebas text-xl">
                            <IoIosRefresh /> Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}

export default ModalManageLocations;
