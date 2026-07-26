"use client";

import type { ReactNode } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/avatar";
import SectionWrapper from "@/components/section-wrapper";

const LandingSocialProofBlockNum2SectionV1 = () => {
  return (
    <SectionWrapper className="justify-center items-center md:pt-10 md:pb-10">
      <div className="max-w-md">
        <AvatarGroup className="justify-center mb-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Avatar key={index} size="lg">
              <AvatarImage
                src="https://github.com/omidshabab.png"
                alt="@omidshabab"
              />
              <AvatarFallback>OS</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>

        <div className="text-center text-[22px] leading-8">
          We didn't guess, We&nbsp;
          <span className="text-primary bg-primary/5">
            studied 127 Personal Brand Campaigns —
          </span>
          &nbsp;Elon Musk and Gary Vee among them — to prove what actually works
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingSocialProofBlockNum2SectionV1;
