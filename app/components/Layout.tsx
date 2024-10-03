import type * as React from "react";

import { Navigation } from "./Navigation";
import Footer from "./new-landing/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className="relative max-w-[100vw] overflow-x-hidden bg-night-900 text-cream">
    <Navigation />
    {children}
    <Footer />
  </main>
);
