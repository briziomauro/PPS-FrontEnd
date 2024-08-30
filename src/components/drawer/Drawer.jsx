import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Drawer = () => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className='flex w-20 h-10 justify-center items-center drawer-button cursor-pointer font-bold hover:bg-white hover:text-black transition-all duration-300'>
                    <RxHamburgerMenu className='text-xl' />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-black text-white min-h-full w-80 p-4 justify-center ">
                    {/* ternario segun el rol del usuario */}
                    <li className='hover:bg-white hover:text-black'><a>CENTRO DE USUARIOS</a></li>
                    <li className='hover:bg-white hover:text-black'><a>ASIGNACION DE TURNOS</a></li>

                    <li className='hover:bg-white hover:text-black'><a>SACAR TURNO</a></li>
                    <li className='hover:bg-white hover:text-black'><a>PLANES NUTRICIONALES</a></li>
                    <li className='hover:bg-white hover:text-black'><a>RUTINAS</a></li>

                    <li className='hover:bg-white hover:text-black'><a>MIS TURNOS</a></li>
                    <li className='hover:bg-white hover:text-black'><a>ASIGNAR PLANES NUTRICIONALES</a></li>
                    <li className='hover:bg-white hover:text-black'><a>ASIGNAR RUTINAS</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer