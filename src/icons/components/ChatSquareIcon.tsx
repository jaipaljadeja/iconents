import * as React from "react";
import { IconBaseProps } from "../types";
const ChatSquareIcon = (svgProps: IconBaseProps) => {
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
        d="M18.3333 12.7778C18.3333 13.2689 18.1382 13.7399 17.7909 14.0872C17.4436 14.4345 16.9726 14.6296 16.4815 14.6296H10.4999L5.49991 18.3333V14.5H3.66666C2.56209 14.5 1.66666 13.6046 1.66666 12.5V9.07406V3.51851C1.66666 3.02737 1.86176 2.55634 2.20905 2.20905C2.55634 1.86176 3.02737 1.66666 3.51851 1.66666H16.4815C16.9726 1.66666 17.4436 1.86176 17.7909 2.20905C18.1382 2.55634 18.3333 3.02737 18.3333 3.51851V12.7778Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M6.66666 6.66666H12.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M6.66666 10H9.99999"
      />
    </svg>
  );
};
export default ChatSquareIcon;
