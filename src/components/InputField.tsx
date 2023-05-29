// import React from 'react'
// import { FormData } from "../Schema/Form";

// interface FormFieldProps {
//     label: string;
//     type: string;
//     name: keyof FormData;
//     value: string ;
//     error: string;
//     onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//   }

// const FormField : React.FC<FormFieldProps> = ({label,type,name,value,onChange,error}) => {
//   return (
//     <div>
//       <label htmlFor={name} className="block mb-1">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`w-full px-4 py-2 border rounded-md focus:outline-none  ${
//           error ? "border-red-500" : "focus:ring-[#e9b949]"
//         }`}
//       />
//       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//     </div>
//   )
// }

// export default FormField