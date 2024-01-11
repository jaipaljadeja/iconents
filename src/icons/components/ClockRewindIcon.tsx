import * as React from "react";
import { IconBaseProps } from "../types";
const ClockRewindIcon = (svgProps: IconBaseProps) => {
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
        d="M1.66668 4.16669L2.60309 7.96377L6.25716 7.12099"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.81834 14.3011C4.73719 15.6426 6.06715 16.6492 7.60782 17.1692C9.14849 17.6891 10.8164 17.6943 12.3603 17.1839C13.9041 16.6735 15.2403 15.6751 16.1675 14.3393C17.0946 13.0035 17.5625 11.4025 17.5007 9.77766C17.4388 8.15279 16.8506 6.59204 15.8246 5.33056C14.7985 4.06908 13.3903 3.17521 11.8122 2.78364C10.234 2.39208 8.57125 2.52402 7.07456 3.15959C5.57787 3.79517 4.32828 4.89994 3.51407 6.30745"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.58333 6.66666V11.25L12.9167 12.9167"
      />
    </svg>
  );
};
export default ClockRewindIcon;
