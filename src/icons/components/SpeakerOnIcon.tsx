import * as React from "react";
import { IconBaseProps } from "../types";
const SpeakerOnIcon = (svgProps: IconBaseProps) => {
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
        d="M12.9463 7.05372C14.5735 8.68091 14.5735 11.3191 12.9463 12.9463M15.3033 4.69665C18.2323 7.62558 18.2323 12.3743 15.3033 15.3032M4.65482 12.5H3.33333C2.8731 12.5 2.5 12.1269 2.5 11.6667V8.33337C2.5 7.87313 2.8731 7.50003 3.33333 7.50003H4.65482L8.57741 3.57744C9.10238 3.05247 10 3.42428 10 4.1667V15.8334C10 16.5758 9.10238 16.9476 8.57741 16.4226L4.65482 12.5Z"
      />
    </svg>
  );
};
export default SpeakerOnIcon;
