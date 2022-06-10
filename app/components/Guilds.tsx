import { communities } from "~/const";

import { Card } from "./Card";

export const Guilds = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    {communities.map((community) => (
      <Card card={community} key={community.name} />
    ))}
  </div>
);
