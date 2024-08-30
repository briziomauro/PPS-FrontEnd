import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

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
                    <Link to="/adminid/user-center">
                        <li className='hover:bg-white hover:text-black'><p>CENTRO DE USUARIOS</p></li>
                    </Link>
                    <Link to="/adminid/assing-shift">
                        <li className='hover:bg-white hover:text-black'><p>ASIGNACION DE TURNOS</p></li>
                    </Link>
                    <Link to="/clientid/get-turn">
                        <li className='hover:bg-white hover:text-black'><p>SACAR TURNO</p></li>
                    </Link>
                    <Link to="/clientid/nutritional-plan">
                        <li className='hover:bg-white hover:text-black'><p>PLANES NUTRICIONALES</p></li>
                    </Link>
                    <Link to="/clientid/routine">
                        <li className='hover:bg-white hover:text-black'><p>RUTINAS</p></li>
                    </Link>
                    <Link to="/profesorid/work-calendar">
                        <li className='hover:bg-white hover:text-black'><p>MIS TURNOS</p></li>
                    </Link>
                    <Link to="/profesorid/assing-nutritional-plan">
                        <li className='hover:bg-white hover:text-black'><p>ASIGNAR PLANES NUTRICIONALES</p></li>
                    </Link>
                    <Link to="/profesorid/assing-routine">
                        <li className='hover:bg-white hover:text-black'><p>ASIGNAR RUTINAS</p></li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Drawer