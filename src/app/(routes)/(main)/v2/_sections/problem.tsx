"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingProblemSectionV2 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  return (
    <SectionWrapper className="justify-center">
      <div className="flex flex-col flex-1 items-center gap-y-8">
        <div className="flex flex-col items-center text-center gap-y-1.5">
          <h2 className="max-w-xl">
            You Built sth real
            <span className="text-primary"> — But Your Personal Brand</span> is
            three random Posts and a Stalled LinkedIn
          </h2>
          <p className="max-w-2xl">
            You know how to build. You don't know what to post, how often, or
            why any of it should turn into a sale. So you either post nothing,
            or you post inconsistently and watch it go nowhere — and conclude
            "personal branding doesn't work for me," when the real problem is
            you never had a system. Content without a campaign structure behind
            it is just noise
          </p>

          <p className="max-w-2xl">
            — this workshop gives you that system — what to build, what to post,
            and how to turn posting into a repeatable campaign that leads
            somewhere
          </p>
        </div>

        <RegistrationForm primary_cta="Save My Seat — Now" webhookUrl={webhookUrl} />
      </div>
    </SectionWrapper>
  );
};

export default LandingProblemSectionV2;
