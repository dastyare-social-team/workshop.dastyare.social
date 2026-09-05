"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const value_props = [
  "no cost to attend, no card required",
  "a campaign system, not just content tips",
  "Live Q&A on your actual brand",
];

const LandingFinalCTASectionV2 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  return (
    <SectionWrapper>
      <div className="max-w-xl pt-5 flex flex-col gap-y-2.5">
        <h3>
          Seats Are LIMITED
          <span className="text-primary">
            &nbsp;— Your Invisibility Problem
          </span>
          &nbsp;isn't going Anywhere on its OWN
        </h3>
        <p>
          You already know how to build. This is the missing half — get it in
          one session, and start running it the same week
        </p>

        <div className="flex flex-col gap-y-1">
          {value_props.map((value, index) => (
            <p key={index}>— {value}</p>
          ))}
        </div>

        <div className="pt-5">
          <RegistrationForm
            primary_cta="Save My Seat — Now"
            cta_location="final-cta"
            webhookUrl={webhookUrl}
          />
        </div>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/final-cta.webp"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingFinalCTASectionV2;
