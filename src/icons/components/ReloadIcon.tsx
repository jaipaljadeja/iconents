import * as React from "react";
import { IconBaseProps } from "../types";
const ReloadIcon = (svgProps: IconBaseProps) => {
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
        d="M1.66669 4.16667L2.6031 7.96376L6.25717 7.12098"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.81833 14.3011C4.73718 15.6426 6.06714 16.6492 7.60781 17.1692C9.14848 17.6891 10.8164 17.6943 12.3603 17.1839C13.9041 16.6735 15.2403 15.6751 16.1674 14.3393C17.0946 13.0035 17.5625 11.4025 17.5006 9.77766C17.4388 8.15279 16.8505 6.59204 15.8245 5.33056C14.7985 4.06908 13.3903 3.17521 11.8121 2.78364C10.2339 2.39208 8.57124 2.52402 7.07455 3.15959C5.57786 3.79517 4.32827 4.89994 3.51406 6.30745"
      />
    </svg>
  );
};
export default ReloadIcon;
