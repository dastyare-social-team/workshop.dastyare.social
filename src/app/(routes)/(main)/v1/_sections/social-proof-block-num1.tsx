"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";

const LandingSocialProofBlockNum1SectionV1 = ({
  text,
  cta,
}: {
  text: React.ReactNode;
  cta: string;
}) => {
  return (
    <SectionWrapper className="justify-center items-center md:pt-10 md:pb-10">
      <div className="flex flex-col gap-y-8 max-w-md items-center">
        <div className="text-center">{text}</div>
        <div>
          <Button>{cta}</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingSocialProofBlockNum1SectionV1;
