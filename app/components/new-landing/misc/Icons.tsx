interface IconProps {
  className: string;
}

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.5 4.5L6 8L2.5 4.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.56359 13.2364C6.21212 12.8849 6.21212 12.3151 6.56359 11.9636L9.5272 9L6.56359 6.0364C6.21212 5.68492 6.21212 5.11508 6.56359 4.7636C6.91506 4.41213 7.48491 4.41213 7.83638 4.7636L11.4364 8.3636C11.7879 8.71508 11.7879 9.28492 11.4364 9.6364L7.83638 13.2364C7.48491 13.5879 6.91506 13.5879 6.56359 13.2364Z"
      fill="currentColor"
    />
  </svg>
);

export const ExternalIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5.83337 3.49992H3.50004C2.85571 3.49992 2.33337 4.02225 2.33337 4.66659V10.4999C2.33337 11.1443 2.85571 11.6666 3.50004 11.6666H9.33337C9.97771 11.6666 10.5 11.1443 10.5 10.4999V8.16659M8.16671 2.33325H11.6667M11.6667 2.33325V5.83325M11.6667 2.33325L5.83337 8.16659"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DiscordIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M33.0076 10.9288C30.7123 9.93777 28.284 9.23364 25.787 8.83496C25.4759 9.35384 25.1125 10.0517 24.8619 10.6069C22.1697 10.2334 19.5022 10.2334 16.8594 10.6069C16.6089 10.0519 16.2373 9.35384 15.9234 8.83496C13.4239 9.23382 10.9935 9.93975 8.69714 10.9339C4.12745 17.3059 2.88864 23.5194 3.50798 29.645C6.5389 31.7335 9.47616 33.0022 12.3639 33.8324C13.0816 32.9217 13.716 31.9576 14.2606 30.9499C13.2238 30.5857 12.2242 30.1368 11.2739 29.6086C11.524 29.4376 11.7682 29.2593 12.0061 29.0741C17.765 31.5596 24.0223 31.5596 29.7126 29.0741C29.9516 29.2581 30.1957 29.4363 30.4447 29.6086C29.4928 30.1382 28.4914 30.588 27.4525 30.9526C28.0002 31.9643 28.6335 32.9294 29.3492 33.835C32.2397 33.0049 35.1797 31.7361 38.2106 29.645C38.9374 22.544 36.9692 16.3874 33.0076 10.9286V10.9288ZM15.0453 25.8779C13.3165 25.8779 11.8987 24.3886 11.8987 22.5751C11.8987 20.7616 13.2862 19.2699 15.0453 19.2699C16.8044 19.2699 18.2221 20.759 18.1918 22.5751C18.1946 24.3886 16.8044 25.8779 15.0453 25.8779ZM26.6733 25.8779C24.9445 25.8779 23.5269 24.3886 23.5269 22.5751C23.5269 20.7616 24.9143 19.2699 26.6733 19.2699C28.4325 19.2699 29.8501 20.759 29.8199 22.5751C29.8199 24.3886 28.4325 25.8779 26.6733 25.8779V25.8779Z"
      fill="currentColor"
    />
  </svg>
);

export const TwitterIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M28.3225 8.69989H32.5423L23.3232 19.1205L34.1687 33.3004H25.6767L19.0255 24.7004L11.4151 33.3004H7.19285L17.0536 22.1546L6.64941 8.69989H15.357L21.369 16.5607L28.3225 8.69989ZM26.8414 30.8024H29.1797L14.0865 11.0666H11.5773L26.8414 30.8024Z"
      fill="currentColor"
    />
  </svg>
);

export const YoutubeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M39.1065 12.218C38.6778 10.601 37.4109 9.32769 35.8045 8.89477C32.8929 8.10959 21.2128 8.10959 21.2128 8.10959C21.2128 8.10959 9.5326 8.10959 6.62105 8.89477C5.0146 9.32769 3.74769 10.601 3.31903 12.218C2.53809 15.1508 2.53809 21.2667 2.53809 21.2667C2.53809 21.2667 2.53809 27.3827 3.31903 30.3155C3.74769 31.9325 5.0146 33.2058 6.62105 33.6387C9.53472 34.4239 21.2128 34.4239 21.2128 34.4239C21.2128 34.4239 32.8929 34.4239 35.8045 33.6387C37.4109 33.2058 38.6778 31.9325 39.1065 30.3155C39.8874 27.3848 39.8874 21.2667 39.8874 21.2667C39.8874 21.2667 39.8874 15.1508 39.1065 12.218ZM17.3929 26.8203V15.7131L27.1547 21.2667L17.3929 26.8203Z"
      fill="currentColor"
    />
  </svg>
);

export const TwitchIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clip-path="url(#clip0_880_45503)">
      <path
        d="M7.22363 11.8379V31.3858H13.9555V35.0521H17.6311L21.3009 31.3846H26.8102L34.1568 24.0568V6.94913H9.05852L7.22363 11.8379ZM11.507 9.39057H31.7083V22.832L27.4226 27.1083H20.6885L17.0187 30.7699V27.1083H11.507V9.39057Z"
        fill="currentColor"
      />
      <path
        d="M18.2412 14.2815H20.6885V21.6117H18.2412V14.2815Z"
        fill="currentColor"
      />
      <path
        d="M24.9717 14.2815H27.4202V21.6117H24.9717V14.2815Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_880_45503">
        <rect
          width="26.3529"
          height="28"
          fill="currentColor"
          transform="translate(7.57324 7)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const HamburgerIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
