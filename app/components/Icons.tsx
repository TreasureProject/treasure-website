import type { ReactNode } from "react";

// Icon creation factory
const createIcon = ({
  path,
  displayName,
}: {
  path: ReactNode;
  displayName: string;
}) => {
  const Comp = (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {path}
    </svg>
  );

  Comp.displayName = displayName;

  return Comp;
};

export const EconomyIcon = ({ className }: { className?: string }) => (
  <svg
    width="53"
    height="66"
    viewBox="0 0 53 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 20.3815V45.0188C0 49.0958 2.19956 52.8568 5.75203 54.8843L22.1353 64.2582C24.7669 65.7635 28.0008 65.7635 30.6324 64.2582L47.0156 54.8843C50.5681 52.8436 52.7677 49.0826 52.7677 45.0188V20.3815C52.7677 16.3046 50.5681 12.5392 47.0156 10.5161L30.6324 1.12895C28.0008 -0.376318 24.7669 -0.376318 22.1353 1.12895L5.75203 10.4985C2.19956 12.5392 0 16.3002 0 20.3815Z"
      fill="#DC2626"
    />
    <path
      d="M14.0091 20.6319L16.1301 21.3428C16.9113 21.6105 17.4961 22.2557 17.6489 23.0675L18.5435 27.4649C18.5697 27.579 18.6701 27.6536 18.7879 27.6536C18.9057 27.6536 19.0061 27.579 19.0323 27.4649L19.927 23.0675C20.0928 22.2688 20.6689 21.6105 21.4588 21.3428L23.5798 20.6319C23.6802 20.5924 23.7457 20.5046 23.7457 20.4037C23.7457 20.3028 23.6802 20.215 23.5798 20.1755L21.4588 19.4645C20.6776 19.1968 20.0928 18.5517 19.927 17.7398L19.0323 13.3425C19.0061 13.2284 18.9057 13.1538 18.7879 13.1538C18.6701 13.1538 18.5697 13.2284 18.5435 13.3425L17.6489 17.7398C17.483 18.5386 16.9069 19.1968 16.1301 19.4645L14.0091 20.1755C13.9087 20.215 13.8433 20.3028 13.8433 20.4037C13.8433 20.5046 13.9087 20.5924 14.0091 20.6319Z"
      fill="#FFFCF5"
    />
    <path
      d="M39.5442 22.1766C36.3845 21.3604 32.8538 22.2205 30.3357 24.7483C28.2889 26.8066 27.3418 29.5406 27.4989 32.2045C27.5644 33.3279 28.4547 34.2232 29.5719 34.289C32.2167 34.447 34.9356 33.4947 36.9867 31.4365C39.5005 28.9087 40.3515 25.3583 39.5442 22.181V22.1766Z"
      fill="#FFFDF7"
    />
    <path
      d="M27.9222 48.1786V37.8611C27.9222 34.6487 25.7095 31.8049 22.576 31.1774C22.5498 31.173 22.5236 31.1686 22.5018 31.1642C20.4943 30.778 18.5609 31.1291 17.0946 31.998C16.4094 32.4062 16.2348 33.3234 16.7236 33.9553C17.7667 35.307 19.4381 36.3515 21.4413 36.7377C22.2836 36.9 23.1172 36.9308 23.9071 36.8474C24.4133 36.7947 24.8454 37.2116 24.8454 37.7207V48.1786C20.9438 48.5253 17.9892 50.171 17.9892 52.1503C17.9892 54.384 34.774 54.384 34.774 52.1503C34.774 50.171 31.8194 48.5253 27.9178 48.1786H27.9222Z"
      fill="#FFFDF7"
    />
  </svg>
);

export const AMMIcon = ({ className }: { className?: string }) => (
  <svg
    width="53"
    height="66"
    viewBox="0 0 53 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 20.3815V45.0188C0 49.0958 2.19956 52.8568 5.75203 54.8843L22.1353 64.2582C24.7669 65.7635 28.0008 65.7635 30.6324 64.2582L47.0156 54.8843C50.5681 52.8436 52.7677 49.0826 52.7677 45.0188V20.3815C52.7677 16.3046 50.5681 12.5392 47.0156 10.5161L30.6324 1.12895C28.0008 -0.376318 24.7669 -0.376318 22.1353 1.12895L5.75203 10.5029C2.19956 12.5436 0 16.3046 0 20.3815Z"
      fill="#DC2626"
    />
    <path
      d="M11.8226 20.6319L13.9436 21.3428C14.7248 21.6105 15.3096 22.2557 15.4623 23.0675L16.357 27.4649C16.3832 27.579 16.4835 27.6536 16.6014 27.6536C16.7192 27.6536 16.8196 27.579 16.8458 27.4649L17.7404 23.0675C17.9063 22.2688 18.4824 21.6105 19.2723 21.3428L21.3933 20.6319C21.4937 20.5924 21.5591 20.5046 21.5591 20.4037C21.5591 20.3028 21.4937 20.215 21.3933 20.1755L19.2723 19.4645C18.4911 19.1968 17.9063 18.5517 17.7404 17.7398L16.8458 13.3425C16.8196 13.2284 16.7192 13.1538 16.6014 13.1538C16.4835 13.1538 16.3832 13.2284 16.357 13.3425L15.4623 17.7398C15.2965 18.5386 14.7204 19.1968 13.9436 19.4645L11.8226 20.1755C11.7222 20.215 11.6567 20.3028 11.6567 20.4037C11.6567 20.5046 11.7222 20.5924 11.8226 20.6319Z"
      fill="#FFFCF5"
    />
    <path
      d="M22.8509 51.4086L22.061 48.9247C21.8952 48.4112 21.5068 47.9987 21.0005 47.8144C15.1132 45.6859 10.8145 40.1739 10.4391 33.6262C10.4086 33.1215 10.8101 32.6914 11.312 32.6914H13.9349C14.3931 32.6914 14.7684 33.0469 14.8033 33.5033C15.2179 39.5639 20.2542 44.3649 26.386 44.3649H28.4939C29.6591 44.3649 30.2439 45.7825 29.4191 46.6119L24.2999 51.7597C23.8373 52.2248 23.0517 52.0317 22.8509 51.4086Z"
      fill="#FFFCF5"
    />
    <path
      d="M41.4557 32.6915H38.8328C38.3745 32.6915 37.9949 32.336 37.9643 31.8752C37.5803 26.3369 33.3382 21.7772 27.7913 21.1013L26.0107 20.8863C24.9284 20.7546 24.4702 19.4249 25.2426 18.6481L29.9603 13.9041C30.4404 13.4214 31.2565 13.6496 31.4224 14.3079L32.0813 16.9234C32.2079 17.4281 32.5527 17.8582 33.024 18.0776C38.3003 20.5045 41.9794 25.7225 42.3285 31.7567C42.3591 32.2614 41.9576 32.6915 41.4557 32.6915Z"
      fill="#FFFCF5"
    />
    <path
      d="M25.2089 28.3473L22.018 31.556C21.3687 32.2089 21.3687 33.2676 22.018 33.9206L25.2089 37.1293C25.8583 37.7822 26.9111 37.7822 27.5604 37.1293L30.7513 33.9206C31.4007 33.2676 31.4007 32.2089 30.7513 31.556L27.5604 28.3473C26.9111 27.6943 25.8583 27.6943 25.2089 28.3473Z"
      fill="#FFFCF5"
    />
  </svg>
);

export const BridgeIcon = ({ className }: { className?: string }) => (
  <svg
    width="53"
    height="66"
    viewBox="0 0 53 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 20.9909V45.6282C0 49.7052 2.19956 53.4662 5.75203 55.4937L22.1353 64.8676C24.7669 66.3729 28.0008 66.3729 30.6324 64.8676L47.0156 55.4937C50.5681 53.453 52.7677 49.692 52.7677 45.6282V20.9909C52.7677 16.9139 50.5681 13.1486 47.0156 11.1254L30.6324 1.73833C28.0008 0.233057 24.7669 0.233057 22.1353 1.73833L5.75203 11.1123C2.19956 13.153 0 16.9139 0 20.9909Z"
      fill="#DC2626"
    />
    <path
      d="M14.0047 21.2457L16.1257 21.9566C16.9069 22.2243 17.4917 22.8694 17.6445 23.6813L18.5391 28.0786C18.5653 28.1927 18.6657 28.2673 18.7835 28.2673C18.9013 28.2673 19.0017 28.1927 19.0279 28.0786L19.9226 23.6813C20.0884 22.8826 20.6645 22.2243 21.4544 21.9566L23.5754 21.2457C23.6758 21.2062 23.7413 21.1184 23.7413 21.0175C23.7413 20.9165 23.6758 20.8288 23.5754 20.7893L21.4544 20.0783C20.6732 19.8106 20.0884 19.1655 19.9226 18.3536L19.0279 13.9563C19.0017 13.8422 18.9013 13.7676 18.7835 13.7676C18.6657 13.7676 18.5653 13.8422 18.5391 13.9563L17.6445 18.3536C17.4786 19.1523 16.9025 19.8106 16.1257 20.0783L14.0047 20.7893C13.9043 20.8288 13.8389 20.9165 13.8389 21.0175C13.8389 21.1184 13.9043 21.2062 14.0047 21.2457Z"
      fill="#FFFCF5"
    />
    <path
      d="M39.1337 27.179L32.9671 14.8384C32.6442 14.1932 32.007 13.7324 31.2869 13.7105C30.2089 13.6754 29.323 14.5443 29.323 15.6239V44.8911C29.323 45.6284 29.8205 46.2999 30.5406 46.4447C31.5313 46.6466 32.3998 45.8917 32.3998 44.9306L34.08 28.4516H38.3525C39.0028 28.4516 39.4261 27.7626 39.1337 27.179Z"
      fill="#FFFCF5"
    />
    <path
      d="M19.8353 33.8978L18.9669 38.1591H14.4106C13.7604 38.1591 13.337 38.8481 13.6294 39.4318L19.7961 51.7724C20.119 52.4175 20.7562 52.8783 21.4763 52.9002C22.5542 52.9353 23.4402 52.0664 23.4402 50.9868V31.7343C23.4402 31.4929 23.2438 31.291 23.0038 31.291C21.4675 31.291 20.1408 32.3794 19.8353 33.8934V33.8978Z"
      fill="#FFFCF5"
    />
  </svg>
);

export const TroveIcon = ({ className }: { className?: string }) => (
  <svg
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M25.5 0C11.4181 0.00272727 0 11.91 0 26.5936V45C0 48.3136 2.57483 51 5.7509 51H45.2491C48.4252 51 51 48.3136 51 45V26.5936C51 11.91 39.5845 0.00272727 25.5 0Z"
      fill="currentColor"
    />
    <path
      d="M42.0024 27.1664L36.9338 25.3773C35.0726 24.7228 33.6898 23.0782 33.2977 21.0737L31.1594 10.0664C31.1019 9.79097 30.8666 9.58643 30.5895 9.58643C30.3124 9.58643 30.0798 9.79097 30.0223 10.0664L27.884 21.0737C27.4919 23.0782 26.109 24.7228 24.2478 25.3773L19.1792 27.1664C18.944 27.2482 18.7871 27.4828 18.7871 27.7392C18.7871 27.9955 18.944 28.2301 19.1792 28.3119L24.2478 30.101C26.109 30.7555 27.4919 32.4001 27.884 34.4046L30.0223 45.401C30.0798 45.6764 30.315 45.881 30.5895 45.881C30.864 45.881 31.0993 45.6764 31.1594 45.401L33.2977 34.4046C33.6898 32.4001 35.0726 30.7555 36.9338 30.101L42.0024 28.3119C42.2377 28.2301 42.3945 27.9955 42.3945 27.7392C42.3945 27.4828 42.2377 27.2482 42.0024 27.1664Z"
      fill="#FFFDF7"
    />
    <path
      d="M14.7719 17.0671L16.5547 17.6999C17.2108 17.9344 17.7023 18.5071 17.8382 19.2217L18.5936 23.1053C18.6119 23.2062 18.693 23.2799 18.7897 23.2799C18.8864 23.2799 18.9648 23.2089 18.9858 23.1053L19.7412 19.2217C19.8798 18.5153 20.3686 17.9344 21.0247 17.6999L22.8075 17.0671C22.8859 17.0371 22.9434 16.9553 22.9434 16.8626C22.9434 16.7699 22.8833 16.688 22.8075 16.658L21.0247 16.0253C20.3686 15.7908 19.8771 15.218 19.7412 14.5035L18.9858 10.6199C18.9675 10.5189 18.889 10.4453 18.7897 10.4453C18.6904 10.4453 18.6119 10.5162 18.5936 10.6199L17.8382 14.5035C17.7023 15.2099 17.2108 15.7908 16.5547 16.0253L14.7719 16.658C14.6935 16.688 14.636 16.7699 14.636 16.8626C14.636 16.9553 14.6935 17.0371 14.7719 17.0671Z"
      fill="#FFFDF7"
    />
    <path
      d="M18.9387 36.1608L16.5468 35.3126C15.6659 35.0072 15.0071 34.2299 14.832 33.2781L13.823 28.0772C13.7942 27.9435 13.6844 27.8535 13.559 27.8535C13.4335 27.8535 13.3132 27.9462 13.2949 28.0772L12.2859 33.2781C12.1003 34.2299 11.4442 35.0044 10.5711 35.3126L8.17925 36.1608C8.07207 36.2017 7.99365 36.3026 7.99365 36.4253C7.99365 36.5481 8.07207 36.6599 8.17925 36.6899L10.5711 37.5381C11.452 37.8435 12.1108 38.6208 12.2859 39.5726L13.2949 44.7735C13.3237 44.9072 13.4335 44.9972 13.559 44.9972C13.6844 44.9972 13.8047 44.9044 13.823 44.7735L14.832 39.5726C15.0176 38.6208 15.6737 37.8462 16.5468 37.5381L18.9387 36.6899C19.0458 36.649 19.1243 36.5481 19.1243 36.4253C19.1243 36.3026 19.0458 36.1908 18.9387 36.1608Z"
      fill="#FFFDF7"
    />
  </svg>
);

export const TwitterIcon = ({ className }: { className?: string }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

export const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    fill="currentColor"
    width="30pt"
    height="24pt"
    viewBox="0 0 30 24"
    className={className}
  >
    <g id="surface1">
      <path d="M 25.394531 2.136719 C 23.484375 1.230469 21.433594 0.5625 19.289062 0.179688 C 19.25 0.175781 19.210938 0.191406 19.191406 0.230469 C 18.929688 0.714844 18.636719 1.34375 18.429688 1.84375 C 16.125 1.484375 13.832031 1.484375 11.574219 1.84375 C 11.367188 1.335938 11.066406 0.714844 10.800781 0.230469 C 10.78125 0.195312 10.742188 0.175781 10.703125 0.179688 C 8.558594 0.5625 6.507812 1.230469 4.597656 2.136719 C 4.578125 2.144531 4.566406 2.15625 4.554688 2.171875 C 0.667969 8.171875 -0.398438 14.027344 0.125 19.808594 C 0.125 19.835938 0.140625 19.863281 0.164062 19.878906 C 2.730469 21.824219 5.214844 23.007812 7.652344 23.789062 C 7.691406 23.800781 7.734375 23.789062 7.757812 23.753906 C 8.335938 22.941406 8.851562 22.082031 9.292969 21.179688 C 9.316406 21.128906 9.292969 21.066406 9.238281 21.042969 C 8.425781 20.722656 7.648438 20.335938 6.898438 19.890625 C 6.839844 19.855469 6.835938 19.769531 6.890625 19.726562 C 7.046875 19.605469 7.203125 19.480469 7.355469 19.351562 C 7.382812 19.328125 7.421875 19.324219 7.453125 19.335938 C 12.363281 21.652344 17.675781 21.652344 22.527344 19.335938 C 22.5625 19.320312 22.597656 19.328125 22.625 19.351562 C 22.777344 19.476562 22.933594 19.605469 23.09375 19.726562 C 23.148438 19.769531 23.144531 19.855469 23.085938 19.890625 C 22.335938 20.34375 21.558594 20.722656 20.742188 21.042969 C 20.691406 21.0625 20.667969 21.128906 20.691406 21.179688 C 21.144531 22.082031 21.65625 22.941406 22.222656 23.753906 C 22.246094 23.789062 22.289062 23.800781 22.328125 23.789062 C 24.78125 23.007812 27.265625 21.824219 29.832031 19.878906 C 29.855469 19.863281 29.867188 19.835938 29.871094 19.808594 C 30.496094 13.125 28.824219 7.320312 25.433594 2.175781 C 25.425781 2.15625 25.414062 2.144531 25.394531 2.136719 Z M 10.023438 16.289062 C 8.546875 16.289062 7.328125 14.886719 7.328125 13.164062 C 7.328125 11.445312 8.523438 10.042969 10.023438 10.042969 C 11.539062 10.042969 12.746094 11.457031 12.722656 13.164062 C 12.722656 14.886719 11.527344 16.289062 10.023438 16.289062 Z M 19.992188 16.289062 C 18.515625 16.289062 17.296875 14.886719 17.296875 13.164062 C 17.296875 11.445312 18.492188 10.042969 19.992188 10.042969 C 21.507812 10.042969 22.714844 11.457031 22.691406 13.164062 C 22.691406 14.886719 21.507812 16.289062 19.992188 16.289062 Z M 19.992188 16.289062 " />
    </g>
  </svg>
);

export const MagicLogoIcon = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.0942 8.76869L14.5473 7.9274C13.6113 7.61973 12.9167 6.84574 12.7197 5.90349L11.6457 0.725947C11.6162 0.596148 11.498 0.5 11.36 0.5C11.2221 0.5 11.1039 0.596148 11.0743 0.725947L10.0004 5.90349C9.80332 6.84574 9.10871 7.61973 8.17271 7.9274L5.62582 8.76869C5.50759 8.80715 5.42877 8.91772 5.42877 9.0379C5.42877 9.15809 5.50759 9.26866 5.62582 9.30712L8.17271 10.1484C9.10871 10.4561 9.80332 11.2301 10.0004 12.1723L11.0743 17.3451C11.1039 17.4749 11.2221 17.571 11.36 17.571C11.498 17.571 11.6162 17.4749 11.6457 17.3451L12.7197 12.1723C12.9167 11.2301 13.6113 10.4561 14.5473 10.1484L17.0942 9.30712C17.2125 9.26866 17.2913 9.15809 17.2913 9.0379C17.2913 8.91772 17.2125 8.80715 17.0942 8.76869Z"
      fill="#FCE9E9"
    />
    <path
      d="M3.40899 4.02381L4.30558 4.32187C4.63564 4.43244 4.88196 4.70165 4.95093 5.03817L5.33025 6.86497C5.3401 6.91305 5.37951 6.9467 5.42878 6.9467C5.47804 6.9467 5.51745 6.91305 5.5273 6.86497L5.90663 5.03817C5.97559 4.70646 6.22191 4.43244 6.55197 4.32187L7.44856 4.02381C7.48797 4.00939 7.51752 3.97093 7.51752 3.92766C7.51752 3.8844 7.48797 3.84594 7.44856 3.83152L6.55197 3.53346C6.22191 3.42289 5.97559 3.15368 5.90663 2.81716L5.5273 0.990356C5.51745 0.942282 5.47804 0.90863 5.42878 0.90863C5.37951 0.90863 5.3401 0.942282 5.33025 0.990356L4.95093 2.81716C4.88196 3.14887 4.63564 3.42289 4.30558 3.53346L3.40899 3.83152C3.36958 3.84594 3.34003 3.8844 3.34003 3.92766C3.34003 3.97093 3.36958 4.00939 3.40899 4.02381Z"
      fill="#FCE9E9"
    />
    <path
      d="M5.50267 12.9992L4.30066 12.6002C3.85729 12.456 3.52723 12.0906 3.43856 11.6435L2.93114 9.19655C2.91637 9.13406 2.86218 9.09079 2.79814 9.09079C2.7341 9.09079 2.67498 9.13406 2.66513 9.19655L2.15772 11.6435C2.06412 12.0906 1.73406 12.456 1.29562 12.6002L0.0936008 12.9992C0.0394116 13.0184 0 13.0665 0 13.1242C0 13.1819 0.0394116 13.2347 0.0936008 13.2492L1.29562 13.6482C1.73898 13.7924 2.06905 14.1578 2.15772 14.6049L2.66513 17.0518C2.67991 17.1143 2.7341 17.1576 2.79814 17.1576C2.86218 17.1576 2.92129 17.1143 2.93114 17.0518L3.43856 14.6049C3.53216 14.1578 3.86222 13.7924 4.30066 13.6482L5.50267 13.2492C5.55686 13.2299 5.59627 13.1819 5.59627 13.1242C5.59627 13.0665 5.55686 13.0136 5.50267 12.9992Z"
      fill="#FCE9E9"
    />
  </svg>
);

export const MagicTextIcon = ({ className }: { className?: string }) => (
  <svg
    width="59"
    height="19"
    viewBox="0 0 59 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8.19817 8.02829L11.5333 1.21142C11.5678 1.13931 11.6367 1.10085 11.7155 1.10085H16.3216C16.3906 1.10085 16.4497 1.1297 16.4891 1.18739C16.5285 1.24507 16.5335 1.30757 16.5088 1.37007L15.9571 2.71613V12.9174L16.5088 14.2635C16.5335 14.326 16.5285 14.3933 16.4891 14.4461C16.4497 14.499 16.3906 14.5327 16.3216 14.5327H11.8288C11.7599 14.5327 11.7008 14.5038 11.6614 14.4461C11.6219 14.3884 11.617 14.326 11.6417 14.2635L12.1934 12.9174V4.9083L7.48386 14.6625C7.44938 14.7346 7.38041 14.7778 7.29666 14.7778C7.21291 14.7778 7.14395 14.7298 7.11439 14.6577L3.02557 5.34096V12.379L3.80392 14.2683C3.82855 14.3308 3.82362 14.3981 3.78421 14.4509C3.7448 14.5038 3.68569 14.5375 3.61672 14.5375H0.202805C0.133837 14.5375 0.0747232 14.5086 0.0353129 14.4509C-0.00409747 14.3933 -0.00902797 14.3308 0.0156035 14.2683L0.793958 12.379V2.72094L0.242216 1.37487C0.217585 1.31238 0.222508 1.24507 0.261918 1.19219C0.301328 1.1345 0.360442 1.10566 0.42941 1.10566H5.0552C5.13894 1.10566 5.20791 1.15373 5.2424 1.22584L8.20803 8.0379L8.19817 8.02829Z"
      fill="#FFFDF7"
    />
    <path
      d="M28.9428 14.2683C28.9674 14.3308 28.9625 14.3933 28.9231 14.4509C28.8837 14.5038 28.8246 14.5375 28.7605 14.5375H24.8343C24.7259 14.5375 24.6323 14.4509 24.6323 14.3404V13.7443C23.6668 14.4557 22.5386 14.7634 21.3071 14.7634C19.9523 14.7634 18.5779 14.2635 18.0163 12.9655C17.4596 11.6819 17.9917 10.2589 18.9277 9.29262C20.3514 7.82157 22.5731 7.33121 24.5732 7.33121H24.6225C24.6028 6.97547 24.4993 6.58607 24.184 6.39377C22.8835 5.60056 20.8194 6.75914 19.7306 7.51389C19.6814 7.54755 19.6223 7.55716 19.5632 7.54274C19.504 7.52832 19.4597 7.48986 19.4351 7.43698L18.568 5.67748C18.5434 5.6294 18.5434 5.57652 18.5631 5.52364C18.5828 5.47076 18.6173 5.43711 18.6715 5.41307C21.5682 4.1968 28.3812 3.87471 28.3812 8.3023V12.9126L28.933 14.2635L28.9428 14.2683ZM24.6323 9.00418C23.8342 9.0811 23.1199 9.43685 22.583 10.0378C22.1544 10.5233 21.8194 11.2204 21.8539 11.8742C21.8687 12.1434 21.9623 12.3982 22.1938 12.5568C22.6273 12.8501 23.2677 12.6722 23.6717 12.4174C24.3072 12.0136 24.6323 11.3358 24.6323 10.6002V9.00418Z"
      fill="#FFFDF7"
    />
    <path
      d="M39.8201 18.4363C39.8201 18.4363 39.8053 18.417 39.8004 18.4074C39.7954 18.393 39.7856 18.3786 39.7856 18.3642C39.7807 18.3305 39.7856 18.3017 39.7954 18.268C39.7954 18.268 39.8053 18.2488 39.8102 18.244C40.2782 17.5854 39.7265 16.9892 38.7018 17.2969C37.4899 17.6575 34.7657 18.3353 33.5243 18.3497C32.0759 18.369 30.6325 17.9267 29.9724 16.5854C29.1596 14.9317 30.4108 12.8309 31.7853 12.2636C28.3911 9.95124 29.731 4.70158 35.6376 4.70158C36.6032 4.70158 37.5786 4.84099 38.4752 5.19674C38.8791 4.29295 39.49 3.48531 40.3767 2.98535C40.4802 2.92766 40.6083 2.96612 40.6575 3.07188L41.7807 5.4323C41.8398 5.55249 41.7561 5.6919 41.6231 5.70632C41.0861 5.76401 40.5097 5.89862 40.027 6.14379C41.5147 7.48986 41.7906 9.58588 40.623 11.2012C39.8201 12.3117 38.5688 12.903 37.2436 13.1674C35.9973 13.4174 34.8248 13.201 33.539 13.4847C32.337 13.7491 32.539 15.3403 33.9282 15.0663C35.076 14.8403 37.1746 14.2587 38.5639 13.9942C41.5689 13.4222 42.7906 16.2297 41.6379 18.3593C41.5492 18.5228 41.4457 18.4988 41.2044 18.4988H39.9531C39.9038 18.4988 39.8595 18.4795 39.8299 18.4459L39.8201 18.4363ZM36.3569 6.7976C35.9726 6.43704 35.4307 6.12937 34.879 6.2111C34.2681 6.30244 33.9282 6.83606 33.7853 7.3841C33.6376 7.96579 33.6868 8.60998 33.8445 9.18206C34.0317 9.87432 34.4061 10.5666 34.9381 11.0617C35.9628 12.0184 37.1599 11.8357 37.5096 10.4752C37.6624 9.89355 37.6081 9.24936 37.4505 8.67728C37.2633 7.98502 36.8889 7.29276 36.3569 6.7976Z"
      fill="#FFFDF7"
    />
    <path
      d="M47.6824 14.2683C47.7071 14.3308 47.7021 14.3933 47.6627 14.4509C47.6233 14.5038 47.5642 14.5375 47.5002 14.5375H43.0074C42.9384 14.5375 42.8793 14.5086 42.8399 14.4509C42.8005 14.3933 42.7955 14.3308 42.8202 14.2683L43.3719 12.9174V7.40813L42.7069 6.33128C42.6724 6.2784 42.6675 6.22071 42.6921 6.16302C42.7167 6.10534 42.7561 6.06207 42.8202 6.04765L43.5148 5.83131H43.5246L46.8794 4.93714C46.9435 4.92272 47.0026 4.93233 47.0519 4.97079C47.1011 5.00925 47.1307 5.06213 47.1307 5.12463V12.9222L47.6824 14.2731V14.2683ZM45.17 0.413399H45.2094C46.3129 0.413399 47.2095 1.28834 47.2095 2.36519C47.2095 3.44205 46.3129 4.3266 45.2045 4.31699H45.1651C44.0616 4.31699 43.165 3.44205 43.165 2.36519C43.165 1.28834 44.0616 0.413399 45.17 0.413399Z"
      fill="#FFFDF7"
    />
    <path
      d="M58.6336 6.41782L56.3084 8.36C56.2591 8.40326 56.1951 8.41769 56.131 8.40326C56.067 8.38884 56.0177 8.34558 55.9931 8.28789C55.8502 7.94176 55.6778 7.60524 55.4709 7.29276C55.0916 6.71107 54.328 5.86978 53.5201 6.05726C52.988 6.17745 52.6728 6.75914 52.5151 7.22065C52.2688 7.94656 52.2442 8.80228 52.3673 9.55223C52.6629 11.4079 53.8206 12.9366 55.8157 13.2155C56.0423 13.2491 56.269 13.2635 56.4956 13.2635C57.2591 13.2635 58.0326 13.0857 58.7026 12.7203C58.7863 12.6722 58.8898 12.6914 58.9538 12.7636C59.0178 12.8357 59.0129 12.9414 58.9538 13.0135C57.8306 14.3115 56.0867 14.7778 54.397 14.7778C51.2441 14.7778 48.7021 12.9751 48.7021 9.7301C48.7021 6.48512 51.2589 4.70639 54.397 4.70639C55.9241 4.70639 57.5153 5.07175 58.6385 6.13899C58.6779 6.17745 58.7025 6.22552 58.6976 6.28321C58.6976 6.3409 58.673 6.38897 58.6287 6.42262L58.6336 6.41782Z"
      fill="#FFFDF7"
    />
  </svg>
);

export const MagicIcon = () => (
  <span className="inline-flex space-x-1">
    <MagicLogoIcon />
    <MagicTextIcon />
  </span>
);

export const UsersIcon = ({ className }: { className?: string }) => (
  <svg
    width="51"
    height="67"
    viewBox="0 0 51 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 21.0953V45.7337C0 49.8108 2.12588 53.5719 5.55934 55.5995L21.3938 64.9739C23.9372 66.4792 27.0628 66.4792 29.6062 64.9739L45.4407 55.5995C48.8741 53.5588 51 49.7976 51 45.7337V21.0953C51 17.0182 48.8741 13.2526 45.4407 11.2294L29.6062 1.84189C27.0628 0.336556 23.9372 0.336556 21.3938 1.84189L5.55934 11.2118C2.12588 13.2526 0 17.0138 0 21.0953Z"
      fill="#DC2626"
    />
    <path
      d="M11.4259 21.3456L13.4759 22.0566C14.2309 22.3243 14.7961 22.9694 14.9437 23.7813L15.8084 28.1789C15.8337 28.293 15.9307 28.3676 16.0446 28.3676C16.1585 28.3676 16.2555 28.293 16.2808 28.1789L17.1455 23.7813C17.3058 22.9826 17.8626 22.3243 18.6261 22.0566L20.676 21.3456C20.773 21.3061 20.8363 21.2183 20.8363 21.1174C20.8363 21.0164 20.773 20.9287 20.676 20.8892L18.6261 20.1782C17.871 19.9105 17.3058 19.2653 17.1455 18.4534L16.2808 14.0559C16.2555 13.9418 16.1585 13.8672 16.0446 13.8672C15.9307 13.8672 15.8337 13.9418 15.8084 14.0559L14.9437 18.4534C14.7834 19.2522 14.2267 19.9105 13.4759 20.1782L11.4259 20.8892C11.3289 20.9287 11.2656 21.0164 11.2656 21.1174C11.2656 21.2183 11.3289 21.3061 11.4259 21.3456Z"
      fill="#FFFCF5"
    />
    <path
      d="M25.4969 36.7547C28.29 36.7547 30.5543 34.3987 30.5543 31.4926C30.5543 28.5864 28.29 26.2305 25.4969 26.2305C22.7037 26.2305 20.4395 28.5864 20.4395 31.4926C20.4395 34.3987 22.7037 36.7547 25.4969 36.7547Z"
      fill="#FFFCF5"
    />
    <path
      d="M15.8812 47.2877V48.1522C15.8812 48.6745 16.1511 49.1616 16.5856 49.4206C22.1027 52.7341 28.898 52.7341 34.4151 49.4206C34.8496 49.1573 35.1195 48.6745 35.1195 48.1522V47.2877C35.1195 44.7992 33.8415 42.4995 31.7704 41.2531L29.6572 39.9848C27.0842 38.44 23.9123 38.44 21.3393 39.9848L19.2261 41.2531C17.155 42.4995 15.877 44.7992 15.877 47.2877H15.8812Z"
      fill="#FFFCF5"
    />
  </svg>
);

export const GuildsIcon = ({ className }: { className?: string }) => (
  <svg
    width="51"
    height="67"
    viewBox="0 0 51 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 21.0953V45.7337C0 49.8108 2.12588 53.5719 5.55935 55.5995L21.3938 64.9739C23.9372 66.4792 27.0628 66.4792 29.6062 64.9739L45.4407 55.5995C48.8741 53.5588 51 49.7976 51 45.7337V21.0953C51 17.0182 48.8741 13.2526 45.4407 11.2294L29.6062 1.84189C27.0628 0.336556 23.9372 0.336556 21.3938 1.84189L5.55935 11.2162C2.12588 13.257 0 17.0182 0 21.0953Z"
      fill="#DC2626"
    />
    <path
      d="M24.1622 46.2559C22.0912 46.2559 20.4082 48.007 20.4082 50.1618C20.4082 52.3167 22.0912 54.0678 24.1622 54.0678C26.2333 54.0678 27.9163 52.3167 27.9163 50.1618C27.9163 48.007 26.2333 46.2559 24.1622 46.2559Z"
      fill="#FFFCF5"
    />
    <path
      d="M28.5509 14.7178C26.4799 14.7178 24.7969 16.4689 24.7969 18.6237C24.7969 20.7786 26.4799 22.5297 28.5509 22.5297C30.622 22.5297 32.3049 20.7786 32.3049 18.6237C32.3049 16.4689 30.622 14.7178 28.5509 14.7178Z"
      fill="#FFFCF5"
    />
    <path
      d="M13.8165 36.6924C11.7455 36.6924 10.0625 38.4435 10.0625 40.5984C10.0625 42.7532 11.7455 44.5043 13.8165 44.5043C15.8876 44.5043 17.5706 42.7532 17.5706 40.5984C17.5706 38.4435 15.8876 36.6924 13.8165 36.6924Z"
      fill="#FFFCF5"
    />
    <path
      d="M38.129 32.0932C40.2001 32.0932 41.8831 30.3421 41.8831 28.1872C41.8831 26.0324 40.2001 24.2812 38.129 24.2812C36.058 24.2812 34.375 26.0324 34.375 28.1872C34.375 30.3421 36.058 32.0932 38.129 32.0932Z"
      fill="#FFFCF5"
    />
    <path
      d="M37.1427 39.4307C35.0717 39.4307 33.3887 41.1818 33.3887 43.3366C33.3887 45.4915 35.0717 47.2426 37.1427 47.2426C39.2138 47.2426 40.8967 45.4915 40.8967 43.3366C40.8967 41.1818 39.2138 39.4307 37.1427 39.4307Z"
      fill="#FFFCF5"
    />
    <path
      d="M11.2371 24.9526L13.3672 25.6899C14.1517 25.9664 14.7422 26.6379 14.8941 27.4805L15.7925 32.0492C15.8178 32.1677 15.9191 32.2467 16.0372 32.2467C16.1553 32.2467 16.2565 32.1677 16.2818 32.0492L17.1803 27.4805C17.349 26.6511 17.9269 25.9664 18.7198 25.6899L20.8499 24.9526C20.9512 24.9131 21.0187 24.821 21.0187 24.7156C21.0187 24.6103 20.9554 24.5182 20.8499 24.4787L18.7198 23.7413C17.9353 23.4649 17.3448 22.7934 17.1803 21.9507L16.2818 17.3821C16.2565 17.2636 16.1553 17.1846 16.0372 17.1846C15.9191 17.1846 15.8178 17.2636 15.7925 17.3821L14.8941 21.9507C14.7254 22.7802 14.1475 23.4649 13.3672 23.7413L11.2371 24.4787C11.1358 24.5182 11.0684 24.6103 11.0684 24.7156C11.0684 24.821 11.1316 24.9131 11.2371 24.9526Z"
      fill="#FFFCF5"
    />
  </svg>
);

export const GlobalIcon = ({ className }: { className?: string }) => (
  <svg
    width="51"
    height="67"
    viewBox="0 0 51 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 21.0777V45.7161C0 49.7932 2.12588 53.5544 5.55934 55.582L21.3938 64.9563C23.9372 66.4616 27.0628 66.4616 29.6062 64.9563L45.4407 55.582C48.8741 53.5412 51 49.7801 51 45.7161V21.0777C51 17.0006 48.8741 13.235 45.4407 11.2118L29.6105 1.82432C27.067 0.318978 23.9414 0.318978 21.398 1.82432L5.56356 11.1987C2.1301 13.2394 0.00422213 17.0006 0.00422213 21.0777H0Z"
      fill="#DC2626"
    />
    <path
      d="M11.4318 21.328L13.4817 22.039C14.2367 22.3067 14.802 22.9519 14.9496 23.7638L15.8143 28.1613C15.8396 28.2754 15.9366 28.35 16.0505 28.35C16.1644 28.35 16.2614 28.2754 16.2867 28.1613L17.1514 23.7638C17.3117 22.965 17.8685 22.3067 18.6319 22.039L20.6819 21.328C20.7789 21.2885 20.8422 21.2007 20.8422 21.0998C20.8422 20.9989 20.7789 20.9111 20.6819 20.8716L18.6319 20.1606C17.8769 19.8929 17.3117 19.2478 17.1514 18.4358L16.2867 14.0383C16.2614 13.9242 16.1644 13.8496 16.0505 13.8496C15.9366 13.8496 15.8396 13.9242 15.8143 14.0383L14.9496 18.4358C14.7893 19.2346 14.2325 19.8929 13.4817 20.1606L11.4318 20.8716C11.3348 20.9111 11.2715 20.9989 11.2715 21.0998C11.2715 21.2007 11.3348 21.2885 11.4318 21.328Z"
      fill="#FFFCF5"
    />
    <path
      d="M36.2737 56.4601V51.4087C36.2737 50.9259 36.6534 50.531 37.1173 50.531H42.9804C43.4697 50.531 43.8619 50.9611 43.824 51.4658C43.7987 51.8344 43.7649 52.1943 43.727 52.5586L43.7691 52.5322C46.1481 51.1191 47.6244 48.5078 47.6244 45.7121V45.6595C47.287 40.3842 46.0427 35.6751 44.1699 32.05C43.9927 31.7033 44.3765 31.339 44.6971 31.5497L46.3295 32.6337C46.8905 33.0067 47.6286 32.5854 47.6286 31.892V29.8951C47.6286 29.2149 47.2912 28.5873 46.7428 28.223C42.799 25.6161 38.058 24.2117 32.9879 24.5233C21.806 25.2079 12.6023 34.3058 11.3832 45.8921C11.0416 49.1222 11.3326 52.2382 12.1256 55.1391C12.1847 55.3586 12.3323 55.5473 12.5221 55.6614L15.2976 57.3028C16.002 57.7197 16.7992 56.9692 16.487 56.1924C15.905 54.7222 15.4832 53.1642 15.2512 51.5404C15.1752 51.0093 15.5717 50.5266 16.0863 50.5266H20.2748C20.7219 50.5266 21.0847 50.8908 21.1142 51.356C21.3462 55.1435 22.0506 58.637 23.1178 61.652C23.2021 61.889 23.3793 62.069 23.5986 62.1655C24.1976 62.4288 24.8429 62.5693 25.5009 62.5693C25.8046 62.5693 26.1083 62.5385 26.4078 62.4815C26.9351 62.3762 27.2514 61.8056 27.049 61.2878C25.9523 58.5097 25.193 55.1304 24.9315 51.457C24.8936 50.9523 25.2858 50.5222 25.7751 50.5222H31.6382C32.1021 50.5222 32.4818 50.9172 32.4818 51.3999V57.6978C32.4818 58.3692 33.1819 58.795 33.7429 58.4614L35.8519 57.215C36.1135 57.057 36.278 56.7674 36.278 56.4514L36.2737 56.4601ZM37.6193 29.6757C40.8334 32.208 43.2925 38.3522 43.8198 45.6243C43.8577 46.1378 43.4739 46.5767 42.9804 46.5767H37.1173C36.6534 46.5767 36.2737 46.1817 36.2737 45.699V30.3823C36.2737 29.6625 37.0667 29.2368 37.6193 29.6757ZM20.2748 46.5811H16.0863C15.5675 46.5811 15.1752 46.1027 15.2512 45.5673C16.002 40.3535 18.6804 35.7848 22.5062 32.682C23.1937 32.1246 24.1385 32.9102 23.7842 33.7396C22.3417 37.1146 21.3926 41.2268 21.1142 45.756C21.0847 46.2212 20.7219 46.5855 20.2748 46.5855V46.5811ZM24.9273 45.6287C25.4545 38.3522 27.9137 32.2124 31.1278 29.6801C31.6803 29.2456 32.4733 29.6669 32.4733 30.3867V45.7033C32.4733 46.1861 32.0937 46.5811 31.6297 46.5811H25.7667C25.2732 46.5811 24.8893 46.1422 24.9273 45.6287Z"
      fill="#FFFCF5"
    />
  </svg>
);

export const CartridgesIcon = ({ className }: { className?: string }) => (
  <svg
    width="51"
    height="67"
    viewBox="0 0 51 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 21.0777V45.7161C0 49.7932 2.12588 53.5544 5.55934 55.582L21.3938 64.9563C23.9372 66.4616 27.0628 66.4616 29.6062 64.9563L45.4407 55.582C48.8741 53.5412 51 49.7801 51 45.7161V21.0777C51 17.0006 48.8741 13.235 45.4407 11.2118L29.6062 1.82432C27.0628 0.318978 23.9372 0.318978 21.3938 1.82432L5.55934 11.1987C2.12588 13.2394 0 17.0006 0 21.0777Z"
      fill="#DC2626"
    />
    <path
      d="M10.1193 21.328L12.1692 22.039C12.9242 22.3067 13.4895 22.9519 13.6371 23.7638L14.5018 28.1613C14.5271 28.2754 14.6241 28.35 14.738 28.35C14.8519 28.35 14.9489 28.2754 14.9742 28.1613L15.8389 23.7638C15.9992 22.965 16.556 22.3067 17.3194 22.039L19.3694 21.328C19.4664 21.2885 19.5297 21.2007 19.5297 21.0998C19.5297 20.9989 19.4664 20.9111 19.3694 20.8716L17.3194 20.1606C16.5644 19.8929 15.9992 19.2478 15.8389 18.4358L14.9742 14.0383C14.9489 13.9242 14.8519 13.8496 14.738 13.8496C14.6241 13.8496 14.5271 13.9242 14.5018 14.0383L13.6371 18.4358C13.4768 19.2346 12.92 19.8929 12.1692 20.1606L10.1193 20.8716C10.0223 20.9111 9.95898 20.9989 9.95898 21.0998C9.95898 21.2007 10.0223 21.2885 10.1193 21.328Z"
      fill="#FFFCF5"
    />
    <path
      d="M37.3391 36.8075L28.6838 31.6112C28.3801 31.4269 28.0637 31.2777 27.7389 31.1504C28.7513 30.4131 29.4135 29.1974 29.4135 27.8149C29.4135 25.5679 27.663 23.7422 25.4992 23.7422C23.3353 23.7422 21.5848 25.5635 21.5848 27.8149C21.5848 29.1974 22.2471 30.4131 23.2594 31.1504C22.9346 31.2777 22.6183 31.4269 22.3146 31.6112L13.6592 36.8075C11.6936 37.988 10.4746 40.1868 10.4746 42.5479V45.3743C10.4746 47.7354 11.6936 49.9342 13.6592 51.1147L22.3146 56.311C23.2974 56.9035 24.3983 57.1975 25.4992 57.1975C26.6001 57.1975 27.701 56.9035 28.6838 56.311L37.3391 51.1104C39.3047 49.9298 40.5237 47.731 40.5237 45.3699V42.5435C40.5237 40.1824 39.3047 37.9836 37.3391 36.8031V36.8075ZM35.441 44.8696L26.7857 50.0702C25.9927 50.5486 25.0057 50.5486 24.2085 50.0702L15.6417 44.9266C15.0849 44.5931 14.6251 44.0796 14.4142 43.4432C13.9924 42.1837 14.5155 40.8539 15.5573 40.2307L22.3357 36.1579C22.8967 35.82 23.6011 36.2413 23.6011 36.9172V39.0984C23.6011 40.1297 24.3266 41.0514 25.3136 41.1479C26.444 41.262 27.3973 40.336 27.3973 39.1818V36.9172C27.3973 36.2413 28.1017 35.82 28.6627 36.1579L35.441 40.2307C36.234 40.709 36.7275 41.5956 36.7275 42.5523C36.7275 43.5091 36.234 44.3956 35.441 44.874V44.8696Z"
      fill="#FFFCF5"
    />
  </svg>
);
