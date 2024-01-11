import * as React from "react";
import { IconBaseProps } from "../types";
const VerifiedIcon = (svgProps: IconBaseProps) => {
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
        d="M7.19931 10L9.06643 11.8671L12.8007 8.13288M6.11146 3.18225C6.78132 3.1288 7.41725 2.86539 7.92871 2.42952C9.12226 1.41239 10.8777 1.41239 12.0713 2.42952C12.5827 2.86539 13.2187 3.1288 13.8885 3.18225C15.4517 3.30699 16.693 4.54829 16.8177 6.11148C16.8712 6.78134 17.1346 7.41727 17.5705 7.92873C18.5876 9.12227 18.5876 10.8777 17.5705 12.0713C17.1346 12.5827 16.8712 13.2187 16.8177 13.8885C16.693 15.4517 15.4517 16.693 13.8885 16.8178C13.2187 16.8712 12.5827 17.1346 12.0713 17.5705C10.8777 18.5876 9.12226 18.5876 7.92871 17.5705C7.41725 17.1346 6.78132 16.8712 6.11146 16.8178C4.54828 16.693 3.30698 15.4517 3.18224 13.8885C3.12878 13.2187 2.86537 12.5827 2.42951 12.0713C1.41237 10.8777 1.41237 9.12228 2.42951 7.92873C2.86537 7.41727 3.12878 6.78134 3.18224 6.11148C3.30698 4.54829 4.54828 3.30699 6.11146 3.18225Z"
      />
    </svg>
  );
};
export default VerifiedIcon;
