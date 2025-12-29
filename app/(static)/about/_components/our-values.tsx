import SectionTitle from "@/components/shared/section-title";
import React from "react";

export default function OurValues() {
  return (
    <section id="our-values" className="scroll-mt-24 md:my-14 my-10">
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <SectionTitle title="Our Values" highlight="" className="!mb-4" />
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Quality */}
            <div className="border border-[#C5C5C5] rounded-lg p-3">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/assets/icons/value-icon1.svg" alt="" />
                </div>
                <h3 className="text-base font-bold text-[#3E5EC0]">
                  Quality & Professionalism
                </h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-2">
                <p className="text-gray-600 text-sm font-medium">
                  We create every detail to deliver exceptional and lasting
                  results.
                </p>
              </div>
            </div>

            {/* Professionalism */}
            <div className="border border-[#C5C5C5] rounded-lg p-3">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/assets/icons/value-icon2.svg" alt="" />
                </div>
                <h3 className="text-base font-bold text-[#3E5EC0]">
                  Continuous Innovation
                </h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm font-medium">
                  We maintain high standards through discipline, respect and
                  reliability.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="border border-[#C5C5C5] rounded-lg p-3">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/assets/icons/value-icon3.svg" alt="" />
                </div>
                <h3 className="text-base font-bold text-[#3E5EC0]">
                  Transparency & Integrity
                </h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm font-medium">
                  We communicate openly, and make sure we are honest in every
                  decision we make.
                </p>
              </div>
            </div>

            {/* Results-Oriented Approach */}
            <div className="border border-[#C5C5C5] rounded-lg p-3">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/assets/icons/value-icon5.svg" alt="" />
                </div>
                <h3 className="text-base font-bold text-[#3E5EC0]">
                  Results-Oriented Approach
                </h3>
              </div>
              <div className="border-t border-[#C5C5C5] pt-4">
                <p className="text-gray-600 text-sm font-medium">
                  We focus on measurable results that create real, lasting
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
