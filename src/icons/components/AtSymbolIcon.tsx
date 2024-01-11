import * as React from "react";
import { IconBaseProps } from "../types";
const AtSymbolIcon = (svgProps: IconBaseProps) => {
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
        d="M9.99999 13.3333C11.8409 13.3333 13.3333 11.841 13.3333 10C13.3333 8.15906 11.8409 6.66667 9.99999 6.66667C8.15904 6.66667 6.66666 8.15906 6.66666 10C6.66666 11.841 8.15904 13.3333 9.99999 13.3333Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.3333 6.66667V10.8333C13.3333 11.4964 13.5967 12.1323 14.0656 12.6011C14.5344 13.0699 15.1703 13.3333 15.8333 13.3333C16.4964 13.3333 17.1323 13.0699 17.6011 12.6011C18.0699 12.1323 18.3333 11.4964 18.3333 10.8333V10C18.3332 8.1192 17.6969 6.29374 16.5277 4.82045C15.3586 3.34716 13.7255 2.31269 11.8939 1.88525C10.0623 1.45781 8.13994 1.66254 6.43945 2.46615C4.73897 3.26975 3.36033 4.62497 2.52771 6.31144C1.6951 7.99792 1.45747 9.91645 1.85347 11.7551C2.24947 13.5937 3.25581 15.2444 4.70886 16.4386C6.1619 17.6328 7.97619 18.3003 9.85672 18.3326C11.7373 18.365 13.5734 17.7602 15.0667 16.6167"
      />
    </svg>
  );
};
export default AtSymbolIcon;
