import * as React from "react";
import { IconBaseProps } from "../types";
const LinkIcon = (svgProps: IconBaseProps) => {
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
        d="M8.33334 10.8211C8.69291 11.3019 9.15166 11.6996 9.67846 11.9874C10.2053 12.2753 10.7878 12.4464 11.3866 12.4893C11.9853 12.5322 12.5863 12.4458 13.1488 12.236C13.7112 12.0262 14.222 11.6978 14.6464 11.2733L17.1582 8.76143C17.9208 7.97186 18.3427 6.91436 18.3332 5.8167C18.3236 4.71903 17.8834 3.66903 17.1072 2.89283C16.331 2.11663 15.281 1.67635 14.1834 1.66681C13.0857 1.65728 12.0282 2.07924 11.2387 2.84183L9.79857 4.27359"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.6667 9.17884C11.3071 8.69814 10.8483 8.30038 10.3215 8.01256C9.79473 7.72474 9.21219 7.55358 8.61342 7.5107C8.01465 7.46781 7.41366 7.55421 6.85122 7.76402C6.28878 7.97383 5.77803 8.30215 5.35363 8.72671L2.84182 11.2386C2.07924 12.0281 1.65728 13.0856 1.66681 14.1833C1.67635 15.281 2.11663 16.331 2.89281 17.1072C3.669 17.8834 4.71899 18.3236 5.81664 18.3332C6.91429 18.3427 7.97177 17.9207 8.76132 17.1582L10.1931 15.7264"
      />
    </svg>
  );
};
export default LinkIcon;
