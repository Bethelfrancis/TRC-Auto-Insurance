import { useState } from "react";
import { LeadData } from "@/lib/types";

export function useMultiStepForm() {
  const TOTAL_STEPS = 3;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<LeadData>>({});

  const updateFormData = (data: Partial<LeadData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const isLastStep = currentStep === TOTAL_STEPS;
  const isFirstStep = currentStep === 1;
  const progress = (currentStep / TOTAL_STEPS) * 100;

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({});
  };

  return {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
    progress,
    resetForm,
    totalSteps: TOTAL_STEPS,
  };
}
