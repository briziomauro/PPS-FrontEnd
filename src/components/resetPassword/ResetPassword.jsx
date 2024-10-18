import React, { useState } from 'react';

const ResetPassword = () => {
    const [emailRequest, setEmailRequest] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [openCodeModal, setOpenCodeModal] = useState(false);
    const [isCodeVerified, setIsCodeVerified] = useState(false);

    const handleEmailRequest = (e) => {
        setEmailRequest(e.target.value);
    };

    const handleRequestPass = async (e) => {
        e.preventDefault();

        const requestResetPass = async () => {
            try {
                const response = await fetch('https://localhost:7179/api/User/RequestResetPassword', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(emailRequest),
                });

                if (response.ok) {
                    setMessage('Se ha enviado un código de verificación a tu correo electrónico.');
                    document.getElementById('my_modal_resetPass').close();
                    setOpenCodeModal(true);
                    setError('');
                } else if (response.status === 404) {
                    setError('No se encontró una cuenta con ese correo electrónico.');
                    setMessage('');
                } else {
                    throw new Error('Error al procesar la solicitud.');
                }
            } catch (error) {
                setError('Hubo un error al enviar la solicitud. Por favor, intenta nuevamente.');
                console.log(error);
            }
        };

        await requestResetPass();
    };

    const handleVerifyCode = async (e) => {
        e.preventDefault();

        const verifyCodeData = {
            email: emailRequest,
            code: verificationCode,
        };

        try {
            const response = await fetch('https://localhost:7179/api/User/VerifyResetPasswordCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(verifyCodeData),
            });

            if (response.ok) {
                setMessage('Código verificado correctamente. Ahora puedes restablecer tu contraseña.');
                setIsCodeVerified(true); 
                setError('');
            } else {
                setError('Código inválido o expirado.');
                setMessage('');
            }
        } catch (error) {
            setError('Error al verificar el código.');
            console.log(error);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        const changePasswordData = {
            email: emailRequest,
            newPassword: newPassword,
        };

        try {
            const response = await fetch('https://localhost:7179/api/User/ResetPassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(changePasswordData),
            });

            if (response.ok) {
                setMessage('Tu contraseña ha sido restablecida exitosamente.');
                setError('');
                setOpenCodeModal(false);
            } else {
                setError('Error al restablecer la contraseña.');
                setMessage('');
            }
        } catch (error) {
            setError('Hubo un error al restablecer la contraseña. Por favor, intenta nuevamente.');
            console.log(error);
        }
    };

    const handleCloseCodeModal = () => {
        setOpenCodeModal(false);
    };

    return (
        <>
            <div className="text-zinc-600 mt-4 flex w-full justify-center cursor-pointer hover:text-yellow-500 transition-all duration-300" onClick={() => document.getElementById('my_modal_resetPass').showModal()}>
                Olvidé mi contraseña
            </div>

            <dialog id="my_modal_resetPass" className="modal">
                <div className="modal-box bg-black">
                    <form method="dialog">
                        <button className="flex justify-end w-full border-none text-white">✕</button>
                    </form>

                    <form className='flex flex-col items-center' onSubmit={handleRequestPass}>
                        <p className="font-bebas text-white text-xl mb-3">Por favor, introduce tu correo electrónico registrado.</p>
                        <div className="mb-4 w-full">
                            <input
                                onChange={handleEmailRequest}
                                value={emailRequest}
                                type="email"
                                placeholder="Ingrese su Correo Electrónico"
                                className='bg-white appearance-none border caret-black rounded w-full py-4 px-3 text-black placeholder-zinc-500 leading-tight focus:outline-none '
                                required
                            />
                        </div>
                        <button type='submit' className='font-bebas text-white bg-gradient-to-tr from-yellow-600 via-yellow-500 to-yellow-600 px-4 py-2 text-lg rounded-xl hover:scale-105 transition-all duration-300'>
                            ENVIAR
                        </button>
                    </form>

                    {message && <p className="text-green-500 mt-4">{message}</p>}
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </div>
            </dialog>

            {openCodeModal && (
                <dialog id="my_modal_code" open className="modal">
                    <div className="modal-box bg-black">
                        <form method="dialog">
                            <button className="flex justify-end w-full border-none text-white" onClick={handleCloseCodeModal}>✕</button>
                        </form>

                        {!isCodeVerified ? (
                            <form className="flex flex-col items-center" onSubmit={handleVerifyCode}>
                                <p className="font-bebas text-white text-xl mb-3">Introduce el código de verificación que recibiste en tu correo.</p>
                                <div className="mb-4 w-full">
                                    <input
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                        value={verificationCode}
                                        type="text"
                                        placeholder="Código de verificación"
                                        className='bg-white appearance-none border caret-black rounded w-full py-4 px-3 text-black placeholder-zinc-500 leading-tight focus:outline-none '
                                        required
                                    />
                                </div>
                                <button type='submit' className='font-bebas text-white bg-gradient-to-tr from-yellow-600 via-yellow-500 to-yellow-600 px-4 py-2 text-lg rounded-xl hover:scale-105 transition-all duration-300'>
                                    VERIFICAR CÓDIGO
                                </button>
                            </form>
                        ) : (
                            <form className="flex flex-col items-center" onSubmit={handleChangePassword}>
                                <p className="font-bebas text-white text-xl mb-3">Introduce tu nueva contraseña.</p>
                                <div className="mb-4 w-full">
                                    <input
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        value={newPassword}
                                        type="password"
                                        placeholder="Nueva contraseña"
                                        className='bg-white appearance-none border caret-black rounded w-full py-4 px-3 text-black placeholder-zinc-500 leading-tight focus:outline-none '
                                        required
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <input
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        value={confirmPassword}
                                        type="password"
                                        placeholder="Confirmar nueva contraseña"
                                        className='bg-white appearance-none border caret-black rounded w-full py-4 px-3 text-black placeholder-zinc-500 leading-tight focus:outline-none '
                                        required
                                    />
                                </div>
                                <button type='submit' className='font-bebas text-white bg-gradient-to-tr from-yellow-600 via-yellow-500 to-yellow-600 px-4 py-2 text-lg rounded-xl hover:scale-105 transition-all duration-300'>
                                    CAMBIAR CONTRASEÑA
                                </button>
                            </form>
                        )}

                        {message && <p className="text-green-500 mt-4">{message}</p>}
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                    </div>
                </dialog>
            )}
        </>
    );
};

export default ResetPassword;
