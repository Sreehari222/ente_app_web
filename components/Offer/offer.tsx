"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Offers = () => {
  const images = [
    "/images/banner/of01.jpg",
    "/images/banner/of02.jpg",
    "/images/banner/of03.jpg",
    "/images/banner/of4.jpg",
    "/images/banner/of04.jpg",
    "/images/banner/of05.jpg",
    "/images/banner/of01.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect ONLY mobile sizes (≤ 425px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide (same logic, just respects mobile/desktop)
  useEffect(() => {
    const visibleCards = isMobile ? 1 : 3;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 > images.length - visibleCards ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isMobile]);

  const visibleCards = isMobile ? 1 : 3;

  return (
    <section className="relative w-full py-16">
      <div className="container max-w-7xl mx-auto px-6">

        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={src}
                      alt={`Offer ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes={isMobile ? "100vw" : "33vw"}
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {Array.from({
            length: images.length - visibleCards + 1,
          }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 ${
                i === currentIndex
                  ? "bg-black w-10 h-2 rounded-full"
                  : "bg-gray-400 w-2 h-2 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Offers;
