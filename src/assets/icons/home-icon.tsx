import { IconProps } from "@/models";

export const HomeIcon: React.FC<IconProps> = ({
  width,
  height,
  fill,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? 32}
    height={height ?? 32}
    fill={fill ?? "currentColor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="none" />
    <path
      d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
  </svg>
);
