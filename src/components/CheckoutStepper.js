import "../styles/Checkout.css";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import Payment from "./Payment";
import Shipping from "./Shipping";
import Address from "./Address";

import { useState, Fragment } from "react";

const STEPS = ["Address", "Shipping", "Payment"];

const CheckoutStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box style={{marginTop: "10px"}}>
      <Stepper style={{fontFamily: "inherit"}} activeStep={activeStep}>
        {STEPS.map((label, _) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === STEPS.length ? (
        <Fragment>
          <div  style={{display: "grid", height: "360px"}}>
          <h1 style={{placeSelf: "center"}}>Thank you for shopping with Plantshed!</h1>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {activeStep === 0 && <Address />}
          {activeStep === 1 && <Shipping />}
          {activeStep === 2 && <Payment />}
          <Box style={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Box style={{ flex: "1 1 auto" }} />
            <button onClick={handleNext} className="checkout-btn" type="button">
              {activeStep === STEPS.length - 1 ? "Checkout" : `Continue to ${STEPS[activeStep+1]}`}
            </button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default CheckoutStepper;
