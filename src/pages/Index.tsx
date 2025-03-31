import React from "react";
import StepIndicator from "@/components/auth/StepIndicator";
import SignUpCard from "@/components/auth/SignUpCard";
import Footer from "@/components/layout/Footer";

const Index: React.FC = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-[#F7F7F5] w-full">
      {/* Logo */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6c2efac3e15b0134bbeeea8ecd09a7af2dd2e2"
        alt="Wizly Logo"
        className="w-[131px] h-[40px] mt-[62px] max-sm:mt-[32px]"
      />

      {/* Header Text */}
      <h1 className="text-[#3D3D3D] text-[25px] font-semibold text-center mt-[49px]">
        Join the Knowledge Hub
      </h1>
      <p className="text-[#626B76] text-base text-center mt-[11px]">
        Your personalized AI knowledge platform for experts.
      </p>

      {/* Step Indicator */}
      <StepIndicator currentStep={1} totalSteps={5} />

      {/* Sign Up Card */}
      <SignUpCard />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
