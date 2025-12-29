import SectionTitle from "@/components/shared/section-title";
import React from "react";

export default function FutureOutlook() {
  return (
    <section
      id="future-outlook"
      className="scroll-mt-24 md:my-14 my-10"
    >
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <SectionTitle
            title="Future Outlook"
            highlight=""
            className="!mb-4"
          />

          {/* Future Outlook Content */}
          <div className="border border-gray-200 rounded-xl md:p-4 p-2 flex flex-col lg:flex-row gap-6">
            {/* Left Side - Image */}
            <div className="w-full lg:w-[300px]">
              <img
                src="/assets/images/vr-future.png"
                alt="Future technology with VR"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Right Side - Goals */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-black text-start">
               We aim to expand globally by strengthening our offerings in :
              </h3>

              {/* Goal List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Artificial Intelligence
                  </p>
                </li>

                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Sustainability
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full md:mt-[9px]"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Digital Transformation
                  </p>
                </li>
              </ul>
              <p className="md:text-base text-sm text-gray-700">ensuring our clients remain future-ready in a rapidly evolving world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
