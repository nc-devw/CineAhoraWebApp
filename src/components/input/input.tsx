interface InputProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const CineInput: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  ...props
}) => (
  <input
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type="text"
    className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    required
    {...props}
  />
);
