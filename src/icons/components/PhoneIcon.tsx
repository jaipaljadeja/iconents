import * as React from "react";
import { IconBaseProps } from "../types";
const PhoneIcon = (svgProps: IconBaseProps) => {
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
        d="M13.5714 2H6.42857C5.63959 2 5 2.71634 5 3.6V16.4C5 17.2837 5.63959 18 6.42857 18H13.5714C14.3604 18 15 17.2837 15 16.4V3.6C15 2.71634 14.3604 2 13.5714 2Z"
      />
      <circle cx={10} cy={15} r={1} fill="currentColor" />
    </svg>
  );
};
export default PhoneIcon;
