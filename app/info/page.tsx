import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
// import InformationSection from "@/components/InformationSection";
import Information from "@/components/Information/index"
import LocalServicesInformation from "@/components/Information/localservice";

export const metadata: Metadata = {
  title: "Information | Ente App",
  description: "Latest updates, location info, and instant news",
};

export default function InfoPage() {
  return (
    <>
      <ScrollUp />
     <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <section className="min-h-screen bg-white dark:bg-[#0f172a] pt-6">
        <Information />
        <LocalServicesInformation/>
      </section>
      </div>
    </>
  );
}
