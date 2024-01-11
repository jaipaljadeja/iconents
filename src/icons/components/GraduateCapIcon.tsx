import * as React from "react";
import { IconBaseProps } from "../types";
const GraduateCapIcon = (svgProps: IconBaseProps) => {
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
        d="M9.99999 11.8426L18.3333 7.17128L9.99999 2.5L1.66666 7.17128L9.99999 11.8426ZM9.99999 11.8426L15.7029 8.64578C16.2053 9.92415 16.4815 11.3179 16.4815 12.7768C16.4815 13.432 16.4258 14.0741 16.3189 14.6985C14.2174 14.9046 12.2873 15.7015 10.6939 16.9224C10.2867 17.2344 9.71326 17.2344 9.3061 16.9224C7.71265 15.7015 5.78259 14.9046 3.68112 14.6985C3.57422 14.074 3.51851 13.4319 3.51851 12.7767C3.51851 11.3179 3.79466 9.92413 4.2971 8.64577L9.99999 11.8426ZM7.08332 17.9167L7.14854 10.2442L9.99999 8.36506"
      />
    </svg>
  );
};
export default GraduateCapIcon;
