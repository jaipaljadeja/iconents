import * as React from "react";
import { IconBaseProps } from "../types";
const TwitterIcon = (svgProps: IconBaseProps) => {
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
        d="M19.1666 2.5C18.3686 3.0629 17.4851 3.49343 16.55 3.775C16.0481 3.19793 15.3811 2.78891 14.6392 2.60327C13.8973 2.41764 13.1162 2.46433 12.4017 2.73705C11.6872 3.00976 11.0737 3.49534 10.6441 4.1281C10.2146 4.76086 9.98973 5.51028 9.99998 6.275V7.10834C8.53551 7.14631 7.08438 6.82151 5.77582 6.16287C4.46727 5.50424 3.34191 4.5322 2.49998 3.33334C2.49998 3.33334 -0.833354 10.8333 6.66665 14.1667C4.95042 15.3316 2.90594 15.9158 0.833313 15.8333C8.33331 20 17.5 15.8333 17.5 6.25C17.4992 6.01788 17.4769 5.78633 17.4333 5.55834C18.2838 4.71958 18.884 3.6606 19.1666 2.5Z"
      />
    </svg>
  );
};
export default TwitterIcon;
