import React, { ReactNode } from "react";

interface InputProps {
  children?: ReactNode;
  disabled?: boolean;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  id: string;
  icon: JSX.Element;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  touch?: Boolean;
}

const InputField = ({
  name,
  type,
  placeholder,
  icon,
  value,
  error,
  touch,
  onChange,
  onBlur,
  id,
}: InputProps) => {
  return (
    <div className="mb-4">
      <div
        className={`relative h-[40px] overflow-hidden rounded-lg border ${
          error ? "border-error" : " border-borderColor"
        }`}
      >
        {icon && (
          <span className=" absolute left-4 top-[50%] -translate-y-[50%] text-placeholder">
            {icon}
          </span>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className={`h-full w-full pl-10 text-gray border placeholder:text-placeholder focus:outline-none${
            error && touch ? " border-red-500" : "focus:border-sky-500"
          }`}
        />
      </div>
      <p
        className={`mt-1 text-[13.33px] font-normal leading-4 text-error opacity-100 ${
          error && touch ? "opacity-100 text-[red]" : ""
        }`}
      >
        {error}
      </p>
    </div>
  );
};

export default InputField;
