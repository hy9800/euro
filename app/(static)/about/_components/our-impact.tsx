import SectionTitle from "@/components/shared/section-title";

export default function OurImpact() {
  return (
    <section id="our-impact" className="md:my-14 my-10">
      <SectionTitle title="Our Impact" highlight="" className="!mb-8" />
      <div className="bg-[#F8FBFF] md:py-12 py-10 rounded-xl">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-5">
            <div className="flex flex-col items-center text-center gap-3">
              <img
                src="/assets/icons/check.svg"
                alt=""
                className="md:w-12 md:h-12 w-8 h-8"
              />
              <h3 className="md:text-base text-sm font-semibold text-black mb-2">
                Our programs have helped organizations improve workforce
                efficiency
              </h3>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <img
                src="/assets/icons/check.svg"
                alt=""
                className="md:w-12 md:h-12 w-8 h-8"
              />
              <h3 className="md:text-base text-sm  font-semibold text-black mb-2">
                strengthen leadership
              </h3>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <img
                src="/assets/icons/check.svg"
                alt=""
                className="md:w-12 md:h-12 w-8 h-8"
              />
              <h3 className="md:text-base text-sm  font-semibold text-black mb-2">
                achieve measurable outcomes across multiple sectors
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
