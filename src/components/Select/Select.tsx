import SelectReact from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  name?: string;
  options: Option[];
  isMulti?: boolean;
  value?: any;
  onChange?: (value: any) => void;
  onBlur?: () => void;
}

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  isMulti,
  value,
  onChange,
  onBlur,
  ...props
}) => (
  <SelectReact
    name={name}
    placeholder="Selecciona una opción"
    isMulti={isMulti}
    value={value}
    options={options}
    onChange={onChange}
    onBlur={onBlur}
    {...props}
  />
);
