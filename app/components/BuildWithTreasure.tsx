import { useAppContext } from "~/context/App";
import { CTAButton } from "./Button";
import { NewCard } from "./Card";
import GetMagicImg from "@/img/illustrations/get-magic.webp";
import JoinCommunityImg from "@/img/illustrations/join-community.webp";
import { socials } from "~/const";

export const BuildWithTreasure = () => {
  const { openModal } = useAppContext();

  return (
    <section
      id="info"
      aria-labelledby="other-information"
      className="relative bg-honey-100 py-16"
    >
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
        <div className="grid auto-rows-[15rem] grid-cols-1 gap-10 sm:auto-rows-[20rem] xl:grid-cols-3">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2.5xl border-2 border-honey-300 bg-honey-50 bg-[linear-gradient(to_right,#101827ed_30%,#10182790),url('/img/bg-hero.jpg')] bg-cover bg-center bg-no-repeat p-10">
            <div className="space-y-2.5">
              <p className="text-2xl font-bold text-honey-100 lg:text-3xl 2xl:text-4xl">
                Build on Treasure
              </p>
              <p className="text-sm text-night-100 sm:text-base lg:text-lg">
                Apply to join Treasure's Builders Program to supercharge your
                project.
              </p>
            </div>
            <div className="mt-8">
              <CTAButton
                as="a"
                href="https://treasure.deform.cc/ecosystem-application"
              >
                Start building
              </CTAButton>
            </div>
          </div>
          <NewCard
            title="Get MAGIC"
            description="Our token MAGIC is your way to discover and access the Treasure ecosystem."
            image={GetMagicImg}
          >
            <CTAButton as="button" onClick={openModal} type="primary">
              Get MAGIC
            </CTAButton>
          </NewCard>
          <NewCard
            title="Join the community"
            description="Become a member of Treasure's vibrant community!"
            image={JoinCommunityImg}
          >
            <div className="flex space-x-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  className="text-night-800 hover:text-night-900"
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
          </NewCard>
        </div>
      </div>
    </section>
  );
};
