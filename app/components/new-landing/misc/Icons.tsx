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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.9978 6.8409C16.8645 6.32932 15.6656 5.96582 14.4328 5.76001C14.2793 6.02787 14.0998 6.38815 13.9761 6.67476C12.6469 6.48193 11.3299 6.48193 10.0251 6.67476C9.90147 6.38821 9.71801 6.02787 9.56303 5.76001C8.32899 5.96591 7.12909 6.33034 5.99532 6.84357C3.7392 10.133 3.12758 13.3406 3.43335 16.5029C4.92976 17.581 6.37993 18.236 7.80567 18.6646C8.16 18.1945 8.47322 17.6967 8.74209 17.1765C8.23019 16.9885 7.7367 16.7568 7.26749 16.4841C7.39097 16.3958 7.51154 16.3038 7.62902 16.2082C10.4723 17.4913 13.5616 17.4913 16.3709 16.2082C16.4889 16.3032 16.6095 16.3952 16.7324 16.4841C16.2624 16.7575 15.768 16.9897 15.2551 17.1779C15.5255 17.7002 15.8382 18.1984 16.1915 18.6659C17.6186 18.2374 19.0701 17.5824 20.5665 16.5029C20.9254 12.8371 19.9536 9.65882 17.9978 6.84083V6.8409ZM9.12948 14.5582C8.27594 14.5582 7.57596 13.7893 7.57596 12.8532C7.57596 11.917 8.26102 11.1469 9.12948 11.1469C9.998 11.1469 10.6979 11.9156 10.683 12.8532C10.6843 13.7893 9.998 14.5582 9.12948 14.5582ZM14.8704 14.5582C14.0169 14.5582 13.317 13.7893 13.317 12.8532C13.317 11.917 14.002 11.1469 14.8704 11.1469C15.7389 11.1469 16.4388 11.9156 16.4239 12.8532C16.4239 13.7893 15.7389 14.5582 14.8704 14.5582V14.5582Z"
      fill="currentColor"
    />
  </svg>
);

export const TwitterIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_647_11998)">
      <path
        d="M13.4614 10.8206L19.1795 4.32007H17.8245L12.8594 9.96442L8.89387 4.32007H4.32007L10.3168 12.8553L4.32007 19.6722H5.67515L10.9184 13.7116L15.1063 19.6722H19.6801L13.461 10.8206H13.4614ZM11.6054 12.9305L10.9978 12.0806L6.16341 5.31771H8.24474L12.1461 10.7756L12.7537 11.6255L17.8251 18.7199H15.7438L11.6054 12.9309V12.9305Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const YoutubeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_648_12012)">
      <path
        d="M21.0889 7.0301C20.876 6.2306 20.251 5.6023 19.4557 5.38829C18.0141 5 12.2368 5 12.2368 5C12.2368 5 6.45963 5 5.01951 5.38829C4.22418 5.6023 3.59916 6.2306 3.38626 7.0301C3 8.47778 3 11.5 3 11.5C3 11.5 3 14.5222 3.38626 15.9699C3.59916 16.7694 4.22418 17.3977 5.01951 17.6117C6.45963 18 12.2368 18 12.2368 18C12.2368 18 18.0141 18 19.4542 17.6117C20.2495 17.3977 20.8745 16.7694 21.0874 15.9699C21.4737 14.5222 21.4737 11.5 21.4737 11.5C21.4737 11.5 21.4737 8.47778 21.0874 7.0301H21.0889ZM10.3892 14.2853V8.71472L15.1886 11.5L10.3892 14.2853Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const TwitchIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_648_12015)">
      <path
        d="M4.12781 6.76451V17.9348H7.97457V20.0298H10.0749L12.1719 17.9341H15.3201L19.5182 13.7468V3.97095H5.17632L4.12781 6.76451ZM6.57544 5.36606H18.1191V13.0469L15.6701 15.4905H11.822L9.72498 17.5828V15.4905H6.57544V5.36606Z"
        fill="currentColor"
      />
      <path
        d="M10.4238 8.16089H11.8223V12.3496H10.4238V8.16089Z"
        fill="currentColor"
      />
      <path
        d="M14.2697 8.16089H15.6688V12.3496H14.2697V8.16089Z"
        fill="currentColor"
      />
    </g>
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
