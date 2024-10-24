import React, { useCallback, useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { IoIosRefresh } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ModalManageLocations from './ModalManageLocations';
import { useLocation } from '../../contexts/LocationContext';
import CreateNewLocation from './CreateNewLocation';

const ManageLocations = () => {
    const { locations, GetLocations } = useLocation();
    const [loc, setLoc] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        GetLocations();
    }, []);

    const handleDelete = (idlocation) => {
        setLoc(prevLocations =>
            prevLocations.filter(loc => loc.idlocation !== idlocation)
        );
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAddLocation = (formData) => {
        setLoc(prevLocations => [...prevLocations, formData]); 
        console.log("Nueva locación agregada:", formData);
    };

    return (
        <>
            <div className='bg-gradient-to-tr from-black via-zinc-900 to-black w-full flex items-center justify-evenly flex-col'>
                <h1 className='font-bebas text-white text-5xl my-15 p-10'>GESTIÓN DE SEDES</h1>
                <div className='flex flex-wrap gap-5 items-center justify-center w-full pb-40'>
                    {locations.map((location) => (
                        <React.Fragment key={location.idlocation}>
                            <div className='bg-zinc-800 p-4 flex items-center flex-col justify-evenly h-[175px]'>
                                <p className='text-white font-bebas text-3xl mb-3 '>{location.name}</p>
                                <p className='text-white font-bebas mb-3'>Estado: {location.isactive ? 'Activo' : 'Inactivo'}</p>

                                <div className='text-white flex gap-4'>
                                    <button className='flex gap-2 p-4 items-center bg-zinc-900 rounded-xl hover:scale-105 transition-all duration-300' onClick={() => document.getElementById(`location_${location.idlocation}`).showModal()}><span className='text-xl'><IoIosRefresh /></span>ACTUALIZAR</button>
                                    <button className='flex gap-2 p-4 items-center bg-yellow-500 rounded-xl hover:scale-105 transition-all duration-300' onClick={() => handleDelete(location.idlocation)}> <span className='text-xl'><MdDeleteForever /></span>ELIMINAR </button>
                                </div>
                            </div>
                            <ModalManageLocations idlocation={location.idlocation} name={location.name} />
                        </React.Fragment>
                    ))}
                    <div className='cursor-pointer bg-zinc-800/40 h-[175px] w-[315px] flex justify-center items-center hover:scale-105 hover:bg-zinc-800 transition-all duration-300 group'  onClick={openModal}>
                        <span className='text-white text-4xl p-3 transition-all duration-200 group-hover:bg-zinc-600 group-hover:rounded-full'>
                            <FaPlus />
                        </span>
                    </div>
                </div>
            </div>
            <CreateNewLocation isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={handleAddLocation} />
        </>
    );
};

export default ManageLocations
