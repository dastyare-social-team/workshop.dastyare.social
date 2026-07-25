"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";

const LandingHeroSectionV1 = ({
  headline,
  subheadline,
  value_props = [],
  primary_cta,
  friction_reducer_line,
}: {
  headline: React.ReactNode;
  subheadline: string;
  value_props: Array<string>;
  primary_cta: string;
  friction_reducer_line: string;
}) => {
  return (
    <SectionWrapper className="pt-0 border-0">
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <p className="text-[20px]">{subheadline}</p>
          <h2>{headline}</h2>
          <div className="flex flex-col gap-y-1">
            {value_props.map((value, index) => (
              <p key={index}>— {value}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2.5">
          <div>
            <Button>{primary_cta}</Button>
          </div>
          <div className="text-[18px] opacity-80 leading-6.5">
            {friction_reducer_line}
          </div>
        </div>
      </div>

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5"></div>
    </SectionWrapper>
  );
};

export default LandingHeroSectionV1;
