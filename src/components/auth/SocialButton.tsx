import React from "react";

interface SocialButtonProps {
  provider: "google" | "linkedin";
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, onClick }) => {
  const getButtonStyles = () => {
    if (provider === "google") {
      return "bg-[rgba(86,131,210,0.15)] border-[#5683D2]";
    }
    return "bg-[#F7F7F5] border-[#DADADA]";
  };

  const getIcon = () => {
    if (provider === "google") {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] h-[18px]"
        >
          <g clipPath="url(#clip0_10895_1097)">
            <path
              d="M9.35927 10.6988V8.2395H17.646C17.727 8.66775 17.769 9.17475 17.769 9.72375C17.769 11.5688 17.265 13.8503 15.639 15.4755C14.058 17.1218 12.0383 18 9.36227 18C4.40177 18 0.231018 13.9597 0.231018 9C0.231018 4.04025 4.40177 0 9.36227 0C12.1065 0 14.061 1.077 15.5295 2.48025L13.794 4.215C12.741 3.22725 11.3138 2.45925 9.35927 2.45925C5.73752 2.45925 2.90477 5.37825 2.90477 9C2.90477 12.6217 5.73752 15.5408 9.35927 15.5408C11.7083 15.5408 13.0463 14.5972 13.9035 13.74C14.5988 13.0447 15.0563 12.0517 15.2363 10.6957L9.35927 10.6988Z"
              fill="#626B76"
            />
          </g>
          <defs>
            <clipPath id="clip0_10895_1097">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[20px] h-[20px]"
      >
        <g clipPath="url(#clip0_10895_1123)">
          <path
            d="M14.4092 15.8941H11.9033V11.97C11.9033 11.0341 11.8867 9.82998 10.6 9.82998C9.295 9.82998 9.095 10.8491 9.095 11.9025V15.8941H6.59V7.82414H8.99583V8.92664H9.02917C9.52 8.08831 10.4317 7.58748 11.4025 7.62331C13.9425 7.62331 14.41 9.29414 14.41 11.4666L14.4092 15.8941ZM3.7625 6.72081C2.95917 6.72081 2.30833 6.06998 2.30833 5.26664C2.30833 4.46331 2.95917 3.81248 3.7625 3.81248C4.56583 3.81248 5.21667 4.46331 5.21667 5.26664C5.21667 6.06998 4.56583 6.72081 3.7625 6.72081ZM5.015 15.8941H2.50667V7.82414H5.015V15.8941ZM15.6583 1.48581H1.2475C0.566667 1.47831 0.00833333 2.02414 0 2.70498V17.175C0.00833333 17.8566 0.566667 18.4025 1.2475 18.395H15.6583C16.3408 18.4033 16.9017 17.8575 16.9108 17.175V2.70414C16.9008 2.02164 16.34 1.47581 15.6583 1.48498"
            fill="#626B76"
          />
        </g>
        <defs>
          <clipPath id="clip0_10895_1123">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const getLabel = () => {
    if (provider === "google") {
      return "Continue with Google";
    }
    return "Continue with LinkedIn";
  };

  return (
    <button
      className={`w-full h-12 border flex items-center justify-center gap-2.5 rounded-xl ${getButtonStyles()}`}
      onClick={onClick}
      aria-label={getLabel()}
    >
      <div>{getIcon()}</div>
      <span className="text-[#3D3D3D] text-base">{getLabel()}</span>
    </button>
  );
};

export default SocialButton;
