"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import Link from "next/link";

const ConfirmationCrossPromoteNum2SectionV1 = ({
  headline,
  body,
  primary_cta,
  primary_cta_url,
}: {
  headline: string;
  body: string;
  primary_cta: string;
  primary_cta_url: string;
}) => {
  return (
    <SectionWrapper>
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <h2>{headline}</h2>
          <p>{body}</p>
        </div>

        <Link href={primary_cta_url} target="_blank" rel="noopener noreferrer">
          <Button>{primary_cta}</Button>
        </Link>
      </div>

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5"></div>
    </SectionWrapper>
  );
};

export default ConfirmationCrossPromoteNum2SectionV1;
