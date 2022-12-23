import { infrastructures } from "~/const";
import { CTAButton } from "./Button";

export const Infrastructures = () => (
  <div className="grid gap-8 xl:grid-cols-2">
    {infrastructures.map((infrastructure) => (
      <div
        key={infrastructure.name}
        className="flex flex-col justify-between rounded-2xl bg-honey-700 p-12"
      >
        <div>
          {infrastructure.icon}
          <div className="my-6 flex flex-col space-y-2">
            <p className="text-base font-bold text-night-800 sm:text-2xl">
              {infrastructure.name}
            </p>
            <p className="text-sm text-night-700 sm:text-base">
              {infrastructure.description}
            </p>
          </div>
        </div>
        <div>
          <CTAButton as="a" href={infrastructure.href}>
            {infrastructure.buttonDescription}
          </CTAButton>
        </div>
      </div>
    ))}
  </div>
);
