import React from 'react'
import { useClient } from '../../contexts/ClientContext';
import { Navigate } from 'react-router-dom';

const ClientProtectedRoute = ({ children, allowedRole }) => {
    const { clientDetails } = useClient();

    const userTypeResponse = localStorage.getItem("userTypeResponse");

    if (clientDetails?.clientDto?.typeMembership === null) {
        return <Navigate to="/client" />;
    }

    if (allowedRole != userTypeResponse) {
        return <Navigate to="*" />;
    }

    return children;
}

export default ClientProtectedRoute