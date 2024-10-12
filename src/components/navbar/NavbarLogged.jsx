import React from 'react';
import { Link } from 'react-router-dom'; 
import Drawer from '../drawer/Drawer';

const NavbarLogged = () => {
    const userTypeFromStorage = localStorage.getItem("userTypeResponse");

    const getLink = () => {
        switch (userTypeFromStorage) {
            case 'Client':
                return '/client';
            case 'Trainer':
                return '/profesor'; 
            case 'Admin':
                return '/admin'; 
            default:
                return '/'; 
        }
    };

    return (
        <nav className="navbar bg-black text-white">
            <div className="navbar-start ml-10 flex w-[45%]">
                <Drawer />
            </div>
            <Link to={getLink()} className="navbar-item">
                <img
                    src="/img/LogoLight.png"
                    alt="Logo"
                    className="h-[40px] w-[120px]"
                />
            </Link>
        </nav>
    );
};

export default NavbarLogged;
