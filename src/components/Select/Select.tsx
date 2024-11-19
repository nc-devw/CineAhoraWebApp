import SelectReact from "react-select";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  isMulti?: boolean;
  value?: any;
  onChange?: (value: any) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  isMulti,
  value,
  onChange,
  ...props
}) => (
  <SelectReact
    placeholder="Selecciona una opción"
    isMulti={isMulti}
    value={value}
    options={options}
    onChange={onChange}
    {...props}
  />
);
