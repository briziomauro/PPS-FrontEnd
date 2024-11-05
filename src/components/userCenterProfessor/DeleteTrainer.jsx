import React from 'react';
import { TbArrowsExchange2 } from 'react-icons/tb';
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteTrainer = ({ idUser, trainerDni, trainerName, trainerLast, onStateChange }) => {

    const handleChangeStateTrainer = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        try {
            const response = await fetch(`https://localhost:7179/api/Trainer/ChangeState/${trainerDni}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Error al cambiar el estado del entrenador");
            }
            await onStateChange();
            toast.success("Estado cambiado correctamente");
            document.getElementById(`delete_trainer_${idUser}`).close();

        } catch (error) {
            toast.error("Hubo un problema con la solicitud de cambio de estado");
        }
    };

    return (
        <>
            <button className="bg-yellow-500 text-white rounded-lg w-[100px] h-[30px] hover:bg-red-700 transition-all duration-300 flex justify-center items-center gap-2" onClick={() => document.getElementById(`delete_trainer_${idUser}`).showModal()}>
                <TbArrowsExchange2 />ESTADO
            </button>
            <dialog id={`delete_trainer_${idUser}`} className="modal">
                <div className="modal-box bg-black ">
                    <h3 className="font-bebas text-2xl flex flex-col justify-center items-center gap-1">
                        ¿Estás seguro que quieres cambiar el estado del usuario:
                        <span className='text-yellow-500'>{trainerName} {trainerLast} - #{idUser}</span>?
                    </h3>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="p-3 rounded-xl font-bold bg-zinc-800 text-zinc-500 hover:bg-zinc-700 transition-all duration-200">CANCELAR</button>
                        </form>
                        <form onSubmit={handleChangeStateTrainer}>
                            <button type='submit' className='p-3 rounded-xl font-bold bg-yellow-500 text-white hover:bg-yellow-400 hover:scale-105 transition-all duration-200'>CONFIRMAR</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </>
    );
};

export default DeleteTrainer;
