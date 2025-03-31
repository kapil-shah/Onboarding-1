import React from "react";
import SocialButton from "./SocialButton";

const SignUpCard: React.FC = () => {
  const handleGoogleSignUp = () => {
    console.log("Sign up with Google");
  };

  const handleLinkedInSignUp = () => {
    console.log("Sign up with LinkedIn");
  };

  const handleTermsClick = () => {
    console.log("Terms of Service clicked");
  };

  const handlePrivacyClick = () => {
    console.log("Privacy Policy clicked");
  };

  const handleSignInClick = () => {
    console.log("Sign In clicked");
  };

  return (
    <article className="w-[714px] bg-white mt-12 rounded-[20px] max-md:w-[90%] max-sm:w-[95%]">
      <div className="flex flex-col items-center p-[27px]">
        <h2 className="text-[#3D3D3D] text-xl font-semibold">
          Create Your Expert Account
        </h2>
        <p className="text-[#626B76] text-base mt-[11px]">
          Sign up to unlock the power of your knowledge.
        </p>
        <div className="w-[249px] mt-6">
          <SocialButton provider="google" onClick={handleGoogleSignUp} />
          <div className="mt-[22px]">
            <SocialButton provider="linkedin" onClick={handleLinkedInSignUp} />
          </div>
        </div>
        <div className="text-[#626B76] text-sm text-center mt-14">
          <span>By signing up, you agree to our </span>
          <button
            className="text-[#626B76] underline cursor-pointer"
            onClick={handleTermsClick}
          >
            Terms of Service
          </button>
          <span> and </span>
          <button
            className="text-[#626B76] underline cursor-pointer"
            onClick={handlePrivacyClick}
          >
            Privacy Policy
          </button>
          <span>.</span>
        </div>
      </div>
      <div className="h-[57px] bg-[#EFEFEF] flex items-center justify-center text-sm text-[#3D3D3D] rounded-[0_0_20px_20px]">
        <span>Already have an account? </span>
        <button
          className="text-[#3D3D3D] font-medium cursor-pointer ml-1"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
      </div>
    </article>
  );
};

export default SignUpCard;
