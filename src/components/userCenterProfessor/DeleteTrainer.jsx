import React from 'react'
import { TbArrowsExchange2 } from 'react-icons/tb';

const DeleteTrainer = ({ idUser, trainerDni, trainerName, trainerLast,trainerId }) => {

    const handleChangeStateTrainer = async () => {

        try {
            const response = await fetch(`https://localhost:7179/api/Trainer/ChangeState/${trainerDni}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
            });

        } catch (error) {
            console.error('Hubo un problema con la solicitud de eliminación:', error);
        }
    };

    return (
        <>
            <button className=" bg-yellow-500 text-white rounded-lg w-[100px] h-[30px] hover:bg-red-700 transition-all duration-300 flex justify-center items-center gap-2" onClick={() => document.getElementById(`delete_trainer_${idUser}`).showModal()}><TbArrowsExchange2 />ESTADO</button >
            <dialog id={`delete_trainer_${idUser}`} className="modal">
                <div className="modal-box bg-black ">
                    <h3 className="font-bebas text-2xl flex flex-col justify-center items-center gap-1">Estas seguro que quiere cambiar el estado del usuario: <span className='text-yellow-500'>{trainerName} {trainerLast} - #{idUser}</span></h3>
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
        </>
    )
}

export default DeleteTrainer