import { PiWarningCircleLight } from "react-icons/pi";

const MembershipPayment = ({ previousStep, nextStep }) => {
    const validate = () => {
        // Validar con el return del endpoint que el pago fue aprobado
        nextStep();
    };

    return (
        <div className="flex flex-col text-center text-black justify-center ">
            <h2 className="font-bebas mt-6 text-4xl text-zinc-700 text-center ">
                PAGO DE MEMBRESIA
            </h2>
            <div className="flex items-center gap-2 justify-center">
                <PiWarningCircleLight />
                <p>DESPUES DE PAGAR NO SE PUEDE VOLVER ATRAS</p>
            </div>
        </div>
    );
};

export default MembershipPayment;
