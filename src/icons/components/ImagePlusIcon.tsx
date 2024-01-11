import * as React from "react";
import { IconBaseProps } from "../types";
const ImagePlusIcon = (svgProps: IconBaseProps) => {
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
        d="M18.3333 9.99999V16.4815C18.3333 17.5042 17.5042 18.3333 16.4815 18.3333H3.51851C2.49576 18.3333 1.66666 17.5042 1.66666 16.4815V3.51851C1.66666 2.49576 2.49576 1.66666 3.51851 1.66666H9.99999"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.66667 8.33333C7.58714 8.33333 8.33333 7.58714 8.33333 6.66667C8.33333 5.74619 7.58714 5 6.66667 5C5.74619 5 5 5.74619 5 6.66667C5 7.58714 5.74619 8.33333 6.66667 8.33333Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.3333 12.8788L14.342 9.00839C13.9541 8.63226 13.3376 8.63226 12.9497 9.00839L3.33334 18.3333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 1V6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 3.5H14"
      />
    </svg>
  );
};
export default ImagePlusIcon;
