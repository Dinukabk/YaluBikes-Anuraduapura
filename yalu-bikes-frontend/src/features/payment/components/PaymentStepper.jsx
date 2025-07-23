import { useState } from 'react';
import { Stepper, Step, StepLabel, Box, Button, Typography } from '@mui/material';
import PaymentMethod from './PaymentMethod';
import PaymentConfirmation from './PaymentConfirmation';

const steps = ['Select Payment Method', 'Confirm Payment'];

export default function PaymentStepper({ booking }) {
  const [activeStep, setActiveStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box sx={{ width: '100%', my: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {activeStep === 0 && (
        <PaymentMethod 
          onNext={handleNext} 
          onMethodSelect={setPaymentMethod} 
        />
      )}
      
      {activeStep === 1 && (
        <PaymentConfirmation 
          booking={booking} 
          method={paymentMethod} 
          onBack={handleBack} 
        />
      )}
      
      {activeStep === steps.length && (
        <Typography variant="h5" align="center" sx={{ mt: 4 }}>
          Payment Successful!
        </Typography>
      )}
    </Box>
  );
}