import {
  Link,
  useSearchParams,
  useRouteLoaderData,
  useNavigate,
} from "@remix-run/react";
import React from "react";
import CompassLogo from "@/img/CompassLogo.svg";
import CompassText from "@/img/CompassText.svg";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/Command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./Dropdown";
import { SunMedium, Moon, Laptop } from "lucide-react";
import { Theme, useTheme } from "~/utils/theme-provider";
import type { loader } from "~/routes/blog";

import { Preview } from "./Preview";
import type { SerializeFrom } from "@remix-run/server-runtime";

import JoinCommunityImg from "@/img/illustrations/join-community.webp";
import { socials } from "~/const";

const Card = ({
  title,
  description,
  children,
  image,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  image: string;
}) => (
  <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2.5xl border-2 border-honey-300 bg-honey-25 p-10 dark:border-night-800 dark:bg-[#131D2E]">
    <div className="relative z-10 max-w-[10rem] sm:max-w-md lg:max-w-[17rem]">
      <p className="text-xl font-bold text-ruby-900 dark:text-night-200 lg:text-3xl">
        {title}
      </p>
      <p className="mt-2.5 text-xs text-night-600 sm:text-base lg:text-base">
        {description}
      </p>
    </div>
    <div className="relative z-10 mt-8">{children}</div>
    <div className="absolute -bottom-1 right-0">
      <img src={image} className="ml-auto w-1/2 md:w-1/3" alt={title} />
    </div>
  </div>
);

const currentYear = new Date().getFullYear();

const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [value, setValue] = React.useState("");
  const { posts } = useRouteLoaderData("routes/blog") as SerializeFrom<
    typeof loader
  >;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const filteredPosts =
    value === ""
      ? posts.slice(0, 5)
      : posts.filter((post) =>
          post?.title?.toLowerCase().includes(value.toLowerCase())
        );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        value={value}
        onValueChange={setValue}
        placeholder="Search posts..."
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {filteredPosts?.map((post) => (
            <CommandItem
              onSelect={(v) => {
                const targetPost = posts.find(
                  (p) => p?.title?.trim().toLowerCase() === v
                );

                if (!targetPost) return;

                navigate(
                  `/blog/${targetPost.slug}/?${searchParams.toString()}`
                );

                setOpen(false);
              }}
              key={post?.slug}
            >
              <span className="truncate">{post?.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const [, setTheme] = useTheme();
  const [searchParams] = useSearchParams();
  const { preview } = useRouteLoaderData("routes/blog") as SerializeFrom<
    typeof loader
  >;

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="flex min-h-full flex-col">
      <header className="dark:bg-night-900 dark:shadow-lg">
        <div className="container flex h-24">
          <Link
            to={`/blog?${searchParams.toString()}`}
            className="flex max-w-none items-center space-x-2"
          >
            <img src={CompassLogo} alt="Compass Logo" />
            <img
              src={CompassText}
              alt="Compass Text Logo"
              className="hidden dark:invert sm:inline-block"
            />
          </Link>
          <div className="ml-4 flex flex-1 items-center justify-end space-x-4">
            <button
              onClick={() => setOpen(true)}
              className="group relative inline-flex h-9 w-full items-center justify-start rounded-md border border-night-200 bg-transparent py-2 px-4 text-sm font-medium text-night-400 transition-colors focus:outline-none focus:ring-2 focus:ring-night-400 focus:ring-offset-2 hover:bg-night-100 active:scale-95 dark:border-night-700 dark:focus:ring-night-600 dark:hover:bg-night-800/50 sm:pr-12 md:w-48 lg:w-64"
            >
              <span className="font-medium transition-colors dark:text-night-600 dark:group-hover:text-night-400">
                Search posts...
              </span>
              <kbd className="pointer-events-none absolute right-1.5 flex h-5 select-none items-center gap-1 rounded border border-night-100 bg-night-100 px-1.5 font-mono text-[10px] font-medium text-night-600 dark:border-night-700 dark:bg-transparent">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-night-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-night-100 data-[state=open]:bg-transparent hover:bg-night-100 active:scale-95 dark:text-night-100 dark:focus:ring-night-400 dark:focus:ring-offset-night-900 dark:data-[state=open]:bg-night-800 dark:data-[state=open]:bg-transparent dark:hover:bg-night-800 dark:hover:text-night-100">
                  <SunMedium className="rotate-0 scale-100 text-black transition-all hover:text-night-900 dark:-rotate-90 dark:scale-0 dark:text-night-400 dark:hover:text-night-100" />
                  <Moon className="absolute rotate-90 scale-0 transition-all hover:text-night-900 dark:rotate-0 dark:scale-100 dark:text-night-400 dark:hover:text-night-100" />
                  <span className="sr-only">Toggle theme</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" forceMount>
                <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>
                  <SunMedium className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme(Theme.SYSTEM)}>
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="relative flex-1 overflow-hidden lg:overflow-visible">
        {preview ? <Preview /> : null}
        {children}
      </div>
      <footer className="container mt-8 lg:mt-20">
        <div className="flex grid-cols-5 flex-col gap-6 xl:grid">
          <div className="relative flex flex-col items-stretch justify-between overflow-hidden rounded-2.5xl border-2 border-honey-300 bg-[linear-gradient(to_right,#101827ed_30%,#10182790),url('/img/bg-hero.jpg')] bg-cover bg-center bg-no-repeat p-6 dark:border-night-800 sm:p-10 xl:col-span-3">
            <div className="space-y-2.5">
              <p className="text-2xl font-bold text-honey-100 lg:text-3xl 2xl:text-4xl">
                Build with Treasure
              </p>
              <p className="text-sm text-night-100 sm:text-base lg:text-lg">
                Apply to become an official Treasure Game Partner to supercharge
                your game.
              </p>
            </div>
            <div className="mt-8 flex">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeeom1s9R48ZGRXzx5B-MeYahfVa2DoKVBqS8hu63wwLxykpQ/viewform"
                rel="noopener noreferrer"
                className="rounded-md bg-ruby-900 py-4 px-5 text-sm font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ruby-600 hover:bg-ruby-1000 sm:py-4 sm:px-7 sm:text-base"
              >
                Start building
              </a>
            </div>
          </div>
          <div className="flex xl:col-span-2">
            <Card
              title="Join the Community"
              description="Become a member of Treasure's vibrant community!"
              image={JoinCommunityImg}
            >
              <div className="flex space-x-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    className="text-night-800 hover:text-night-900 dark:text-honey-100 dark:hover:text-honey-300"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
        <div className="flex h-24">
          <Link
            to={`/blog?${searchParams.toString()}`}
            className="flex max-w-none items-center space-x-2"
          >
            <img src={CompassLogo} alt="Compass Logo" />
            <img
              src={CompassText}
              alt="Compass Text Logo"
              className="hidden dark:invert sm:inline-block"
            />
          </Link>
          <div className="flex flex-1 items-center justify-end">
            <p className="text-xs text-night-700 dark:text-night-400 sm:text-sm">
              &copy; 2021-{currentYear} Treasure. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
};
