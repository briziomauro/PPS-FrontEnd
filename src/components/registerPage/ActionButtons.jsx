import React from "react";

const ActionButtons = ({ currentStep, totalSteps, nextStep, previousStep, lastStep }) => {
    return (
        <div className={`flex mt-4 w-full gap-3 px-5 ${currentStep > 0 ? 'justify-between' : 'justify-center'}`}>
            {currentStep > 0 && (
                <button
                    className="bg-yellow-400 rounded-full w-full text-white px-6 py-3 transition duration-300 hover:bg-yellow-500 font-bold flex-1"
                    onClick={previousStep}
                >
                    VOLVER
                </button>
            )}
            {currentStep < totalSteps - 1 && (
                <button
                    className="bg-yellow-400 rounded-full w-full text-white px-6 py-3 transition duration-300 hover:bg-yellow-500 font-bold flex-1"
                    onClick={nextStep}
                >
                    SIGUIENTE
                </button>
            )}
            {currentStep === totalSteps - 1 && (
                <button
                    className="bg-yellow-400 w-full rounded-full text-white px-6 py-3 transition duration-300 hover:bg-yellow-500 font-bold flex-1"
                    onClick={lastStep}
                >
                    COMPLETAR
                </button>
            )}
        </div>
    );
};

export default ActionButtons;
