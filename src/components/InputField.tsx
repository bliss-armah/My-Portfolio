import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, name, value, error, onChange }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-1.5 text-sm font-medium text-[hsl(var(--muted-foreground))]"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2.5 rounded-lg border bg-[hsl(var(--card))] text-white text-sm placeholder:text-[hsl(var(--muted-foreground))]/40 focus:outline-none focus:ring-1 transition-colors ${
          error
            ? "border-red-500/60 focus:ring-red-500/40"
            : "border-[hsl(var(--border))] focus:ring-white/20 focus:border-white/30"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
};

export default InputField;
