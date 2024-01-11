import * as React from "react";
import { IconBaseProps } from "../types";
const PowerIcon = (svgProps: IconBaseProps) => {
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
        d="M15.3 5.53333C16.3486 6.58232 17.0627 7.9187 17.3519 9.37349C17.6411 10.8283 17.4924 12.3362 16.9247 13.7065C16.357 15.0768 15.3957 16.248 14.1623 17.072C12.929 17.896 11.4791 18.3358 9.99582 18.3358C8.51257 18.3358 7.06262 17.896 5.8293 17.072C4.59598 16.248 3.63469 15.0768 3.06696 13.7065C2.49923 12.3362 2.35056 10.8283 2.63975 9.37349C2.92894 7.9187 3.64301 6.58232 4.69166 5.53333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 1.66666V10"
      />
    </svg>
  );
};
export default PowerIcon;
