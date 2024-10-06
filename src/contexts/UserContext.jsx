import { createContext, useContext, useEffect, useState } from "react";
import queryClient from "../services/persistQueryClient";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userTypeResponse, setUserTypeResponse] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await fetch("https://localhost:7179/api/Authentication/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Error al iniciar sesión");
            }
            const data = await response.json();

            localStorage.setItem("userTypeResponse", data.userType);
            setUserTypeResponse(data.userType);

            localStorage.setItem("isAuthenticated", "true");
            setIsAuthenticated(true);

            // Regenerar la query de detalles del cliente
            if (data.userType === "Client") {
                queryClient.invalidateQueries(['clientDetails']);
                await queryClient.refetchQueries(['clientDetails']);
            }
            //   if (data.userType === "Trainer") {
            //     queryClient.invalidateQueries(['trainerDetails']); // Si tienes una consulta para el entrenador
            //     await queryClient.refetchQueries(['trainerDetails']);
            // }

        } catch (error) {
            console.error("Error de autenticación:", error);
            throw error;
        }
    };


    const logout = async () => {
        try {
            const response = await fetch("https://localhost:7179/api/Authentication/Logout", {
                method: "POST",
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Error al cerrar sesión");
            }

            localStorage.setItem("isAuthenticated", "false");
            setIsAuthenticated(false);

            localStorage.removeItem("userTypeResponse", null);
            setUserTypeResponse(null);

            localStorage.removeItem('REACT_QUERY_OFFLINE_CACHE');

            queryClient.resetQueries(['clientDetails']);
            queryClient.removeQueries(['clientDetails']);

        } catch (error) {
            console.error("Error durante el cierre de sesión:", error);
        }
    };

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "userTypeResponse") {
                setUserTypeResponse(event.newValue);
            } else if (event.key === "isAuthenticated") {
                setIsAuthenticated(event.newValue === "true");
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);


    return (
        <UserContext.Provider value={{ isAuthenticated, userTypeResponse, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};