import { infrastructures } from "~/const";
import { CTAButton } from "./Button";

export const Infrastructures = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    {infrastructures.map((Infrastructure) => (
      <div key={Infrastructure.name} className="rounded-2xl bg-honey-700 p-12">
        {Infrastructure.icon}
        <div className="my-6 flex flex-col space-y-2">
          <p className="text-2xl font-semibold text-night-800">
            {Infrastructure.name}
          </p>
          <p className="text-night-700">{Infrastructure.description}</p>
        </div>
        <div>
          <CTAButton>{Infrastructure.buttonDescription}</CTAButton>
        </div>
      </div>
    ))}
  </div>
);
