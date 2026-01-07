"use client";

import Image from "next/image";
import { Phone, Star } from "lucide-react";

const services = [
  {
    id: 1,
    title: "The Golden Dine",
    description: "Fine dining with local flavours",
    phone: "+123 4567890",
    address: "Avenue Street, Calicut",
    rating: "4.8",
    img: "https://i.pinimg.com/736x/11/d5/b4/11d5b4ec505494a9cc68488258fe1f05.jpg",
  },
  {
    id: 2,
    title: "Urban Retreat Spa",
    description: "Relaxation, therapy & rejuvenation",
    phone: "+987 6543210",
    address: "Market Road, Calicut",
    rating: "4.7",
    img: "https://i.pinimg.com/736x/95/ba/0f/95ba0f3e338a1ad09ea8116c12cb5ad2.jpg",
  },
  {
    id: 3,
    title: "City Fitness Club",
    description: "Premium gym and fitness services",
    phone: "+321 7650987",
    address: "Fitness Lane, Calicut",
    rating: "4.6",
    img: "https://i.pinimg.com/1200x/85/4a/b7/854ab73ff86d18a027dbe1862dd67a4a.jpg",
  },
  {
    id: 4,
    title: "Royal Beauty Salon",
    description: "Professional beauty and grooming",
    phone: "+555 1234567",
    address: "Downtown Street, Calicut",
    rating: "4.9",
    img: "https://i.pinimg.com/736x/b9/df/1c/b9df1cf7d419d417224fd1d0b6287121.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative z-10 pt-6 pb-4">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Our Services
          </h2>
          <button className="rounded-md bg-primary/10 px-3 py-1.5 text-xs text-primary hover:bg-primary/20">
            View All
          </button>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="
                flex flex-col overflow-hidden rounded-xl bg-white shadow-md
                h-[230px] sm:h-[250px] md:h-auto
                dark:bg-[#1C1F2A]
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-[100px] sm:h-[110px] md:h-[180px]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col px-2 py-1 sm:px-3 sm:py-2">

                {/* TITLE */}
                <h3 className="mb-0.5 line-clamp-2 text-xs font-semibold text-black dark:text-white">
                  {service.title}
                </h3>

                {/* RATING */}
                <div className="mb-0.5 flex items-center gap-1 text-[11px] text-yellow-400">
                  <Star className="h-3 w-3 fill-yellow-400" />
                  <span>{service.rating}</span>
                </div>

                {/* DESCRIPTION */}
                <p className="mb-0.5 line-clamp-2 text-[11px] text-body-color">
                  {service.description}
                </p>

                {/* ADDRESS */}
                <p className="mb-1 truncate text-[10px] text-gray-500">
                  {service.address}
                </p>

                {/* CTA BUTTON (MOVED UP) */}
                <a
                  href={`tel:${service.phone}`}
                  className="
                    mt-1 flex items-center justify-center gap-1
                    rounded-md bg-primary py-1 text-[11px]
                    font-medium text-white hover:bg-primary/90
                  "
                >
                  <Phone className="h-3 w-3" />
                  Call Now
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
