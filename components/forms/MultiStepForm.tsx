"use client";

import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
  }),
};

export default function MultiStepForm() {
  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    progress,
  } = useMultiStepForm();

  // Track direction: +1 = going forward, -1 = going back
  const prevStepRef = useRef(currentStep);
  const direction = currentStep >= prevStepRef.current ? 1 : -1;
  prevStepRef.current = currentStep;

  return (
    <div className="w-full">
      <ProgressBar currentStep={currentStep} totalSteps={3} />

      <div className="mt-6 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentStep === 1 && (
              <StepOne
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
              />
            )}
            {currentStep === 2 && (
              <StepTwo
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {currentStep === 3 && (
              <StepThree
                formData={formData}
                updateFormData={updateFormData}
                prevStep={prevStep}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
