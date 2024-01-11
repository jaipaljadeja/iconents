import * as React from "react";
import { IconBaseProps } from "../types";
const PartyPoppersIcon = (svgProps: IconBaseProps) => {
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
        d="M11.0612 15.0499L5.83642 9.51553C5.41348 9.06752 4.66489 9.23829 4.47808 9.8254L2.03986 17.4884C1.84507 18.1006 2.40768 18.6845 3.02669 18.5125L10.6897 16.3839C11.2763 16.221 11.4791 15.4926 11.0612 15.0499Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M9.67172 10.8275L11.1301 9.36913C11.3467 9.15252 11.6405 9.03083 11.9468 9.03083H13.0405C13.6606 9.03083 14.1634 8.52809 14.1634 7.90792V7.90792C14.1634 7.28775 14.6661 6.785 15.2863 6.785V6.785C15.9065 6.785 16.4092 6.28225 16.4092 5.66208V4.56842C16.4092 4.26209 16.5309 3.96831 16.7475 3.75171L17.7567 2.7425"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M8.51671 7.97299C8.90171 5.66299 8.63221 1.15849 4.47421 1.62049"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M12.5592 12.1091C14.8692 11.7241 19.3737 11.9936 18.9117 16.1516"
      />
      <ellipse
        cx={12.5592}
        cy={3.32}
        stroke="currentColor"
        strokeWidth={1.2}
        rx={0.5775}
        ry={0.5775}
      />
      <ellipse
        cx={18.3342}
        cy={9.095}
        stroke="currentColor"
        strokeWidth={1.2}
        rx={0.5775}
        ry={0.5775}
      />
      <ellipse
        cx={3.3192}
        cy={5.63}
        stroke="currentColor"
        strokeWidth={1.2}
        rx={0.5775}
        ry={0.5775}
      />
      <ellipse
        cx={14.8692}
        cy={17.18}
        stroke="currentColor"
        strokeWidth={1.2}
        rx={0.5775}
        ry={0.5775}
      />
    </svg>
  );
};
export default PartyPoppersIcon;
