import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import {
  ensurePostHogFunnelExists,
  trackAbTestAssignment,
} from "@/lib/posthog";

export const dynamic = "force-dynamic";

const AB_TEST_COOKIE_NAME = "home_ab_variant";

const chooseVariant = () => (Math.random() < 0.5 ? "v1" : "v2");

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const existingVariant = cookieStore.get(AB_TEST_COOKIE_NAME)?.value;
  const variant = existingVariant || chooseVariant();
  const visitorId = cookieStore.get("visitor_id")?.value || randomUUID();

  if (!existingVariant) {
    cookieStore.set(AB_TEST_COOKIE_NAME, variant, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  cookieStore.set("visitor_id", visitorId, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  void ensurePostHogFunnelExists();
  void trackAbTestAssignment(variant, undefined, visitorId);

  const redirectUrl = variant === "v2" ? "/v2" : "/v1";
  return NextResponse.redirect(new URL(redirectUrl, request.url));
}
