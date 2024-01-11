import * as React from "react";
import { IconBaseProps } from "../types";
const BellAlertIcon = (svgProps: IconBaseProps) => {
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
        d="M11.6667 17.5C11.4973 17.7535 11.2542 17.9639 10.9617 18.1101C10.6692 18.2564 10.3376 18.3333 10 18.3333C9.66249 18.3333 9.33086 18.2564 9.03836 18.1101C8.74586 17.9639 8.50275 17.7535 8.33337 17.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.0588 6.7942C1.90402 6.47839 1.82601 6.07756 1.8326 5.63186C1.83918 5.18615 1.93013 4.71121 2.09633 4.25458C2.26253 3.79796 2.49815 3.37567 2.77959 3.03001C3.06104 2.68435 3.37844 2.42744 3.70001 2.285"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.9412 6.7942C18.096 6.47839 18.174 6.07756 18.1674 5.63186C18.1608 5.18615 18.0699 4.71121 17.9037 4.25458C17.7375 3.79796 17.5019 3.37567 17.2204 3.03001C16.939 2.68435 16.6216 2.42744 16.3 2.285"
      />
    </svg>
  );
};
export default BellAlertIcon;
