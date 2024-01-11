import * as React from "react";
import { IconBaseProps } from "../types";
const BellPowerIcon = (svgProps: IconBaseProps) => {
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
        d="M9 1.69334C7.85755 1.81578 6.78355 2.35504 5.96447 3.22872C5.02678 4.22892 4.5 5.58547 4.5 6.99996C4.5 11.1623 3.38128 13.3358 2.64056 14.3187C2.46472 14.552 2.64737 15 2.93954 15H16.0605C16.3526 15 16.5343 14.5509 16.3585 14.3175C16.0679 13.9316 15.7192 13.3625 15.4028 12.5621"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.1633 17.5C10.9939 17.7535 10.7508 17.9639 10.4583 18.1101C10.1658 18.2564 9.83421 18.3333 9.49665 18.3333C9.1591 18.3333 8.82747 18.2564 8.53497 18.1101C8.24247 17.9639 7.99936 17.7535 7.82999 17.5"
      />
      <g clipPath="url(#clip0_3727_52055)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.65 3.58667C17.1743 4.11117 17.5314 4.77935 17.676 5.50675C17.8206 6.23414 17.7462 6.98808 17.4624 7.67323C17.1785 8.35839 16.6978 8.94398 16.0812 9.35598C15.4645 9.76799 14.7396 9.98789 13.9979 9.98789C13.2563 9.98789 12.5313 9.76799 11.9147 9.35598C11.298 8.94398 10.8174 8.35839 10.5335 7.67323C10.2496 6.98808 10.1753 6.23414 10.3199 5.50675C10.4645 4.77935 10.8215 4.11117 11.3458 3.58667"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 1.65334V5.82"
        />
      </g>
      <defs>
        <clipPath id="clip0_3727_52055">
          <rect
            width={10}
            height={10}
            fill="white"
            transform="translate(9 0.82)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BellPowerIcon;
