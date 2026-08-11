"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const LandingHeroSectionV2 = () => {
  return (
    <SectionWrapper className="md:pt-0 border-0">
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <p className="text-[20px]">
            Build a Personal Brand that Actually Sells Your Products
          </p>
          <h2>
            Stop Posting and Hoping{" "}
            <span className="text-primary">— No More Content with No Plan</span>{" "}
            behind it
          </h2>
          <div className="flex flex-col gap-y-1">
            A hands-on workshop for founders who can build products but can't
            get anyone to notice it. You'll leave with a working personal brand
            and a campaign structure you can run the same week — Limited seats
          </div>
        </div>

        <div className="flex flex-col gap-y-2.5">
          <RegistrationForm
            primary_cta="Save My Seat — Now"
            cta_location="hero"
          />

          <div className="text-[18px] opacity-80 leading-6.5">
            no credit card required, seats limited, live Q&A included
          </div>
        </div>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/hero.webp"
          loading="eager"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingHeroSectionV2;
