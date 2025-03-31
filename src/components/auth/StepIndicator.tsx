import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex items-center justify-center gap-[114px] mt-[58px] max-md:gap-[60px] max-sm:gap-[30px] max-sm:flex-wrap">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 ${
              index + 1 <= currentStep
                ? "bg-[#5683D2] text-white"
                : "bg-[#DADADA] text-[#5F5F5F]"
            } font-semibold rounded-full flex items-center justify-center`}
            aria-label={`Step ${index + 1} ${index + 1 === currentStep ? "(current)" : ""}`}
          >
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div
              className="h-px w-[98px] bg-[#DADADA] ml-4"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
