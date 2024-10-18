import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(null);

    const GetLocations = async () => {
        try {
            const response = await fetch("https://localhost:7179/api/Location/GetAll", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Error al obtener los detalles de las sedes");
            }

            const data = await response.json();
            console.log(data);
            setLocations(data);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <LocationContext.Provider value={{ GetLocations, locations, setLocations, error }}>
            {children}
        </LocationContext.Provider>
    );
};
