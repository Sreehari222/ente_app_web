"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Featured = () => {
  const images = [
    "/images/banner/banner1.jpg",
    "/images/banner/of01.jpg",
    "/images/banner/banner2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = images.length - itemsPerView;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="w-full pt-2 pb-12 md:pt-16 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 md:mb-8">
          Featured Offers
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 md:px-4"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={src}
                      alt={`Banner ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 ${
                i === currentIndex
                  ? "bg-black w-8 md:w-10 h-2 rounded-full"
                  : "bg-gray-400 w-2 h-2 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
