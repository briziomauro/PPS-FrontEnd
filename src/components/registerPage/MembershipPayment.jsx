import { PiWarningCircleLight } from "react-icons/pi";
import { useMembership } from "../../contexts/MembershipContext";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const MembershipPayment = () => {
    const { membershipData, errorMemberhsip, isLoadingMember } = useMembership();
    const [clientStoredData, setClientStoredData] = useState(null);
    const [loadingPayment, setLoadingPayment] = useState(false);
    const [error, setError] = useState('');
    const queryClient = useQueryClient();

    useEffect(() => {
        const getStoredClient = async () => {
            try {
                const response = await fetch("https://localhost:7179/api/Client/GetClientUserData", {
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
                setClientStoredData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        getStoredClient();
        
    }, []);

    if (isLoadingMember) {
        return <div>Cargando...</div>;
    }

    if (errorMemberhsip) {
        return <div>Error al cargar las membresías</div>;
    }

    // Filtrar la membresía seleccionada basada en el tipo de membresía del cliente
    const selectedMembership = clientStoredData && clientStoredData.clientRequest.typememberships
        ? membershipData.find(membership => membership.type === clientStoredData.clientRequest.typememberships)
        : null;

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoadingPayment(true); 

        const createUrlPreference = async () => {
            try {
                const response = await fetch('https://localhost:7179/api/Payments/create-preference', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Type: selectedMembership.type, 
                        BackUrls: {
                            Success: "http://localhost:5173/register/3",
                            Failure: "http://localhost:5173/register/2",
                            Pending: "http://localhost:5173/",
                        },
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error al crear la preferencia de pago');
                }

                const data = await response.json();

                window.location.href = data.init_point;
            } catch (error) {
                setError(error.message);
            } finally {
                setLoadingPayment(false);
            }
        };

        await createUrlPreference(); 
    };

    return (
        <div className="flex flex-col text-center text-black justify-center ">
            <h2 className="font-bebas mt-6 text-4xl text-zinc-700 text-center ">
                PAGO DE MEMBRESIA
            </h2>
            <form onSubmit={handlePayment}>
                <h3>Información de su membresía</h3>
                {selectedMembership ? (
                    <div className="border border-black p-4">
                        <p className="uppercase">{selectedMembership.type}</p>
                        <p>${selectedMembership.price}<span> ARS/MES</span></p>
                        <p>{selectedMembership.description}</p>
                    </div>
                ) : (
                    <p>No hay membresía disponible para su tipo.</p>
                )}
                <button type="submit" className="border border-red-700 mt-10" disabled={loadingPayment}>
                    {loadingPayment ? "Cargando..." : "PAGAR"}
                </button>
                {error && <p className="text-red-600">{error}</p>} 
            </form>
            <div className="flex items-center gap-2 justify-center">
                <PiWarningCircleLight />
                <p>DESPUES DE PAGAR NO SE PUEDE VOLVER ATRAS</p>
            </div>
        </div>
    );
};

export default MembershipPayment;
