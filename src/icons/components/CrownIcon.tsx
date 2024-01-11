import * as React from "react";
import { IconBaseProps } from "../types";
const CrownIcon = (svgProps: IconBaseProps) => {
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
        d="M2.88085 13.7581L1.16354 5.05134C1.10888 4.77422 1.43255 4.58202 1.64971 4.76264L5.89243 8.29169C6.02728 8.40386 6.22918 8.37691 6.32989 8.2333L9.75438 3.35024C9.87383 3.17991 10.1262 3.17991 10.2456 3.35024L13.6701 8.2333C13.7708 8.37691 13.9727 8.40386 14.1076 8.29169L18.3503 4.76264C18.5674 4.58202 18.8911 4.77422 18.8365 5.05134L17.1192 13.7581C17.0914 13.8986 16.9681 14 16.8248 14H3.17518C3.03188 14 2.90858 13.8986 2.88085 13.7581Z"
      />
      <path stroke="currentColor" strokeLinecap="round" d="M3 17H17" />
    </svg>
  );
};
export default CrownIcon;
