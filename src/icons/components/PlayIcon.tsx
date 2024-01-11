import * as React from "react";
import { IconBaseProps } from "../types";
const PlayIcon = (svgProps: IconBaseProps) => {
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
        d="M5.16669 4.33167C5.16669 3.5405 6.04193 3.06266 6.70744 3.49049L15.5249 9.15882C16.1372 9.55246 16.1372 10.4475 15.5249 10.8412L6.70744 16.5095C6.04193 16.9373 5.16669 16.4595 5.16669 15.6683V4.33167Z"
      />
    </svg>
  );
};
export default PlayIcon;
