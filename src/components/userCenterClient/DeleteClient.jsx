import React from 'react'
import { TbArrowsExchange2 } from 'react-icons/tb';

const DeleteClient = ({ idUser, clientDni }) => {

    const handleChangeStateClient = async () => {

        try {
            const response = await fetch(`https://localhost:7179/api/Client/ChangeState/${clientDni}`, {
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
            <button className=" bg-red-600 text-white rounded-lg w-[100px] h-[30px] hover:bg-red-700 transition-all duration-300 flex justify-center items-center gap-2" onClick={() => document.getElementById(`delete_client_${idUser}`).showModal()}><TbArrowsExchange2 />ESTADO</button >
            <dialog id={`delete_client_${idUser}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Estas seguro que quiere cambiar el estado del usuario: {idUser}</h3>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">NO, CERRAR</button>
                        </form>
                        <form onSubmit={handleChangeStateClient}>
                            <button type='submit'  className='btn'>SI, CAMBIAR</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default DeleteClient;