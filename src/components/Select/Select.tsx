import SelectReact from "react-select";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  props?: any;
}

export const Select: React.FC<SelectProps> = ({ options, props }) => (
  <SelectReact
    placeholder="Selecciona una opción"
    options={options}
    {...props}
  />
);
