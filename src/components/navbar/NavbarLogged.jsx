import React from 'react'
import Drawer from '../drawer/Drawer'

const NavbarLogged = () => {
    return (
        <nav className="navbar bg-black text-white">
            <div className="navbar-start ml-10 flex w-[45%]">
                <Drawer />
            </div>
            <img
                src="./img/logoTraining.png"
                alt=""
                className="h-[80px] w-[120px] "
            />
        </nav>
    )
}

export default NavbarLogged