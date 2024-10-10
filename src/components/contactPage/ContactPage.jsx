import React from 'react'

const ContactPage = () => {
    return (
        <div className='bg-black h-screen'>
            <div className="flex h-full">
                <div className="w-1/2 flex justify-center items-center">
                    <div className="h-auto w-[660px]">
                        <h2 className="text-6xl mb-6 text-center font-bebas text-white m-4">CONTACTANOS</h2>
                        <form>
                            <div className='flex'>
                                <div className="m-4 flex-1">
                                    <label htmlFor="name" className="block text-white text-sm font-bold mb-2">NOMBRE</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="px-4 py-3 shadow appearance-none border w-full text-white"
                                        placeholder="Escribí tu nombre" />
                                </div>
                                <div className="m-4 flex-1">
                                    <label htmlFor="surname" className="block text-white text-sm font-bold mb-2">APELLIDO</label>
                                    <input
                                        type="text"
                                        id="surname"
                                        className="px-4 py-3 shadow appearance-none border w-full text-white"
                                        placeholder="Escribí tu apellido" />
                                </div>
                            </div>
                            <div className='h-[2px] flex w-full bg-yellow-500 my-5' />
                            <div className="m-4">
                                <label htmlFor="message" className="block text-white text-sm font-bold mb-2">MENSAJE</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="shadow appearance-none border w-full py-2 px-3 text-white"
                                    placeholder="Escribí tu mensaje"></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="btn bg-yellow-500 rounded-full w-[175px] border-none hover:bg-yellow-400 text-white transition-all duration-300">
                                    ENVIAR
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img src='./img/FotoContacto.webp' alt="Contacto" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>




    )
}

export default ContactPage