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

            localStorage.setItem("expireDate", data.tokenExpires);

            localStorage.setItem("userTypeResponse", data.userType);
            setUserTypeResponse(data.userType);

            localStorage.setItem("isAuthenticated", "true");
            setIsAuthenticated(true);

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

            localStorage.removeItem("expireDate");

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

    useEffect(() => {
        const checkTokenExpiration = () => {
            const tokenExpires = new Date(localStorage.getItem("expireDate"));
            const now = new Date();

            if (tokenExpires <= now) {
                logout();
            }
        };

        const intervalId = setInterval(checkTokenExpiration, 300000);

        return () => {
            clearInterval(intervalId);
        };
    }, [logout]);



    return (
        <UserContext.Provider value={{ isAuthenticated, userTypeResponse, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};