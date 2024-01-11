import * as React from "react";
import { IconBaseProps } from "../types";
const BellIcon = (svgProps: IconBaseProps) => {
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
        d="M15 6.99999C15 5.5855 14.4732 4.22895 13.5355 3.22875C12.5979 2.22856 11.3261 1.66666 10 1.66666C8.67392 1.66666 7.40215 2.22856 6.46447 3.22875C5.52678 4.22895 5 5.5855 5 6.99999C5 11.1623 3.88128 13.3358 3.14056 14.3187C2.96472 14.5521 3.14737 15 3.43954 15H16.5605C16.8526 15 17.0353 14.5521 16.8594 14.3187C16.1187 13.3358 15 11.1623 15 6.99999Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.6666 17.5C11.4973 17.7535 11.2542 17.9639 10.9617 18.1101C10.6692 18.2564 10.3375 18.3333 9.99998 18.3333C9.66243 18.3333 9.3308 18.2564 9.0383 18.1101C8.7458 17.9639 8.50269 17.7535 8.33331 17.5"
      />
    </svg>
  );
};
export default BellIcon;
