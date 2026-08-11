"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const LandingMeetTheHostSectionV2 = () => {
  return (
    <SectionWrapper>
      <div className="max-w-xl pt-5 flex flex-col gap-y-2.5">
        <h3>
          Taught by Someone
          <span className="text-primary">&nbsp;— Who's LIVED</span>&nbsp;this
          Problem
        </h3>
        <p>
          i'm a self-taught technical founder. i can build almost anything — and
          for a long time, almost nobody knew it. This workshop is the system I
          built to fix that for myself, taught the way I wish someone had taught
          it to me
        </p>

        <div className="pt-5">
          <RegistrationForm primary_cta="Save My Seat — Now" />
        </div>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/meet-the-host.webp"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingMeetTheHostSectionV2;
