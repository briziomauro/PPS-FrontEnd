import { createContext, useContext, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import { useUser } from "./UserContext";
import queryClient from "../services/persistQueryClient"; // Asegurarse de importar correctamente queryClient

const ClientContext = createContext();

export const useClient = () => useContext(ClientContext);

const fetchClientDetails = async () => {
    const response = await fetch("https://localhost:7179/api/Client/GetMyDetails", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Error al obtener los detalles del cliente");
    }

    return response.json();
};

export const ClientProvider = ({ children }) => {
    const { isAuthenticated, userTypeResponse } = useUser();  // Usamos el contexto de usuario

    const { data: clientDetails, error, isLoading } = useQuery({
        queryKey: ['clientDetails'],
        queryFn: fetchClientDetails,
        enabled: isAuthenticated && userTypeResponse === 'Client',  // Dependemos del contexto en lugar de localStorage
        onSuccess: () => {
            console.log("Detalles del cliente obtenidos exitosamente");
        },
        onError: (error) => {
            console.error("Error al obtener los detalles del cliente:", error);
        },
    });


    return (
        <ClientContext.Provider value={{ clientDetails, error, isLoading }}>
            {children}
        </ClientContext.Provider>
    );
};
