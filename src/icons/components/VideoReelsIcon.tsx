import * as React from "react";
import { IconBaseProps } from "../types";
const VideoReelsIcon = (svgProps: IconBaseProps) => {
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
        d="M16.84 2.39999H3.16001C2.21561 2.39999 1.45001 3.30736 1.45001 4.42666V15.5733C1.45001 16.6926 2.21561 17.6 3.16001 17.6H16.84C17.7844 17.6 18.55 16.6926 18.55 15.5733V4.42666C18.55 3.30736 17.7844 2.39999 16.84 2.39999Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 3V17.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3L14 17.25"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 6L17.9891 8.08104"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 6L5.98914 8.08104"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 12.0811L17.9891 14.1621"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12.0811L5.98914 14.1621"
      />
      <path
        fill="currentColor"
        d="M11.8338 9.93015C12.099 10.1196 12.099 10.5138 11.8338 10.7032L9.28641 12.5227C8.97203 12.7472 8.53534 12.5225 8.53534 12.1361L8.53534 8.49725C8.53534 8.11091 8.97202 7.88617 9.28641 8.11072L11.8338 9.93015Z"
      />
    </svg>
  );
};
export default VideoReelsIcon;
