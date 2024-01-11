import * as React from "react";
import { IconBaseProps } from "../types";
const LockIcon = (svgProps: IconBaseProps) => {
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
        d="M15.8333 9.16666H4.16667C3.24619 9.16666 2.5 9.91285 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91285 16.7538 9.16666 15.8333 9.16666Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.83331 9.16666V5.83332C5.83331 4.72825 6.2723 3.66845 7.0537 2.88704C7.8351 2.10564 8.89491 1.66666 9.99998 1.66666C11.105 1.66666 12.1649 2.10564 12.9463 2.88704C13.7277 3.66845 14.1666 4.72825 14.1666 5.83332V9.16666"
      />
    </svg>
  );
};
export default LockIcon;
