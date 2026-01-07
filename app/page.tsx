// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import Service from "@/components/Service";
import { Metadata } from "next";
import Banner from "@/components/Banner/banner";
import Offer from "@/components/Offer/offer";

export const metadata: Metadata = {
  title: "Ente App ",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
     <Hero />
     <div className="flex flex-col">
        <div className="order-1 md:order-2">
                <Offer />

        </div>
        <div className="order-2 md:order-1">
          <Features />
        </div>
      </div>

      {/* <Video /> */}
      <Banner />
                <Service />

      
      
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
