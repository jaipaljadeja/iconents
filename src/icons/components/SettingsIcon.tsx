import * as React from "react";
import { IconBaseProps } from "../types";
const SettingsIcon = (svgProps: IconBaseProps) => {
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
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.6061 12.2727C15.5052 12.5012 15.4752 12.7547 15.5197 13.0005C15.5643 13.2462 15.6814 13.473 15.8561 13.6515L15.9015 13.697C16.0424 13.8377 16.1542 14.0048 16.2304 14.1887C16.3067 14.3727 16.3459 14.5698 16.3459 14.7689C16.3459 14.9681 16.3067 15.1652 16.2304 15.3492C16.1542 15.5331 16.0424 15.7002 15.9015 15.8409C15.7608 15.9818 15.5937 16.0935 15.4098 16.1698C15.2258 16.246 15.0287 16.2853 14.8296 16.2853C14.6305 16.2853 14.4333 16.246 14.2494 16.1698C14.0654 16.0935 13.8983 15.9818 13.7576 15.8409L13.7121 15.7955C13.5336 15.6208 13.3068 15.5037 13.0611 15.4591C12.8153 15.4145 12.5619 15.4446 12.3334 15.5455C12.1093 15.6415 11.9182 15.8009 11.7836 16.0042C11.649 16.2074 11.5768 16.4456 11.5758 16.6894V16.8182C11.5758 17.22 11.4161 17.6054 11.132 17.8896C10.8479 18.1737 10.4625 18.3333 10.0606 18.3333C9.65878 18.3333 9.2734 18.1737 8.98925 17.8896C8.70511 17.6054 8.54547 17.22 8.54547 16.8182V16.75C8.53961 16.4993 8.45844 16.2561 8.31253 16.0521C8.16661 15.848 7.9627 15.6926 7.72729 15.6061C7.4988 15.5052 7.24533 15.4751 6.99957 15.5197C6.75382 15.5643 6.52705 15.6814 6.34851 15.8561L6.30305 15.9015C6.16233 16.0424 5.99523 16.1541 5.81129 16.2304C5.62736 16.3066 5.4302 16.3459 5.23108 16.3459C5.03197 16.3459 4.8348 16.3066 4.65087 16.2304C4.46693 16.1541 4.29983 16.0424 4.15911 15.9015C4.01824 15.7608 3.90648 15.5937 3.83023 15.4098C3.75398 15.2258 3.71474 15.0287 3.71474 14.8296C3.71474 14.6304 3.75398 14.4333 3.83023 14.2493C3.90648 14.0654 4.01824 13.8983 4.15911 13.7576L4.20457 13.7121C4.37921 13.5336 4.49637 13.3068 4.54093 13.0611C4.58549 12.8153 4.55541 12.5618 4.45457 12.3333C4.35853 12.1093 4.19908 11.9182 3.99583 11.7836C3.79258 11.649 3.5544 11.5767 3.31063 11.5758H3.18184C2.78 11.5758 2.39461 11.4161 2.11046 11.132C1.82632 10.8478 1.66669 10.4625 1.66669 10.0606C1.66669 9.65877 1.82632 9.27338 2.11046 8.98924C2.39461 8.70509 2.78 8.54546 3.18184 8.54546H3.25002C3.50077 8.53959 3.74396 8.45843 3.94797 8.31251C4.15199 8.1666 4.30738 7.96268 4.39396 7.72728C4.4948 7.49878 4.52489 7.24531 4.48033 6.99956C4.43577 6.75381 4.31861 6.52703 4.14396 6.34849L4.09851 6.30304C3.95763 6.16232 3.84588 5.99521 3.76963 5.81128C3.69338 5.62734 3.65413 5.43018 3.65413 5.23107C3.65413 5.03195 3.69338 4.83479 3.76963 4.65085C3.84588 4.46692 3.95763 4.29981 4.09851 4.1591C4.23922 4.01822 4.40633 3.90647 4.59026 3.83022C4.7742 3.75397 4.97136 3.71472 5.17047 3.71472C5.36959 3.71472 5.56675 3.75397 5.75069 3.83022C5.93462 3.90647 6.10173 4.01822 6.24244 4.1591L6.2879 4.20455C6.46644 4.3792 6.69321 4.49636 6.93897 4.54092C7.18472 4.58548 7.43819 4.5554 7.66669 4.45455H7.72729C7.95136 4.35852 8.14246 4.19906 8.27706 3.99581C8.41166 3.79256 8.4839 3.55439 8.48487 3.31061V3.18182C8.48487 2.77998 8.6445 2.3946 8.92865 2.11045C9.21279 1.8263 9.59818 1.66667 10 1.66667C10.4019 1.66667 10.7872 1.8263 11.0714 2.11045C11.3555 2.3946 11.5152 2.77998 11.5152 3.18182V3.25001C11.5161 3.49378 11.5884 3.73196 11.723 3.93521C11.8576 4.13846 12.0487 4.29791 12.2727 4.39394C12.5012 4.49479 12.7547 4.52487 13.0005 4.48031C13.2462 4.43575 13.473 4.31859 13.6515 4.14394L13.697 4.09849C13.8377 3.95762 14.0048 3.84586 14.1887 3.76961C14.3727 3.69336 14.5698 3.65412 14.769 3.65412C14.9681 3.65412 15.1652 3.69336 15.3492 3.76961C15.5331 3.84586 15.7002 3.95762 15.8409 4.09849C15.9818 4.23921 16.0936 4.40631 16.1698 4.59025C16.2461 4.77418 16.2853 4.97135 16.2853 5.17046C16.2853 5.36957 16.2461 5.56674 16.1698 5.75067C16.0936 5.93461 15.9818 6.10171 15.8409 6.24243L15.7955 6.28788C15.6208 6.46643 15.5037 6.6932 15.4591 6.93895C15.4145 7.18471 15.4446 7.43817 15.5455 7.66667V7.72728C15.6415 7.95135 15.801 8.14244 16.0042 8.27704C16.2075 8.41165 16.4456 8.48388 16.6894 8.48485H16.8182C17.22 8.48485 17.6054 8.64449 17.8896 8.92863C18.1737 9.21278 18.3334 9.59816 18.3334 10C18.3334 10.4018 18.1737 10.7872 17.8896 11.0714C17.6054 11.3555 17.22 11.5152 16.8182 11.5152H16.75C16.5062 11.5161 16.2681 11.5884 16.0648 11.723C15.8616 11.8576 15.7021 12.0487 15.6061 12.2727V12.2727Z"
      />
    </svg>
  );
};
export default SettingsIcon;