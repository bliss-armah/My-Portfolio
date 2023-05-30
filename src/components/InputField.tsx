import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  value,
  error,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-[1.1rem] text-[#617d98]">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
          error ? "border-red-500" : "focus:ring-[#e9b949]"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
