import type { Metadata } from "next";
import WindowLayout from "@/components/window-layout";
import LandingHeroSectionV2 from "./_sections/hero";
import LandingSocialProofGridSectionV2 from "./_sections/social-proof-grid";
import LandingProblemSectionV2 from "./_sections/problem";
import LandingThreeDreamOutcomeBlocksSectionV2 from "./_sections/three-dream-outcome-blocks";
import LandingSocialProofBlockSectionV2 from "./_sections/social-proof-block";
import LandingWhyThisWorkshopIsDifferentSectionV2 from "./_sections/why-this-workshop-different";
import LandingHowItWorksSectionV2 from "./_sections/how-it-works";
import LandingMeetTheHostSectionV2 from "./_sections/meet-the-host";
import LandingFAQSectionV2 from "./_sections/faq";
import LandingFinalCTASectionV2 from "./_sections/final-cta";

export const metadata: Metadata = {
  title: "Personal Brand Workshop — Build a Brand That Actually Sells",
  description:
    "A hands-on workshop for founders who can build the product but can't get anyone to notice it. Leave with a working content and campaign system you can run yourself. Limited seats.",
};

const Page = () => {
  return (
    <WindowLayout>
      <LandingHeroSectionV2 />
      <LandingSocialProofGridSectionV2 />
      <LandingProblemSectionV2 />
      <LandingThreeDreamOutcomeBlocksSectionV2 />
      <LandingSocialProofBlockSectionV2 />
      <LandingWhyThisWorkshopIsDifferentSectionV2 />
      <LandingHowItWorksSectionV2 />
      <LandingMeetTheHostSectionV2 />
      <LandingFAQSectionV2 />
      <LandingFinalCTASectionV2 />
    </WindowLayout>
  );
};

export default Page;
