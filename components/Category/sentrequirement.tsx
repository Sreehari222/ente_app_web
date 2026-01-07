"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SendRequirements = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#020617] py-14 md:py-24">
      {/* BG shape */}
      <img
        src="/images/hero/shape-02.svg"
        alt="background shape"
        className="absolute top-0 left-0 -z-10 opacity-20 dark:opacity-40"
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
       <div className="text-center mt-6 md:mt-0 mb-8 md:mb-14">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
    Send Your Requirements
  </h2>
  <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
    Provide location and describe what you need
  </p>
</div>


        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900/70 shadow-xl rounded-2xl p-5 md:p-10 border border-blue-100 dark:border-slate-700">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {/* Keyword */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Keyword
              </label>
              <input
                type="text"
                placeholder="Enter your keyword"
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your location"
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:outline-none
                dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Phone Number / WhatsApp No
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:outline-none
                dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email ID <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:outline-none
                dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Describe Your Requirements
              </label>
              <textarea
                rows={4}
                maxLength={500}
                placeholder="Please describe what you need..."
                className="mt-2 w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:outline-none resize-none
                dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
              />
              <p className="mt-1 text-xs text-gray-400 text-right">
                0 / 500 characters
              </p>
            </div>

            {/* Consent */}
            <div className="md:col-span-2 flex gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-blue-300 dark:border-slate-500 text-blue-600 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I consent to be contacted by service providers regarding my
                requirements.
              </p>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:justify-between mt-4 md:mt-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-lg border border-blue-500 px-6 py-3 text-blue-600 hover:bg-blue-50 transition
                dark:text-blue-400 dark:border-blue-400 dark:hover:bg-slate-800"
              >
                Back
              </button>

              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-8 py-3 text-white hover:bg-blue-600 transition"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendRequirements;
