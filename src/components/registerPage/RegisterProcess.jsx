import { useState } from "react";
import { Link } from "react-router-dom";
import StepIndicator from "./StepIndicator";
import MembershipPayment from "./MembershipPayment";
import Confirmation from "./Confirmation";
import RegisterPage from './RegisterPage';

const RegisterProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const totalSteps = 3;

    const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, totalSteps - 1));
    const previousStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));
    const lastStep = () => alert("Finalizado");

    const [newUserData, setNewUserData] = useState([]);

    const handleNewUserData = (data) => {
        setNewUserData(data);
        console.log("Datos del cliente recibidos:", data);
    };

    return (
        <div className='min-h-screen bg-white flex'>
            <div className='w-2/4 h-full'>
                <header className="md:mx-14 flex justify-center md:justify-between">
                    <nav className="flex flex-col md:flex-row gap-5 md:gap-0 w-full justify-between items-center">
                        <Link to="/" className="flex items-center cursor-pointer hover:opacity-60">
                            <img src="./img/logoTC.png" className="h-[80px] w-[120px]" />
                        </Link>
                    </nav>
                </header>
                <div>
                    <StepIndicator activeStep={activeStep} />
                    {activeStep === 0 && <RegisterPage nextStep={nextStep} sendClientData={handleNewUserData} />}
                    {activeStep === 1 && (
                        <MembershipPayment previousStep={previousStep} nextStep={nextStep} />
                    )}
                    {activeStep === 2 && (
                        <Confirmation lastStep={lastStep} />
                    )}

                    {activeStep === 0 && (
                        <div className="flex flex-row gap-2 items-center justify-center mt-6">
                            <p className="text-gray-500 select-none">¿Ya eres usuario?</p>
                            <p>-</p>
                            <Link
                                to="/login"
                                className="border text-gray-800 border-black px-5 py-1 hover:bg-zinc-700 hover:text-white transition-all duration-300"
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-2/4 hidden md:block">
                <img
                    src="https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="h-full object-cover hidden md:block md:fixed"
                />
            </div>
        </div>
    );
};

export default RegisterProcess;
