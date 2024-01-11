import * as React from "react";
import { IconBaseProps } from "../types";
const TorchOnIcon = (svgProps: IconBaseProps) => {
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
        d="M4 5H16M10 10V13M6.33333 9.03493V16.8C6.33333 17.4627 6.87059 18 7.53333 18H12.4667C13.1294 18 13.6667 17.4627 13.6667 16.8V9.03493C13.6667 8.71238 13.7965 8.40341 14.0269 8.1777L15.6397 6.59781C15.8702 6.3721 16 6.06313 16 5.74058V3.2C16 2.53726 15.4627 2 14.8 2H5.2C4.53726 2 4 2.53726 4 3.2V5.74058C4 6.06313 4.12985 6.3721 4.36026 6.59781L5.97307 8.1777C6.20348 8.40341 6.33333 8.71238 6.33333 9.03493Z"
      />
    </svg>
  );
};
export default TorchOnIcon;
