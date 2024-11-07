import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useQueryClient } from '@tanstack/react-query';
import { useClient } from '../../contexts/ClientContext';


const ConfirmUpdate = () => {
    const [loadingRegister, setLoadingRegister] = useState(false);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(5); // Set initial countdown value
    const [membershipType, setMembershipType] = useState(null);
    const navigate = useNavigate();
    const { clientDetails } = useClient();
    const queryClient = useQueryClient();

    useEffect(() => {
        // Get the membership type from the URL query parameter
        const params = new URLSearchParams(window.location.search);
        setMembershipType(params.get("membershipType"));
    }, []);

    const handleUpdatePago = async () => {
        if (!membershipType) return; // Ensure membershipType is set

        setLoadingRegister(true);
        try {
            const response = await fetch(
                "https://localhost:7179/api/Client/UpdatePago",
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(membershipType),
                }
            );

            if (!response.ok) {
                throw new Error("Error al reinscribirse");
            }

            const updatedClientDetails = { ...clientDetails };

            updatedClientDetails.clientDto.typeMembership = membershipType;
            queryClient.setQueryData("clientDetails", updatedClientDetails);

            queryClient.invalidateQueries("clientDetails");

        } catch (error) {
            setError(error.message);
        } finally {
            setLoadingRegister(false);
        }
    };

    useEffect(() => {
        if (membershipType) {
            handleUpdatePago();
        }

        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            navigate("/client");
        }
    }, [countdown, membershipType, queryClient]);
    return (
        <div className='bg-black flex flex-col items-center justify-center h-screen'>
            <div className='flex items-center gap-3'>
                <p className='font-bebas text-white text-8xl'>RENOVACION TERMINADA</p>
                <IoMdCheckmarkCircleOutline className='text-yellow-400 text-6xl' />
            </div>
            {loadingRegister && <p>Loading...</p>}
            <p className='text-white text-2xl mt-10'>
                Te redirigiremos en {countdown}
                {countdown > 0 && (
                    <svg
                        className="animate-spin ml-2 h-8 w-8 text-yellow-400 inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                    </svg>
                )}
            </p>
        </div>
    );
};

export default ConfirmUpdate;
