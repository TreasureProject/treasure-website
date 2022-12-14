import { communities } from "~/const";

import { Card } from "./Card";

export const Communities = () => (
  <div className="grid gap-8 text-left sm:grid-cols-2">
    {communities.map((community) => (
      <Card card={community} key={community.name} />
    ))}
  </div>
);
