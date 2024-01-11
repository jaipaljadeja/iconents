import * as React from "react";
import { IconBaseProps } from "../types";
const TorchOffIcon = (svgProps: IconBaseProps) => {
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
        d="M16 5V5.74058C16 6.06313 15.8702 6.3721 15.6397 6.59781L14.0269 8.1777C13.7965 8.40341 13.6667 8.71238 13.6667 9.03493V10.5M16 5V3.2C16 2.53726 15.4627 2 14.8 2H5.5M16 5H8.5M13.6667 16.8C13.6667 17.4627 13.1294 18 12.4667 18H7.53333C6.87059 18 6.33333 17.4627 6.33333 16.8V9.03493C6.33333 8.71238 6.20348 8.40341 5.97307 8.1777L4.36026 6.59781C4.12985 6.3721 4 6.06313 4 5.74058V4M13.6667 16.8V16.8587M13.6667 16.8V14M1.66675 1.66663L18.3334 18.3333M10 10V13"
      />
    </svg>
  );
};
export default TorchOffIcon;
