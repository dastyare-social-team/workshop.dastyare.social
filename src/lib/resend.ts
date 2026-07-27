import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const EMAIL_FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";

export type EmailTemplateKey =
  | "newsletter-subscriber-welcome"
  | "workshop-confirmation";

export interface EmailTemplateVariables {
  firstName?: string;
  lastName?: string;
  name?: string;
  workshopName?: string;
  workshopDate?: string;
  ctaHref?: string;
}

export interface SendEmailPayload {
  to: string | string[];
  subject: string;
  template: EmailTemplateKey;
  react?: React.ReactElement;
  text?: string;
  variables?: EmailTemplateVariables;
}

export const EMAIL_TEMPLATES: Record<
  EmailTemplateKey,
  {
    subject: (variables?: EmailTemplateVariables) => string;
    previewText?: (variables?: EmailTemplateVariables) => string;
  }
> = {
  "newsletter-subscriber-welcome": {
    subject: () => "Welcome to the workshop community",
    previewText: () => "You’re on the list — welcome aboard.",
  },
  "workshop-confirmation": {
    subject: (variables) =>
      `You’re confirmed for ${variables?.workshopName || "the workshop"}`,
    previewText: () => "You’re confirmed for the workshop.",
  },
};
