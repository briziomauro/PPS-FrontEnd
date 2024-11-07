// UpdateMembership.js
import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useMembership } from '../../contexts/MembershipContext';

const UpdateMembership = ({ onClose }) => {
    const [loadingPayment, setLoadingPayment] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { logout } = useUser();
    const { membershipData } = useMembership();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    const handleNewPayment = async (type) => {
        setLoadingPayment(true);

        try {
            const response = await fetch(
                "https://localhost:7179/api/Payments/create-preference",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        type: type,
                        backUrls: {
                            Success: `http://localhost:5173/client/renew-membership?membershipType=${type}`,
                            Failure: "http://localhost:5173/client",
                            Pending: `http://localhost:5173/client/renew-membership?membershipType=${type}`,
                        },
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Error al crear la preferencia de pago");
            }

            const data = await response.json();
            window.location.href = data.init_point;
        } catch (error) {
            console.error("Error al procesar el pago:", error);
        } finally {
            setLoadingPayment(false);
        }
    };

    return (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="bg-black border border-white p-6 rounded-lg relative text-white">
                {!openModal ? (
                    <>
                        <h2 className="text-2xl font-bebas text-center">Tu membresía ha expirado</h2>
                        <p className="text-center mt-4">Para continuar, por favor renueva tu membresía.</p>
                        <div className="mt-4 text-center space-x-4">
                            <button
                                className="bg-zinc-800 text-zinc-500 px-6 py-2 rounded-full hover:bg-zinc-700 transition-all duration-200"
                                onClick={handleLogout}
                            >
                                Cerrar Sesión
                            </button>
                            <button
                                className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-200"
                                onClick={() => setOpenModal(true)}
                            >
                                Renovar membresía
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col justify-between items-center mb-4">
                            <button
                                className="text-white text-lg flex w-full justify-end"
                                onClick={() => setOpenModal(false)}
                            >
                                X
                            </button>
                            <h2 className=" font-bebas text-4xl">Elige tu membresía</h2>
                        </div>
                        <div className="text-center flex gap-8 justify-center items-center p-3">
                            {membershipData.map((membership) => (
                                <button
                                    key={membership.type}
                                    className="bg-zinc-900 border border-white text-white px-6 py-2 h-52 rounded-xl w-full uppercase hover:scale-105 transition-all duration-200"
                                    onClick={() => handleNewPayment(membership.type)}
                                    disabled={loadingPayment}
                                >
                                    <p className='mb-3 font-bebas text-3xl'><span className='text-yellow-400'>
                                        {membership.type}</span> -
                                        <span className='gap-1'>
                                            ${membership.price}
                                            <span className='text-xl'> ARS/MES</span>
                                        </span>
                                    </p>
                                    <div className='w-full bg-yellow-400 h-[1px]' />

                                    <ul className="list-disc list-inside mt-4 text-left">
                                        {membership.description
                                            .split(".")
                                            .map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                    </ul>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default UpdateMembership;
