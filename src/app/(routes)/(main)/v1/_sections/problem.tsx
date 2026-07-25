"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";

const LandingProblemSectionV1 = ({
  header,
  body,
  unique_benefit,
  cta,
  image,
}: {
  header: string;
  body: string;
  unique_benefit: string;
  cta: string;
  image: string;
}) => {
  return (
    <SectionWrapper>
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <h2>{header}</h2>
          <p>{body}</p>
        </div>

        <div>
          <Button>{cta}</Button>
        </div>
      </div>

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5">
        {image}
      </div>
    </SectionWrapper>
  );
};

export default LandingProblemSectionV1;
