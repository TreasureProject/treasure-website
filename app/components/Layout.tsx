import * as React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { Dialog } from "@headlessui/react";
import { MagicIcon } from "./Icons";
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { magicPurchaseLinks } from "~/const";
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
