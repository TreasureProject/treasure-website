import { builds } from "~/const";

import { Card } from "./Card";

export const Build = () => (
  <div className="grid gap-8 text-left sm:grid-cols-2">
    {builds.map((build) => (
      <Card card={build} key={build.name} />
    ))}
  </div>
);
