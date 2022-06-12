import { infrastructures } from "~/const";
import { CTAButton } from "./Button";

export const Infrastructures = () => (
  <div className="grid gap-8 xl:grid-cols-3">
    {infrastructures.map((Infrastructure) => (
      <div
        key={Infrastructure.name}
        className="flex flex-col justify-between rounded-2xl bg-honey-700 p-12"
      >
        <div>
          {Infrastructure.icon}
          <div className="my-6 flex flex-col space-y-2">
            <p className="text-base font-semibold text-night-800 sm:text-2xl">
              {Infrastructure.name}
            </p>
            <p className="text-sm text-night-700 sm:text-base">
              {Infrastructure.description}
            </p>
          </div>
        </div>
        <div>
          <CTAButton href={Infrastructure.href}>
            {Infrastructure.buttonDescription}
          </CTAButton>
        </div>
      </div>
    ))}
  </div>
);
