import * as React from "react";
import { IconBaseProps } from "../types";
const BlogIcon = (svgProps: IconBaseProps) => {
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
        d="M17 18H3C1.89543 18 1 17.1046 1 16L1 4C1 2.89543 1.89543 2 3 2L13 2C14.1046 2 15 2.89543 15 4V5M17 18C15.8954 18 15 17.1046 15 16L15 5M17 18C18.1046 18 19 17.1046 19 16V7C19 5.89543 18.1046 5 17 5L15 5M11 2L7 2M5 14H11M5 6H11V10H5V6Z"
      />
    </svg>
  );
};
export default BlogIcon;
