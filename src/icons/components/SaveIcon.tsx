import * as React from "react";
import { IconBaseProps } from "../types";
const SaveIcon = (svgProps: IconBaseProps) => {
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
        d="M16.6667 18.3333L10.4167 13.7037L4.16666 18.3333V3.51851C4.16666 3.02737 4.35479 2.55634 4.68968 2.20905C5.02457 1.86176 5.47877 1.66666 5.95237 1.66666H14.8809C15.3545 1.66666 15.8087 1.86176 16.1436 2.20905C16.4785 2.55634 16.6667 3.02737 16.6667 3.51851V18.3333Z"
      />
    </svg>
  );
};
export default SaveIcon;
