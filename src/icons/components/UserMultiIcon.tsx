import * as React from "react";
import { IconBaseProps } from "../types";
const UserMultiIcon = (svgProps: IconBaseProps) => {
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
        d="M15 17V15.3333C15 14.4493 14.7366 13.6014 14.2678 12.9763C13.7989 12.3512 13.163 12 12.5 12H7.5C6.83696 12 6.20107 12.3512 5.73223 12.9763C5.26339 13.6014 5 14.4493 5 15.3333V17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.93047 8.253C11.3811 8.253 12.557 7.07707 12.557 5.6265C12.557 4.17592 11.3811 3 9.93047 3C8.47989 3 7.30396 4.17592 7.30396 5.6265C7.30396 7.07707 8.47989 8.253 9.93047 8.253Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 11C5.10457 11 6 10.1046 6 9C6 7.89543 5.10457 7 4 7C2.89543 7 2 7.89543 2 9C2 10.1046 2.89543 11 4 11Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 17V15.6371C18.9996 15.0332 18.8029 14.4465 18.4409 13.9692C18.0789 13.4919 17.5721 13.151 17 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 17V15.6371C1.00044 15.0332 1.1971 14.4465 1.55909 13.9692C1.92108 13.4919 2.42791 13.151 3 13"
      />
    </svg>
  );
};
export default UserMultiIcon;
