import * as React from "react";
import { IconBaseProps } from "../types";
const PinIcon = (svgProps: IconBaseProps) => {
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
        d="M10.2644 17.6288L2.63251 9.9969C2.4763 9.84069 2.47601 9.58487 2.64438 9.44185C4.19198 8.12731 5.72311 8.58557 6.47975 9.07318C6.67663 9.20005 6.95075 9.18779 7.10181 9.0088L11.1252 4.24159C11.207 4.14469 11.2363 4.01443 11.2144 3.88953C11.003 2.68211 11.5644 1.91304 11.8982 1.70816C11.9877 1.65322 12.0918 1.69473 12.166 1.769L18.4167 8.01967C18.5324 8.13533 18.5699 8.31317 18.475 8.4464C18.1837 8.85543 17.5482 9.26972 16.3716 9.04822C16.247 9.02476 16.1166 9.05432 16.0197 9.1361L11.2525 13.1595C11.0735 13.3106 11.066 13.5816 11.1957 13.7766C11.9873 14.9662 11.4516 16.7065 10.8036 17.6059C10.6745 17.7852 10.4206 17.785 10.2644 17.6288Z"
      />
    </svg>
  );
};
export default PinIcon;
