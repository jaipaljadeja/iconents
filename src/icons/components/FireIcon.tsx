import * as React from "react";
import { IconBaseProps } from "../types";
const FireIcon = (svgProps: IconBaseProps) => {
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
        d="M14.9497 15.9172C12.2161 18.6943 7.78392 18.6943 5.05025 15.9172C3.68342 14.5287 3 12.7088 3 10.8889C3 9.069 3.68341 7.2491 5.05025 5.86057C5.05025 5.86057 5.62504 7.3333 7.37504 8.22219C7.37504 6.44441 7.81254 3.77774 9.98765 2C11.75 3.77778 13.5798 4.46884 14.9497 5.86057C16.3166 7.2491 17 9.069 17 10.8889C17 12.7088 16.3166 14.5287 14.9497 15.9172Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.14384 13.6634C9.16897 14.7048 10.831 14.7048 11.8562 13.6634C12.3687 13.1427 12.625 12.4602 12.625 11.7778C12.625 11.0953 12.3687 10.4128 11.8562 9.89212C11.3468 9.37472 10.6803 9.11438 10.0127 9.11111L9.12495 11.7777L7.375 11.7778C7.37501 12.4602 7.63129 13.1427 8.14384 13.6634Z"
      />
    </svg>
  );
};
export default FireIcon;
