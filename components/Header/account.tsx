"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WalletSection from "./wallet";
import ScrollUp from "../Common/ScrollUp";

const Account = () => {
  const [open, setOpen] = useState(false);

  const user = {
    name: "Name",
    email: "example@gmail.com",
    phone: "+123 4567890",
    avatar: "/images/blog/author-01.png"  };

  return (
    <div className="relative">
      {/* Account icon – unchanged */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Account"
        className="
          flex items-center justify-center
          h-9 w-9 md:h-14 md:w-14
          rounded-full
          bg-gray-2 dark:bg-dark-bg
          text-primary 
          hover:bg-primary/20
          transition
        "
      >
        <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
          <path opacity="0.5"     d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0Z" />
          <path d="M20 9C16.7 9 14 11.7 14 15C14 18.3 16.7 21 20 21C23.3 21 26 18.3 26 15C26 11.7 23.3 9 20 9Z"  />
         <path
    opacity="0.6"
    d="M8 32C8 27.6 13.4 24 20 24C26.6 24 32 27.6 32 32V34H8V32Z"
  />
        </svg>
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-4 w-80 z-50
            rounded-xl shadow-lg
            bg-white dark:bg-[#111827]          /* panel: light card / navy card */
            border border-gray-200 dark:border-[#333953]  /* soft blue-gray border */
            max-h-[80vh] overflow-y-auto
          "
        >
            <div><ScrollUp /></div>
          {/* Profile header */}
          <div
            className="
              flex items-center gap-3 p-4
              border-b border-gray-200 dark:border-[#333953]
            "
          >
<div
              className="
                h-12 w-12 rounded-full
                flex items-center justify-center
                bg-gray-200 dark:bg-[#1f2937]   /* slightly lighter chip in dark */
                text-primary font-semibold
              "
            >              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt="User"
                  width={48}
                  height={48}
                />
              ) : (
                <span className="font-bold text-lg">
                  {user.name.charAt(0)}
                </span>
              )}
            </div>

            <div>
              <p className="font-semibold text-black dark:text-white">
                {user.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {user.email}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {user.phone}
              </p>
            </div>
          </div>

          {/* Menu items */}
          <ul className="p-3 space-y-2">
            <MenuItem title="My Services" href="/my-services" icon={<CashIcon />} />
            <MenuItem title="Saved Address" href="/saved-address" icon={<CardIcon />} />
            <MenuItem title="Language" href="/language" icon={<StarIcon />} />
            <MenuItem title="Help & Support" href="/support" icon={<HelpIcon />} />
          </ul>

          {/* Logout */}
          <div className="p-3 border-t border-gray-200 dark:border-[#333953]">
            <button
              className="
                w-full flex items-center gap-3 px-4 py-2
                rounded-lg text-left
                bg-gray-2 dark:bg-[#141820]      /* dark card bg */
                text-red-600
                hover:bg-primary/20 dark:hover:bg-primary/30
                transition
              "
            >
              ⏻ Logout
            </button>
          </div>
          <div className="p-3 border-t border-gray-200 dark:border-[#333953]">
  <WalletSection balance={1250.75} points={350} />
</div>
        </div>
      )}
    </div>
    
  );
};

export default Account;

/* ========= MENU ITEM ========= */

const MenuItem = ({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: JSX.Element;
}) => (
  <li>
    <Link
      href={href}
      className="
        flex items-center justify-between px-4 py-3
        rounded-lg
        bg-gray-2 dark:bg-[#141820]            /* card-style bg like your sections */
        hover:bg-primary/20 dark:hover:bg-primary/30
        transition
      "
    >
      <div className="flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <span className="text-black dark:text-white">{title}</span>
      </div>
      <span className="opacity-60">›</span>
    </Link>
  </li>
);

/* ========= FEATURE-STYLE ICONS ========= */

const CashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 40 40" className="fill-current">
    <path opacity="0.5" d="M5 5H35V35H5V5Z" />
    <path d="M20 10C15.58 10 12 13.58 12 18C12 22.42 15.58 26 20 26Z" />
  </svg>
);

const CardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 40 40" className="fill-current">
    <path opacity="0.5" d="M5 15H35V35H5V15Z" />
    <path d="M10 22H25V25H10V22Z" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 40 40" className="fill-current">
    <path opacity="0.5" d="M20 2L25 14L38 15L28 23L31 36L20 29L9 36L12 23L2 15L15 14L20 2Z" />
  </svg>
);

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 40 40" className="fill-current">
    <path opacity="0.5" d="M20 0C8.97 0 0 8.97 0 20C0 31.03 8.97 40 20 40Z" />
    <path d="M19 30H21V28H19ZM20 8C16.7 8 14.5 9.9 14.5 13H17C17 11.7 18 10.8 20 10.8C22 10.8 23 11.8 23 13.3C23 16 18.7 15.8 18.7 21H21.3C21.3 16.8 25.5 16.3 25.5 13.3C25.5 9.9 23.2 8 20 8Z" />
  </svg>
);
