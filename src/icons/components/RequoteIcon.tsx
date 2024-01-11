import * as React from "react";
import { IconBaseProps } from "../types";
const RequoteIcon = (svgProps: IconBaseProps) => {
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
        d="M13.7037 1.66666L16.6666 4.66666M16.6666 4.66666L13.7037 7.66666M16.6666 4.66666H6.29628C5.51045 4.66666 4.75681 4.98273 4.20114 5.54534C3.64548 6.10795 3.33331 6.87101 3.33331 7.66666V9.16666"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.29628 18.3333L3.33331 15.3333M3.33331 15.3333L6.29628 12.3333M3.33331 15.3333H13.7037C14.4895 15.3333 15.2432 15.0173 15.7988 14.4547C16.3545 13.8921 16.6666 13.129 16.6666 12.3333V10.8333"
      />
    </svg>
  );
};
export default RequoteIcon;
