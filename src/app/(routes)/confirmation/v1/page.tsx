import type { Metadata } from "next";
import WindowLayout from "@/components/window-layout";
import ConfirmationHeaderSectionV1 from "../v1/_sections/confirmation-header";
import ConfirmationFeaturedOfferSectionV1 from "../v1/_sections/featured-offer";
import ConfirmationCrossPromoteNum1SectionV1 from "../v1/_sections/cross-promote-num1";
import ConfirmationCrossPromoteNum2SectionV1 from "../v1/_sections/cross-promote-num2";

export const metadata: Metadata = {
  title: "Personal Brand Workshop — Build a Brand That Actually Sells",
  description:
    "A hands-on workshop for founders who can build the product but can't get anyone to notice it. Leave with a working content and campaign system you can run yourself. Limited seats.",
};

const Page = () => {
  return (
    <WindowLayout>
      <ConfirmationHeaderSectionV1 />
      <ConfirmationFeaturedOfferSectionV1 />
      <ConfirmationCrossPromoteNum1SectionV1
        headline="Not sure where your brand stands yet? Find out in 5 minutes"
        body="Before the workshop, get a quick read on your Personal Brand Health Score — no requirements required to take it"
        primary_cta="Get My Score — Now"
        primary_cta_url="https://quiz.dastyare.social"
      />
      <ConfirmationCrossPromoteNum2SectionV1
        headline="Want something to read before the workshop?"
        body="Grab the founder's guide to personal branding — positioning, content structure, and how to turn attention into demand"
        primary_cta="Get My Guide — Now"
        primary_cta_url="https://magnet.dastyare.social"
      />
    </WindowLayout>
  );
};

export default Page;
