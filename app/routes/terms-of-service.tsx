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
      title: generateTitle("Terms of Service"),
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
            Terms of Service
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-md px-4 sm:max-w-6xl sm:px-20">
          <div className="grid pb-12">
            <div className="col-span-6 space-y-5 text-sm text-night-700 sm:text-justify sm:text-base">
              <div>
                <p>
                  <span className="font-bold text-night-900">
                    Last Revised:
                  </span>{" "}
                  February 16, 2023
                </p>
              </div>

              <div>
                <p>
                  Treasure Project Ltd (
                  <span className="font-bold text-night-900">"Treasure"</span>,{" "}
                  <span className="font-bold text-night-900">"we"</span>,{" "}
                  <span className="font-bold text-night-900">"our"</span>, or{" "}
                  <span className="font-bold text-night-900">"us"</span>) offers
                  a web3 gaming platform and open ecosystem that lets
                  characters, assets, game loops, and more flow freely between
                  developed worlds in our ecosystem, as well as the related
                  marketplace for applicable NFTs and other digital assets.
                  Please read these Website and Marketplace Terms of Service
                  (herein the{" "}
                  <span className="font-bold text-night-900">"Terms"</span>)
                  very carefully.
                </p>
              </div>

              <div>
                <p>
                  These Terms are between you (
                  <span className="font-bold text-night-900">"you"</span> and{" "}
                  <span className="font-bold text-night-900">"your"</span>) and
                  Treasure. These Terms governs your use of the website located
                  at{" "}
                  <a href="treasure.lol" className="text-ruby-900 underline">
                    treasure.lol
                  </a>
                  ,{" "}
                  <a
                    href="trove.treasure.lol"
                    className="text-ruby-900 underline"
                    target="_blank"
                  >
                    trove.treasure.lol
                  </a>
                  , and any other site owned or operated by Treasure that links
                  to these Terms (collectively the “Site”), and all related
                  tools, mobile applications, web applications, decentralized
                  applications, smart contracts, and APIs offered by Treasure
                  (collectively, including the Site, the{" "}
                  <span className="font-bold text-night-900">"Platform"</span>).
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  1. YOUR ACCEPTANCE OF THESE TERMS; ARBITRATION DISCLAIMER
                </h3>
                <p>
                  BY CLICKING THE “I ACCEPT” BUTTON OR ANY SIMILAR ATTESTATION
                  WHEN SUCH OPTION IS MADE AVAILABLE TO YOU, BY LINKING YOUR
                  DIGITAL WALLET, OR BY OTHERWISE USING THE PLATFORM, YOU ACCEPT
                  AND AGREE TO BE BOUND BY THESE TERMS EFFECTIVE AS OF THE DATE
                  OF SUCH ACTION. YOU EXPRESSLY ACKNOWLEDGE AND REPRESENT THAT
                  YOU HAVE CAREFULLY REVIEWED THESE TERMS AND FULLY UNDERSTAND
                  THE RISKS, COSTS AND BENEFITS RELATED TO TRANSACTIONS MADE
                  USING THE PLATFORM. IF YOU DO NOT AGREE WITH THESE TERMS, THEN
                  YOU ARE EXPRESSLY PROHIBITED FROM USING THE PLATFORM.
                </p>
                <p>
                  The Platform is intended for users who are at least 18 years
                  old. Persons under the age of 18 are not permitted to use or
                  register for the Platform.
                </p>
                <p>
                  <span className="font-bold text-night-900 underline">
                    PLEASE READ THE SECTION ENTITLED “DISPUTE RESOLUTION”
                    CAREFULLY!
                  </span>{" "}
                  THESE TERMS CONTAIN AN ARBITRATION AGREEMENT IN SECTION 10
                  ENTITLED “DISPUTE RESOLUTION - ARBITRATION” WHICH LIMITS OR
                  MAY OTHERWISE AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT
                  TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIM
                  AGAINST TREASURE. IF YOU DO NOT WISH TO WAIVE RIGHTS AND
                  SUBMIT TO ARBITRATION, YOU MUST CONTACT US WITHIN THIRTY (30)
                  DAYS OF FIRST USING THE PLATFORM AND INFORM US THAT YOU
                  OPT-OUT OF SUCH CLASS ACTION WAIVER AND/OR ARBITRATION RIGHT.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  2. CHANGES TO TERMS
                </h3>
                <p>
                  We reserve the right, in our sole discretion, to make changes
                  or modifications to these Terms at any time and for any
                  reason. All changes are effective immediately when we post
                  them. It is your responsibility to regularly check these Terms
                  to stay informed of updates, as they are binding. We will
                  indicate that these Terms have been updated by updating the
                  “Last Revised” date at the top of these Terms. Your continued
                  use of the Site following the posting of revised Terms means
                  that you accept and agree to the changes.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  3. TREASURE PLATFORM
                </h3>
                <h4 className="group mb-2 text-lg font-bold text-night-900 sm:text-xl">
                  3.1 Platform Ecosystem
                </h4>
                <p>
                  The Platform at its core is an ecosystem for game development,
                  content creation and interactive game play using blockchain
                  technology and Digital Assets (as defined below). Games
                  offered on the Platform and software built by third-party
                  developers on the Platform, may be subject to additional
                  terms. Please review all applicable terms with respect to any
                  game or Digital Asset (as defined below) which will apply in
                  addition to these Terms. For more information about the
                  Platform and the gaming ecosystem and games offered by
                  Treasure, please see the published materials on the Site (
                  <span className="font-bold text-night-900">
                    “Documentation”
                  </span>
                  ).
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  3.2 Marketplace and Digital Assets
                </h4>
                <p>
                  The Platform includes a marketplace for users of the Platform
                  to sell or buy non-fungible token (
                  <span className="font-bold text-night-900">"NFT"</span>) used
                  in the Platform and applicable Games, and provides information
                  about the applicable fungible token used by the Platform,
                  including the main token $MAGIC (collectively{" "}
                  <span className="font-bold text-night-900">“Tokens”</span>).
                  NFTs and Tokens are collectively referred to in these Terms as{" "}
                  <span className="font-bold text-night-900">
                    "Digital Assets"
                  </span>
                  . More information about the $MAGIC Tokens can be found at{" "}
                  <a
                    href="https://docs.treasure.lol/getting-started/what-is-magic"
                    className="text-ruby-900 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://docs.treasure.lol/getting-started/what-is-magic
                  </a>{" "}
                  and information about the Platform generally, including the
                  marketplace and NFTs, can be found at our Site. Transactions
                  related to Digital Assets on the Platform are managed and
                  confirmed via an applicable blockchain as provided in the
                  Documentation. Your public digital address will be made
                  publicly visible whenever you engage in any transaction on the
                  Platform. We shall not be liable for the acts or omissions of
                  any such blockchain or associated third parties, nor shall we
                  be liable for any damage that you may suffer as a result of
                  your transactions or any other interaction with any such
                  blockchain or associated third parties.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  3.3 Access and Use of the Platform
                </h4>
                <p>
                  You are hereby granted limited, revocable, non-exclusive,
                  nontransferable, non-assignable, non-sublicensable access to
                  and use of the Platform solely in accordance with the
                  Documentation and these Terms. You shall not (a) except as
                  expressly permitted under these Terms with respect to your
                  owned NFTs, distribute, publicly perform, or publicly display
                  any Treasure Materials (as defined below), (b) modify or
                  otherwise make any derivative uses of the Platform, or any
                  portion thereof, (c) download (other than page caching) any
                  portion of the Platform or Treasure Materials, except as
                  expressly permitted by us, or (d) use the Platform or Treasure
                  Materials other than for their intended purposes.
                </p>
                <p>
                  Treasure shall have sole and complete control over, and
                  reserves the right at any time to make any changes to, the
                  configuration, appearance, content functionality, and scope of
                  the Platform, including any Treasure Materials.
                  Notwithstanding anything contained in these Terms, we reserve
                  the right, without notice and in our sole discretion, to
                  impose limitations on, suspend, and/or terminate your right to
                  access or use the Platform, in whole or in part, at any time
                  and for any or no reason, and you acknowledge and agree that
                  we shall have no liability or obligation to you in such event
                  and that you shall not be entitled to a refund of any amounts
                  that you have already paid to us, to the fullest extent
                  permitted by applicable law.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  3.4 User Generated Content
                </h4>
                <p>
                  The Platform enables users to create user generated content (
                  <span className="font-bold text-night-900">
                    “User Generated Content”
                  </span>
                  ). You agree that you have and will maintain, for yourself and
                  on behalf of your licensors, all necessary rights, consents,
                  and permissions to provide User Generated Content to the
                  Platform and that the User Generated Content does not and will
                  not infringe upon or violate intellectual property rights,
                  publicity rights, privacy rights or any other rights of anyone
                  else, including Treasure.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  3.5 Digital Wallet
                </h4>
                <p>
                  Transactions on the Platform, including purchasing or selling
                  an NFT, requires you to link an accepted digital wallet (
                  <span className="font-bold text-night-900">
                    “Digital Wallet"
                  </span>
                  ) to the Platform for so long as you use the Platform. We
                  neither own nor control your Digital Wallets, any associated
                  blockchain, or any other Third-Party Services (as defined
                  below). You have the sole responsibility to (a) establish, and
                  maintain, in fully operational, secure and valid status,
                  access to your Digital Wallet, and (b) maintain, in your fully
                  secure possession, the credentials for accessing your Digital
                  Wallet and the private key for your Digital Wallet. In the
                  event of any loss, hack or theft of any Digital Asset from
                  your Digital Wallet, including any cryptocurrency, any NFT or
                  other non-fungible token, you acknowledge and agree that you
                  shall have no right(s), claim(s) or causes of action in any
                  way whatsoever against Treasure for such loss, hack or theft,
                  including with respect to any such Digital Asset.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  3.6 Prohibitions
                </h4>
                <p>You agree not to use the Platform to:</p>
                <ol className="mt-2 list-[lower-alpha] pl-10">
                  <li>
                    Violate any law, regulation, or governmental policy in the
                    US or internationally;
                  </li>
                  <li>
                    Infringe upon or violate intellectual property rights or any
                    other rights of anyone else (including Treasure);
                  </li>
                  <li>
                    Jeopardize the security of your Digital Wallet or anyone
                    else’s Digital Wallet;
                  </li>
                  <li>
                    Impersonate or attempt to impersonate another individual,
                    entity, Treasure employee, agent, or another user of the
                    Platform;
                  </li>
                  <li>
                    Infringe, in any way, on the rights of others or engage in
                    or promote any behavior or activity that is harmful,
                    offensive, fraudulent, deceptive, threatening, harassing,
                    dangerous, defamatory, obscene, profane, discriminatory or
                    otherwise illegal or objectionable;
                  </li>
                  <li>
                    Copy or store any Platform source code or a significant
                    portion of Treasure Materials;
                  </li>
                  <li>
                    Decompile, reverse engineer, or otherwise attempt to obtain
                    source code or underlying ideas or information of or
                    relating to the Platform we provide;
                  </li>
                  <li>
                    Attempt to gain unauthorized access to, interfere with,
                    damage, or disrupt any parts of the Platform, the server on
                    which any part of the Platform requires, or any other
                    computer or database connected to the Platform;
                  </li>
                  <li>
                    Circumvent, remove, alter, deactivate, degrade, or thwart
                    any technological measure or content protections of the
                    Platform;
                  </li>
                  <li>
                    Attack the Platform via a denial-of-service attack or
                    distributed denial-of-service attack;
                  </li>
                  <li>
                    Use the Platform to engage in price manipulation, fraud, or
                    other deceptive, misleading, or manipulative activity;
                  </li>
                  <li>
                    Use the platform to buy, sell, or transfer stolen items,
                    fraudulently obtained items, items taken without
                    authorization, and/or any other illegally obtained items;{" "}
                  </li>
                  <li>
                    Use any device, software, bot, or routine that interferes
                    with the proper working of the Platform;
                  </li>
                  <li>
                    Use any manual or automated process to monitor or copy any
                    of the material on the Platform or for any other
                    unauthorized purpose, including, without limitation, using
                    any automated or non-automated systems to scape, copy, or
                    distribute content without our prior written consent;
                  </li>
                  <li>Damage, overburden, disable, or impair the Platform;</li>
                  <li>
                    Introduce any viruses, trojan horses, worms, logic bombs, or
                    other material that is malicious or technologically harmful;
                  </li>
                  <li>
                    Engage in any other conduct that restricts or inhibits
                    anyone’s use or enjoyment of the Platform, or which, as
                    determined by us, may harm or offend Treasure or its users,
                    or otherwise expose them to any liability;{" "}
                  </li>
                  <li>
                    Upload or otherwise submit any User Generated Content or
                    material that is deliberately designed to provoke or
                    antagonize people, especially trolling and bullying, or is
                    intended to harass, harm, hurt, scare, distress, embarrass
                    or upset people; or
                  </li>
                  <li>
                    Otherwise attempt to interfere with the proper working of
                    the Platform.
                  </li>
                </ol>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  3.7 Third-Party Services Acknowledgement
                </h4>
                <p>
                  You acknowledge that the Platform and its functionality
                  includes both services offered by third parties (
                  <span className="font-bold text-night-900">
                    “Third-Party Services”
                  </span>
                  ) as well as Treasure’s proprietary technology. Certain
                  functionality of the Platform may incorporate, use or
                  otherwise depend on Third-Party Services. If any event were to
                  disrupt any functionality dependent on a Third-Party Service,
                  the Platform may similarly experience a disruption, and we
                  shall not be responsible or liable for any such disruption.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  4. DIGITAL ASSET PURCHASES
                </h3>
                <h4 className="group mb-2 text-lg font-bold text-night-900 sm:text-xl">
                  4.1 NFT Terms of Sale
                </h4>
                <p>
                  Users of the Platform may list their applicable NFTs for sale
                  using the marketplace on the Platform (the{" "}
                  <span className="font-bold text-night-900">
                    “NFT Marketplace”
                  </span>
                  ). All transactions for NFTs are between users as the
                  respective buyer and seller of the applicable NFT, and subject
                  to the NFT Terms (as defined below) that are related to such
                  NFT. “NFT Terms” shall mean the applicable terms related to a
                  sale of an NFT, including the list price of the NFT for sale
                  as determined by the user selling the NFT, the applicable
                  creator fee set by the creator, and a Platform fee, each as
                  further described in our Documentation at{" "}
                  <a
                    href="https://docs.trove.treasure.lol/about-trove/faq#how-are-royalties-structured-on-trove"
                    className="text-ruby-900 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://docs.trove.treasure.lol/about-trove/faq#how-are-royalties-structured-on-trove
                  </a>
                  .
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  4.2 Taxes
                </h4>
                <p>
                  You are responsible for paying any and all sales, use,
                  value-added, and other taxes, duties, and assessments now or
                  hereafter claimed or imposed by any governmental authority
                  that are associated with your use of the Platform, including,
                  without limitation any taxes that may become payable as the
                  result of your ownership, transfer, purchase, or sale, of any
                  NFTs.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  4.3 Fees
                </h4>
                <p>
                  All transactions on the Platform, including, without
                  limitation, purchasing NFTs, are facilitated by smart
                  contracts existing on an applicable blockchain network. Any
                  transaction made on the Platform is subject to our then
                  current Platform fees as provided in our Documentation. In
                  addition, certain blockchain networks require the payment of a
                  transaction fees (also referred to as “gas fees”) for every
                  transaction that occurs on such blockchain network. You are
                  responsible for the payment of gas fees. The value of the gas
                  fees may change, often unpredictably, and is entirely outside
                  of the control of Treasure. You acknowledge that under no
                  circumstances will a contract, agreement, sale, or other
                  transaction on the Platform be invalidated, revocable,
                  retractable, or otherwise unenforceable on the basis that the
                  transaction fee for the given transaction was unknown, too
                  high, or otherwise unacceptable to you. You also acknowledge
                  and agree that gas fees are non-refundable under all
                  circumstances.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  4.4 Treasure Makes No Representations on Price or Value of
                  NFTs
                </h4>
                <p>
                  You acknowledge and consent to the risk that the price of any
                  NFT purchased on the Platform and the value of any $MAGIC in
                  relation to other cryptocurrencies may be influenced by
                  activity outside of the control of Treasure. Treasure does not
                  represent, guarantee, or warrant the value, title, validity,
                  accuracy or fairness of the price of any Digital Asset
                  available through the Platform.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  5. Ownership of the Platform and User Generated Content
                </h3>
                <h4 className="group mb-2 text-lg font-bold text-night-900 sm:text-xl">
                  5.1 Ownership of the Platform
                </h4>
                <p>
                  You acknowledge and agree that we (or, as applicable, our
                  licensors) own all right, title, and interest in and to all
                  elements of the Platform, including, without limitation, all
                  graphics, design, systems, methods, information, computer
                  code, software, services, “look and feel”, organization,
                  compilation of the content, code, data, and all other elements
                  of the Platform, including any artwork that is created by
                  Treasure or its licensors and incorporated into any NFTs
                  (collectively, the{" "}
                  <span className="font-bold text-night-900">
                    “Treasure Materials”
                  </span>
                  ). The Platform and Treasure Materials are protected by
                  copyright, trade dress, trademark, patent laws, international
                  conventions, other relevant intellectual property and
                  proprietary rights, and applicable laws. Your use of the
                  Platform or any purchase of any NFT by you does not grant you
                  ownership of any other rights with respect to the Treasure
                  Materials or the Platform, whether expressly, by implication,
                  estoppel, reliance or otherwise, all of which are specifically
                  excluded and disclaimed.
                </p>

                <h4 className="group mb-2 text-lg font-bold text-night-900 sm:text-xl">
                  5.2 User Generated Content
                </h4>
                <p>
                  You or your licensors shall own all right, title and interest
                  in and to the User Generated Content you create. Any User
                  Generated Content will be considered non-confidential and
                  non-proprietary and you agree not to post any User Generated
                  Content to the Platform that you or others may consider to be
                  confidential or proprietary. By submitting User Generated
                  Content via the Platform, you hereby grant to Treasure an
                  unconditional, irrevocable, non-exclusive, royalty-free,
                  perpetual, fully transferable, assignable, and sublicensable
                  worldwide license to use, reproduce, display, distribute,
                  modify, and create derivative works of the User Generated
                  Content for any lawful purpose.
                </p>

                <h4 className="group mb-2 text-lg font-bold text-night-900 sm:text-xl">
                  5.3 FEEDBACK
                </h4>
                <p>
                  If you transmit any communication or material to us by mail,
                  email, telephone, or otherwise through the Platform,
                  suggesting or recommending changes to the Platform, including
                  without limitation, new features or functionality relating
                  thereto, or any comments, questions, suggestions, or the like
                  (<span className="font-bold text-night-900">"Feedback"</span>
                  ), we are free to use such Feedback irrespective of any other
                  obligation or limitation between you and us governing such
                  Feedback. All Feedback is and will be treated as
                  non-confidential. You hereby assign to us on your behalf, all
                  right, title, and interest in, and we are free to use, without
                  any attribution or compensation to you or any third party, any
                  ideas, know-how, concepts, techniques, or other intellectual
                  property rights contained in the Feedback, for any purpose
                  whatsoever, although we are not required to use any Feedback.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  6. PRIVACY POLICY
                </h3>
                <p>
                  Our privacy policy found at{" "}
                  <a
                    href="https://treasure.lol/privacy-policy"
                    className="text-ruby-900 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://treasure.lol/privacy-policy
                  </a>{" "}
                  (“Privacy Policy”) describes the ways we collect, use, store,
                  and share your personal information collected through the use
                  of the Platform, and is hereby incorporated by this reference
                  into these Terms. You agree to the collection, use, storage,
                  and disclosure of your data in accordance with our Privacy
                  Policy.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  7. Release of Disputes with Users
                </h3>
                <p>
                  IF YOU HAVE A DISPUTE WITH ONE OR MORE USERS RELATED TO A
                  TRANSACTION, YOU RELEASE US FROM CLAIMS, DEMANDS, AND DAMAGES
                  OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR
                  IN ANY WAY CONNECTED WITH SUCH DISPUTES. IN ENTERING INTO THIS
                  RELEASE YOU EXPRESSLY WAIVE ANY PROTECTIONS (WHETHER STATUTORY
                  OR OTHERWISE) THAT WOULD OTHERWISE LIMIT THE COVERAGE OF THIS
                  RELEASE TO INCLUDE THOSE CLAIMS WHICH YOU MAY KNOW OR SUSPECT
                  TO EXIST IN YOUR FAVOR AT THE TIME OF AGREEING TO THIS
                  RELEASE.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  8. Downtime Disclaimer
                </h3>
                <p>
                  Treasure uses commercially reasonable efforts to provide
                  access to the Platform in a reliable and secure manner. From
                  time to time, interruptions, errors, delays, or other
                  deficiencies in providing access to the Platform or a
                  Third-Party Service may occur due to a variety of factors,
                  some of which are outside of Treasure’s control, and some
                  which may require or result in scheduled maintenance or
                  unscheduled downtime of the Platform (collectively,{" "}
                  <span className="font-bold text-night-900">“Downtime”</span>).
                  Part or all of the Platform may be unavailable during any such
                  period of Downtime, which may include an inability to purchase
                  an NFT at the time you intended. Treasure shall not be liable
                  or responsible to you for any inconvenience, losses or any
                  other damages as a result of Downtime, including your
                  inability to make a purchase of an NFT that is no longer
                  available following the Downtime. You hereby waive any claim
                  against Treasure arising out of or in connection with
                  Downtime.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  9. DISCLAIMERS; NO REPRESENTATIONS; LIMITATIONS ON OUR
                  LIABILITY
                </h3>
                <h4 className="group mb-2 text-lg font-bold text-night-900 sm:text-xl">
                  9.1 DISCLAIMER OF WARRANTIES:
                </h4>
                <p>
                  YOUR ACCESS TO AND USE OF THE PLATFORM IS AT YOUR OWN RISK.
                  THE PLATFORM AND DIGITAL ASSETS ARE PROVIDED “AS IS” AND
                  WITHOUT ANY WARRANTY OF ANY KIND. TO THE EXTENT PERMITTED BY
                  APPLICABLE LAW, TREASURE, DISCLAIMS ALL WARRANTIES,
                  CONDITIONS, AND REPRESENTATIONS OF ANY KIND, WHETHER EXPRESS,
                  IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING THOSE RELATED TO
                  TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  NON-INFRINGEMENT, AND THOSE ARISING OUT OF COURSE OF DEALING
                  OR USAGE OF TRADE. TREASURE MAKES NO REPRESENTATION OR
                  WARRANTY: (A) THAT THE PLATFORM OR ANY CONTENT OR INFORMATION
                  DISPLAYED ON OR MADE AVAILABLE ON OR THROUGH THE PLATFORM,
                  INCLUDING ANY PLATFORM CONTENT, DIGITAL ASSETS (INCLUDING ANY
                  NFTS AND REFERENCED CONTENT), OR ANY OTHER CONTENT OR
                  INFORMATION DISPLAYED ON OR THROUGH THE PLATFORM: (i) WILL
                  MEET YOUR REQUIREMENTS; (ii) WILL BE AVAILABLE ON AN
                  UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; (iii) ARE
                  OR WILL BE FREE OF MALICIOUS CODE; OR (iv) WILL BE ACCURATE,
                  COMPLETE, RELIABLE, CURRENT, LEGAL, OR SAFE; (B) AS TO THE
                  VALUE OR TITLE OF ANY DIGITAL ASSETS OR ANY OTHER CONTENT OR
                  INFORMATION DISPLAYED ON OR THROUGH THE PLATFORM; OR (C) IN
                  RELATION TO THE CONTENT OF ANY THIRD-PARTY SERVICES LINKED TO
                  OR INTEGRATED WITH THE PLATFORM.
                </p>
                <p>
                  NFTS EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED
                  ON THE APPLICABLE BLOCKCHAIN. TREASURE CANNOT EFFECT OR
                  OTHERWISE CONTROL THE TRANSFER OF TITLE OR RIGHT IN ANY NFTS
                  OR ANY UNDERLYING OR ASSOCIATED CONTENT OR ITEMS. ANY SALE OR
                  TRANSFER OF AN NFT MADE ON THE PLATFORM WILL BE FINAL AND MAY
                  NOT BE REVERSABLE.
                </p>
                <p>
                  TREASURE IS NOT RESPONSIBLE OR LIABLE FOR ANY SUSTAINED LOSSES
                  OR INJURY CAUSED BY ANY EXPLOITATION, VULNERABILITY OR OTHER
                  FORM OF FAILURE OR MISFUNCTIONING OF SOFTWARE INCLUDING
                  APPLICABLE DIGITAL WALLETS AND SMART CONTRACTS), APPLICABLE
                  BLOCKCHAINS OR ANY FEATURES BUILT INTO AN APPLICABLE NFT,
                  INCLUDING ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING THE NFTS,
                  FORKS, TECHNICAL NODE ISSUES OR ANY OTHER ISSUES THAT MAY
                  RESULT IN LOSSES OR INJURY TO A USER.
                </p>
                <p>
                  IN ADDITION, WE SHALL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR
                  ANY LOSSES YOU INCUR AS THE RESULT OF (A) USER ERROR, SUCH AS
                  FORGOTTEN PASSWORDS OR INCORRECTLY CONSTRUED SMART CONTRACTS
                  OR OTHER TRANSACTIONS; (B) SERVER FAILURE OR DATA LOSS; (C)
                  CORRUPTED WALLET FILES; OR (D) UNAUTHORIZED ACCESS OR
                  ACTIVITIES BY THIRD PARTIES, INCLUDING, BUT NOT LIMITED TO THE
                  USE OF VIRUSES, PHISHING, BRUTE FORCING, OR OTHER MEANS OF
                  ATTACK AGAINST THE PLATFORM, APPLICABLE BLOCKCHAIN, OR A
                  DIGITAL WALLET.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  9.2 Limitation of Liability
                </h4>
                <p>
                  TREASURE, AND ITS PARENT AND ITS AFFILIATES, AND ITS AND THEIR
                  RESPECTIVE OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES,
                  CONTRACTORS, SERVICE PROVIDERS, LICENSORS, AND AGENTS (ALL OF
                  THE FOREGOING,{" "}
                  <span className="font-bold text-night-900">
                    “TREASURE PARTIES”
                  </span>
                  ) SHALL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR CONTRACT,
                  TORT, OR ANY OTHER TYPES OF DAMAGES, INCLUDING DIRECT,
                  INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR
                  EXEMPLARY DAMAGES, UNDER THESE TERMS OR ARISING OUT OF OR
                  RELATED TO THE PLATFORM OR ANY DIGITAL ASSET, INCLUDING,
                  WITHOUT LIMITATION: (I) PARTICIPATION IN OR THE OUTCOME OF A
                  TRANSACTION MADE USING THE PLATFORM, OR (II) ANY TRANSACTION
                  RELATED TO AN NFT OR $MAGIC (INCLUDING THOSE UTILIZING A
                  THIRD-PARTY SERVICE).
                </p>
                <p>
                  IF APPLICABLE LAW DOES NOT ALLOW ALL OR ANY PART OF THE ABOVE
                  DISCLAIMERS OR LIMITATION OF LIABILITY TO APPLY TO YOU, SUCH
                  DISCLAIMERS AND/OR LIMITATIONS WILL APPLY TO YOU ONLY TO THE
                  EXTENT PERMITTED BY APPLICABLE LAW.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  10. ASSUMPTION OF RISK
                </h3>
                <p>
                  You hereby acknowledge and assume the risk of using and making
                  purchases through the Platform and take full responsibility
                  and liability for the outcome of actions initiated. Without
                  limiting any risks that exist, you acknowledge the following
                  risks related to blockchain technology, cryptocurrencies and
                  non-fungible tokens:
                </p>
                <ul className="mt-5 list-disc pl-10">
                  <li>
                    <span className="font-bold text-night-900">
                      NFTs’ values are subjective.
                    </span>{" "}
                    The potential value of NFTs are subjective in nature and
                    subject to volatility and fluctuations in the price of
                    cryptocurrency.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Regulatory uncertainty.
                    </span>{" "}
                    The regulatory regime governing blockchain technologies,
                    non-fungible tokens, cryptocurrency, and other crypto-based
                    items is uncertain, and new regulations or policies may
                    materially adversely affect the development of the Platform
                    and the utility of NFTs.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Blockchain technology risk.
                    </span>{" "}
                    There are risks associated with using Internet and
                    blockchain based products, including, but not limited to,
                    the risk associated with hardware, software, and Internet
                    connections, the risk of malicious software introduction,
                    and the risk that third parties may obtain unauthorized
                    access to your Digital Wallet or account.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Digital asset risks.
                    </span>{" "}
                    There are risks associated with purchasing items associated
                    with content created by third parties through peer-to-peer
                    transactions, including, but not limited to, the risk that
                    items are vulnerable to metadata decay, bugs in smart
                    contracts, and items that may become untransferable. You
                    represent and warrant that you have done sufficient research
                    before making any decisions to sell, obtain, transfer, or
                    otherwise interact with any non-fungible tokens.
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      Third-Party Services.
                    </span>{" "}
                    We do not control Third-Party Services like the Ethereum
                    network or other public blockchains, Digital Wallets, or
                    other third party products that you may be interacting with,
                    and we do not control third-party smart contracts and
                    protocols that may be integral to your ability to complete
                    transactions on these public blockchains.{" "}
                  </li>
                  <li>
                    <span className="font-bold text-night-900">
                      IPFS Storage.
                    </span>{" "}
                    We do not store the digital file of the underlying digital
                    artwork associated with any NFT on any Treasure controlled
                    servers. The digital file of the underlying digital artwork
                    is typically linked through the Interplanetary File System (
                    <span className="font-bold text-night-900">“IPFS”</span>)
                    using an IPFS node operated by a Third-Party Service. We
                    have no control over IPFS or the IPFS node nor can we
                    guarantee that it will always be available.
                  </li>
                </ul>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  11. DISPUTE RESOLUTION - ARBITRATION
                </h3>
                <p>
                  Please read the following arbitration agreement in this
                  section (
                  <span className="font-bold text-night-900">
                    “Arbitration Agreement”
                  </span>
                  ) carefully as it requires you to arbitrate disputes with
                  Treasure and limits the manner in which you can seek relief
                  from us.
                </p>
                <p>
                  You agree that any dispute or claim relating in any way to
                  your access or use of the Platform, to any NFT sold or
                  distributed through the Platform, or to any aspect of your
                  relationship with Treasure, will be resolved by binding
                  arbitration, rather than in court, except that (1) you may
                  assert claims in small claims court if your claims qualify;
                  and (2) you or Treasure may seek equitable relief in court for
                  infringement or other misuse of intellectual property rights
                  (such as trademarks, trade dress, domain names, trade secrets,
                  copyrights, and patents).
                </p>
                <p>
                  The Federal Arbitration Act governs the interpretation and
                  enforcement of this Arbitration Agreement. To begin an
                  arbitration proceeding, you must send a letter requesting
                  arbitration with a description of your claim to our{" "}
                  <a
                    href="mailto:legal@treasure.lol"
                    className="text-ruby-900 underline"
                  >
                    legal@treasure.lol
                  </a>
                  . The arbitration shall be conducted by JAMS, an established
                  alternative dispute resolution provider. If JAMS is not
                  available to arbitrate, the Parties shall select an
                  alternative arbitral forum. Any judgment on the award rendered
                  by the arbitrator may be entered in any court of competent
                  jurisdiction.
                </p>
                <p>
                  The arbitrator shall have exclusive authority to (a) determine
                  the scope and enforceability of this Arbitration Agreement and
                  (b) resolve any dispute related to the interpretation,
                  applicability, enforceability, or formation of this
                  Arbitration Agreement including, but not limited to any claim
                  that all or any part of this Arbitration Agreement is void or
                  voidable. The arbitrator shall have the authority to grant
                  motions dispositive of all or part of any claim, to award
                  monetary damages, and to grant any non-monetary remedy or
                  relief available to an individual under applicable law, the
                  arbitral forum’s rules, and these Terms (including the
                  Arbitration Agreement). The arbitrator has the same authority
                  to award relief on an individual basis that a judge in a court
                  of law would have. The award of the arbitrator is final and
                  binding upon you and us.
                </p>
                <p>
                  YOU AND TREASURE HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY
                  RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR
                  A JURY, EXCEPT AS SPECIFIED IN NUMBER 1 ABOVE.
                </p>
                <p>
                  ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION
                  AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON
                  A COLLECTIVE CLASS BASIS. ONLY INDIVIDUAL RELIEF IS AVAILABLE.
                </p>
                <p>
                  You have the right to opt out of the provisions of this
                  Arbitration Agreement by sending written notice of your
                  decision to opt out within thirty (30) days after first
                  becoming subject to this Arbitration Agreement to{" "}
                  <a
                    href="mailto:legal@treasure.lol"
                    className="text-ruby-900 underline"
                  >
                    legal@treasure.lol
                  </a>
                  . If you opt out of this Arbitration Agreement, all other
                  parts of the Terms will continue to apply to you.
                </p>
                <p>
                  Except as provided in this section, if any part or parts of
                  this Arbitration Agreement are found under the law to be
                  invalid or unenforceable, then such specific part or parts
                  shall be of no force and effect and shall be severed and the
                  remainder of the Arbitration Agreement shall continue in full
                  force and effect.
                </p>
                <p>
                  This Arbitration Agreement shall survive the termination of
                  your relationship with Treasure.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  12. COMPLIANCE WITH LAW; DISQUALIFIED PERSONS
                </h3>
                <p>
                  You represent and warrant that you will comply with all
                  applicable laws (e.g., local, state, federal and other laws)
                  when using the Platform. If you access or use the Platform
                  outside the United States, you are solely responsible for
                  ensuring that your access and use of the Platform in such
                  country, territory or jurisdiction does not violate any
                  applicable laws.
                </p>
                <p>
                  You are not authorized to use the Platform if there are
                  applicable legal restrictions in your country of residence
                  that would make the use of the Platform illegal. It is your
                  sole responsibility to ensure that your use of the Platform is
                  not prohibited, restricted, curtailed, hindered, impaired or
                  otherwise adversely affected in any way by any applicable law
                  in your country of residence or domicile. In addition, you are
                  not authorized to use the Platform if you are:
                </p>
                <ol className="mt-5 list-decimal pl-10">
                  <li>
                    a citizen, domiciled in, resident of, or physically present
                    / located in Iran, North Korea, Cuba, Syria, China,
                    Afghanistan, Central African Republic (the), Congo (the
                    Democratic Republic of the), Libya, Mali, Somalia, Sudan,
                    and Yemen (each an{" "}
                    <span className="font-bold text-night-900">
                      “Excluded Jurisdiction”
                    </span>
                    );{" "}
                  </li>
                  <li>
                    a corporate body: (i) which is incorporated in, or operates
                    out of, an Excluded Jurisdiction, or (ii) which is under the
                    control of one or more individuals who is/are citizens of,
                    domiciled in, residents of, or physically present / located
                    in, an Excluded Jurisdiction;{" "}
                  </li>
                  <li>
                    an individual or body corporate: (i) included in the
                    consolidated list published by the United Nations Security
                    Council of individuals or entities subject to measures
                    imposed by the United Nations Security Council accessible at{" "}
                    <a
                      href="https://www.un.org/securitycouncil/content/un-sc-consolidated-list"
                      className="text-ruby-900 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.un.org/securitycouncil/content/un-sc-consolidated-list
                    </a>
                    ; or (ii) included in the United Nations Lists (UN Lists) or
                    within the ambit of regulations relating to or implementing
                    United Nations Security Council Resolutions listed by MAS
                    and accessible by{" "}
                    <a
                      href="https://www.mas.gov.sg/regulation/anti-money-laundering/targeted-financial-sanctions/lists-of-designated-individuals-and-entities"
                      className="text-ruby-900 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.mas.gov.sg/regulation/anti-money-laundering/targeted-financial-sanctions/lists-of-designated-individuals-and-entities
                    </a>
                    ; or
                  </li>
                  <li>
                    an individual or corporate body who is otherwise prohibited
                    or ineligible in any way, whether in full or in part, under
                    any law applicable to such individual or corporate body from
                    participating in any part of the Platform.
                  </li>
                </ol>
                <p>
                  If you are not authorized to use the Platform under this
                  Section 12, you are deemed a{" "}
                  <span className="font-bold text-night-900">
                    “Disqualified Person”
                  </span>{" "}
                  under these Terms.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  13. INDEMNIFICATION
                </h3>
                <p>
                  You agree to defend, indemnify and hold harmless the Treasure
                  Parties from and against any and all claims, costs,
                  proceedings, demands, losses, damages, and expenses
                  (including, without limitation, reasonable attorney’s fees and
                  legal costs) of any kind or nature relating to third party
                  claims arising out of (a) any actual or alleged breach of
                  these Terms by you, a co-conspirator, anyone using your
                  account, (b) your use of the Platform or purchase or use of
                  any Digital Asset, (c) your violation of the rights of or
                  obligations to a third party, including another user or
                  third-party, and (d) your negligence or willful misconduct. If
                  we assume the defense of such a matter, you shall reasonably
                  cooperate with us in such defense.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="group mb-2 pt-5 text-xl font-bold text-night-900 sm:text-2xl">
                  14. MISCELLANEOUS TERMS
                </h3>
                <h4 className="group mb-2 text-lg font-bold text-night-900 sm:text-xl">
                  14.1 No Waiver of Rights
                </h4>
                <p>
                  The failure by us to enforce any right or provision of these
                  Terms shall not prevent us from enforcing such right or
                  provision in the future. No waiver by us of any of the
                  provisions of these Terms is effective unless explicitly set
                  forth in writing and signed by us. No failure to exercise, or
                  delay in exercising, any right, remedy, power or privilege
                  arising from these Terms operates, or may be construed, as a
                  waiver thereof. No single or partial exercise of any right,
                  remedy, power or privilege hereunder precludes any other or
                  further exercise thereof or the exercise of any other right,
                  remedy, power, or privilege.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  14.2 Export Laws
                </h4>
                <p>
                  You agree that you will not export or re-export, directly or
                  indirectly, the Platform, and/or other information or
                  materials provided by Treasure hereunder, to any Excluded
                  Jurisdiction or Disqualified Person.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  14.3 Assignment
                </h4>
                <p>
                  We may assign our rights and obligations under these Terms,
                  including in connection with a merger, acquisition, sale of
                  assets or equity, or by operation of law. You shall not assign
                  any of your rights or delegate any of your obligations under
                  these Terms without our prior written consent. Any purported
                  assignment or delegation in violation of this Section is null
                  and void. No assignment or delegation relieves either party of
                  any of its obligations under these Terms.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  14.4 Severability
                </h4>
                <p>
                  If any provision of these Terms are found to be unlawful or
                  unenforceable, then that provision shall be deemed severable
                  from these Terms and shall not affect the enforceability of
                  any other provisions.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  14.5 Governing Law and Jurisdiction
                </h4>
                <p>
                  These Terms shall be governed by and construed under the laws
                  of the British Virgin Islands, without giving effect to any
                  conflict of laws rules or provisions. You consent and submit
                  to the personal jurisdiction of the courts in the British
                  Virgin Islands for any such action.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  14.6 Entire Agreement
                </h4>
                <p>
                  These Terms constitute the sole and entire agreement of the
                  parties with respect to the subject matter contained herein,
                  and supersedes all prior and contemporaneous understandings
                  and agreements, both written and oral, with respect to such
                  subject matter.
                </p>

                <h4 className="group mb-2 pt-2 text-lg font-bold text-night-900 sm:text-xl">
                  14.7 Headings
                </h4>
                <p>
                  The headings of the sections and subsections contained in
                  these Terms are included for reference purposes only, solely
                  for the convenience of the parties, and shall not in any way
                  be deemed to effect the meaning, interpretation or
                  applicability of these Terms or any term, condition or
                  provision hereof.
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
