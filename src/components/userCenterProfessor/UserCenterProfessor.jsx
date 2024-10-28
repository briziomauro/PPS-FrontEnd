import { Input } from 'postcss'
import React, { useEffect, useState } from 'react'
import DeleteTrainer from './DeleteTrainer'
import { FaPlus } from 'react-icons/fa6'

const UserCenterProfessor = () => {
    const [allTrainers, setAllTrainers] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const getAllTrainers = async () => {
            try {
                const response = await fetch(
                    "https://localhost:7179/api/Trainer/GetAllTrainers",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    throw new Error("Error al obtener los trainers");
                }

                const data = await response.json();
                setAllTrainers(data);

            } catch (error) {
                setError(error.message);
            }
        };

        getAllTrainers();
    }, []);

    return (
        <div className="ml-10">
            <div className='flex justify-between items-center mb-4'>
                <p className="text-4xl text-white uppercase font-bebas">Profesores</p>
                <div className='flex gap-3'>
                    <input type="text" className='bg-white rounded-full p-2' placeholder="Buscar..." />
                    <div className='flex items-center justify-center rounded-full  bg-zinc-800 p-3 cursor-pointer hover:bg-zinc-700 transition-all duration-200'>
                        <button className='text-white'><FaPlus /></button>
                    </div>
                </div>
            </div>
            <div className='overflow-y-scroll h-[600px] flex flex-col gap-5 p-3'>

                {allTrainers.map((trainer) => (
                    <div key={trainer.userDto.id} className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                        <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                        <div className="ml-4 text-sm text-gray-100">
                            <p className="font-semibold">Nombre Completo: {trainer.trainerDto.firstName} {trainer.trainerDto.lastName}</p>
                            <p className="text-gray-400">DNI: {trainer.trainerDto.dniTrainer}</p>
                            <p>Estado: {trainer.trainerDto.isactive ? 'Activo' : 'Inactivo'}</p>
                            <div className="mt-2">
                                <DeleteTrainer idUser={trainer.userDto.id} trainerDni={trainer.trainerDto.dniTrainer} />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default UserCenterProfessor