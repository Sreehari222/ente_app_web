"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const categories = [
  {
    id: 1,
    title: "Plumbing",
    img: "https://i.pinimg.com/736x/da/5f/76/da5f7694763fe6c5a5b4f3bb7cd1b17f.jpg",
  },
  {
    id: 2,
    title: "Cleaning",
    img: "https://i.pinimg.com/736x/bb/75/72/bb757278210d92c49075f5eda4d066aa.jpg",
  },
  {
    id: 3,
    title: "Electrician",
    img: "https://i.pinimg.com/736x/15/50/e0/1550e00f9f4ff4edf4ec89c2b826abd5.jpg"
  },
  {
    id: 4,
    title: "Plumbing",
    img: "https://i.pinimg.com/736x/6d/66/af/6d66af4d10a9a7d19d1df880b0ce3b23.jpg"
  },
  {
    id: 5,
    title: "Cleaning",
    img: "https://i.pinimg.com/736x/a3/02/27/a30227a2e3613de37fd5c9b8bd5a4b6f.jpg"
  },
  {
    id: 6,
    title: "Electrician",
    img: "https://i.pinimg.com/736x/3b/80/24/3b8024af9c87e7200c17144ac4c6143c.jpg",
  },
  {
    id: 7,
    title: "Dry Cleaning",
    img: "https://i.pinimg.com/1200x/d9/06/ca/d906ca84594d40f548c0baf699141a0d.jpg",
  },
  {
    id:8,
    title: "Electrician",
    img: "https://i.pinimg.com/736x/58/69/5c/58695ceedd4ad8be1d4fa8e2ba456e6d.jpg"
  },
];

const CategoryPage = () => {
  return (
    <section className="relative z-10 pt-6 pb-16 md:pt-10 md:pb-20 lg:pt-8 lg:pb-28">
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          title="Categories"
          paragraph="Browse all essential local service categories available near you."
          center
          mb="50px"
        />

        {/* Category Grid */}
        <div className="-mx-4 flex flex-wrap justify-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-1/2 px-2 sm:px-4 md:w-1/3 lg:w-1/4 mb-6 md:mb-8">
              <div className="group rounded-xl border border-primary/30 bg-white dark:bg-gray-800 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                
                {/* Image */}
                <div className="relative h-[110px] sm:h-[160px] w-full overflow-hidden">
                  <Image
                    src={category.img}
                    alt={category.title}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <div className="py-2 sm:py-4 text-center">
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SAME BACKGROUND THEME */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default CategoryPage;
