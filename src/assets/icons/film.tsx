import { IconProps } from "@/models";

export const FilmIcon: React.FC<IconProps> = ({
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
    <circle
      cx={128}
      cy={128}
      r={96}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <line
      x1={128}
      y1={224}
      x2={232}
      y2={224}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <circle
      cx={128}
      cy={80}
      r={16}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <circle
      cx={128}
      cy={176}
      r={16}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <circle
      cx={176}
      cy={128}
      r={16}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <circle
      cx={80}
      cy={128}
      r={16}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
  </svg>
);
