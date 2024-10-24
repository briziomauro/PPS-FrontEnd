import React, { useState } from 'react';
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const CreateNewLocation = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        isActive: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleNewLocation = async (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            isActive: formData.isActive === "true" || formData.isActive === true,
        };

        console.log("Datos enviados:", dataToSend);

        try {
            const response = await fetch("https://localhost:7179/api/Location/AddLocation", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                throw new Error('Error al añadir la locación');
            }

            const data = await response.json();
            console.log('Locación añadida:', data);
            onSubmit(data);
            onClose();
        } catch (error) {
            console.error('Hubo un problema con el fetch:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal-box rounded-md items-center w-[500px] h-[450px] bg-gradient-to-br from-black via-zinc-900 to-black">
                <h2 className="text-3xl font-bebas mb-2 text-white">Agregar Nueva Locación</h2>
                <div className='mb-4 h-[2px] flex w-full bg-yellow-500' />
                <form className='flex flex-col justify-evenly' onSubmit={handleNewLocation}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white text-start">
                            Nombre
                        </label>
                        <div className="mb-4 h-[2px] flex justify-start">
                            <div className="w-[30px] bg-yellow-500"></div>
                        </div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white text-start">
                            Locación
                        </label>
                        <div className="mb-4 h-[2px] flex justify-start">
                            <div className="w-[30px] bg-yellow-500"></div>
                        </div>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="isActive" className="block text-sm font-medium text-white text-start">Estado</label>
                        <div className="mb-4 h-[2px] flex justify-start">
                            <div className="w-[30px] bg-yellow-500"></div>
                        </div>
                        <select
                            id="isActive"
                            name="isActive"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                            value={formData.isActive}
                            onChange={handleChange}
                        >
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                        </select>
                    </div>

                    <div className="flex justify-end text-white gap-4">
                        <button
                            type="submit"
                            className="px-4 py-2 m-1 bg-zinc-900 rounded-xl hover:scale-105 transition-all duration-300 text-white font-bebas flex gap-2 p-4 items-center"
                        >
                            <span className='text-xl'><FaRegSave /></span> Guardar
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 m-1 bg-yellow-500 rounded-xl hover:scale-105 transition-all duration-300 text-white font-bebas text-xl flex gap-2 p-4 items-center"
                        >
                            <span className='text-xl'><MdOutlineCancel /></span> Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewLocation