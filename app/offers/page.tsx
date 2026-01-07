import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Banner from "@/components/Banner/banner";
import Features from "@/components/Features";
import Featured from "@/components/Offer/featured";
import Spin from "@/components/Offer/spinandwin";
import LaunchOffer from "@/components/Offer/specialoffer";
import DiscoverDeals from "@/components/Deals/Discoverdeals";

export const metadata: Metadata = {
  title: "Categories | Ente App",
  description:
    "Browse all local service categories like plumbing, cleaning, electrician and more near you.",
};

export default function Offers() {
  return (
    <>
      <ScrollUp />

      {/* Launch Offer */}
      <section className="mt-20 md:mt-32 px-4">
        <LaunchOffer />
      </section>

      {/* Features */}
      <section className="mt-8 md:mt-16 px-4">
        <Features />
      </section>

      {/* Banner */}
      <section className="mt-8 md:mt-16">
        <Banner />
      </section>

      {/* Featured Offers */}
      <section className="mt-10 md:mt-20 px-4">
        <Featured />
      </section>

      {/* Spin & Win */}
      <section className="mt-10 md:mt-20">
        <Spin />
      </section>

      {/* Discover Deals */}
      <section className="mt-10 md:mt-20">
        <DiscoverDeals />
      </section>
    </>
  );
}
