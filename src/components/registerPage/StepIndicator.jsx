import React from 'react';
import { Stepper, Step } from 'react-form-stepper';
import { MdDescription } from 'react-icons/md';
import './StepIndicator.css'

const StepIndicator = ({ activeStep }) => {
    return (
        <Stepper activeStep={activeStep} className='text-zinc-400'>
            <Step label="Informacion Personal" children={<MdDescription />} className="custom-step" />
            <Step label="Abone su Membresia" className="custom-step" />
            <Step label="Confirmación" className="custom-step" />
        </Stepper>
    );
};

export default StepIndicator;