import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

const MembershipContext = createContext();

export const useMembership = () => useContext(MembershipContext);

const fetchAllMemberships = async () => {
    const response = await fetch("https://localhost:7179/api/Membership/Get", {
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
}

export const MembershipProvider = ({ children }) => {

    const { data: membershipData, errorMemberhsip, isLoadingMember } = useQuery({
        queryKey: ['membershipData'],
        queryFn: fetchAllMemberships,
        onSuccess: () => {
            console.log("Detalles de membresias obtenidos exitosamente");
        },
        onError: (errorMemberhsip) => {
            console.error("Error al obtener los detalles de membersias");
        },
    });

    return (
        <MembershipContext.Provider value={{ membershipData, errorMemberhsip, isLoadingMember }}>
            {children}
        </MembershipContext.Provider>
    );
};
