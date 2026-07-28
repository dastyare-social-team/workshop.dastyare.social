import SectionWrapper from "@/components/section-wrapper";
import { getTranslations } from "next-intl/server";
import { CrownIcon } from "lucide-react";
import RegistrationForm from "@/components/registration-form";

const LandingWhyThisWorkshopIsDifferentSectionV2 = async () => {
  const t = await getTranslations("why_this_workshop_different");

  return (
    <SectionWrapper className="flex flex-1 justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col max-w-xl gap-y-2.5 items-center">
          <h2 className="text-center">
            Why This Workshop{" "}
            <span className="text-primary bg-primary/5">is different</span>
          </h2>
          <p>Not Another "Personal Branding" Webinar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5">
          {/* —— ROW #1 — COL #1 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason one —</span>{" "}
              Built for Builders
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Not creators, not marketers. Founders who ship product and now
              need to be seen
            </span>
          </div>

          {/* —— ROW #1 — COL #2 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason two —</span>{" "}
              Campaign Structure, Not Content Tips
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              You leave with a system, not a list of "50 post ideas"
            </span>
          </div>

          {/* —— ROW #1 — COL #3 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason three —</span>{" "}
              No Budget Required
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Everything taught runs solo, with what you already have
            </span>
          </div>

          {/* —— ROW #2 — COL #1 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason four —</span>{" "}
              Live, Not Recorded-And-Forgotten
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Real Q&A on your actual brand, not generic slides
            </span>
          </div>

          {/* —— ROW #2 — COL #2 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason five —</span>{" "}
              Taught from Experience
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Built by someone who hit the invisibility wall himself and got out
              of it
            </span>
          </div>

          {/* —— ROW #2 — COL #3 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason six —</span>{" "}
              Short and Standalone-Useful
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Nothing here requires buying anything to work
            </span>
          </div>
        </div>

        <RegistrationForm primary_cta="Save My Seat — Now" />
      </div>
    </SectionWrapper>
  );
};

export default LandingWhyThisWorkshopIsDifferentSectionV2;
