import * as React from "react";
import { IconBaseProps } from "../types";
const BellOffIcon = (svgProps: IconBaseProps) => {
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
        d="M11.6666 17.5C11.4973 17.7535 11.2542 17.9639 10.9617 18.1101C10.6692 18.2564 10.3375 18.3333 9.99998 18.3333C9.66243 18.3333 9.3308 18.2564 9.0383 18.1101C8.7458 17.9639 8.50269 17.7535 8.33331 17.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.8333 10.8333C15.247 9.47616 14.9675 8.07336 15.003 6.66666"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.41667 5.41666C5.17857 5.83332 5.17857 6.12403 5.17857 6.6201C5.17857 11.0226 3.95647 13.301 3.16323 14.3161C2.98233 14.5476 3.16326 15 3.45707 15H15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 6.66666C15.0013 5.76222 14.7652 4.8744 14.317 4.09804C13.8688 3.32168 13.2252 2.68594 12.4551 2.25873C11.685 1.83152 10.8172 1.62888 9.94445 1.67246C9.07172 1.71604 8.22682 2.0042 7.5 2.50616"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.66669 1.66666L18.3334 18.3333"
      />
    </svg>
  );
};
export default BellOffIcon;
