"use client";

import { useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  actionLabel: string;
  actionLink: string;
};

const governmentServices: ServiceItem[] = [
  {
    id: 1,
    title: "Government Hospitals",
    description: "Find nearest district & PHC hospitals in your area.",
    actionLabel: "View Hospitals",
    actionLink: "/hospitals",
  },
  {
    id: 2,
    title: "Municipality Services",
    description: "Waste collection, tax payment, public grievances.",
    actionLabel: "Go to Portal",
    actionLink: "/municipality",
  },
  {
    id: 3,
    title: "Police & Emergency Services",
    description:
      "Find contact details for nearby police stations, emergency helpline numbers, and public safety services in your area.",
    actionLabel: "View Contacts",
    actionLink: "/emergency-services",
  },
  {
    id: 4,
    title: "Government Offices",
    description:
      "Locate village offices, taluk offices, revenue departments, and other key government service centers near you.",
    actionLabel: "Find Offices",
    actionLink: "/gov-offices",
  },
];

const privateServices: ServiceItem[] = [
  {
    id: 1,
    title: "Private Hospitals",
    description: "Search nearby private hospitals and clinics.",
    actionLabel: "View Hospitals",
    actionLink: "/private-hospitals",
  },
  {
    id: 2,
    title: "Utility Providers",
    description: "Electricity, water, gas, and internet services.",
    actionLabel: "Explore Services",
    actionLink: "/utilities",
  },
  {
    id: 3,
    title: "Repair & Maintenance Services",
    description:
      "Find trusted electricians, plumbers, mechanics, AC repair experts, and home maintenance professionals.",
    actionLabel: "Find Services",
    actionLink: "/repairs",
  },
  {
    id: 4,
    title: "Education & Training Centers",
    description:
      "Search for private schools, tuition centers, skill training institutes, and coaching classes in your locality.",
    actionLabel: "Browse Centers",
    actionLink: "/education",
  },
];

const LocalServicesInformation = () => {
  const [activeTab, setActiveTab] = useState<"government" | "private">(
    "government"
  );

  const data =
    activeTab === "government" ? governmentServices : privateServices;

  return (
    <section className="relative py-10 md:py-16">
      {/* Background Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Title */}
        <SectionTitle
          title="Local Services Information"
          paragraph="Find nearby government and private services to meet your daily needs quickly and easily."
          center
          mb="40px"
        />

        {/* Tabs */}
        <div className="mt-4 md:mt-6 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-2 dark:bg-[#141820] p-1">
            <button
              onClick={() => setActiveTab("government")}
              className={`px-5 md:px-6 py-2 text-sm rounded-full transition ${
                activeTab === "government"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Government
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`px-5 md:px-6 py-2 text-sm rounded-full transition ${
                activeTab === "private"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Private
            </button>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-6 md:mt-10 space-y-4 md:space-y-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col sm:flex-row
                sm:items-center sm:justify-between
                gap-4 sm:gap-6
                p-4 md:p-6
                rounded-2xl
                bg-white dark:bg-[#141820]
                border border-gray-200 dark:border-[#333953]
                shadow-sm
              "
            >
              {/* Left content */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center bg-primary/20 text-primary">
                  🏢
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action button */}
              <Link
                href={item.actionLink}
                className="
                  self-start sm:self-auto
                  px-4 md:px-5 py-2.5
                  rounded-full text-sm font-medium
                  bg-primary text-white
                  hover:opacity-90 transition
                "
              >
                {item.actionLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalServicesInformation;
