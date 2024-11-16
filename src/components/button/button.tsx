import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "disabled";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "py-3 px-6 rounded-lg font-semibold transition-colors";
  const widthStyles = fullWidth ? "w-full" : "";

  const variantStyles = {
    primary: "bg-primary hover:bg-primaryHover text-white",
    secondary: "border-gray-300 hover:border-blue-500 text-white",
    disabled: "bg-gray-300 cursor-not-allowed text-white",
  };

  const finalClassName = `
    ${baseStyles}
    ${widthStyles}
    ${disabled ? variantStyles.disabled : variantStyles[variant]}
    ${className}
  `.trim();

  return (
    <button disabled={disabled} className={finalClassName} {...props}>
      {children}
    </button>
  );
};
