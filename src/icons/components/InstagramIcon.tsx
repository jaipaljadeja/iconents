import * as React from "react";
import { IconBaseProps } from "../types";
const InstagramIcon = (svgProps: IconBaseProps) => {
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
        d="M14.1667 1.66666H5.83335C3.53217 1.66666 1.66669 3.53214 1.66669 5.83333V14.1667C1.66669 16.4679 3.53217 18.3333 5.83335 18.3333H14.1667C16.4679 18.3333 18.3334 16.4679 18.3334 14.1667V5.83333C18.3334 3.53214 16.4679 1.66666 14.1667 1.66666Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.3333 9.475C13.4362 10.1685 13.3177 10.8768 12.9948 11.4992C12.6719 12.1215 12.1609 12.6262 11.5347 12.9414C10.9084 13.2566 10.1987 13.3663 9.50647 13.2549C8.81425 13.1436 8.17478 12.8167 7.67901 12.321C7.18324 11.8252 6.85642 11.1857 6.74504 10.4935C6.63365 9.80129 6.74337 9.09158 7.05858 8.46531C7.3738 7.83904 7.87847 7.32812 8.5008 7.0052C9.12313 6.68228 9.83144 6.56382 10.525 6.66667C11.2324 6.77157 11.8874 7.10122 12.3931 7.60692C12.8988 8.11262 13.2284 8.76756 13.3333 9.475Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5833 5.41667H14.5916"
      />
    </svg>
  );
};
export default InstagramIcon;
