import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
import { div } from 'framer-motion/client';

const Drawer = () => {
    const { logout } = useUser();

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    const userTypeFromStorage = localStorage.getItem("userTypeResponse");

    return (
        <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className='flex w-20 h-10 justify-center items-center drawer-button cursor-pointer font-bold hover:bg-white hover:text-black transition-all duration-300'>
                    <RxHamburgerMenu className='text-xl' />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-black text-white min-h-full w-80 p-4 justify-center ">
                    <div>
                        {userTypeFromStorage === 'Client' &&
                            <div>
                                <Link to="/clientid/get-turn">
                                    <li className='hover:bg-white hover:text-black'><p>RESERVAR TURNO</p></li>
                                </Link>
                                <Link to="/clientid/nutritional-plan">
                                    <li className='hover:bg-white hover:text-black'><p>MIS PLANES NUTRICIONALES</p></li>
                                </Link>
                                <Link to="/clientid/routine">
                                    <li className='hover:bg-white hover:text-black'><p>MIS RUTINAS</p></li>
                                </Link>
                            </div>
                        }

                        {userTypeFromStorage === 'Trainer' &&
                            <div>
                                <Link to="/profesorid/assing-nutritional-plan">
                                    <li className='hover:bg-white hover:text-black'><p>ASIGNAR PLANES NUTRICIONALES</p></li>
                                </Link>
                                <Link to="/profesorid/assing-routine">
                                    <li className='hover:bg-white hover:text-black'><p>ASIGNAR RUTINAS</p></li>
                                </Link>
                            </div>}

                        {userTypeFromStorage === 'Admin' && <div>
                            <Link to="/adminid/user-center">
                                <li className='hover:bg-white hover:text-black'><p>CENTRO DE USUARIOS</p></li>
                            </Link>
                            <Link to="/adminid/assing-shift">
                                <li className='hover:bg-white hover:text-black'><p>ASIGNACION DE TURNOS</p></li>
                            </Link>

                        </div>}
                    </div>
                    <div className='flex  items-center gap-2 mt-20 px-[16px] py-[8px] hover:bg-white hover:text-black cursor-pointer' onClick={handleLogout}>
                        <RiLogoutBoxLine />
                        <button >CERRAR SESIÓN</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Drawer