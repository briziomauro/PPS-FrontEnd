import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRole }) => {
    const userTypeResponse = localStorage.getItem("userTypeResponse");

    if ((allowedRole != userTypeResponse)) {
        return <Navigate to="*" />;
    }

    return children;
}

export default ProtectedRoute