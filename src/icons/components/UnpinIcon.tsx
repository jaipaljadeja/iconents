import * as React from "react";
import { IconBaseProps } from "../types";
const UnpinIcon = (svgProps: IconBaseProps) => {
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
        d="M6.44858 13.8129L1.66666 18.5948"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M7.99991 8.00003L7.1027 9.02097C6.95018 9.19452 6.68094 9.20373 6.48713 9.07795C5.7331 8.58858 4.19703 8.12302 2.64438 9.44185C2.47601 9.58487 2.4763 9.84069 2.63251 9.9969L10.2644 17.6288C10.4206 17.785 10.6745 17.7852 10.8036 17.6059C11.4526 16.7051 11.989 14.9609 11.192 13.771C11.063 13.5785 11.0683 13.311 11.2432 13.1588L11.9999 12.5M14.8603 10.1146L16.0197 9.1361C16.1166 9.05432 16.247 9.02476 16.3716 9.04822C17.5482 9.26972 18.1837 8.85543 18.475 8.4464C18.5699 8.31317 18.5324 8.13533 18.4167 8.01967L12.166 1.769C12.0918 1.69473 11.9877 1.65322 11.8982 1.70816C11.5644 1.91304 11.003 2.68211 11.2144 3.88953C11.2363 4.01443 11.207 4.14469 11.1252 4.24159L10.1467 5.40101"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.66675 1.66666L18.3334 18.3333"
      />
    </svg>
  );
};
export default UnpinIcon;
