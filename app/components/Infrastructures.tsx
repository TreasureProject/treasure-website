import { infrastructures } from "~/const";
import { CTAButton } from "./Button";

export const Infrastructures = () => (
  <div className="grid gap-8 xl:grid-cols-3">
    {infrastructures.map((infrastructure) => (
      <div
        key={infrastructure.name}
        className="flex flex-col justify-between rounded-2xl border-2 border-[#1D232E] bg-[#131D2E] p-12"
      >
        <div>
          {infrastructure.icon}
          <div className="my-6 flex flex-col space-y-2">
            <p className="text-base font-bold text-honey-200 sm:text-2xl">
              {infrastructure.name}
            </p>
            <p className="text-sm text-night-500 sm:text-base">
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
