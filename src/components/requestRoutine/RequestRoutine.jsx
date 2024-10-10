import React, { useState } from 'react'
import WeightPicker from '../heightWeightPicker/WeightPicker';
import HeightPicker from '../heightWeightPicker/HeightPicker';

const RequestRoutine = () => {
    const [objective, setObjective] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [days, setDays] = useState(0);

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };
    const handleDaysChange = (e) => {
        setDays(e.target.value)
    };
    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // const response = await fetch("https://localhost:7179/api/Client/GetMyDetails", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     credentials: "include",
        // });

        // if (!response.ok) {
        //     throw new Error("Error al obtener los detalles del cliente");
        // }

        // return response.json();
    };


    //llamar a la funcion del context que le corresponde por ej:
    // try {
    //     await sendRoutineRequest(objetive, height, weight)
    // }
    // catch (error) {
    //     console.error("Error durante el inicio de sesión:", error);
    // }

    document.getElementById('my_modal_10').close();



    return (
        <>
            <div className="flex justify-center items-center w-2/4 mb-10" onClick={() => document.getElementById('my_modal_10').showModal()}>
                <button className="uppercase font-bebas bg-white text-black p-5 w-full text-2xl rounded-md">
                    Solicitar Rutina
                </button>
            </div>

            <dialog id="my_modal_10" className="modal">
                <div className="modal-box bg-black p-10 justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</button>
                    </form>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full'>
                            <label className='text-white text-md p-2 font-bebas'>OBJETIVO:</label>
                            <input type="text" className='w-full bg-white text-black p-2 rounded-lg'
                                value={objective}
                                onChange={(e) => setObjective(e.target.value)} />
                        </div>
                        <div className='flex w-full mt-5 gap-3'>
                            <div>
                                <label className='text-white text-md p-2 font-bebas'>DIAS:</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleDaysChange(e)}>
                                    <option selected>Selecciona los dias de su rutina</option>
                                    <option value="dia1">1</option>
                                    <option value="dia2">2</option>
                                    <option value="dia3">3</option>
                                    <option value="dia4">4</option>
                                    <option value="dia5">5</option>
                                </select>
                            </div>
                            <div>
                                <label className='text-white text-md p-2 font-bebas'>PESO:</label>
                                <div>

                                    <WeightPicker onWeightChange={setWeight} />
                                </div>
                            </div>
                            <div>
                                <label className='text-white text-md font-bebas'>ALTURA:</label>
                                <div>
                                    <HeightPicker onHeightChange={setHeight} />

                                </div>
                            </div>
                        </div>

                        <button type='submit' className='flex bg-yellow-500 w-full text-white font-bebas text-xl justify-center p-2 mt-7 rounded-xl hover:bg-yellow-400 transition-all duration-200'>
                            <p>ENVIAR</p>
                        </button>
                    </form>
                </div>
            </dialog>

        </>
    )
}

export default RequestRoutine