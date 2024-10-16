import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { IoIosRefresh } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ModalManageLocations from './ModalManageLocations';


const ManageLocations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const GetLocations = async () => {
            try {
                const response = await fetch("https://localhost:7179/api/Location/GetAll", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error("Error al obtener los detalles de las sedes");
                }

                const data = await response.json();
                console.log(data);
                setLocations(data);
            } catch (error) {
                setError(error.message);
            }
        };

        GetLocations();
    }, []);

    return (
        <>
            <div className='bg-gradient-to-tr from-black via-zinc-900 to-black min-h-screen w-full flex items-center justify-evenly flex-col'>
                <h1 className='font-bebas text-white text-5xl'>GESTIÓN DE SEDES</h1>
                <div className='flex gap-5'>
                    <div className='bg-zinc-800 p-4 flex items-center flex-col justify-evenly'>
                        <p className='text-white font-bebas text-3xl mb-3 '>SEDE <span className='text-yellow-400'>ABASTO</span></p>
                        <div className='text-white flex gap-4'>
                            <button className='flex gap-2 p-4 items-center bg-zinc-900 rounded-xl ' onClick={() => document.getElementById('my_modal_50').showModal()}><span className='text-xl'><IoIosRefresh /></span>ACTUALIZAR</button>
                            <button className='flex gap-2 p-4 items-center bg-yellow-500 rounded-xl'> <span className='text-xl'><MdDeleteForever /></span>ELIMINAR </button>
                        </div>
                    </div>
                    <div className='cursor-pointer bg-zinc-800/40 h-[140px] w-[315px] flex justify-center items-center hover:scale-105 hover:bg-zinc-800 transition-all duration-300 group'>
                        <span className='text-white text-4xl p-3 transition-all duration-200 group-hover:bg-zinc-600 group-hover:rounded-full'>
                            <FaPlus />
                        </span>
                    </div>
                </div>
            </div>
            <ModalManageLocations/>
        </>
    )
}

export default ManageLocations