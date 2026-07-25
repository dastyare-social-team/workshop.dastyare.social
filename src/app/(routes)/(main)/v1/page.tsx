import type { Metadata } from "next";
import WindowLayout from "@/components/window-layout";
import LandingHeroSectionV1 from "./_sections/hero";
import LandingProblemSectionV1 from "./_sections/problem";
import LandingSocialProofBlockNum1SectionV1 from "./_sections/social-proof-block-num1";
import LandingThreeDreamOutcomeBlocksSectionV1 from "./_sections/three-dream-outcome-blocks";
import LandingSocialProofBlockNum2SectionV1 from "./_sections/social-proof-block-num2";
import LandingWhyThisWorkshopIsDifferentSectionV1 from "./_sections/why-this-workshop-different";
import LandingHowItWorksSectionV1 from "./_sections/how-it-works";
import LandingFAQSectionV1 from "./_sections/faq";
import LandingFinalCTASectionV1 from "./_sections/final-cta";

export const metadata: Metadata = {
  title: "Personal Brand Workshop — Build a Brand That Actually Sells",
  description:
    "A hands-on workshop for founders who can build the product but can't get anyone to notice it. Leave with a working content and campaign system you can run yourself. Limited seats.",
};

const Page = () => {
  return (
    <WindowLayout>
      <LandingHeroSectionV1
        headline={
          <>
            A hands-on&nbsp;
            <span className="text-primary">Workshop for Founders</span> who can
            build Products but can't get Anyone to notice it. You'll leave with
            a working{" "}
            <span className="text-primary">Personal Brand and a Campaign</span>{" "}
            structure you can run the same week — Limited Seats
          </>
        }
        subheadline="Build a Personal Brand that Actually Sells Your Products"
        value_props={[
          "what to actually post, so strangers become an audience",
          "how to turn that audience into a campaign, not just content",
          "how to run it without a marketing team or a media budget",
        ]}
        primary_cta="Save My Seat — Now"
        friction_reducer_line="no credit card required, seats limited, live Q&A included"
      />

      <LandingSocialProofBlockNum2SectionV1
        text={
          <>
            We didn't guess, We&nbsp;
            <span className="text-primary bg-primary/5">
              studied 127 Personal Brand Campaigns —
            </span>
            &nbsp;Elon Musk and Gary Vee among them — to prove what actually
            works
          </>
        }
      />

      <LandingProblemSectionV1
        header={
          <>
            You Built sth real
            <span className="text-primary"> — But Your Personal Brand</span> is
            three random Posts and a Stalled LinkedIn
          </>
        }
        body="You know how to build. You don't know what to post, how often, or why any of it should turn into a sale."
        unique_benefit="This workshop gives you that system — what to build, what to post, and how to turn posting into a repeatable campaign that leads somewhere"
        cta="Save My Seat — Now"
        image="image"
      />

      <LandingSocialProofBlockNum1SectionV1
        text={
          <>
            built from&nbsp;
            <span className="text-primary bg-primary/5">
              Studying 127 Personal Brand Campaigns — including
            </span>
            &nbsp;Elon Musk, Gary Vee, and others — to find the patterns&nbsp;
            <span className="text-primary bg-primary/5">
              that actually drive demand,
            </span>
            &nbsp; not just more views
          </>
        }
        cta="Save My Seat — Now"
      />

      <LandingThreeDreamOutcomeBlocksSectionV1 />

      <LandingWhyThisWorkshopIsDifferentSectionV1 />

      <LandingHowItWorksSectionV1 />

      <LandingFAQSectionV1 />

      <LandingFinalCTASectionV1
        headline={
          <>
            Seats Are LIMITED
            <span className="text-primary">
              &nbsp;— Your Invisibility Problem
            </span>
            &nbsp;isn't going Anywhere on its OWN
          </>
        }
        body={
          <>
            You already know how to build. This is the missing half — get it in
            one session, and start running it the same week
          </>
        }
        value_props={[
          "no cost to attend, no card required",
          "a campaign system, not just content tips",
          "Live Q&A on your actual brand",
        ]}
        cta="Save My Seat — Now"
      />
    </WindowLayout>
  );
};

export default Page;
