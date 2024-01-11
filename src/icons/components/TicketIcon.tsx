import * as React from "react";
import { IconBaseProps } from "../types";
const TicketIcon = (svgProps: IconBaseProps) => {
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
        d="M12.6667 4V5.71429M12.6667 9.14286V10.8571M12.6667 14.2857V16M3.77778 4C2.79594 4 2 4.76751 2 5.71429V8.28571C2.98184 8.28571 3.77778 9.05323 3.77778 10C3.77778 10.9468 2.98184 11.7143 2 11.7143V14.2857C2 15.2325 2.79594 16 3.77778 16H16.2222C17.2041 16 18 15.2325 18 14.2857V11.7143C17.0182 11.7143 16.2222 10.9468 16.2222 10C16.2222 9.05323 17.0182 8.28571 18 8.28571V5.71429C18 4.76751 17.2041 4 16.2222 4H3.77778Z"
      />
    </svg>
  );
};
export default TicketIcon;
