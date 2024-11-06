import React, { useState } from 'react';
import { IoPersonRemoveSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const DeleteTrainerFromShift = ({ idshift, iduser, onTrainerRemoved }) => {
    const [loading, setLoading] = useState(false);

    const handleRemoveShift = async (e) => {
        e.preventDefault();
        const modal = document.getElementById(`remove_trainer${iduser}_shift${idshift}`);
        if (modal) {
            modal.close();
        }
        setLoading(true);
        try {
            const response = await fetch(`https://localhost:7179/api/Shift/UnassignTrainerFromShift/${idshift}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
            });

            if (!response.ok) {
                toast.error("Error al remover al profesor del turno");
            }
            toast.success("Entrenador removido correctamente");
            onTrainerRemoved(idshift);

        } catch (error) {
            toast.error("Hubo un problema con la solicitud");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                className='p-2 text-black bg-white rounded-full cursor-pointer hover:bg-zinc-400 transition-all duration-200'
                onClick={() => document.getElementById(`remove_trainer${iduser}_shift${idshift}`).showModal()}
            >
                <IoPersonRemoveSharp />
            </button>

            <dialog id={`remove_trainer${iduser}_shift${idshift}`} className="modal">
                <div className="modal-box bg-black">
                    <div className="flex justify-center">
                        <p className="py-4 font-bebas text-2xl text-center">
                            ¿Está seguro de que desea remover al <span className='text-yellow-500'>entrenador #{iduser}</span> del <span className='text-yellow-500'>turno {idshift}?</span>
                        </p>
                    </div>
                    <div className="modal-action flex justify-center gap-4">
                        <form method="dialog">
                            <button className="w-[130px] p-3 rounded-xl uppercase font-bold bg-zinc-800 text-zinc-500 hover:bg-zinc-700 transition-all duration-200">Cerrar</button>
                        </form>
                        <form onSubmit={handleRemoveShift}>
                            <button type="submit" className=" w-[130px] uppercase p-3 rounded-xl font-bold bg-yellow-500 text-white hover:bg-yellow-400 hover:scale-105 transition-all duration-200">Confirmar</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {loading && (
                <div className="fixed inset-0 z-[50000] flex items-center justify-center bg-black/45">
                    <div
                        className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-solid border-r-transparent"
                        role="status"
                    >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteTrainerFromShift;
