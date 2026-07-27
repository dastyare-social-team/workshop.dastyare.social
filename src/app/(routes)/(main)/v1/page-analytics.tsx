"use client";

import { useEffect } from "react";
import { capture } from "@/lib/posthog";

export default function LandingPageAnalytics() {
  useEffect(() => {
    capture("landing_page_viewed", {
      variant: "v1",
      page: "main_v1",
    });
  }, []);

  return null;
}
