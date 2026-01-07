import { getImagePath } from "@/lib/utils";
import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          
          {/* LEFT IMAGE */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={getImagePath("/images/about/about-mission.svg")}
                alt="mission image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src={getImagePath("/images/about/about-mission-dark.svg")}
                alt="mission image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[500px]" data-wow-delay=".2s">

              {/* Mission */}
              <div className="mb-10">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-300">
                  Our mission is to empower local communities by making essential services,
                  Panchayath updates, and shop information easily accessible. EnteApp aims to
                  support small businesses, help citizens find trusted services, and create a
                  digital bridge between people and their local ecosystem.
                </p>
              </div>

              {/* Vision */}
              <div className="mb-10">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Our Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-300">
                  Our vision is to become Kerala’s most reliable local search and community
                  engagement platform — where every Panchayath, shop, and service provider
                  becomes digitally connected, enabling better transparency and accessibility
                  for all residents.
                </p>
              </div>

              {/* Values / Goals */}
              <div className="mb-6">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                  Our Core Values
                </h3>
                <ul className="list-disc pl-6 text-base font-medium text-body-color dark:text-gray-300 space-y-2">
                  <li>Trust & Transparency in all service listings</li>
                  <li>Support and uplift local shops & businesses</li>
                  <li>Provide verified and accurate Panchayath updates</li>
                  <li>Encourage user engagement through rewards & activities</li>
                  <li>Build a stronger, digitally-connected community</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
