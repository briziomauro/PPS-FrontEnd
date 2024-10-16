import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../footer/Footer";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        Nombre: '',
        Apellido: '',
        'Número de teléfono': '',
        Email: '',
        Mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formsubmit.co/mateocaranta@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Mensaje enviado correctamente');
            setFormData({
                Nombre: '',
                Apellido: '',
                'Número de teléfono': '',
                Email: '',
                Mensaje: ''
            });
        } else {
            alert('Hubo un error al enviar el mensaje');
        }
    };

    return (
        <div className=' bg-gradient-to-r from-zinc-950 to-zinc-800 h-screen'>
            <div className="flex items-center font-bebas text-white bg-black/60 w-full p-3 absolute">
                <Link to="/" className="px-5 py-2 hover:bg-zinc-800 transition-all duration-200 rounded-sm">
                    <img className="h-[40px] w-[120px]" src="/img/LogoLight.png" alt="" />
                </Link>
            </div>
            <div className="flex h-full">
                <div className="w-1/2 flex justify-center items-center">
                    <div className="h-auto w-[660px]">
                        <h2 className="text-6xl mb-6 text-center font-bebas text-white m-4">CONTACTANOS</h2>

                        <form onSubmit={handleSubmit}>
                            <div className='flex'>
                                <div className="m-4 flex-1">
                                    <label htmlFor="name" className="block text-white text-sm font-bold mb-2">NOMBRE</label>
                                    <div className='h-[2px] w-[60px] bg-yellow-500 mb-3' />
                                    <input
                                        type="text"
                                        id="name"
                                        className="px-4 py-3 shadow appearance-none border w-full text-white"
                                        placeholder="Escribí tu nombre"
                                        name='Nombre'
                                        value={formData.Nombre}
                                        onChange={handleChange} />
                                </div>
                                <div className="m-4 flex-1">
                                    <label htmlFor="surname" className="block text-white text-sm font-bold mb-2">APELLIDO</label>
                                    <div className='h-[2px] w-[65px] bg-yellow-500 mb-3' />
                                    <input
                                        type="text"
                                        id="surname"
                                        className="px-4 py-3 shadow appearance-none border w-full text-white"
                                        placeholder="Escribí tu apellido"
                                        name='Apellido'
                                        value={formData.Apellido}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className="m-4 flex-1">
                                    <label htmlFor="phonenumber" className="block text-white text-sm font-bold mb-2">NÚMERO DE TELÉFONO</label>
                                    <div className='h-[2px] w-[157px] bg-yellow-500 mb-3' />
                                    <input
                                        type="number"
                                        id="phonenumber"
                                        className="px-4 py-3 shadow appearance-none border w-full text-white"
                                        placeholder="Escribí tu número"
                                        name='Número de teléfono'
                                        value={formData['Número de teléfono']}
                                        onChange={handleChange} />
                                </div>
                                <div className="m-4 flex-1">
                                    <label htmlFor="email" className="block text-white text-sm font-bold mb-2">EMAIL</label>
                                    <div className='h-[2px] w-[45px] bg-yellow-500 mb-3' />
                                    <input
                                        type="email"
                                        id="email"
                                        className="px-4 py-3 shadow appearance-none border w-full text-white"
                                        placeholder="Escribí tu email"
                                        name='Email'
                                        value={formData.Email}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="m-4">
                                <label htmlFor="message" className="block text-white text-sm font-bold mb-2">MENSAJE</label>
                                <div className='h-[2px] w-[68px] bg-yellow-500 mb-3' />
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="shadow appearance-none border w-full py-2 px-3 text-white"
                                    placeholder="Escribí tu mensaje"
                                    name='Mensaje'
                                    value={formData.Mensaje}
                                    onChange={handleChange}></textarea>
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
            <Footer/>
        </div>
    )
}
export default ContactPage