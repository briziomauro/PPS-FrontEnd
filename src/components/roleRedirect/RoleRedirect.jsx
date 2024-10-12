import React, { useEffect } from 'react'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom';

const RoleRedirect = () => {
    const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
    const userTypeResponse = localStorage.getItem("userTypeResponse");
    
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            if (userTypeResponse === "Client") {
                navigate("/client");
            } else if (userTypeResponse === "Trainer") {
                navigate("/profesor");
            } else if (userTypeResponse === "Admin") {
                navigate("/admin");
            }
        }
    }, [isAuthenticated, userTypeResponse, navigate])

    return null;
}

export default RoleRedirect