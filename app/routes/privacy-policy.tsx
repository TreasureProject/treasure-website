import { Link, useLocation } from "@remix-run/react";
import { Badge } from "~/components/Badge";
import classNames from "clsx";
import { useHydrated } from "remix-utils";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { HashtagIcon } from "@heroicons/react/24/solid";

import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import type { HeadersFunction, MetaFunction } from "@remix-run/cloudflare";

export const headers: HeadersFunction = commonHeaders;

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is the decentralized gaming ecosystem bringing games and players together through MAGIC.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("Privacy Policy"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/brand-assets",
    }),
  };
};

export default function Resources() {
  const location = useLocation();
  const isHydrated = useHydrated();
  const currentHash = isHydrated ? location.hash.replace("#", "") : "";

  return (
    <main>
      <div className="relative bg-honey-50 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-ruby-900 sm:text-5xl">
            Privacy Policy
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-md px-4 sm:max-w-6xl sm:px-20">
          <div className="grid pb-12">
            <div className="col-span-6 space-y-5 text-sm text-night-700 sm:text-justify sm:text-base">
              <div>
                <p>
                  <span className="font-bold text-night-900">
                    Effective Date:
                  </span>{" "}
                  February 16, 2023
                </p>
              </div>

              <div>
                <p>
                  Treasure Project Ltd (
                  <span className="font-bold text-night-900">"Treasure"</span>,{" "}
                  <span className="font-bold text-night-900">"we"</span>,{" "}
                  <span className="font-bold text-night-900">"us"</span>, or{" "}
                  <span className="font-bold text-night-900">"our"</span>)
                  recognizes the importance of protecting the privacy of the
                  users of our service. It is our intent to balance our
                  legitimate business interests in collecting and using
                  information received from and about you with your reasonable
                  expectations of privacy. The following privacy policy (
                  <span className="font-bold text-night-900">
                    “Privacy Policy”
                  </span>
                  ) is the way we handle information learned about you from your
                  visits to our website available at{" "}
                  <a
                    href="https://treasure.lol"
                    className="text-ruby-900 underline"
                  >
                    treasure.lol
                  </a>
                  ,{" "}
                  <a
                    href="https://trove.treasure.lol"
                    className="text-ruby-900 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    trove.treasure.lol
                  </a>
                  , and any other website offered by us that links to this
                  privacy policy (collectively the{" "}
                  <span className="font-bold text-night-900">“Site”</span>).
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold text-night-900">
                    PLEASE REVIEW THIS PRIVACY POLICY CAREFULLY
                  </span>{" "}
                  When you submit information to or through the Site, you
                  consent to the collection and processing of your information
                  as described in this Privacy Policy. By using the Site, you
                  accept the terms of this Privacy Policy and our{" "}
                  <a
                    href="https://treasure.lol/terms-of-service"
                    className="text-ruby-900 underline"
                  >
                    Terms of Service
                  </a>
                  .
                </p>
              </div>

              <div>
                <p className="font-bold text-night-900">Personal Information</p>
                <p>
                  Treasure collects personal information from you when you
                  interact with the Site. This information is collected and
                  stored electronically by us. Certain information may be
                  provided to us voluntarily by you, collected automatically by
                  us from you, or received by us from a third party source.
                </p>
              </div>

              <div>
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  1. Information Voluntarily Provided By You
                </h3>
                <p className="mt-5">
                  We collect information about you when you use the certain
                  aspects of the Site, including information you provide when
                  you link a digital wallet, make a purchase, or contact our
                  support team. Such information includes:
                </p>
                <ul className="mt-5 list-disc pl-10">
                  <li>
                    <span className="font-bold text-night-900">
                      Contact Data
                    </span>
                    , in the form of your email address and other contact
                    information you provide.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Profile information
                    </span>
                    , including information you provide about yourself and
                    aesthetics you may set in your profile for other users of
                    the Site to see, including username, profile picture,
                    profile picture frame, banner image, name modifiers and
                    cosmetic effects.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Digital Wallet Information
                    </span>
                    , including your digital wallet address.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Transaction Event Data
                    </span>
                    , including but not limited to applicable public IDs related
                    to the transaction, transaction price information, and the
                    date and time of the transaction.{" "}
                  </li>
                  <li>
                    <span className="font-bold text-night-900">Content</span>,
                    including any content in messages you may send to us.
                  </li>
                </ul>
                <p className="mt-5">
                  You may choose to voluntarily provide other information to us
                  that we do not request, and, in such instances, we have no
                  control over what categories of personal information such
                  disclosure may include. Any additional information provided by
                  you to us is provided at your own risk.
                </p>
              </div>

              <div>
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  2. Information Collected Automatically
                </h3>
                <p className="mt-5">
                  Treasure also collects certain personal information about you
                  automatically when you use the Site. This information includes
                  information about your computer hardware, software, and
                  network when you access or use the Site. This information may
                  include: your IP address, browser type, domain names, access
                  times, geographic location, referring website addresses and
                  other technical information such as protocol status and
                  substatus, bytes sent and received, and server information. We
                  may also collect information about how you interact with the
                  Site. This information is used by us for our business
                  purposes, for the operation and improvement of the Site, for
                  technical troubleshooting, to maintain quality of the Site and
                  to provide general statistics regarding use of the Site.
                </p>
              </div>

              <div>
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  3. Information Received From a Third Party Source
                </h3>
                <p className="mt-5">
                  The Site incorporates blockchain technology, and as such,
                  certain transactions that you engage in on the blockchain will
                  be publicly available. We may collect certain information from
                  such public sources.
                </p>

                <p className="mt-5 font-bold text-night-900">
                  Cookies and Other Information Collection Tools
                </p>
                <p>
                  We currently do not collect any cookies or otherwise use any
                  tracking technologies on our Site, however, third-party sites
                  that may be linked through our Site may use cookies or other
                  tracking technologies. If we decide to use cookies or other
                  tracking technologies other than necessary or essential
                  cookies, we will inform you by updating this Privacy Policy.
                </p>

                <p className="mt-5 font-bold text-night-900">
                  How Information is Used
                </p>
                <p>
                  We may use the information we collect for any of the following
                  purposes:
                </p>
                <ul className="mt-2 list-disc pl-10">
                  <li>
                    to provide the Site (including the marketplace for NFTs) to
                    you and to improve the Site and user experience;
                  </li>
                  <li>to provide you with items you purchased;</li>
                  <li>
                    to provide you with notifications, including of bids or
                    purchases related to NFTs on the Site;
                  </li>
                  <li>
                    to allow for the reservation, minting, and transacting of
                    NFTs;
                  </li>
                  <li>to provide you with any applicable air drops;</li>
                  <li>
                    for customer service, security, to detect fraud or illegal
                    activities, and for archival and backup purposes in
                    connection with the provision of the Site;
                  </li>
                  <li>
                    to fulfill any obligations related to Treasure’s smart
                    contract or the Terms of Use; and
                  </li>
                  <li>to communicate with you.</li>
                </ul>

                <p className="mt-5 font-bold text-night-900">
                  Sharing of Information
                </p>
                <ul className="mt-2 list-disc pl-10">
                  <li>
                    <span className="font-bold text-night-900">
                      With Third Party Service Providers Performing Services on
                      Our Behalf.
                    </span>{" "}
                    We share your personal information with our service
                    providers to perform the functions for which we engage them.
                    For example, we may use third parties to host the Site or
                    assist us in providing functionality of the Site, provide
                    data analysis and research on the use of the Site
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      For Legal Purposes.
                    </span>{" "}
                    We also may share information that we collect from users as
                    needed to enforce our rights, protect our property or
                    protect the rights, property or safety of others, or as
                    needed to support external auditing, compliance and
                    corporate governance functions. We will disclose personal
                    information as we deem necessary to respond to a subpoena,
                    regulation, binding order of a data protection agency, legal
                    process, governmental request or any other legal or
                    regulatory process. We may also share personal information
                    as required to pursue available remedies or limit damages we
                    may sustain.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Blockchain Platform.
                    </span>{" "}
                    When you engage in a transaction that is recorded on the
                    blockchain, certain information that may be considered
                    personal information related to that transaction will be
                    published on the blockchain and may be accessible to third
                    parties not controlled by Treasure. Transactions recorded on
                    the blockchain permanently recorded across a wide networks
                    of computer systems and is generally incapable of deletion.
                    Many blockchains are open to forensic analysis which can
                    lead to deanonymization and the unintentional revelation of
                    personal information, especially when blockchain data is
                    combined with other data.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Changes of Control.
                    </span>{" "}
                    We share information in connection with, or during
                    negotiations of, any proposed or actual merger, purchase,
                    sale or any other type of acquisition, business combination
                    of all or any portion of our business or assets, change of
                    control, or a transfer of all or a portion of our business
                    or assets to another third party (including in the case of
                    any bankruptcy proceeding).
                  </li>
                </ul>
                <p className="mt-5">
                  Treasure does not share your personal information with third
                  parties for those third parties’ direct marketing purposes.
                </p>

                <p className="mt-5 font-bold text-night-900">
                  Security Used & Retention of Personal Information
                </p>
                <p>
                  Treasure uses reasonable security measures designed to prevent
                  unauthorized intrusion to the Site and the alteration,
                  acquisition or misuse of personal information that Treasure
                  directly controls, however, we will not be responsible for
                  loss, corruption or unauthorized acquisition or misuse of
                  personal information that you provide through the Site that is
                  stored by us, or for any damages resulting from such loss,
                  corruption or unauthorized acquisition or misuse. It is your
                  responsibility to protect the security of your Digital Wallet
                  Information. We will retain your personal information for as
                  long as necessary to fulfill the purpose for which it was
                  collected, or as required by applicable laws or regulation.
                </p>

                <p className="mt-5 font-bold text-night-900">
                  Links to External Websites
                </p>
                <p>
                  Our Site may contain links to third party websites. Any access
                  to and use of such third party websites is not governed by
                  this Privacy Policy, but is instead governed by the privacy
                  policies of those third party websites, and we are not
                  responsible for the information practices of such third party
                  websites.
                </p>

                <p className="mt-5 font-bold text-night-900">Do Not Track</p>
                <p>
                  Our Site does not currently take any action when it receives a
                  Do Not Track request. Do Not Track is a privacy preference
                  that you can set in your web browser to indicate that you do
                  not want certain information about your webpage visits
                  collected across websites when you have not interacted with
                  that service on the page. For details, including how to turn
                  on Do Not Track, visit{" "}
                  <a
                    href="https://www.eff.org/issues/do-not-track"
                    className="text-ruby-900 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.donottrack.us
                  </a>
                  .
                </p>

                <p className="mt-5 font-bold text-night-900">Children</p>
                <p>
                  We do not knowingly collect or maintain personal information
                  from any person under the age of thirteen. No parts of our
                  Site is directed to or designed to attract anyone under the
                  age of thirteen.
                </p>

                <p className="mt-5 font-bold text-night-900">
                  Questions / Contact Us
                </p>
                <p>
                  If you have any questions regarding this Privacy Policy,
                  please contact us at{" "}
                  <a
                    href="mailto:privacy@treasure.lol"
                    className="text-ruby-900 underline"
                  >
                    privacy@treasure.lol
                  </a>
                  .
                </p>

                <p className="mt-5 font-bold text-night-900">
                  Notification of Changes
                </p>
                <p>
                  Any changes to our Privacy Policy will be posted to this page
                  so users are always aware of the information we collect and
                  how we use it. Accordingly, please refer back to this Privacy
                  Policy frequently as it may change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/brand-assets",
    title: "Brand Assets",
  },
};
