import * as React from "react";
import { IconBaseProps } from "../types";
const AddressBookIcon = (svgProps: IconBaseProps) => {
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
        d="M14.6 14.3V13.4C14.6 12.9226 14.4104 12.4648 14.0728 12.1272C13.7352 11.7896 13.2774 11.6 12.8 11.6H9.19999C8.7226 11.6 8.26477 11.7896 7.9272 12.1272C7.58964 12.4648 7.39999 12.9226 7.39999 13.4V14.3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 9.3C11.9941 9.3 12.8 8.49411 12.8 7.5C12.8 6.50588 11.9941 5.7 11 5.7C10.0059 5.7 9.20001 6.50588 9.20001 7.5C9.20001 8.49411 10.0059 9.3 11 9.3Z"
      />
      <path
        stroke="currentColor"
        d="M3.6 4C3.6 2.67452 4.67452 1.6 6 1.6H16C17.3255 1.6 18.4 2.67452 18.4 4V16C18.4 17.3255 17.3255 18.4 16 18.4H6C4.67452 18.4 3.6 17.3255 3.6 16V4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M1.60001 6L3.60001 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M1.60001 10L3.60001 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M1.60001 14L3.60001 14"
      />
    </svg>
  );
};
export default AddressBookIcon;
