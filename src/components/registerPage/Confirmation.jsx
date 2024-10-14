import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ lastStep }) => {
    const [clientStoredData, setClientStoredData] = useState(null);
    const [clientDni, setClientDni] = useState('')
    const [error, setError] = useState(null);
    const [loadingRegister, setLoadingRegister] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getStoredClient = async () => {
            try {
                const response = await fetch("https://localhost:7179/api/Client/GetStoredClientUserData", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error("Error al obtener los detalles del cliente");
                }

                const data = await response.json();
                console.log(data);
                setClientStoredData(data)
                setClientDni(data.clientRequest.dniclient)
            } catch (error) {
                setError(error.message);
            }
        };

        getStoredClient();
    }, []);


    if (error) {
        return <div className='text-red-500'>Error: {error}</div>;
    }
    console.log(clientStoredData)

    const handleRegister = async (e) => {
        e.preventDefault();

        const createClientRegister = async () => {
            try {
                const response = await fetch('https://localhost:7179/api/Client/AddClient', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(clientDni)
                });

                if (!response.ok) {
                    throw new Error('Error al registrar');
                }
                navigate("/login")
            } catch (error) {
                setError(error.message);
            } finally {
                setLoadingRegister(false);
            }
        };

        await createClientRegister();
    }

    return (
        <div className='flex flex-col justify-center text-black w-full'>
            <h2 className="font-bebas mt-6 text-4xl text-zinc-700 text-center ">
                CONFIRMACIÓN
            </h2>
            <form className='flex flex-col text-center' onSubmit={handleRegister}>
                <h3>RESUMEN DE DATOS:</h3>
                <div>
                    <p>Membresia: <span className='uppercase'>{clientStoredData ? clientStoredData.clientRequest.typememberships : 'Cargando...'}</span></p>
                </div>
                <div>
                    <h3>Datos del Usuario:</h3>
                    <div>
                        <p>Hola, {clientStoredData ? clientStoredData.clientRequest.firstname : 'Cargando...'}</p>
                        <p>DNI: {clientStoredData ? clientStoredData.clientRequest.dniclient : 'Cargando'}</p>
                    </div>
                </div>
                <div className="flex justify-between mt-6 mx-5 gap-3">
                    <button type='submit' className="bg-yellow-400 rounded-full w-full text-white px-6 py-3 transition-all duration-200 hover:bg-yellow-500 hover:font-bold flex-1">
                        Confirmar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Confirmation;
