import React from 'react'

import { TbArrowsExchange2 } from "react-icons/tb";

const ChangeStateLocation = ({idlocation, handleGetLocations, name}) => {

    const handleChangueStatus = async () => {

        try {
            const response = await fetch(`https://localhost:7179/api/Location/ChangeState/${idlocation}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
            });

            handleGetLocations();
        } catch (error) {
            console.error('Hubo un problema con la solicitud de eliminación:', error);
        }
    };

    return (
        <>
            <button className='flex gap-2 p-4 items-center bg-yellow-500 rounded-xl hover:scale-105 transition-all duration-300' onClick={() => document.getElementById(`changestate_location_${idlocation}`).showModal()}> <span className='text-xl'><TbArrowsExchange2 />
            </span>ESTADO</button>
            <dialog id= {`changestate_location_${idlocation}`} className="modal">
                <div className="bg-zinc-800 p-4 flex items-center flex-col justify-evenly h-[200px]">
                    <h2 className='text-white font-bebas text-2xl'>ESTAS SEGURO QUE QUERES CAMBIAR EL ESTADO DE LA <div className='text-yellow-500 text-center'>{name}</div></h2>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className='flex gap-2 p-4 items-center bg-zinc-900 rounded-xl hover:scale-105 transition-all duration-300'>CANCELAR</button>
                        </form>
                        <form onSubmit={handleChangueStatus}>
                        <button type='submit' className='flex gap-2 p-4 items-center bg-yellow-500 rounded-xl hover:scale-105 transition-all duration-300'>SI, CAMBIAR </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default ChangeStateLocation