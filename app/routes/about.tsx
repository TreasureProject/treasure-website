import { Link } from "@remix-run/react";

export default function About() {
  return <div>about page is here</div>;
}

export const handle = {
  breadcrumb: () => <Link to="/about">About Treasure</Link>,
};
