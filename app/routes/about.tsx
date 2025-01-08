import { redirect } from "@remix-run/node";

export const loader = async () => redirect("https://docs.treasure.lol", 302);
