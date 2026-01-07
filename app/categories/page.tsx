import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Banner from "@/components/Banner/banner";
import CategoryPage from "@/components/Category/index";
import CategorySearch from "@/components/Category/categorysearch"
// 👆 this is the category section we created earlier

export const metadata: Metadata = {
  title: "Categories | Ente App",
  description:
    "Browse all local service categories like plumbing, cleaning, electrician and more near you.",
};
export default function Categories() {
  return (
    <>
      <ScrollUp />
      <CategorySearch />
      <CategoryPage />
    </>
  );
}
