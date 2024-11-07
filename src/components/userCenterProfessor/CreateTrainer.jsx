import React, { useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { toast } from "react-toastify";

const CreateTrainer = ({ handleGetTrainers }) => {
    const [trainerName, setTrainerName] = useState("")
    const [trainerLastName, setTrainerLastName] = useState("")
    const [trainerDni, setTrainerDni] = useState("")
    const [trainerBirth, setTrainerBirth] = useState("")
    const [trainerPhone, setTrainerPhone] = useState("")
    const [trainerStatus, setTrainerStatus] = useState("1")
    const [trainerEmail, setTrainerEmail] = useState("")
    const [trainerPass, setTrainerPass] = useState("")
    const [showPassLogin, setShowPassLogin] = useState(false);
    const modalRef = useRef(null);
    
    const handleShowPassLogin = () => {
        setShowPassLogin((prevShowPass) => !prevShowPass);
    };

    const handleNewTrainer = async (e) => {
        e.preventDefault();

        const dataTrainerToSend = {
            trainerRequest: {
                dnitrainer: trainerDni,
                birthdate: trainerBirth,
                phonenumber: trainerPhone,
                firstname: trainerName,
                lastname: trainerLastName,
                isactive: trainerStatus,
            },
            userRequest: {
                email: trainerEmail,
                password: trainerPass,
            },
        };

        try {
            const response = await fetch("https://localhost:7179/api/Trainer/AddTrainer", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify(dataTrainerToSend),
            });

            if (!response.ok) {
                const errorDetail = await response.json();
                console.error("Detalles del error:", errorDetail);
                throw new Error('Error al añadir el trainer');
            }
            const data = await response.json();
            handleGetTrainers();
            modalRef.current.close();
            toast.success(`Entrenador ${dataTrainerToSend.trainerRequest.firstname} ${dataTrainerToSend.trainerRequest.lastname} agregado correctamente`)
        } catch (error) {
            console.error('Hubo un problema con el fetch:', error);
        }
    };

    return (
        <>
            <div onClick={() => document.getElementById('create_trainer').showModal()} className='flex items-center justify-center rounded-full  bg-zinc-800 p-3 cursor-pointer hover:bg-zinc-700 transition-all duration-200'>
                <button className='text-white'><FaPlus /></button>
            </div>
            <dialog ref={modalRef} id="create_trainer" className="modal">
                <div className="modal-box bg-black">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
                    </form>
                    <h3 className="text-2xl justify-center flex items-center uppercase font-bebas gap-1 text-white">Agregar nuevo<span className='text-yellow-500'>TRAINER:</span></h3>

                    <form onSubmit={handleNewTrainer}>
                        <div className='flex gap-2'>
                            <div className="form-group my-3">
                                <label className="text-zinc-400 text-sm p-1">Nombre</label>
                                <input type="text" name="firstname" value={trainerName} className="input input-bordered w-full bg-zinc-800 text-white" onChange={(e) => setTrainerName(e.target.value)} required />
                            </div>
                            <div className="form-group my-3">
                                <label className="text-zinc-400 text-sm p-1">Apellido</label>
                                <input type="text" name="lastname" value={trainerLastName} className="input input-bordered w-full bg-zinc-800 text-white" onChange={(e) => setTrainerLastName(e.target.value)} required />
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className="form-group my-3">
                                <label className="text-zinc-400 text-sm p-1">DNI:</label>
                                <input type="text" name="dnitrainer" value={trainerDni} className="input input-bordered w-full bg-zinc-800 text-white" onChange={(e) => setTrainerDni(e.target.value)} required />
                            </div>
                            <div className="form-group my-3">
                                <label className="text-zinc-400 text-sm p-1">Nacimiento</label>
                                <input type="date" name="birthdate" value={trainerBirth} className="input input-bordered w-full bg-zinc-800 text-white" onChange={(e) => setTrainerBirth(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-group my-3">
                            <label className="text-zinc-400 text-sm p-1">Teléfono</label>
                            <input type="text" name="phonenumber" value={trainerPhone} className="input input-bordered w-full bg-zinc-800 text-white" onChange={(e) => setTrainerPhone(e.target.value)} required />
                        </div>
                        <div className="form-group my-3">
                            <label className="text-zinc-400 text-sm p-1">Estado</label>
                            <select name="isactive" value={trainerStatus} className="select select-bordered w-full bg-zinc-800 text-white" onChange={(e) => setTrainerStatus(e.target.value)}>
                                <option value="1">Activo</option>
                                <option value="0">Inactivo</option>
                            </select>
                        </div>

                        <div className="form-group my-3">
                            <label className="text-zinc-400 text-sm p-1">Email</label>
                            <input type="email" name="email" value={trainerEmail} className="input input-bordered w-full bg-zinc-800 text-white" onChange={(e) => setTrainerEmail(e.target.value)} required />
                        </div>
                        <div className="form-group my-3">
                            <label className="text-zinc-400 text-sm p-1">Contraseña</label>
                            <div className="flex items-center relative">
                                <input
                                    type={showPassLogin ? "text" : "password"}
                                    name="password"
                                    value={trainerPass}
                                    className="input input-bordered w-full bg-zinc-800 text-white pr-10"
                                    onChange={(e) => setTrainerPass(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 flex items-center justify-center text-zinc-400 h-[47px] w-[40px] cursor-pointer"
                                    onClick={handleShowPassLogin}
                                >
                                    <i className={`bi ${showPassLogin ? 'bi-eye-slash' : 'bi-eye'}`} />
                                </button>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <button type='submit' className='bg-yellow-500 px-4 py-2 font-bebas text-xl rounded-xl mt-2 text-white hover:bg-yellow-600 transition-all duration-200'>AGREGAR</button>
                        </div>
                    </form>
                </div >
            </dialog >
        </>
    )
}

export default CreateTrainer