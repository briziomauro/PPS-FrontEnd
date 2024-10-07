import React, { useState } from 'react'

const RequestRoutine = () => {
    const [objective, setObjective] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //llamar a la funcion del context que le corresponde por ej:
        // try {
        //     await sendRoutineRequest(objetive, height, weight)
        // }
        // catch (error) {
        //     console.error("Error durante el inicio de sesión:", error);
        // }
        console.log(weight)
        console.log(height)

        document.getElementById('my_modal_10').close();
    };


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
                                <label className='text-white text-md p-2 font-bebas'>PESO:</label>
                                <input type="text" className='w-full bg-white text-black p-2 rounded-lg'
                                    value={weight}
                                    onChange={handleWeightChange}
                                    placeholder='EJ: 80,50' />
                            </div>
                            <div>
                                <label className='text-white text-md font-bebas'>ALTURA:</label>
                                <input type="text" className='w-full bg-white text-black p-2 rounded-lg'
                                    value={height}
                                    onChange={handleHeightChange}
                                    placeholder='EJ: 1,75' />
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