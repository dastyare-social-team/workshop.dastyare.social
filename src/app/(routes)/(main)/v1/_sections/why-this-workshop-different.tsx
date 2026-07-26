"use client";

import { Button } from "@/components/button";
import { ScrollArea } from "@/components/scroll-area";
import SectionWrapper from "@/components/section-wrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { CheckIcon, XIcon } from "lucide-react";

const LandingWhyThisWorkshopIsDifferentSectionV1 = () => {
  return (
    <SectionWrapper className="flex-1 justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col max-w-xl gap-y-2.5 items-center">
          <h2 className="text-center">
            Why This Workshop{" "}
            <span className="text-primary bg-primary/5">is different</span>
          </h2>
          <p>Not Another "Personal Branding" Webinar</p>
        </div>
        <div>
          <Button>Save My Seat — Now</Button>
        </div>

        {/* —— Comparison Table —— */}
        <ScrollArea className="w-full">
          <Table className="w-full max-w-5xl overflow-x-scroll select-none">
            <TableHeader className="border-b-2 border-primary/10 overflow-x-scroll">
              <TableRow className="hover:bg-transparent">
                <TableHead className="max-w-[150px] whitespace-normal break-words"></TableHead>
                <TableHead className="w-[150px] max-w-[150px] whitespace-normal break-words text-primary px-5 py-2.5 text-center text-[20px]">
                  this Personal Branding Workshop
                </TableHead>
                <TableHead className="w-[150px] max-w-[150px] whitespace-normal break-words px-5 py-2.5 text-center text-[20px]">
                  Generic Marketing Courses
                </TableHead>
                <TableHead className="w-[150px] max-w-[150px] whitespace-normal break-words px-5 py-2.5 text-center text-[20px]">
                  "Just Post More" Advice
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="border-l-2 border-primary/10">
              {/* —— row #1 —— */}
              <TableRow className="h-full">
                <TableCell className="px-4.5 py-2.5 max-w-[350px] whitespace-normal break-words text-[22px] border-r-2 border-primary/10 bg-primary/3">
                  built for technical founders, not marketers
                </TableCell>

                <TableCell className="px-5 py-2.5 text-primary text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <CheckIcon />
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <XIcon />
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <XIcon />
                  </div>
                </TableCell>
              </TableRow>

              {/* —— row #2 —— */}
              <TableRow>
                <TableCell className="px-4.5 py-2.5 max-w-[350px] whitespace-normal break-words text-[22px] border-r-2 border-primary/10 bg-primary/3">
                  teaches a campaign structure, not just content ideas
                </TableCell>

                <TableCell className="px-5 py-2.5 text-primary text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <CheckIcon />
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10 text-[20px]">
                  <div className="flex flex-1 justify-center items-center">
                    sometimes
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <XIcon />
                  </div>
                </TableCell>
              </TableRow>

              {/* —— row #3 —— */}
              <TableRow>
                <TableCell className="px-4.5 py-2.5 max-w-[350px] whitespace-normal break-words text-[22px] border-r-2 border-primary/10 bg-primary/3">
                  taught by someone who's shipped the product side too
                </TableCell>

                <TableCell className="px-5 py-2.5 text-primary text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <CheckIcon />
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10 text-[20px]">
                  <div className="flex flex-1 justify-center items-center">
                    rarely
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10 text-[20px]">
                  <div className="flex flex-1 justify-center items-center">
                    —
                  </div>
                </TableCell>
              </TableRow>

              {/* —— row #4 —— */}
              <TableRow>
                <TableCell className="px-4.5 py-2.5 max-w-[350px] whitespace-normal break-words text-[22px] border-r-2 border-primary/10 bg-primary/3">
                  runnable without a team or budget
                </TableCell>

                <TableCell className="px-5 py-2.5 text-primary text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <CheckIcon />
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <XIcon />
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <CheckIcon />
                  </div>
                </TableCell>
              </TableRow>

              {/* —— row #5 —— */}
              <TableRow>
                <TableCell className="px-4.5 py-2.5 max-w-[350px] whitespace-normal break-words text-[22px] border-r-2 border-primary/10 bg-primary/3">
                  Live Q&A on your specific brand
                </TableCell>

                <TableCell className="px-5 py-2.5 text-primary text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <CheckIcon />
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10 text-[20px]">
                  <div className="flex flex-1 justify-center items-center">
                    rarely
                  </div>
                </TableCell>

                <TableCell className="px-5 py-2.5 text-center border-r-2 border-primary/10">
                  <div className="flex flex-1 justify-center items-center">
                    <XIcon />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </SectionWrapper>
  );
};

export default LandingWhyThisWorkshopIsDifferentSectionV1;
