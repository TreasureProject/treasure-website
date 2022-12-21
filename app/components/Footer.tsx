import {
  ArrowTopRightOnSquareIcon,
  ArrowUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import { socials, navigation, magicPurchaseLinks } from "~/const";
import { Badge } from "./Badge";
import { MagicIcon } from "./Icons";
import LogoImg from "../../public/img/logo.png";
import { useTranslation } from "react-i18next";
import React from "react";
import { Modal } from "./Modal";
import { Dialog } from "@headlessui/react";

export const Footer = () => {
  const { t } = useTranslation("index", {
    keyPrefix: "common",
  });
  const [openPurchaseMagicModal, setOpenPurchaseMagicModal] =
    React.useState(false);

  const openModal = () => setOpenPurchaseMagicModal(true);
  const closeModal = () => setOpenPurchaseMagicModal(false);

  return (
    <>
      <footer className="bg-honey-25" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-9xl px-4 pt-12 sm:px-6 lg:px-12 lg:pt-16">
          <div className="xl:grid xl:grid-cols-[1fr,1fr,1fr,1fr,1fr,max-content] xl:gap-8">
            <div className="flex flex-col items-center justify-center sm:block xl:col-span-1">
              <Link to="/">
                <span className="sr-only">Treasure</span>
                <img className="h-10" src={LogoImg} alt="Treasure" />
              </Link>
              <div className="mt-3.5 w-2/3 sm:w-1/3 xl:w-full">
                <p className="text-center text-xs text-night-700 sm:text-left">
                  Treasure is the decentralized gaming ecosystem bringing games
                  and players together through MAGIC.
                </p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:col-span-4 xl:mt-0">
              {navigation.map((item) => {
                const { name, links, href, isExternal, displayName } = item;
                if (links) {
                  return (
                    <div
                      key={name}
                      className="space-y-6 text-center sm:text-left"
                    >
                      <h3 className="font-bold text-ruby-900">{t(name)}</h3>
                      <ul className="space-y-4">
                        {links.map(({ name, isExternal, href }) => (
                          <li
                            key={name}
                            className="flex items-center justify-center space-x-1 sm:justify-start"
                          >
                            {isExternal ? (
                              <a
                                href={href}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-night-800 hover:text-night-700"
                              >
                                {t(name)}
                              </a>
                            ) : (
                              <Link
                                to={href}
                                className="text-night-800 hover:text-night-700"
                              >
                                {t(name)}
                              </Link>
                            )}
                            {isExternal ? (
                              <ArrowTopRightOnSquareIcon className="h-3 w-3 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]" />
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                return (
                  <div
                    key={name}
                    className="space-y-6 text-center sm:text-left"
                  >
                    <h3 className="font-bold text-ruby-900">{t(name)}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center justify-center space-x-1 sm:justify-start">
                        {isExternal ? (
                          <a
                            href={href}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-night-800 hover:text-night-700"
                          >
                            {t(displayName)}
                          </a>
                        ) : (
                          <Link
                            to={href}
                            className="text-night-800 hover:text-night-700"
                          >
                            {t(displayName)}
                          </Link>
                        )}
                        {isExternal ? (
                          <ArrowTopRightOnSquareIcon className="h-3 w-3 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]" />
                        ) : null}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col items-end space-y-3.5 text-right sm:mt-12 sm:flex-row sm:space-y-0 sm:space-x-3.5 xl:col-span-1 xl:mt-0 xl:flex-col xl:space-y-3.5 xl:space-x-0">
              <Link
                to="/build"
                className="inline-flex w-full items-center justify-center space-x-2 whitespace-nowrap rounded-lg border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-bold text-white hover:bg-ruby-1000 sm:w-auto"
              >
                Build with Treasure
              </Link>
              <button
                onClick={openModal}
                className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-ruby-900 bg-honey-50 py-3.25 px-6.5 text-base font-medium text-ruby-900 hover:bg-honey-200 sm:w-auto"
              >
                <span className="font-semibold">Buy</span>
                <MagicIcon className="fill-ruby-900" />
              </button>
            </div>
          </div>
          <div className="mt-12 flex flex-col-reverse items-center justify-between border-t border-honey-300 py-8 sm:flex-row">
            <p className="mt-12 text-sm text-night-700 sm:mt-0">
              &copy; 2021-2022 TreasureDAO
            </p>
            <div className="flex space-x-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  className="text-night-800 hover:text-night-900"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
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
