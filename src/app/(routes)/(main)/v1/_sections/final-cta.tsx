"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";

const LandingFinalCTASectionV1 = ({
  headline,
  body,
  value_props = [],
  cta,
}: {
  headline: React.ReactNode;
  body: React.ReactNode;
  value_props: Array<string>;
  cta: string;
}) => {
  return (
    <SectionWrapper className="justify-center items-center">
      <div className="max-w-xl text-center pt-5 flex flex-col gap-y-2.5 items-center">
        <h3>{headline}</h3>
        <p>{body}</p>

        <div className="flex flex-col gap-y-1">
          {value_props.map((value, index) => (
            <p key={index}>— {value}</p>
          ))}
        </div>

        <div className="pt-5">
          <Button>{cta}</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingFinalCTASectionV1;
