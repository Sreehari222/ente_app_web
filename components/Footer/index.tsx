"use client";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 bg-white pt-10 md:pt-20 lg:pt-24 dark:bg-gray-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">

          {/* LOGO & DESCRIPTION */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-6 md:mb-12 lg:mb-16 max-w-[360px]">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src={getImagePath("/images/logo/logo-2.png")}
                  alt="logo"
                  className="dark:hidden"
                  width={160}
                  height={30}
                />
                <Image
                  src={getImagePath("/images/logo/logo.png")}
                  alt="logo"
                  className="hidden dark:block"
                  width={160}
                  height={30}
                />
              </Link>

              <p className="mb-5 md:mb-9 text-sm md:text-base leading-relaxed text-body-color dark:text-body-color-dark">
                EnteApp connects you with trusted local services, Panchayath
                updates, shop offers, and daily rewards — all in one place.
              </p>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-6 md:mb-12 lg:mb-16">
              <h2 className="mb-4 md:mb-10 text-base md:text-xl font-bold text-black dark:text-white">
                Useful Links
              </h2>
              <ul>
                {[
                  ["Home", "/"],
                  ["Categories", "/categories"],
                  ["Offers & Rewards", "/offers"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="mb-2 md:mb-4 inline-block text-sm md:text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TERMS */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-6 md:mb-12 lg:mb-16">
              <h2 className="mb-4 md:mb-10 text-base md:text-xl font-bold text-black dark:text-white">
                Terms
              </h2>
              <ul>
                {[
                  "Terms and Conditions",
                  "Privacy Policy",
                  "Refund Policy",
                  "Sitemap",
                ].map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="mb-2 md:mb-4 inline-block text-sm md:text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DOWNLOAD APP */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-6 md:mb-12 lg:mb-16">
              <h2 className="mb-4 md:mb-6 text-base md:text-xl font-bold text-black dark:text-white">
                Download EnteApp
              </h2>

              <div className="flex flex-col space-y-2 md:space-y-4 pb-3 md:pb-5">
                <a
                  href="https://play.google.com/store/apps/details?id=com.enteapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={getImagePath("/images/store/google-play.webp")}
                    alt="Google Play"
                    width={150}
                    height={44}
                    className="rounded-md shadow-md bg-white"
                  />
                </a>

                <a
                  href="https://apps.apple.com/app/enteapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={getImagePath("/images/store/app-store.webp")}
                    alt="App Store"
                    width={150}
                    height={44}
                    className="rounded-md shadow-md bg-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />

        {/* COPYRIGHT */}
        <div className="py-6 md:py-8">
          <p className="text-center text-sm md:text-base text-body-color dark:text-white">
            © Copyright 2025. All rights reserved. Distributed by{" "}
            <a
              href="https://bloombizcreatives.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="hover:text-primary"
            >
              Bloombiz Creativity
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
