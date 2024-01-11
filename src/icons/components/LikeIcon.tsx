import * as React from "react";
import { IconBaseProps } from "../types";
const LikeIcon = (svgProps: IconBaseProps) => {
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
        d="M17.0482 3.82611C16.641 3.40569 16.1574 3.07219 15.6252 2.84465C15.0931 2.61711 14.5226 2.5 13.9466 2.5C13.3705 2.5 12.8001 2.61711 12.2679 2.84465C11.7357 3.07219 11.2522 3.40569 10.845 3.82611L10.1434 4.55001C10.0648 4.6311 9.93477 4.6311 9.85619 4.55001L9.15464 3.82611C8.33204 2.9773 7.21636 2.50044 6.05303 2.50044C4.8897 2.50044 3.77401 2.9773 2.95142 3.82611C2.12882 4.67492 1.66669 5.82616 1.66669 7.02656C1.66669 8.22696 2.12882 9.37819 2.95142 10.227L3.79659 11.0991L9.85619 17.3518C9.93477 17.4329 10.0648 17.4329 10.1434 17.3518L16.203 11.0991L17.0482 10.227C17.4556 9.80679 17.7788 9.30785 17.9993 8.75871C18.2199 8.20957 18.3334 7.62097 18.3334 7.02656C18.3334 6.43214 18.2199 5.84355 17.9993 5.2944C17.7788 4.74526 17.4556 4.24633 17.0482 3.82611Z"
      />
    </svg>
  );
};
export default LikeIcon;
