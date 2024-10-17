import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
import { IoIosSettings } from "react-icons/io";

const Drawer = () => {
    const { logout } = useUser();

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    const userTypeFromStorage = localStorage.getItem("userTypeResponse");

    const handleSettings = () => {
        if (userTypeFromStorage === "Trainer") {
            navigate("/trainer/settings")
        } else if (userTypeFromStorage === "Client") {
            navigate("/client/settings")
        }
    }



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
                    <div className='flex flex-1 flex-col justify-end'>
                        {userTypeFromStorage === 'Client' &&
                            <div>
                                <Link to="/client/get-turn">
                                    <li className='hover:bg-white hover:text-black'><p>RESERVAR TURNO</p></li>
                                </Link>
                                <Link to="/client/nutritional-plan">
                                    <li className='hover:bg-white hover:text-black'><p>MIS PLANES NUTRICIONALES</p></li>
                                </Link>
                                <Link to="/client/routine">
                                    <li className='hover:bg-white hover:text-black'><p>MIS RUTINAS</p></li>
                                </Link>
                            </div>
                        }

                        {userTypeFromStorage === 'Trainer' &&
                            <div>
                                <Link to="/profesor/assing-nutritional-plan">
                                    <li className='hover:bg-white hover:text-black'><p>ASIGNAR PLANES NUTRICIONALES</p></li>
                                </Link>
                                <Link to="/profesor/assing-routine">
                                    <li className='hover:bg-white hover:text-black'><p>ASIGNAR RUTINAS</p></li>
                                </Link>
                            </div>}

                        {userTypeFromStorage === 'Admin' && <div>
                            <Link to="/admin/user-center">
                                <li className='hover:bg-white hover:text-black'><p>CENTRO DE USUARIOS</p></li>
                            </Link>
                            <Link to="/admin/assing-shift">
                                <li className='hover:bg-white hover:text-black'><p>ASIGNACION DE TURNOS</p></li>
                            </Link>

                            <Link to="/admin/manage-locations">
                                <li className='hover:bg-white hover:text-black'><p>GESTIÓN DE SEDES</p></li>
                            </Link>
                        </div>}
                        {(userTypeFromStorage === 'Client' || userTypeFromStorage === 'Trainer') &&
                            <div className='flex  items-center mt-10 gap-2 px-[16px] py-[8px] hover:bg-white hover:text-black cursor-pointer' onClick={handleSettings}>
                                <IoIosSettings />
                                <button >CONFIGURACIÓN</button>
                            </div>
                        }
                    </div>
                    <div className='flex flex-col flex-1 justify-end '>
                        <div className='flex items-center mb-10 gap-2 px-[16px] py-[8px] hover:bg-white hover:text-black cursor-pointer' onClick={handleLogout}>
                            <RiLogoutBoxLine />
                            <button >CERRAR SESIÓN</button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Drawer