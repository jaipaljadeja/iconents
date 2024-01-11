import * as React from "react";
import { IconBaseProps } from "../types";
const TextIcon = (svgProps: IconBaseProps) => {
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
        d="M6.66669 13.3333L9.75726 6.29238C10 5.68033 10 5.68034 10.2428 6.29238L13.3334 13.3333M8.00002 11.2622H12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.4815 1.66666H3.51854C2.49579 1.66666 1.66669 2.49576 1.66669 3.51851V16.4815C1.66669 17.5042 2.49579 18.3333 3.51854 18.3333H16.4815C17.5043 18.3333 18.3334 17.5042 18.3334 16.4815V3.51851C18.3334 2.49576 17.5043 1.66666 16.4815 1.66666Z"
      />
    </svg>
  );
};
export default TextIcon;
