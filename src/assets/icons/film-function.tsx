import { IconProps } from "@/models";
export const FilmFunctionIcon: React.FC<IconProps> = ({
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
    <line
      x1={96}
      y1={56}
      x2={96}
      y2={200}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      d="M24,160a32,32,0,0,0,0-64V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V96a32,32,0,0,0,0,64v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
  </svg>
);
