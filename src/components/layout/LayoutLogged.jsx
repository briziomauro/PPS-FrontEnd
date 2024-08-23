import React from 'react'
import NavbarLogged from '../navbar/NavbarLogged'
import Footer from '../footer/Footer'

const LayoutLogged = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarLogged />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}

export default LayoutLogged