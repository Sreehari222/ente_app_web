"use client";

import Link from "next/link";

const InfoIcon = () => {
  return (
    <Link
      href="/info"
      aria-label="Information"
      className="
        flex items-center justify-center
        h-9 w-9 md:h-14 md:w-14
        rounded-full
        bg-gray-2 dark:bg-dark-bg
        text-primary dark:text-white
        hover:bg-primary/20
        transition
      "
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        className="fill-current"
      >
        {/* Outer circle */}
        <path
          opacity="0.3"
          d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0Z"
        />
        {/* Dot */}
        <path d="M18.5 11H21.5V14H18.5V11Z" />
        {/* Line */}
        <path d="M18.5 17H21.5V30H18.5V17Z" />
      </svg>
    </Link>
  );
};

export default InfoIcon;
