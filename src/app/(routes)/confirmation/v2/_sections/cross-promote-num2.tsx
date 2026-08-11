"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";
import Link from "next/link";

const ConfirmationCrossPromoteNum2SectionV2 = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <h2>Want something to read before the workshop?</h2>
          <p>
            Grab the founder's guide to personal branding — positioning, content
            structure, and how to turn attention into demand
          </p>
        </div>

        <Link
          href="https://magnet.dastyare.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Get My Guide — Now</Button>
        </Link>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/magnet-cross-promote.webp"
          alt="guide"
          className="px-1 py-1 aspect-square object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default ConfirmationCrossPromoteNum2SectionV2;
