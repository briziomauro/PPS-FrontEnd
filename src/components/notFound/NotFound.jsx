import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const NotFound = () => {
    return (
        <div className='bg-black'>
            <header className='w-full bg-black h-20 flex justify-center items-center'>
                <Link to='/'>
                    <img src="/img/LogoLight.png" alt="" className='h-[40px] w-[120px]' />
                </Link>
            </header>

            <div className='h-screen flex flex-col justify-between items-center text-white'>
                <div className='flex flex-col flex-grow justify-center items-center'>
                    <div className='flex  gap-5 justify-center items-center font-bebas text-5xl mb-10'>
                        <img src="/gif/cinta.gif" alt="" className='w-28 h-28 rounded-full' />
                        <div className='flex flex-col gap-3'>
                            <p>ERROR 404</p>
                            <p>NOT FOUND!</p>
                        </div>
                    </div>

                    <Link to="/" className='flex justify-center items-center bg-yellow-400 text-white font-bebas px-5 py-3 rounded-full w-[500px] hover:bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500 hover:scale-110 transition-all duration-300'>
                        <button className='text-4xl'>VOLVER A INICIO</button>
                    </Link>
                </div>

                <Footer />
            </div>

        </div>
    )

}

export default NotFound