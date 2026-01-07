import { StoreType } from "@/types/store";
import Image from "next/image";
import Link from "next/link";

const SingleStore = ({ store }: { store: StoreType }) => {
  const {
    id,
    title,
    image,
    address,
    category,
    rating,
    phone,
    whatsapp,
    isVerified,
  } = store;

  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={`/store/${id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {category}
          </span>

          {isVerified && (
            <span className="absolute left-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
              ✔ Verified
            </span>
          )}

          <Image src={image} alt={title} fill className="object-cover" />
        </Link>

        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:px-8 lg:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/store/${id}`}
              className="mb-3 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>

          <p className="mb-5 text-base text-body-color dark:text-gray-300">
            {address}
          </p>

          {/* Rating */}
          <div className="mb-4">
            <span className="text-yellow-500 font-semibold">{rating}★</span>
          </div>

          {/* Contact buttons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`tel:${phone}`}
              className="rounded bg-primary px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-opacity-90"
            >
              Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStore;
