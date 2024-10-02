import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const NotFound = () => {
    return (
        <>
            <header className='w-full bg-black h-20 flex justify-center items-center'>
                <Link to='/'>
                    <img src="/img/LogoLight.png" alt="" className='h-[40px] w-[120px]' />
                </Link>
            </header>

            <div className='h-screen flex flex-col justify-between items-center'>
                <div className='flex flex-col flex-grow justify-center items-center'>
                    <div className='flex flex-col gap-3 justify-center text-black items-center font-bebas text-5xl mb-5'>
                        <p>ERROR 404</p>
                        <p>NOT FOUND!</p>
                    </div>

                    <Link to="/" className='bg-zinc-900 text-white font-bebas text-4xl px-5 py-3 rounded-lg'>
                        <button>VOLVER A INICIO</button>
                    </Link>
                </div>

                <Footer />
            </div>

        </>
    )

}

export default NotFound