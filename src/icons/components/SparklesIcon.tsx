import * as React from "react";
import { IconBaseProps } from "../types";
const SparklesIcon = (svgProps: IconBaseProps) => {
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
        d="M4.16667 2.5V5.83333M2.5 4.16667H5.83333M5 14.1667V17.5M3.33333 15.8333H6.66667M10.8333 2.5L12.7381 8.21429L17.5 10L12.7381 11.7857L10.8333 17.5L8.92857 11.7857L4.16667 10L8.92857 8.21429L10.8333 2.5Z"
      />
    </svg>
  );
};
export default SparklesIcon;
