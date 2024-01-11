import * as React from "react";
import { IconBaseProps } from "../types";
const BanIcon = (svgProps: IconBaseProps) => {
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
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        d="M3.54544 10.0656L5.06563 8.54546C5.18278 8.4283 5.37273 8.4283 5.48989 8.54546L8.95451 12.0101C9.07167 12.1272 9.07167 12.3172 8.95451 12.4343L7.43433 13.9545C7.31718 14.0717 7.12723 14.0717 7.01007 13.9545L3.54545 10.4899C3.42829 10.3727 3.42829 10.1828 3.54544 10.0656Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M10 3.61112L11.7323 1.8788C11.8495 1.76165 12.0394 1.76165 12.1566 1.8788L15.6212 5.34343C15.7384 5.46059 15.7384 5.65054 15.6212 5.76769L13.8889 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M7.5 5.83333L17.5 15.8333"
      />
      <path stroke="currentColor" strokeLinecap="round" d="M2.5 18.3333H12.5" />
    </svg>
  );
};
export default BanIcon;
