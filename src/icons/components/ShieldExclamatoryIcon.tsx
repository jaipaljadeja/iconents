import * as React from "react";
import { IconBaseProps } from "../types";
const ShieldExclamatoryIcon = (svgProps: IconBaseProps) => {
  const { title, ...props } = svgProps;
  const titleId = title;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      strokeWidth={1.2}
      stroke="currentColor"
      aria-hidden="true"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.9795 4.53284C17.79 4.54262 17.5993 4.54758 17.4074 4.54758C14.8867 4.54758 12.562 3.69288 10.6977 2.25257C10.289 1.93685 9.71084 1.93684 9.30217 2.25256C7.43785 3.6928 5.11324 4.54746 2.59259 4.54746C2.40072 4.54746 2.20998 4.54251 2.02049 4.53272C1.78954 5.44123 1.66667 6.39403 1.66667 7.37605C1.66667 12.6478 5.2077 17.0774 10 18.3334C14.7923 17.0774 18.3333 12.6478 18.3333 7.37605C18.3333 6.39407 18.2105 5.44131 17.9795 4.53284Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 7.36668L10 10.7"
      />
      <circle
        cx={10}
        cy={13.1967}
        r={0.833333}
        fill="currentColor"
        transform="rotate(-180 10 13.1967)"
      />
    </svg>
  );
};
export default ShieldExclamatoryIcon;
