import { Metadata } from "next";
import HeroBanner from "@/components/shared/hero-banner";
import SectionTitle from "@/components/shared/section-title";
import Button from "@/components/ui/button";
import { Home } from "lucide-react";
import { services } from "@/constants";
import { getSeoData } from "@/services/services";
import Container from "@/components/shared/container";
import Schema from "@/components/shared/schema";
import AboutNavigation from "./_components/about-navigation";

const breadcrumbs = [
  { label: "", href: "/", icon: <Home width={16} height={16} /> },
  { label: "About", href: "/about" },
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
        "About EuroQuest International | Professional Training & Development",
      description:
        "Learn about EuroQuest International, a leading educational institute providing high-quality training and learning experiences. Founded in 2015 with over 25 years of expertise.",
      keywords:
        "about euroquest, training institute, professional development, educational services, management training",
    };
  }
}

export default function AboutPage() {
  return (
    <>
      <Schema
        pageType="about"
        pageTitle="About EuroQuest International"
        pageDescription="Learn about EuroQuest International, a leading educational institute providing high-quality training and learning experiences. Founded in 2015 with over 25 years of expertise."
        pageUrl="https://euroqst.com/about"
      />
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/assets/images/hero-about.webp"
        title="About EuroQuest International"
        description="Founded in 2015 by a team with over 25 years of expertise, EuroQuest International has delivered more than 1000 training programs, benefiting over 15,000 participants across diverse sectors in global hubs including Dubai, London, Barcelona, Istanbul, Vienna, Paris, and Geneva."
        breadcrumbs={breadcrumbs}
        enableTypewriter={true}
      />

      <Container>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 py-6 xl:py-8">
          {/* Sections Navigation List */}
          <AboutNavigation />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* About Section */}
            <section
              id="who-is-euroquest"
              className="bg-white md:pb-11 pb-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="Who is"
                    highlight="EuroQuest"
                    className="!mb-4"
                  />
                  <p className="font-normal text-lg leading-7">
                    Founded in 2015 by a team with over 25 years of expertise,
                    EuroQuest International has delivered more than 1000
                    training programs, benefiting over 15,000 participants
                    across diverse sectors in global hubs including Dubai,
                    London, Barcelona, Istanbul, Vienna, Paris, and Geneva.
                    corporations.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Vission */}
            <section
              id="our-vision"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-16">
                  <div className="w-32 sm:w-36 md:w-40 flex-shrink-0">
                    <img
                      src="/assets/icons/vision-icon.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="mb-4 text-2xl md:text-4xl font-bold capitalize">
                      Our <span className="text-[#3E5EC0]">vision</span>
                    </h3>
                    <p className="font-normal text-base md:text-lg leading-7">
                      To be the global first choice in training and professional
                      development, offering innovative learning solutions with
                      sustainable impact.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Mission */}
            <section
              id="our-mission"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-16">
                  <div className="w-32 sm:w-36 md:w-40 flex-shrink-0">
                    <img
                      src="/assets/icons/mission-icon.svg"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="mb-4 text-2xl md:text-4xl font-bold capitalize">
                      Our <span className="text-[#3E5EC0]">mission</span>
                    </h3>
                    <p className="font-normal text-base md:text-lg leading-7">
                      To empower individuals, teams, and organizations to
                      enhance performance through specialized training programs
                      that combine theory with practical application, tailored
                      to institutional needs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Values */}
            <section
              id="our-values"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="Our"
                    highlight="Values"
                    className="!mb-4"
                  />
                  <p className="font-normal text-lg leading-7 text-gray-700 mb-8">
                    AT EuroQuest, Our Values Guide Everything We Do.The Shape
                    Our Interactions, Decisions, And The Way We Build Our
                    Programs.
                  </p>

                  {/* Values Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Quality */}
                    <div className="col-span-1 md:col-span-2 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon1.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          Quality
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          We Craft Every Detail To Deliver Lasting, Exceptional
                          Results.
                        </p>
                      </div>
                    </div>

                    {/* Professionalism */}
                    <div className="col-span-1 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon2.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          Professionalism
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          We Uphold High Standards Through Discipline, Respect,
                          And Reliability.
                        </p>
                      </div>
                    </div>

                    {/* Transparency */}
                    <div className="col-span-1 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon3.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          Transparency
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          We Communicate Openly, Ensuring Honesty In Every
                          Decision Made.
                        </p>
                      </div>
                    </div>

                    {/* Continuous Innovation */}
                    <div className="col-span-1 md:col-span-2 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon4.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          Continuous Innovation
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          We Evolve Constantly, Transforming Ideas Into Smarter,
                          Better Solutions.
                        </p>
                      </div>
                    </div>

                    {/* Results-Oriented Approach */}
                    <div className="col-span-1 md:col-span-2 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon5.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          Results-Oriented Approach
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          We Focus On Measurable Outcomes That Create Real,
                          Lasting Impact.
                        </p>
                      </div>
                    </div>

                    {/* Integrity */}
                    <div className="col-span-1 border border-[#C5C5C5] rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="/assets/icons/value-icon6.svg" alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3E5EC0]">
                          Integrity
                        </h3>
                      </div>
                      <div className="border-t border-[#C5C5C5] pt-4">
                        <p className="text-gray-600 text-base font-medium">
                          We Do What's Right, Even When No One's Watching.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Clients */}
            <section
              id="our-clients"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="Our"
                    highlight="Clients"
                    className="!mb-4"
                  />
                  <p className="font-normal text-lg leading-7 text-gray-700 mb-8">
                    AT EuroQuest We Proudly Serve:
                  </p>

                  {/* Clients Content */}
                  <div className="border border-gray-200 rounded-3xl md:p-5 p-2.5 flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/2 rounded-2xl">
                      <img
                        src="/assets/images/clients-handshake.png"
                        alt="Business partnership"
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>

                    {/* Right Side - Client Categories */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-2.5">
                      {/* Government Ministries */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon1.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          Government Ministries
                        </span>
                      </div>

                      {/* Oil & Energy Organizations */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon2.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          Oil & Energy Organizations
                        </span>
                      </div>

                      {/* Financial Institutions */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon3.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          Financial Institutions
                        </span>
                      </div>

                      {/* Telecom Companies */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon4.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          Telecom Companies
                        </span>
                      </div>

                      {/* Educational Bodies */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon5.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          Educational Bodies
                        </span>
                      </div>

                      {/* Leading Multinational Corporations */}
                      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 hover:border-[#3E5EC0] hover:shadow-md transition-all">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src="/assets/icons/client-icon6.svg" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-black">
                          Leading Multinational Corporations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Achievements */}
            <section
              id="our-achievements"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="Our"
                    highlight="Achievements"
                    className="!mb-10"
                  />

                  {/* Achievements Content */}
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Left Side - Trophy Illustration */}
                    <div className="w-full lg:w-1/3 items-center justify-center md:flex hidden">
                      <div className="relative max-w-[200px] lg:max-w-none">
                        {/* Trophy Icon */}
                        <img
                          src="/assets/icons/achievement.svg"
                          alt=""
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Right Side - Achievement Stats */}
                    <div className="w-full lg:w-2/3 flex flex-col md:gap-10 gap-8">
                      {/* Top Section - Network Info */}
                      <div className="flex flex-col text-center justify-center items-center gap-3 md:mt-0 mt-8">
                        <div className="flex-shrink-0">
                          <img
                            src="/assets/icons/achievement-icon.svg"
                            alt=""
                            className="w-12 h-12"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-black leading-relaxed">
                            A Global Network Of Internationally Certified
                            Trainers
                          </h3>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                        {/* 25+ Years */}
                        <div className="flex flex-col text-center">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00B67A] mb-2">
                            25+
                          </div>
                          <p className="text-sm md:text-base font-semibold text-black">
                            Years Of Expertise
                          </p>
                        </div>

                        {/* 1000+ Programs */}
                        <div className="flex flex-col text-center">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00B67A] mb-2">
                            1000+
                          </div>
                          <p className="text-sm md:text-base font-semibold text-black">
                            Specialized Training Programs Delivered
                          </p>
                        </div>

                        {/* 15+ Cities */}
                        <div className="flex flex-col text-center">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00B67A] mb-2">
                            15+
                          </div>
                          <p className="text-sm md:text-base font-semibold text-black">
                            International Cities And Capitals
                          </p>
                        </div>

                        {/* 1000+ Participants */}
                        <div className="flex flex-col text-center">
                          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00B67A] mb-2">
                            1000+
                          </div>
                          <p className="text-sm md:text-base font-semibold text-black">
                            Participants Trained Across Industries
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why EuroQuest International */}
            <section
              id="why-euroquest"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                    {/* Left Side - Question Mark Icon */}
                    <div className="w-full lg:w-1/4 flex items-start justify-center lg:justify-start">
                      <div className="relative max-w-[150px] lg:max-w-none">
                        <img
                          src="/assets/icons/why-choose-icon.svg"
                          alt=""
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-3/4 text-center lg:text-left">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                        Why Choose{" "}
                        <span className="text-[#3E5EC0]">EuroQuest ?</span>
                      </h2>
                      <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        Programs Covering{" "}
                        <span className="font-semibold">
                          20+ Training Categories
                        </span>{" "}
                        Methodologies Combining Theory And Application Tailored
                        Solutions For Organizations And Individuals Global
                        Presence In Cities Such As Dubai, London, Barcelona,
                        Istanbul, Vienna, Paris, Geneva, And More Strong Focus
                        On Emerging Topics Such As{" "}
                        <span className="font-semibold">
                          Artificial Intelligence, Sustainability, And Digital
                          Transformation
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Impact */}
            <section
              id="our-impact"
              className="bg-[#F8FBFF] md:py-11 py-8 scroll-mt-24"
            >
              <Container className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="Our"
                    highlight="Impact"
                    className="!mb-10"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center gap-4">
                      <img
                        src="/assets/icons/check.svg"
                        alt=""
                        className="w-14 h-14 md:w-16 md:h-16"
                      />
                      <h3 className="text-lg font-semibold text-black mb-2">
                        Organizations Improve Workforce Efficiency
                      </h3>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                      <img
                        src="/assets/icons/check.svg"
                        alt=""
                        className="w-14 h-14 md:w-16 md:h-16"
                      />
                      <h3 className="text-lg font-semibold text-black mb-2">
                        Professionals Gain Skills For Career Advancement
                      </h3>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                      <img
                        src="/assets/icons/check.svg"
                        alt=""
                        className="w-14 h-14 md:w-16 md:h-16"
                      />
                      <h3 className="text-lg font-semibold text-black mb-2">
                        Teams Achieve Better Collaboration And Results
                      </h3>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            {/* Future Outlook */}
            <section
              id="future-outlook"
              className="bg-white md:py-11 py-8 scroll-mt-24"
            >
              <div className="flex flex-col gap-12 relative z-10">
                <div className="w-full">
                  <SectionTitle
                    title="Future"
                    highlight="Outlook"
                    className="!mb-10"
                  />

                  {/* Future Outlook Content */}
                  <div className="border border-gray-200 rounded-2xl  md:p-5 p-2.5 flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/2">
                      <img
                        src="/assets/images/vr-future.png"
                        alt="Future technology with VR"
                        className="w-full h-auto rounded-xl lg:rounded-2xl"
                      />
                    </div>

                    {/* Right Side - Goals */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center lg:text-left">
                        We Aim To Expand Globally By:
                      </h3>

                      {/* Goal List */}
                      <ul className="space-y-4 md:space-y-6">
                        <li className="flex items-start gap-3 md:gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 md:mt-3"></div>
                          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            Strengthening Our Offerings In Artificial
                            Intelligence.
                          </p>
                        </li>

                        <li className="flex items-start gap-3 md:gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 md:mt-3"></div>
                          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            Sustainability, And Digital Transformation.
                          </p>
                        </li>

                        <li className="flex items-start gap-3 md:gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2 md:mt-3"></div>
                          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            Ensuring Our Clients Remain Future-Ready In A
                            Rapidly Evolving World.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>

      {/* Coverage Section */}
      {/* <section className="mt-10">
        <div className="w-full">
          <div className="relative w-full">
            <img 
              src="/assets/images/global-map2.png" 
              alt="Map showing our global presence" 
              className="w-full h-auto" 
            />
            <div className="absolute top-1/2 left-[15%] md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center gap-3 w-full md:w-auto px-4">
              <h2 className="font-semibold text-2xl md:text-4xl text-black">
                Geographical <span className="text-[#3E5EC0]">Coverage</span>
              </h2>
<<<<<<< HEAD
              <p className="text-[#7C7B7B]">find our services in 25 cities around the world</p>
=======
              <p className="text-[#5A5A5A]">find our services in 25 cities around the world</p>
>>>>>>> 61038dd4883310596ad10439a89641aaf8a2406a
              <Button className="max-w-[200px]">
                See All
                <i className="fa-solid fa-chevron-right ml-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
