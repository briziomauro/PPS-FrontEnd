import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar bg-white justify-evenly text-black">
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-zinc-950 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Ventajas</a></li>
                        <li><a>Membersias</a></li>
                        <li><a>Sobre Nosotros</a></li>
                        <li><a>Entrenadores</a></li>
                    </ul>
                </div>
                <img src="./img/logoTC.png" alt="" className="h-[80px] w-[120px]" />
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>VENTAJAS</a></li>
                    <li><a>MEMBERSIAS</a></li>
                    <li><a>SOBRE NOSOTROS</a></li>
                    <li><a>ENTRENADORES</a></li>
                </ul>
            </div>
            <div>
                <a className="btn bg-yellow-500 rounded-full w-[120px] border-none hover:bg-zinc-800 text-white transition-all duration-200 ">LOGIN</a>
            </div>
        </nav>
    )
}

export default Navbar