import { Form, useActionData, useNavigation } from "@remix-run/react";
import type { action } from "~/routes/_index";
import Button from "../Button";
import {
  DiscordIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../misc/Icons";
import { CtasCutOff } from "../misc/Svgs";
import { LINKS, SOCIAL } from "../misc/const";

const Ctas = () => {
  const navigation = useNavigation();
  const data = useActionData<typeof action>();

  const isSubmitting = navigation.state === "submitting";

  const state: "idle" | "success" | "error" | "submitting" = isSubmitting
    ? "submitting"
    : data?.success
      ? "success"
      : data && !data.success
        ? "error"
        : "idle";

  return (
    <div className="relative bg-ruby py-8 2xl:py-20">
      <CtasCutOff className="-translate-y-[100%] absolute top-[1px] left-0 hidden w-[144px] 2xl:block" />
      <div className="container grid grid-cols-1 grid-rows-[auto_1px] gap-x-16 gap-y-10 md:grid-cols-[1fr_1px_1fr] 2xl:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] 2xl:gap-y-0">
        <div className="space-y-4 md:h-60 2xl:space-y-6">
          <h1 className="font-bold text-cream text-xl lg:text-3xl">
            For Developers
          </h1>
          <p className="pb-4 md:pb-0">
            Apply to get top notch support and usher in a new era of gaming with
            Treasure.
          </p>
          <Button color="outline" className="w-max" to="/build">
            Learn More
          </Button>
        </div>
        <div className="bg-night-100/40" />
        <div className="relative space-y-4 md:h-60 2xl:space-y-6">
          <h1 className="font-bold text-cream text-xl lg:text-3xl">
            For Creators
          </h1>
          <p className="">
            Passionate about creating content and playing Treasure games? Join
            our leading creator program.
          </p>
          <div className="flex gap-4 pt-4 md:pt-0">
            <Button
              as="a"
              color="outline"
              className="w-max"
              href={LINKS.CREATORS}
            >
              Apply Now
            </Button>
            <Button as="link" color="outline" className="w-max" to="/create">
              Learn More
            </Button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-night-100/40 md:col-span-3 md:h-auto 2xl:col-span-1 2xl:w-auto" />
        <div className="relative space-y-6 md:h-60">
          <h1 className="max-w-[300px] font-bold text-cream text-xl md:max-w-none lg:text-3xl">
            Get the latest
          </h1>

          <div className="bottom-0 left-0 md:absolute">
            <Form method="post">
              <fieldset disabled={state === "submitting"} className="space-y-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="meem@treasure.lol"
                  className="w-full rounded-lg border-2 border-honey bg-honey-100 p-4 font-semibold text-night-400 placeholder:font-normal placeholder:text-silver-400 focus-within:border-current focus-within:outline-none focus-within:ring-2 focus-within:ring-current focus-within:ring-offset-2 focus-visible:outline-none"
                />
                <Button
                  as="button"
                  type="submit"
                  color="honey"
                  disabled={state === "submitting" || state === "success"}
                  className="w-full"
                >
                  {state === "submitting"
                    ? "Submitting..."
                    : state === "success"
                      ? "Subscribed!"
                      : "Subscribe"}
                </Button>
                {state === "error" && !data?.success ? (
                  <p className="text-honey-100">Something went wrong.</p>
                ) : null}
              </fieldset>
              <input type="hidden" name="source" value="Marketing Website" />
            </Form>
          </div>
        </div>
        <div className="h-[1px] w-full bg-night-100/40 md:h-auto md:w-auto" />
        <div className="relative space-y-6 md:h-60">
          <h1 className="font-bold text-cream text-xl lg:text-3xl">
            Join an unmatched community
          </h1>

          <div className="bottom-0 left-0 flex gap-4 md:absolute">
            <a
              href={SOCIAL.DISCORD}
              target="_blank"
              rel="noreferrer"
              className="text-cream"
            >
              <DiscordIcon className="w-10" />
            </a>
            <a
              href={SOCIAL.TWITTER}
              target="_blank"
              rel="noreferrer"
              className="text-cream"
            >
              <TwitterIcon className="w-10" />
            </a>
            <a
              href={SOCIAL.YOUTUBE}
              target="_blank"
              rel="noreferrer"
              className="text-cream"
            >
              <YoutubeIcon className="w-10" />
            </a>
            <a
              href={SOCIAL.TWITCH}
              target="_blank"
              rel="noreferrer"
              className="text-cream"
            >
              <TwitchIcon className="w-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ctas;
