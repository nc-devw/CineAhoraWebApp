import { InputHTMLAttributes } from "react";

export const CineInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  name,
  placeholder,
  value,
  onChange,
  ...props
}) => (
  <input
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type="text"
    className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    {...props}
  />
);
