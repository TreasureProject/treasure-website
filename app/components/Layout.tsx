import type * as React from "react";

import NewNavigation from "./NewNavigation";
import Footer from "./new-landing/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NewNavigation />
      {children}
      <Footer />
    </>
  );
};
