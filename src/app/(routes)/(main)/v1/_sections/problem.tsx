"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const LandingProblemSectionV1 = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <h2>
            You Built sth real
            <span className="text-primary"> — But Your Personal Brand</span> is
            three random Posts and a Stalled LinkedIn
          </h2>
          <p>
            You know how to build. You don't know what to post, how often, or
            why any of it should turn into a sale
          </p>
        </div>

        <RegistrationForm primary_cta="Save My Seat — Now" />
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/problem.webp"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingProblemSectionV1;
