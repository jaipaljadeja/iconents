import * as React from "react";
import { IconBaseProps } from "../types";
const UserMinusIcon = (svgProps: IconBaseProps) => {
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
        d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 9.99998 12.5H4.16665C3.28259 12.5 2.43474 12.8512 1.80962 13.4763C1.1845 14.1014 0.833313 14.9493 0.833313 15.8333V17.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.08333 9.16667C8.92428 9.16667 10.4167 7.67428 10.4167 5.83333C10.4167 3.99238 8.92428 2.5 7.08333 2.5C5.24238 2.5 3.75 3.99238 3.75 5.83333C3.75 7.67428 5.24238 9.16667 7.08333 9.16667Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.1667 9.16666H14.1667"
      />
    </svg>
  );
};
export default UserMinusIcon;
