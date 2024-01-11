import * as React from "react";
import { IconBaseProps } from "../types";
const WalletIcon = (svgProps: IconBaseProps) => {
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
        d="M17.4 7.115V5.88285C17.4 4.97553 16.619 4.24 15.6556 4.24H3.44444C2.48101 4.24 1.7 4.97553 1.7 5.88285V8.34714V11.6329V14.0971C1.7 15.0045 2.48101 15.74 3.44444 15.74H15.6556C16.619 15.74 17.4 15.0045 17.4 14.0971V12.865"
      />
      <rect
        width={6.72}
        height={5.76}
        x={11.94}
        y={7.12}
        stroke="currentColor"
        strokeWidth={1.2}
        rx={0.96}
      />
      <circle cx={14.82} cy={10} r={0.96} fill="currentColor" />
    </svg>
  );
};
export default WalletIcon;
