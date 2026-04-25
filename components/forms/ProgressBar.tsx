"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Your Vehicle", "Driver Info", "Get Your Quote"];

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full">
      {/* Step label */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7280]">
          Step {currentStep} of {totalSteps}
        </p>
        <p className="text-xs font-semibold text-[#1a56db]">
          {stepLabels[currentStep - 1]}
        </p>
      </div>

      {/* Track + fill */}
      <div className="relative h-2 w-full rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#1a56db] to-[#3b82f6] transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step indicators */}
      <div className="relative mt-4 flex justify-between">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isCompleted = step < currentStep;
          const isActive = step === currentStep;
          return (
            <div key={step} className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                  isCompleted
                    ? "border-[#1a56db] bg-[#1a56db] text-white shadow-md shadow-blue-200"
                    : isActive
                      ? "border-[#1a56db] bg-white text-[#1a56db] shadow-md shadow-blue-100 ring-4 ring-blue-50"
                      : "border-gray-200 bg-white text-gray-400"
                }`}
              >
                {isCompleted ? (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span
                className={`hidden text-[10px] font-semibold sm:block ${
                  isActive ? "text-[#1a56db]" : isCompleted ? "text-[#1a56db]" : "text-gray-400"
                }`}
              >
                {stepLabels[step - 1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
