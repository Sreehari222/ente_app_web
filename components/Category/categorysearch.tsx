"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const CategorySearch = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!keyword.trim()) return;

    // example: redirect to category results page
    router.push(`/services?search=${encodeURIComponent(keyword)}`);
  };

  return (
<section className="mt-24 py-15 md:py-14">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          {/* Heading */}
          <h2 className="mb-2 text-2xl font-semibold text-black dark:text-white">
            What service do you need?
          </h2>

          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Search or browse categories to find your service
          </p>

          {/* Button */}
          <button
            onClick={() => router.push("/sentrequirement")}
            className="mb-6 w-full rounded-full bg-[#4f6bed] px-6 py-3 text-white font-medium transition hover:opacity-80"
          >
            Send your Requirements
          </button>

          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="relative flex items-center"
          >
            <input
              type="text"
              placeholder="Enter Your Keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full rounded-full border border-gray-300 bg-white px-12 py-3 text-sm outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
            />

            {/* Search Icon */}
            <span className="absolute left-4 text-gray-400">
              <Search size={18} />
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CategorySearch;
