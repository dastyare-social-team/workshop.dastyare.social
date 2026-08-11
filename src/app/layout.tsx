import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { pally } from "@/lib/fonts";
import { PostHogProvider } from "@/components/posthog-provider";
import { PageAnalytics } from "@/components/page-analytics";
import { ConsentBanner } from "@/components/consent-banner";

export const metadata: Metadata = {
  title: {
    default: "Workshop — Dastyare Social",
    template: "%s — Dastyare Social",
  },
  description: "workshop.dastyare.social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(pally.className, "antialiased tracking-tighter")}>
        <PostHogProvider>
          {children}
          <PageAnalytics />
          <ConsentBanner />
        </PostHogProvider>
      </body>
    </html>
  );
}
