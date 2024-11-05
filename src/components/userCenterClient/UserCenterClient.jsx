import React, { useEffect, useState } from 'react';
import DeleteClient from './DeleteClient';
import { IoIosSearch } from 'react-icons/io';

const UserCenterClient = () => {
    const [allClients, setAllClients] = useState([]);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

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

    useEffect(() => {
        getAllClients();
    }, []);

    const handleStateChange = async () => {
        await getAllClients();
    };

    const filteredClients = allClients.filter((client) => {
        const fullName = `${client.clientDto.firstName} ${client.clientDto.lastName}`.toLowerCase();
        return (
            fullName.includes(searchTerm.toLowerCase()) ||
            client.userDto.id.toString().includes(searchTerm) ||
            client.clientDto.dniClient.toString().includes(searchTerm)
        );
    });

    return (
        <div className="ml-10">
            <div className='flex justify-evenly items-center mb-4'>
                <p className="text-4xl text-white uppercase font-bebas">Clientes</p>
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
                </div>
            </div>
            <div className='overflow-y-scroll h-[600px] flex flex-col gap-5 p-3'>
                {filteredClients
                    .sort((a, b) => b.userDto.id - a.userDto.id)
                    .map((client) => (
                        <div key={client.userDto.id} className="flex bg-zinc-800 w-[500px] h-[150px] rounded-lg shadow-lg p-4 items-center">
                            <span className="rounded-full bg-white w-[100px] h-[100px] flex-shrink-0"></span>
                            <div className="ml-4 text-sm text-gray-100 w-full">
                                <div className='flex justify-between'>
                                    <p className="font-semibold">Nombre Completo: {client.clientDto.firstName} {client.clientDto.lastName}</p>
                                    <p className='text-zinc-500'># {client.userDto.id}</p>
                                </div>
                                <p className="text-gray-400 mt-1">DNI: {client.clientDto.dniClient}</p>
                                <div className="flex w-full items-center justify-between mt-2">
                                    <p className='font-bold'>ESTADO: <span className={client.clientDto.isactive ? 'text-green-500' : 'text-red-500'}>{client.clientDto.isactive ? 'Activo' : 'Inactivo'}</span></p>
                                    <DeleteClient
                                        idUser={client.userDto.id}
                                        clientDni={client.clientDto.dniClient}
                                        clientName={client.clientDto.firstName}
                                        clientLast={client.clientDto.lastName}
                                        onStateChange={handleStateChange}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                {filteredClients.length === 0 && (
                    <div className='flex w-[500px]'>
                        <p className="text-zinc-500 text-center">No se encontraron clientes.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserCenterClient;
