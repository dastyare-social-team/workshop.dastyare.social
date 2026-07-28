import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Personal Brand Workshop — Build a Brand That Actually Sells",
  description:
    "A hands-on workshop for founders who can build the product but can't get anyone to notice it. Leave with a working content and campaign system you can run yourself. Limited seats.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return children;
}
