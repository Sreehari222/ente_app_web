"use client";

import { useState } from "react";

type Category =
  | "All"
  | "Fashion"
  | "Beauty"
  | "Food"
  | "Subscription"
  | "Electronics";

const categories: Category[] = [
  "All",
  "Fashion",
  "Beauty",
  "Food",
  "Subscription",
  "Electronics",
];

const deals = [
  {
    id: 1,
    title: "Men’s Wear Sale",
    subtitle: "Up to 40% off",
    category: "Fashion",
    image:
      "https://i.pinimg.com/1200x/25/b6/d8/25b6d83852fc35aa967f548495aeb88f.jpg",
  },
  {
    id: 2,
    title: "Electronics Mega Sale",
    subtitle: "Save ₹5000",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 3,
    title: "Cosmetics Special Offer",
    subtitle: "Limited time only",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: 4,
    title: "Premium Beauty Combo",
    subtitle: "$40 only",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  },
  {
    id: 5,
    title: "Meals Combo",
    subtitle: "70% off",
    category: "Food",
    image:
      "https://i.pinimg.com/736x/09/db/13/09db13c1c4fd65d1805b67430065ef75.jpg",
  },
  {
    id: 6,
    title: "Deal",
    subtitle: "50% Annual plan",
    category: "Subscription",
    image:
      "https://i.pinimg.com/1200x/5c/3b/8f/5c3b8fc21a86d0844d7c14b35fb2f682.jpg",
  },
];

const DiscoverDeals = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredDeals =
    activeCategory === "All"
      ? deals
      : deals.filter((deal) => deal.category === activeCategory);

  return (
    <section className="bg-white dark:bg-slate-950 py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          Discover Exclusive Deals
        </h2>

        {/* Filters (scrollable on mobile) */}
        <div className="mb-6 md:mb-8 flex gap-6 md:gap-8 overflow-x-auto md:overflow-visible border-b border-gray-200 dark:border-slate-800 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap pb-3 text-sm font-medium transition
                ${
                  activeCategory === cat
                    ? "border-b-2 border-teal-600 text-teal-600"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div
          className="grid gap-4 grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="group overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-900 shadow hover:shadow-lg transition"
            >
              <div className="relative h-[100px] sm:h-[220px] lg:h-[260px] overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-3 md:p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {deal.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {deal.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverDeals;
