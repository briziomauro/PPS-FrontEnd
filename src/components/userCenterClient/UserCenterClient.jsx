import React, { useEffect, useState } from 'react'
import DeleteClient from './DeleteClient';

const UserCenterClient = () => {

    const [allClients, setAllClients] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const getAllClients = async () => {
            try {
                const response = await fetch(
                    "https://localhost:7179/api/Client/GetAllClients",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    throw new Error("Error al obtener los clientes");
                }

                const data = await response.json();
                setAllClients(data);

            } catch (error) {
                setError(error.message);
            }
        };

        getAllClients();
    }, []);


    return (
        <div className="ml-10">
            <div className='flex justify-evenly items-center mb-4'>
                <p className="text-4xl text-white uppercase font-bebas">Clientes</p>
                <input type="text" className='bg-white rounded-full p-2' placeholder="Buscar..." />
            </div>
            <div className='overflow-y-scroll h-[600px] flex flex-col gap-5 p-3'>

                {allClients.map((client) => (
                    <div key={client.userDto.id} className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                        <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                        <div className="ml-4 text-sm text-gray-100">
                            <p className="font-semibold">Nombre Completo: {client.clientDto.firstName} {client.clientDto.lastName}</p>
                            <p className="text-gray-400">DNI: {client.clientDto.dniClient}</p>
                            <p>Estado: {client.clientDto.isactive ? 'Activo' : 'Inactivo'}</p>
                            <div className="mt-2">
                                <DeleteClient idUser={client.userDto.id} clientDni={client.clientDto.dniClient}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserCenterClient