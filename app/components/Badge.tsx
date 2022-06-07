export const Badge = ({ name }: { name: string }) => (
  <div className="inline-block w-max rounded-xl bg-honey-200 px-2.5 py-1.5">
    <h3 className="font-mono text-sm font-medium tracking-wider text-ruby-900">
      {name}
    </h3>
  </div>
);
