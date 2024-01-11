import * as React from "react";
import { IconBaseProps } from "../types";
const ReplyIcon = (svgProps: IconBaseProps) => {
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
        d="M14.1667 9.44443C14.1667 9.78823 14.0301 10.118 13.787 10.3611C13.5439 10.6042 13.2142 10.7407 12.8704 10.7407H5.09259L2.5 13.3333V2.96295C2.5 2.61915 2.63657 2.28944 2.87968 2.04633C3.12278 1.80323 3.4525 1.66666 3.7963 1.66666H12.8704C13.2142 1.66666 13.5439 1.80323 13.787 2.04633C14.0301 2.28944 14.1667 2.61915 14.1667 2.96295V9.44443Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5833 5.83334H16.2037C16.5475 5.83334 16.8772 5.97463 17.1203 6.22611C17.3634 6.4776 17.5 6.81869 17.5 7.17434V13.8793C17.5 14.235 17.3634 14.5761 17.1203 14.8275C16.8772 15.079 16.5475 15.2203 16.2037 15.2203H14.5833V18.3333L10.8333 15.3161H7.12645C6.41229 15.3161 5.83334 14.7372 5.83334 14.023V14.023"
      />
      <path stroke="currentColor" strokeLinecap="round" d="M5.83334 5H10" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M5.83334 7.5H8.33334"
      />
    </svg>
  );
};
export default ReplyIcon;
