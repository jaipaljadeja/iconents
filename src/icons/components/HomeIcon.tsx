import * as React from "react";
import { IconBaseProps } from "../types";
const HomeIcon = (svgProps: IconBaseProps) => {
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
        d="M2.5 8.47816C2.5 7.86098 2.78495 7.27837 3.27212 6.89945L9.38606 2.14417C9.74717 1.8633 10.2528 1.8633 10.6139 2.14417L16.7279 6.89945C17.2151 7.27837 17.5 7.86098 17.5 8.47816V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V8.47816Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 18.3333V11.6667H12.5V18.3333"
      />
    </svg>
  );
};
export default HomeIcon;
