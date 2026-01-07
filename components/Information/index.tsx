"use client";

import Link from "next/link";

const Information = () => {
  return (
    <div
      className="
        w-full max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-12
        pt-20 md:pt-40
        pb-6 md:pb-8
        space-y-6 md:space-y-10
      "
    >
      {/* ===== Location Card ===== */}
      <div
        className="
          flex items-center justify-between gap-4
          p-4 md:p-5
          rounded-2xl
          bg-gray-2 dark:bg-[#141820]
          border border-gray-200 dark:border-[#333953]
        "
      >
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-primary/20 text-primary">
            <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 7.5 12.5 7.5 12.5s7.5-7.25 7.5-12.5C19.5 5.36 16.14 2 12 2zm0 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your Location
            </p>
            <p className="text-base md:text-lg font-medium text-black dark:text-white">
              Kozhikode, India
            </p>
          </div>
        </div>

        <button
          className="
            px-4 md:px-5 py-2.5
            rounded-lg text-sm font-medium
            bg-primary text-white
            hover:opacity-90 transition
          "
        >
          Change
        </button>
      </div>

      {/* ===== Instant News ===== */}
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-xl font-semibold text-black dark:text-white">
            Instant News
          </h1>
          <Link
            href="/info/news"
            className="text-sm text-primary hover:underline"
          >
            View All
          </Link>
        </div>

        {/* ===== News List ===== */}
        <div className="divide-y divide-gray-200 dark:divide-[#2a3150]">
          <NewsItem title="City launches new safety helpline." time="2 min ago" />
          <NewsItem title="Heavy rain alert issued for tonight." time="3 min ago" />
          <NewsItem title="Govt announces new digital policy." time="4 min ago" />
        </div>
      </div>
    </div>
  );
};

export default Information;

/* ===== NEWS ITEM ===== */

const NewsItem = ({ title, time }: { title: string; time: string }) => (
  <div
    className="
      flex items-center gap-4 md:gap-6
      py-4 md:py-6
      transition
      hover:bg-gray-50 dark:hover:bg-[#141820]
    "
  >
    <div
      className="
        h-10 w-10 md:h-12 md:w-12
        flex items-center justify-center
        rounded-full
        bg-primary/15 text-primary
        flex-shrink-0
      "
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h18v2H3V4zm0 4h18v2H3V8zm0 4h12v2H3v-2z" />
      </svg>
    </div>

    <div className="flex-1">
      <p className="text-sm md:text-base font-medium text-black dark:text-white">
        {title}
      </p>
      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
        {time}
      </p>
    </div>

    <div className="text-gray-400 dark:text-gray-500">›</div>
  </div>
);
