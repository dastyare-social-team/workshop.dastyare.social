import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const emailPalette = {
  background: "#f9f4ee",
  card: "#fffdf9",
  text: "#2d2018",
  muted: "#7d6859",
  primary: "#ea580c",
  border: "#efe2d4",
};

interface NewsletterSubscriberWelcomeEmailProps {
  fontFaceCss: string;
  previewText?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  ctaHref?: string;
}

function getDisplayName({
  firstName,
  lastName,
  name,
}: Pick<
  NewsletterSubscriberWelcomeEmailProps,
  "firstName" | "lastName" | "name"
>) {
  if (name) {
    return name;
  }

  const parts = [firstName, lastName].filter(Boolean);
  return parts.length > 0 ? parts.join(" ") : "friend";
}

export function NewsletterSubscriberWelcomeEmail({
  fontFaceCss,
  previewText = "You’re on the list — welcome aboard.",
  firstName,
  lastName,
  name,
  ctaHref = "https://dastyare.social",
}: NewsletterSubscriberWelcomeEmailProps) {
  const displayName = getDisplayName({ firstName, lastName, name });

  return (
    <Html>
      <Tailwind>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: fontFaceCss }} />
          <style>{`body, table, td { font-family: Pally, Arial, sans-serif; }`}</style>
        </Head>
        <Body
          style={{
            margin: 0,
            padding: 0,
            backgroundColor: emailPalette.background,
          }}
        >
          <Container
            style={{
              maxWidth: "640px",
              margin: "32px auto",
              backgroundColor: emailPalette.card,
              borderRadius: "24px",
              overflow: "hidden",
              border: `1px solid ${emailPalette.border}`,
              // boxShadow: "0 20px 40px rgba(45, 32, 24, 0.08)",
            }}
          >
            <Section style={{ padding: "40px 32px 24px" }}>
              <Preview>{previewText}</Preview>
              <Heading
                style={{
                  fontSize: "32px",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: emailPalette.text,
                  fontFamily: "Pally, Arial, sans-serif",
                  margin: "0 0 12px",
                }}
              >
                Welcome to the community, {displayName}.
              </Heading>
              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: emailPalette.text,
                  margin: 0,
                }}
              >
                Thanks for joining our newsletter. You&apos;ll now receive
                updates, stories, and workshop news straight to your inbox.
              </Text>
              <Section style={{ marginTop: "24px" }}>
                <Button
                  href={ctaHref}
                  style={{
                    backgroundColor: emailPalette.primary,
                    color: "#ffffff",
                    borderRadius: "999px",
                    padding: "12px 24px",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontFamily: "Pally, Arial, sans-serif",
                  }}
                >
                  Visit the workshop hub
                </Button>
              </Section>
            </Section>
            <Hr style={{ borderColor: emailPalette.border, margin: 0 }} />
            <Section style={{ padding: "24px 32px 40px" }}>
              <Text
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: emailPalette.muted,
                  margin: 0,
                }}
              >
                We&apos;re excited to have you here. If you ever want to stop
                receiving updates, you can unsubscribe at any time.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default NewsletterSubscriberWelcomeEmail;
