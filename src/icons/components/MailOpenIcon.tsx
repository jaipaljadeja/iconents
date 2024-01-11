import * as React from "react";
import { IconBaseProps } from "../types";
const MailOpenIcon = (svgProps: IconBaseProps) => {
  const { title, ...props } = svgProps;
  const titleId = title;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 20"
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
        d="M1.68359 16.1814V8.06188C1.68359 7.45384 2.02643 6.88603 2.5972 6.54874L9.7781 2.30543C10.4673 1.89819 11.3651 1.89819 12.0542 2.30543L19.2351 6.54874C19.8059 6.88603 20.1488 7.45384 20.1488 8.06188V16.1814M1.68359 16.1814C1.68359 17.1858 2.60216 18 3.73527 18H18.0971C19.2302 18 20.1488 17.1858 20.1488 16.1814M1.68359 16.1814L5.14581 14.1356L8.60802 12.0897M20.1488 16.1814L13.2243 12.0897M1.68359 7.9979L8.60802 12.0897M20.1488 7.9979L13.2243 12.0897M13.2243 12.0897L12.0542 12.7811C11.3651 13.1883 10.4673 13.1883 9.7781 12.7811L8.60802 12.0897"
      />
    </svg>
  );
};
export default MailOpenIcon;
