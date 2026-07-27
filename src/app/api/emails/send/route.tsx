import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import { NewsletterSubscriberWelcomeEmail } from "../../../../../emails/newsletter-subscriber-welcome";
import { WorkshopConfirmationEmail } from "../../../../../emails/workshop-confirmation";
import { EMAIL_FROM, EMAIL_TEMPLATES, resend } from "@/lib/resend";
import { getPallyFontFaceCss } from "@/lib/email-font";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, template, variables = {}, subject, text } = body;

    if (!to || !template) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: to and template" },
        { status: 400 },
      );
    }

    if (!resend) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY is not configured" },
        { status: 500 },
      );
    }

    const fontFaceCss = await getPallyFontFaceCss();

    const emailHtml = await render(
      template === "newsletter-subscriber-welcome" ? (
        <NewsletterSubscriberWelcomeEmail
          fontFaceCss={fontFaceCss}
          firstName={variables.firstName}
          lastName={variables.lastName}
          name={variables.name}
          ctaHref={variables.ctaHref}
        />
      ) : (
        <WorkshopConfirmationEmail
          fontFaceCss={fontFaceCss}
          firstName={variables.firstName}
          lastName={variables.lastName}
          name={variables.name}
          workshopName={variables.workshopName}
          workshopDate={variables.workshopDate}
          ctaHref={variables.ctaHref}
        />
      ),
      { pretty: true },
    );

    const templateKey = template as keyof typeof EMAIL_TEMPLATES;

    const resolvedSubject =
      subject || EMAIL_TEMPLATES[templateKey].subject(variables);

    const result = await resend.emails.send({
      from: EMAIL_FROM,
      to: Array.isArray(to) ? to : [to],
      subject: resolvedSubject,
      html: emailHtml,
      text: text || resolvedSubject,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Failed to send email", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
