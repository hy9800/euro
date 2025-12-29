import { Metadata } from "next";
import HeroBanner from "@/components/shared/hero-banner";
import { HomeIcon } from "lucide-react";
import { getSeoData } from "@/services/services";
import Container from "@/components/shared/container";
import Schema from "@/components/shared/schema";
import AboutSection from "./_components/about-section";
import VissionMission from "./_components/vission-mission";
import OurValues from "./_components/our-values";
import OurClients from "./_components/our-clients";
import OurAchievements from "./_components/our-achievements";
import WhyEuroquest from "./_components/why-euroquest";
import OurImpact from "./_components/our-impact";
import FutureOutlook from "./_components/future-outlook";
import AboutNavigation from "./_components/about-navigation";

const breadcrumbs = [
  { label: "", href: "/", icon: <HomeIcon width={16} height={16} /> },
  { label: "About Us", href: "/about" },
];

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await getSeoData("about");
    const seo = seoData.seo;

    return {
      title: seo.meta_title,
      description: seo.meta_description,
      keywords: seo.meta_keywords,
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_description,
        images: [
          {
            url: seo.meta_image,
            width: 1200,
            height: 630,
            alt: seo.meta_title,
          },
        ],
        type: "website",
        url: seo.canonical,
      },
      twitter: {
        card: "summary_large_image",
        title: seo.meta_title,
        description: seo.meta_description,
        images: [seo.meta_image],
      },
      alternates: {
        canonical: seo.canonical,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for about page:", error);

    // Fallback metadata
    return {
      title:
        "About Us - EuroQuest International | Professional Training Courses & Programs",
      description:
        "Discover EuroQuest International, a leading training institute offering high-quality training courses and programs. Founded in 2015 with over 25 years of experience.",
      keywords:
        "about us, EuroQuest International, professional training courses, programs, training institute, management development, leadership training",
    };
  }
}

export default function AboutPage() {
  return (
    <>
      <Schema
        pageType="about"
        pageTitle="About Us - EuroQuest International | Professional Training Courses & Programs"
        pageDescription="Discover EuroQuest International, a leading training institute offering high-quality training courses and programs. Founded in 2015 with over 25 years of experience."
        pageUrl="https://euroqst.com/about"
      />
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/assets/images/hero-about.webp"
        title="About Us - EuroQuest International | Professional Training Courses & Programs" 
        description="EuroQuest International was founded in 2015 by a team with over 25 years of experience, and has offered over 1000 training programs, benefiting over 15,000 participants across diverse industries in global centers including Dubai, London, Barcelona, Istanbul, Vienna, Paris, and Geneva."
        breadcrumbs={breadcrumbs}
        enableTypewriter={true}
      />

      <Container>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 py-6 lg:py-8">
          <AboutNavigation />
          <div className="flex-1 min-w-0">
            <AboutSection />
            <VissionMission />
            <OurValues />
            <OurClients />
            <OurAchievements />
            <WhyEuroquest />
            <OurImpact />
            <FutureOutlook />
          </div>
        </div>
      </Container>
      {/* <CoverageSection /> */}
    </>
  );
}
