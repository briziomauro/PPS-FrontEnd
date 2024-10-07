import React from 'react'
import ActionButtons from './ActionButtons'

//PASO 3
const Confirmation = ({ lastStep }) => {

    const handleLastStep = () => {
        lastStep();
    };

    return (
        <div className='flex flex-col justify-center text-black w-full'>
            <h2 className="font-bebas mt-6 text-4xl text-zinc-700 text-center ">
                CONFIRMACIÓN
            </h2>
            <div className='flex flex-col text-center'>
                <h3>RESUMEN DE DATOS:</h3>
                <p>Detalles de membresia</p>
                <p>Datos de cliente</p>
            </div>
        </div>
    )
}


export default Confirmation