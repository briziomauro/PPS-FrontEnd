import React, { useEffect, useState } from 'react'
import DeleteTrainer from './DeleteTrainer'
import CreateTrainer from './CreateTrainer'
import { IoIosSearch } from 'react-icons/io';

const UserCenterProfessor = () => {
    const [allTrainers, setAllTrainers] = useState([])
    const [error, setError] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

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

    useEffect(() => {
        getAllTrainers();
    }, []);

    const filteredTrainers = allTrainers.filter((trainer) => {
        const fullName = `${trainer.trainerDto.firstName} ${trainer.trainerDto.lastName}`.toLowerCase();
        return (
            fullName.includes(searchTerm.toLowerCase()) ||
            trainer.userDto.id.toString().includes(searchTerm) ||
            trainer.trainerDto.dniTrainer.toString().includes(searchTerm)
        );
    });

    return (
        <div className="ml-10">
            <div className='flex justify-between items-center mb-4'>
                <p className="text-4xl text-white uppercase font-bebas">Profesores</p>
                <div className='flex gap-3 items-center'>
                    <div className='relative'>
                        <div className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400'>
                            <IoIosSearch />
                        </div>
                        <input
                            type="text"
                            className='bg-white rounded-full p-2 pl-7'
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <CreateTrainer handleGetTrainers={getAllTrainers} />
                </div>
            </div>
            <div className='overflow-y-scroll h-[600px] flex flex-col gap-5 p-3'>
                {filteredTrainers
                    .sort((a, b) => b.userDto.id - a.userDto.id)
                    .map((trainer) => (
                        <div key={trainer.userDto.id} className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                            <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                            <div className="ml-4 text-sm text-gray-100 w-full">
                                <div className='flex justify-between'>
                                    <p className="font-semibold">Nombre Completo: {trainer.trainerDto.firstName} {trainer.trainerDto.lastName}</p>
                                    <p className='text-zinc-500'># {trainer.userDto.id}</p>
                                </div>
                                <p className="text-gray-400 mt-1">DNI: {trainer.trainerDto.dniTrainer}</p>
                                <div className="flex w-full items-center justify-between mt-2">
                                    <p className='font-bold'>ESTADO: <span className={trainer.trainerDto.isactive ? 'text-green-500':'text-red-500'} >{trainer.trainerDto.isactive ? 'Activo' : 'Inactivo'}</span> </p>
                                    <DeleteTrainer idUser={trainer.userDto.id} trainerDni={trainer.trainerDto.dniTrainer} trainerName={trainer.trainerDto.firstName} trainerLast={trainer.trainerDto.lastName}/>
                                </div>
                            </div>
                        </div>
                    ))}
                {filteredTrainers.length === 0 && (
                    <div className='flex w-[500px]'>
                        <p className="text-zinc-500 text-center">No se encontraron profesores.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserCenterProfessor;
