import * as React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { AppContextProvider } from "~/context/App";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContextProvider>
      <Header />
      {children}
      <Footer />
    </AppContextProvider>
  );
};
