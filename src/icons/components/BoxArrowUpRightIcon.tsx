import * as React from "react";
import { IconBaseProps } from "../types";
const BoxArrowUpRightIcon = (svgProps: IconBaseProps) => {
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
        d="M8.7725 4.16301H3.365C2.95524 4.16301 2.56226 4.32579 2.27252 4.61553C1.98278 4.90527 1.82 5.29825 1.82 5.70801V16.523C1.82 16.9328 1.98278 17.3257 2.27252 17.6155C2.56226 17.9052 2.95524 18.068 3.365 18.068H14.18C14.5898 18.068 14.9827 17.9052 15.2725 17.6155C15.5622 17.3257 15.725 16.9328 15.725 16.523V11.1155M7.53651 12.6605L18.197 2M18.197 2L11.399 2M18.197 2V8.489"
      />
    </svg>
  );
};
export default BoxArrowUpRightIcon;
