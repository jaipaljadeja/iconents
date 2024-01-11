import * as React from "react";
import { IconBaseProps } from "../types";
const ChatCircleIcon = (svgProps: IconBaseProps) => {
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
        d="M18.3333 9.53704C18.3365 10.7591 18.051 11.9647 17.5 13.0556C16.8467 14.3627 15.8424 15.4622 14.5995 16.2308C13.3566 16.9994 11.9243 17.4068 10.463 17.4074C9.26866 17.4105 8.09013 17.1379 7.01904 16.6112C6.97118 16.5877 6.916 16.5836 6.86541 16.6004L2.04616 18.2068C1.88981 18.2589 1.74106 18.1102 1.79318 17.9538L3.3996 13.1346C3.41646 13.084 3.4123 13.0288 3.38877 12.981C2.86212 11.9099 2.5895 10.7314 2.59261 9.53704C2.59318 8.07571 3.00058 6.64339 3.7692 5.40052C4.53782 4.15765 5.63729 3.15332 6.94446 2.50001C8.0353 1.94903 9.24087 1.6635 10.463 1.66668H10.9259C12.8559 1.77316 14.6787 2.58776 16.0455 3.95451C17.4123 5.32127 18.2269 7.14413 18.3333 9.07408V9.53704Z"
      />
    </svg>
  );
};
export default ChatCircleIcon;
