import * as React from "react";
import { IconBaseProps } from "../types";
const SaveRemoveIcon = (svgProps: IconBaseProps) => {
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
        d="M16.6667 12.0833V18.3333L10 13.7037L3.33334 18.3333V3.51851C3.33334 3.02737 3.53402 2.55634 3.89124 2.20905C4.24845 1.86176 4.73293 1.66666 5.23811 1.66666H14.7619C15.2671 1.66666 15.7516 1.86176 16.1088 2.20905C16.466 2.55634 16.6667 3.02737 16.6667 3.51851V4.27082"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M13 8.33334H18.8333"
      />
    </svg>
  );
};
export default SaveRemoveIcon;
