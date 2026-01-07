import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EnteApp – Local Services, Panchayath Updates & Support",
  description:
    "Get in touch with EnteApp for support, business partnerships, service listings, or general inquiries. We're here to help you connect with trusted local services and community updates.",
  keywords: [
    "EnteApp",
    "contact EnteApp",
    "local services Kerala",
    "Panchayath updates Kerala",
    "contact local service app",
    "EnteApp support",
    "listing support Kerala",
    "business enquiry EnteApp",
  ],

  alternates: {
    canonical: "https://enteapp.in/contact",
  },

  openGraph: {
    title: "Contact EnteApp | Support, Business Enquiries & Help",
    description:
      "Reach the EnteApp team for customer support, listing help, Panchayath updates, or partnership opportunities.",
    url: "https://enteapp.in/contact",
    siteName: "EnteApp",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://enteapp.in/images/seo/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact EnteApp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact EnteApp | Support & Business Enquiries",
    description:
      "Reach the EnteApp support team for help, feedback, and business-related queries.",
    images: ["https://enteapp.in/images/seo/contact-og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://enteapp.in"),
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact EnteApp"
        description="Have questions or need support? Reach out to EnteApp for help with services, listings, Panchayath updates, partnerships, or general inquiries."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
