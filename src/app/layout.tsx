import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { pally } from "@/lib/fonts";
import { PostHogProvider } from "@/components/posthog-provider";

export const metadata: Metadata = {
  title: {
    default: "Workshop — Dastyare Social",
    template: "%s — Workshop — Dastyare Social",
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
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
