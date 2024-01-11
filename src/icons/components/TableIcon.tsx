import * as React from "react";
import { IconBaseProps } from "../types";
const TableIcon = (svgProps: IconBaseProps) => {
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
        d="M2 7.66667H18M2 12.3333H18M10 7.66667V17M3.77778 17H16.2222C17.2041 17 18 15.9553 18 14.6667V5.33333C18 4.04467 17.2041 3 16.2222 3H3.77778C2.79594 3 2 4.04467 2 5.33333V14.6667C2 15.9553 2.79594 17 3.77778 17Z"
      />
    </svg>
  );
};
export default TableIcon;
