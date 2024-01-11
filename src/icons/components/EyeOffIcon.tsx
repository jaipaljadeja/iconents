import * as React from "react";
import { IconBaseProps } from "../types";
const EyeOffIcon = (svgProps: IconBaseProps) => {
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
        d="M8.24998 3.53333C8.82359 3.39907 9.41087 3.33195 9.99998 3.33333C15.8333 3.33333 19.1666 10 19.1666 10C18.6608 10.9463 18.0575 11.8373 17.3666 12.6583M11.7666 11.7667C11.5378 12.0123 11.2618 12.2093 10.9551 12.3459C10.6484 12.4826 10.3174 12.556 9.98172 12.562C9.64605 12.5679 9.31262 12.5061 9.00132 12.3804C8.69003 12.2547 8.40725 12.0675 8.16985 11.8301C7.93246 11.5927 7.74531 11.31 7.61957 10.9987C7.49383 10.6874 7.43209 10.3539 7.43801 10.0183C7.44393 9.68258 7.5174 9.35154 7.65404 9.04487C7.79068 8.73821 7.98769 8.46221 8.23331 8.23333M14.95 14.95C13.5255 16.0358 11.7909 16.6374 9.99998 16.6667C4.16665 16.6667 0.833313 10 0.833313 10C1.86989 8.06825 3.30759 6.38051 5.04998 5.05L14.95 14.95Z"
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
export default EyeOffIcon;
