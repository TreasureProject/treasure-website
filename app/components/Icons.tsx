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

export const MagicLogoIcon = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

export const ExclamationCircleIcon = createIcon({
  path: (
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  displayName: "ExclamationCircleIcon",
});

export const CheckCircleIcon = createIcon({
  path: (
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  displayName: "CheckCircleIcon",
});

export const SpinnerIcon = createIcon({
  path: (
    <>
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </>
  ),
  displayName: "SpinnerIcon",
});
