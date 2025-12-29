import SectionTitle from "@/components/shared/section-title";

export default function OurAchievements() {
  return (
    <section id="our-achievements" className="scroll-mt-24 md:my-14 my-10">
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <SectionTitle
            title="Our Achievements"
            highlight=""
            className="!mb-8"
          />

          {/* Achievements Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center ">
            {/* Right Side - Achievement Stats */}
            <div className="w-full flex flex-col md:gap-10 gap-8">
              {/* Top Section - Network Info */}
              <div className="flex flex-col text-center justify-center items-center gap-3">
                <div className="flex-shrink-0">
                  <img
                    src="/assets/icons/achievement-icon.svg"
                    alt=""
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-black leading-relaxed">
                    A global network of internationally certified trainers
                  </h3>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 md:gap-10">
                {/* 25+ Years */}
                <div className="flex flex-col text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00B67A] mb-2">
                    25+
                  </div>
                  <p className="text-sm md:text-base font-semibold text-black">
                    Over 25 years of expertise
                  </p>
                </div>

                {/* 1000+ Programs */}
                <div className="flex flex-col text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00B67A] mb-2">
                    1000+
                  </div>
                  <p className="text-sm md:text-base font-semibold text-black">
                    1000+ specialized training programs delivered
                  </p>
                </div>

                {/* 15+ Cities */}
                <div className="flex flex-col text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00B67A] mb-2">
                    15+
                  </div>
                  <p className="text-sm md:text-base font-semibold text-black">
                    Training presence in 15+ international cities and capitals
                  </p>
                </div>

                {/* 1000+ Participants */}
                <div className="flex flex-col text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00B67A] mb-2">
                    1000+
                  </div>
                  <p className="text-sm md:text-base font-semibold text-black">
                    Thousands of participants trained across industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
