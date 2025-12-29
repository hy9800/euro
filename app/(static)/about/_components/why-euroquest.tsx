export default function WhyEuroquest() {
  return (
    <section id="why-euroquest" className="md:my-14 my-10 scroll-mt-24">
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Left Side - Question Mark Icon */}
            <div className="w-full lg:w-3/4 flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Why EuroQuest International?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Programs covering 20+ training categories
                  </p>
                </li>

                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Practical methodologies combining theory and application
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Tailored solutions for organizations and individuals
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Global presence in cities such as Dubai, London, Barcelona,
                    Istanbul, Vienna, Paris, Geneva, and more
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Strong focus on emerging topics such as Artificial
                    Intelligence, Sustainability, and Digital Transformation
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Side - Content */}
            <div className="w-full max-w-[200px] flex items-start justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/assets/icons/why-choose-icon.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
