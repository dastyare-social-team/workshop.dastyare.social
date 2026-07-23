import type { MDXComponents } from "mdx/types";

import { Button } from "@/components/button";

/* —— Landing Page — V1 —— */
import LandingHeroSectionV1 from "@/app/(routes)/(main)/v1/_sections/hero";
import LandingProblemSectionV1 from "@/app/(routes)/(main)/v1/_sections/problem";
import LandingSocialProofBlockNum1SectionV1 from "@/app/(routes)/(main)/v1/_sections/social-proof-block-num1";
import LandingThreeDreamOutcomeBlocksSectionV1 from "@/app/(routes)/(main)/v1/_sections/three-dream-outcome-blocks";
import LandingSocialProofBlockNum2SectionV1 from "@/app/(routes)/(main)/v1/_sections/social-proof-block-num2";
import LandingWhyThisWorkshopIsDifferentSectionV1 from "@/app/(routes)/(main)/v1/_sections/why-this-workshop-different";
import LandingHowItWorksSectionV1 from "@/app/(routes)/(main)/v1/_sections/how-it-works";
import LandingFAQSectionV1 from "@/app/(routes)/(main)/v1/_sections/faq";
import LandingFinalCTASectionV1 from "@/app/(routes)/(main)/v1/_sections/final-cta";

/* —— Landing Page — V2 —— */
import LandingHeroSectionV2 from "@/app/(routes)/(main)/v2/_sections/hero";
import LandingSocialProofGridSectionV2 from "@/app/(routes)/(main)/v2/_sections/social-proof-grid";
import LandingProblemSectionV2 from "@/app/(routes)/(main)/v2/_sections/problem";
import LandingThreeDreamOutcomeBlocksSectionV2 from "@/app/(routes)/(main)/v2/_sections/three-dream-outcome-blocks";
import LandingSocialProofBlockSectionV2 from "@/app/(routes)/(main)/v2/_sections/social-proof-block";
import LandingWhyThisWorkshopIsDifferentSectionV2 from "@/app/(routes)/(main)/v2/_sections/why-this-workshop-different";
import LandingHowItWorksSectionV2 from "@/app/(routes)/(main)/v2/_sections/how-it-works";
import LandingMeetTheHostSectionV2 from "@/app/(routes)/(main)/v2/_sections/meet-the-host";
import LandingFAQSectionV2 from "@/app/(routes)/(main)/v2/_sections/faq";
import LandingFinalCTASectionV2 from "@/app/(routes)/(main)/v2/_sections/final-cta";

/* —— Confirmation Page — V1 —— */
import ConfirmationHeaderSectionV1 from "@/app/(routes)/confirmation/v1/_sections/confirmation-header";
import ConfirmationFeaturedOfferSectionV1 from "@/app/(routes)/confirmation/v1/_sections/featured-offer";
import ConfirmationCrossPromoteNum1SectionV1 from "@/app/(routes)/confirmation/v1/_sections/cross-promote-num1";
import ConfirmationCrossPromoteNum2SectionV1 from "@/app/(routes)/confirmation/v1/_sections/cross-promote-num2";

/* —— Confirmation Page — V2 —— */
import ConfirmationHeaderSectionV2 from "@/app/(routes)/confirmation/v2/_sections/confirmation-header";
import ConfirmationFeaturedOfferSectionV2 from "@/app/(routes)/confirmation/v2/_sections/featured-offer";
import ConfirmationCrossPromoteNum1SectionV2 from "@/app/(routes)/confirmation/v2/_sections/cross-promote-num1";
import ConfirmationCrossPromoteNum2SectionV2 from "@/app/(routes)/confirmation/v2/_sections/cross-promote-num2";

export const mdxComponents: MDXComponents = {
  Button,

  /* —— Landing Page — V1 —— */
  LandingHeroSectionV1,
  LandingProblemSectionV1,
  LandingSocialProofBlockNum1SectionV1,
  LandingThreeDreamOutcomeBlocksSectionV1,
  LandingSocialProofBlockNum2SectionV1,
  LandingWhyThisWorkshopIsDifferentSectionV1,
  LandingHowItWorksSectionV1,
  LandingFAQSectionV1,
  LandingFinalCTASectionV1,

  /* —— Landing Page — V2 —— */
  LandingHeroSectionV2,
  LandingSocialProofGridSectionV2,
  LandingProblemSectionV2,
  LandingThreeDreamOutcomeBlocksSectionV2,
  LandingSocialProofBlockSectionV2,
  LandingWhyThisWorkshopIsDifferentSectionV2,
  LandingHowItWorksSectionV2,
  LandingMeetTheHostSectionV2,
  LandingFAQSectionV2,
  LandingFinalCTASectionV2,

  /* —— Confirmation Page — V1 —— */
  ConfirmationHeaderSectionV1,
  ConfirmationFeaturedOfferSectionV1,
  ConfirmationCrossPromoteNum1SectionV1,
  ConfirmationCrossPromoteNum2SectionV1,

  /* —— Confirmation Page — V2 —— */
  ConfirmationHeaderSectionV2,
  ConfirmationFeaturedOfferSectionV2,
  ConfirmationCrossPromoteNum1SectionV2,
  ConfirmationCrossPromoteNum2SectionV2,
};
