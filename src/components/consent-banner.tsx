"use client";

import { useState } from "react";
import { getPostHogConsent, setPostHogConsent } from "@/lib/posthog";

export function ConsentBanner() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && getPostHogConsent() === null,
  );

  if (!visible) {
    return null;
  }

  const choose = (consent: "granted" | "denied") => {
    setPostHogConsent(consent);
    setVisible(false);
  };

  return (
    <div
      data-ph-exclude-click
      className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 flex flex-col gap-y-2.5 rounded-3xl border border-primary/10 bg-background/95 backdrop-blur-xl px-5 py-4 text-[16px] leading-6 text-secondary/90 shadow-xl"
    >
      <p>
        We use analytics cookies to understand how visitors use this site and
        improve it.
      </p>
      <div className="flex gap-x-2.5 justify-end">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="cursor-pointer rounded-full border border-primary/10 px-4 py-1 hover:opacity-60"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="cursor-pointer rounded-full bg-button-background text-button-foreground border border-button-border px-4 py-1 hover:opacity-60"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
