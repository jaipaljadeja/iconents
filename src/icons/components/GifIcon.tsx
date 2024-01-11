import * as React from "react";
import { IconBaseProps } from "../types";
const GifIcon = (svgProps: IconBaseProps) => {
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
        d="M10.8333 1.66666H4.99999C4.55797 1.66666 4.13404 1.84226 3.82148 2.15482C3.50892 2.46738 3.33333 2.8913 3.33333 3.33333V16.6667C3.33333 17.1087 3.50892 17.5326 3.82148 17.8452C4.13404 18.1577 4.55797 18.3333 4.99999 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V7.5L10.8333 1.66666Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.8333 1.66666V7.5H16.6667"
      />
      <path
        fill="currentColor"
        d="M8.85385 14.0937C8.79361 13.9828 8.70643 13.8987 8.59231 13.8417C8.48135 13.7814 8.34979 13.7513 8.19762 13.7513C7.9345 13.7513 7.72368 13.8385 7.56517 14.0129C7.40667 14.1841 7.32741 14.4139 7.32741 14.7024C7.32741 15.0099 7.40984 15.2508 7.57469 15.4252C7.7427 15.5964 7.97254 15.682 8.2642 15.682C8.46392 15.682 8.63194 15.6312 8.76825 15.5298C8.90774 15.4283 9.00918 15.2825 9.07259 15.0923H8.0407V14.4931H9.80965V15.2492C9.74942 15.4521 9.64639 15.6407 9.50056 15.8151C9.3579 15.9895 9.17562 16.1305 8.95371 16.2383C8.7318 16.3461 8.48135 16.4 8.20238 16.4C7.87268 16.4 7.57786 16.3287 7.3179 16.186C7.06112 16.0402 6.85981 15.8389 6.71399 15.5821C6.57133 15.3253 6.5 15.0321 6.5 14.7024C6.5 14.3727 6.57133 14.0794 6.71399 13.8227C6.85981 13.5627 7.06112 13.3614 7.3179 13.2187C7.57469 13.0729 7.86793 13 8.19762 13C8.59706 13 8.9331 13.0967 9.20573 13.2901C9.48154 13.4834 9.66382 13.7513 9.75259 14.0937H8.85385Z"
      />
      <path
        fill="currentColor"
        d="M11.0732 13.038V16.3762H10.2601V13.038H11.0732Z"
      />
      <path
        fill="currentColor"
        d="M13.8356 13.038V13.6895H12.4756V14.3933H13.4933V15.0257H12.4756V16.3762H11.6625V13.038H13.8356Z"
      />
    </svg>
  );
};
export default GifIcon;