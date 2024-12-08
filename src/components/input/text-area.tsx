import { TextareaHTMLAttributes } from "react";

export const CineTextArea: React.FC<
  TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ rows, placeholder, value, onChange, ...props }) => (
  <textarea
    rows={rows ?? 4}
    className="block p-2.5 w-full rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    {...props}
  />
);
