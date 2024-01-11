import * as React from "react";
import { IconBaseProps } from "../types";
const EditIcon = (svgProps: IconBaseProps) => {
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
        d="M9.16667 3.33334H3.33334C2.89131 3.33334 2.46739 3.50894 2.15483 3.8215C1.84227 4.13406 1.66667 4.55798 1.66667 5.00001V16.6667C1.66667 17.1087 1.84227 17.5326 2.15483 17.8452C2.46739 18.1577 2.89131 18.3333 3.33334 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V10.8333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.3415 2.17998C15.6702 1.8513 16.1159 1.66666 16.5808 1.66666C17.0456 1.66666 17.4913 1.8513 17.82 2.17998C18.1487 2.50865 18.3333 2.95442 18.3333 3.41924C18.3333 3.88405 18.1487 4.32982 17.82 4.6585L9.97137 12.5071L6.66667 13.3333L7.49285 10.0286L15.3415 2.17998Z"
      />
    </svg>
  );
};
export default EditIcon;
