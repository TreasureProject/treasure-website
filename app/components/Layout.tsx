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

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [openPurchaseMagicModal, setOpenPurchaseMagicModal] =
    React.useState(false);

  const openModal = () => setOpenPurchaseMagicModal(true);
  const closeModal = () => setOpenPurchaseMagicModal(false);

  return (
    <>
      <div className="border-2 border-t border-ruby-900" />
      <Header openModal={openModal} />
      {children}
      <Footer openModal={openModal} />

      {/* Magic Purchase Modal */}
      <Modal show={openPurchaseMagicModal} onClose={closeModal}>
        <div className="flex justify-between">
          <Dialog.Title
            as="h3"
            className="inline-flex items-center justify-center space-x-2 text-2xl font-bold text-honey-25"
          >
            <span className="font-bold">Buy</span>
            <MagicIcon />
          </Dialog.Title>
          <button
            type="button"
            className="rounded-md bg-night-800 p-2.5 text-honey-50 hover:bg-night-900/50 focus:outline-none focus:ring-2 focus:ring-night-800 focus:ring-offset-2"
            onClick={closeModal}
          >
            <span className="sr-only">Close</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-8 sm:gap-4">
          {magicPurchaseLinks.map((link) => (
            <div
              key={link.name}
              className="relative flex items-center justify-between rounded-1.5xl border-2 border-night-800 bg-white/[0.02] p-5 shadow-md hover:bg-white/[0.05]"
            >
              <p className="text-base font-bold text-white sm:text-xl">
                <a href={link.url} rel="noopener noreferrer" target="_blank">
                  <span className="absolute inset-0 h-full w-full"></span>
                  {link.name}
                </a>
              </p>
              <div>
                <img
                  className="w-8 sm:w-auto"
                  src={link.icon}
                  alt={link.name}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 mb-4 text-center text-sm sm:mt-16 sm:mb-6 sm:text-base">
          <p className="text-white">
            New to MAGIC?{" "}
            <a
              href="https://docs.treasure.lol/getting-started/what-is-magic"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center text-ruby-900 decoration-ruby-900 hover:underline"
            >
              <span>Learn more</span>
              <ArrowTopRightOnSquareIcon className="ml-1 h-3 w-3" />
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
};
