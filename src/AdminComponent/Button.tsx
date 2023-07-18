import { ReactNode } from "react";

interface ButtonProps {
  children:ReactNode
  disabled?:boolean
  type:'button' | 'submit' | 'reset'
  width?:string
  className?:string
}
export const Button = ({ children, disabled, type, width, className }: ButtonProps) => {
    const buttonStyle = {
      width: width || "auto",
    };
    return (
      <button
        style={buttonStyle}
        className={`bg-[#DD5928] duration rounded-lg px-4 py-2 text-base font-normal leading-[24px] text-white transition ease-in-out ${
          disabled
            ? "cursor-not-allowed bg-invalid"
            : "cursor-pointer bg-orange hover:bg-deepOrange"
        } ${className || ""}`}
        type={type}
      >
        {children}
      </button>
    );
  };
  
