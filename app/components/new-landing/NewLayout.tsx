import type * as React from "react";
import NewNavigation from "../NewNavigation";
import Footer from "./Footer";

const DEV = false;

export const NewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative max-w-[100vw] overflow-x-hidden bg-new-night-1300 text-new-night-100">
      {DEV && (
        <div className="fixed top-10 left-10 z-[999] bg-white p-4 font-black text-black">
          <p className="hidden 2xl:block">2XL</p>
          <p className="hidden xl:block 2xl:hidden">XL</p>
          <p className="hidden lg:block xl:hidden">LG</p>
          <p className="hidden md:block lg:hidden">MD</p>
          <p className="hidden sm:block md:hidden">SM</p>
          <p className="block sm:hidden">Mobile</p>
        </div>
      )}
      <NewNavigation />
      {children}
      <Footer />
    </main>
  );
};
