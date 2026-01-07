"use client";

export default function LaunchOffer() {
  return (
    <div className="w-full px-4 mt-8">
      <div
        className="
          w-full mx-auto flex items-center
          gap-3 sm:gap-5
          bg-gradient-to-r from-[#3B82F6] to-[#93C5FD]
          rounded-xl shadow-sm

          p-4 sm:p-14
        "
      >
        {/* Left Image/Icon */}
        <img
          src="/images/offer/icon.png"
          alt="Offer Icon"
          className="
            w-8 h-8
            sm:w-10 sm:h-14
            object-contain
          "
        />

        {/* Text Section */}
        <div className="flex-1 leading-tight sm:leading-normal">
          <h1 className="text-sm sm:text-lg font-semibold text-gray-800">
            🎉 Special Launch Offer!
          </h1>
          <p className="text-xs sm:text-sm text-gray-700">
            Get 50% OFF on your first 3 bookings
          </p>
        </div>

        {/* Button */}
        <button
          className="
            bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition
            text-xs px-3 py-1.5
            sm:text-sm sm:px-4 sm:py-2
            whitespace-nowrap
          "
        >
          Claim Now
        </button>
      </div>
    </div>
  );
}
