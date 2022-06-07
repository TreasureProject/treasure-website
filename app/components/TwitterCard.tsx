export const TwitterCard = ({
  profileImage,
  username,
  handle,
  tweet,
  date,
}: {
  profileImage: string;
  username: string;
  handle: string;
  tweet: string;
  date: string;
}) => (
  <div className="w-full shrink-0 snap-center rounded-xl border-2 border-honey-300 bg-honey-25 p-8 transition-colors duration-500 hover:bg-honey-100 lg:max-w-md">
    <div className="flex justify-between">
      <div className="flex items-center">
        <img
          className="h-11 w-11 rounded-full"
          src={profileImage}
          alt={`${username} Profile`}
        />
        <div className="ml-1.5 text-sm leading-tight">
          <span className="block font-bold text-black">{username}</span>
          <span className="block font-normal text-gray-500">{handle}</span>
        </div>
      </div>
      <svg
        className="inline-block h-6 w-auto fill-current text-blue-400"
        viewBox="0 0 24 24"
      >
        <g>
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </g>
      </svg>
    </div>
    <p className="mt-8 block text-base leading-snug text-black sm:text-xl">
      {tweet}
    </p>
    <p className="mt-8 text-xs text-night-600 sm:text-base">{date}</p>
  </div>
);
