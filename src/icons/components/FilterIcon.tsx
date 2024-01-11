import * as React from "react";
import { IconBaseProps } from "../types";
const FilterIcon = (svgProps: IconBaseProps) => {
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
        d="M16.6666 15.8333L13.3333 15.8333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.66665 15.8333L3.33331 15.8333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.6667 10L11.6667 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.99998 10L3.33331 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.6667 4.16666L15 4.16666"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.33331 4.16666L3.33331 4.16666"
      />
      <circle
        cx={13.3334}
        cy={4.16667}
        r={1.66667}
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <circle
        cx={7.49998}
        cy={10}
        r={1.66667}
        stroke="currentColor"
        strokeWidth={1.2}
      />
      <circle
        cx={11.6667}
        cy={15.8333}
        r={1.66667}
        stroke="currentColor"
        strokeWidth={1.2}
      />
    </svg>
  );
};
export default FilterIcon;
