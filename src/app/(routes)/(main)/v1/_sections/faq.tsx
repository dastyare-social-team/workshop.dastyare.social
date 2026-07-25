"use client";

import SectionWrapper from "@/components/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Button } from "@/components/button";

const LandingFAQSectionV1 = () => {
  return (
    <SectionWrapper className="justify-center items-center md:pt-10 md:pb-10">
      <div className="max-w-2xl w-full flex flex-col items-center gap-y-2.5">
        <div className="flex flex-col gap-y-1.5 pb-5 max-w-xl">
          <h2 className="text-center">
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            pariatur facere molestias ad molestiae ducimus eligendi temporibus
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="q1"
          className="max-w-5xl w-full"
        >
          <AccordionItem value="q1">
            <AccordionTrigger>is there a cost to attend?</AccordionTrigger>
            <AccordionContent>
              No cost to attend — just register, no credit card required
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              is this going to be a sales pitch the whole time?
            </AccordionTrigger>
            <AccordionContent>
              The workshop teaches the content and campaign system in full
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>
              do I need an existing audience to benefit from this?
            </AccordionTrigger>
            <AccordionContent>
              No. This is built for founders starting from zero or near-zero
              visibility
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>what if I can't attend live?</AccordionTrigger>
            <AccordionContent>
              No. This is built for founders starting from zero or near-zero
              visibility
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>how long is the workshop?</AccordionTrigger>
            <AccordionContent>
              No. This is built for founders starting from zero or near-zero
              visibility
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="max-w-md text-center pt-5 flex flex-col gap-y-2.5 items-center">
          <h3>
            still have <span className="text-primary">questions? —</span>
          </h3>
          <p className="text-[18px]">
            Can't find what you're looking for? Our team is here to help!
            Whether you need clarification, have a specific question, or want to
            learn more about our services, we'd love to hear from you. Let's get
            you the answers you need
          </p>

          <div className="pt-5">
            <Button variant="secondary" className="text-[18px] px-3.5 border">
              Contact Us — Now
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingFAQSectionV1;
