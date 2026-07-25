import type { Metadata } from "next";
import WindowLayout from "@/components/window-layout";
import ConfirmationHeaderSectionV2 from "../v2/_sections/confirmation-header";
import ConfirmationFeaturedOfferSectionV2 from "../v2/_sections/featured-offer";
import ConfirmationCrossPromoteNum1SectionV2 from "../v2/_sections/cross-promote-num1";
import ConfirmationCrossPromoteNum2SectionV2 from "../v2/_sections/cross-promote-num2";

export const metadata: Metadata = {
  title: "Personal Brand Workshop — Build a Brand That Actually Sells",
  description:
    "A hands-on workshop for founders who can build the product but can't get anyone to notice it. Leave with a working content and campaign system you can run yourself. Limited seats.",
};

const Page = () => {
  return (
    <WindowLayout>
      <ConfirmationHeaderSectionV2 />
      <ConfirmationFeaturedOfferSectionV2 />
      <ConfirmationCrossPromoteNum1SectionV2 />
      <ConfirmationCrossPromoteNum2SectionV2 />
    </WindowLayout>
  );
};

export default Page;
