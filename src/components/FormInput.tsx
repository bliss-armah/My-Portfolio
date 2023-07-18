import React from "react";

interface inputProps {
  label?: string;
  type: string;
  style?: string
  value?: string
  name: string
  id: string
  onChange:React.ChangeEventHandler<HTMLInputElement>
}
const FormInput = ({ label,type,style,value,name,id,onChange }: inputProps) => {
  return (
    <div className="mb-4 flex items-center justify-between ">
      <label htmlFor={id} className=" mb-2 font-semibold  capitalize">
        {label}
      </label>
      <input type={type} name={name} value={value} id={id} onChange={onChange} className={`rounded w-[80%]  p-2 ${style}`} />
    </div>
  );
};

export default FormInput;
