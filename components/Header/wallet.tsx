"use client";

import Link from "next/link";

type WalletProps = {
  balance: number;
  points: number;
};

const WalletSection = ({ balance, points }: WalletProps) => {
  return (
    <div className="space-y-3">
      {/* ===== MY WALLET ===== */}
      <div
        className="
          rounded-xl
          bg-gray-2 dark:bg-[#141820]
          border border-gray-200 dark:border-[#333953]
          p-4
        "
      >
        {/* Header */}
        <Link
          href="/wallet"
          className="
            flex items-center justify-between
            text-black dark:text-white
            font-semibold
          "
        >
          <span>My Wallet</span>
          <span className="opacity-60">›</span>
        </Link>

        {/* Balance */}
        <div className="mt-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Wallet Balance
          </p>
          <p className="text-lg font-semibold text-black dark:text-white">
            ₹ {balance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </p>
        </div>

        {/* Cash Points */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cash Points
            </p>
            <p className="font-semibold text-black dark:text-white">
              {points} pts
            </p>
          </div>

          <button
            className="
              px-4 py-2 rounded-md text-sm font-medium
              bg-primary text-white
              hover:opacity-90 transition
            "
          >
            Redeem Now
          </button>
        </div>
      </div>

      {/* ===== SERVICE CALL HISTORY ===== */}
      <Link
        href="/service-history"
        className="
          flex items-center justify-between
          p-4 rounded-xl
          bg-gray-2 dark:bg-[#141820]
          border border-gray-200 dark:border-[#333953]
          text-black dark:text-white
          font-semibold
          hover:bg-primary/10 transition
        "
      >
        <span>Service Call History</span>
        <span className="opacity-60">›</span>
      </Link>
    </div>
  );
};

export default WalletSection;
