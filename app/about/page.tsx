import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Testimonials from "@/components/Testimonials/index";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EnteApp | Local Services, Panchayath Updates, Offers & Rewards",
  description:
    "EnteApp is a community-driven platform that helps you discover trusted local services, Panchayath updates, nearby shops, exclusive offers, and earn daily rewards. Built for Kerala communities to simplify access to essential services.",
  keywords: [
    "EnteApp",
    "local services Kerala",
    "Panchayath updates",
    "local shops Kerala",
    "find electrician Kerala",
    "find plumber Kerala",
    "nearby services app",
    "Kerala local search",
    "service listings Kerala",
    "local offers Kerala",
    "daily rewards app India",
    "spin and win Kerala",
    "scratch card app Kerala",
    "invite and earn Kerala",
    "community updates Kerala",
  ],

  // Canonical URL
  alternates: {
    canonical: "https://enteapp.in/about",
  },

  // Open Graph (Facebook / LinkedIn)
  openGraph: {
    title:
      "About EnteApp | Discover Local Services, Offers, Panchayath Notices & Rewards",
    description:
      "EnteApp helps you connect with verified local service providers, explore shop offers, track Panchayath announcements, and earn daily rewards. Built for Kerala’s local communities.",
    url: "https://enteapp.in/about",
    siteName: "EnteApp",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://enteapp.in/images/seo/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "EnteApp - About Page",
      },
    ],
  },

  // Twitter SEO
  twitter: {
    card: "summary_large_image",
    title:
      "About EnteApp | Trusted Local Services, Panchayath Updates & Rewards",
    description:
      "A platform that connects Kerala communities with trusted services, offers, and Panchayath updates.",
    images: ["https://enteapp.in/images/seo/about-og.jpg"],
  },

  // Icons (Optional – replace with your favicon)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Mobile / PWA
  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://enteapp.in"),
};


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About EnteApp"
        description="EnteApp is designed to help people easily find trusted local services, explore exclusive offers, stay updated with Panchayath announcements, and earn daily rewards — all in one powerful community-driven platform."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <Testimonials />
    </>
  );
};

export default AboutPage;
