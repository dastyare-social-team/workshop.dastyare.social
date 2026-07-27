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

interface WorkshopConfirmationEmailProps {
  fontFaceCss: string;
  previewText?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  workshopName?: string;
  workshopDate?: string;
  ctaHref?: string;
}

function getDisplayName({
  firstName,
  lastName,
  name,
}: Pick<WorkshopConfirmationEmailProps, "firstName" | "lastName" | "name">) {
  if (name) {
    return name;
  }

  const parts = [firstName, lastName].filter(Boolean);
  return parts.length > 0 ? parts.join(" ") : "friend";
}

export function WorkshopConfirmationEmail({
  fontFaceCss,
  previewText = "You’re confirmed for the workshop.",
  firstName,
  lastName,
  name,
  workshopName = "the workshop",
  workshopDate = "soon",
  ctaHref = "https://dastyare.social",
}: WorkshopConfirmationEmailProps) {
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
            <Section
              style={{ padding: "40px 32px 24px", backgroundColor: "#fdf7f0" }}
            >
              <Preview>{previewText}</Preview>
              <Heading
                style={{
                  fontSize: "30px",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: emailPalette.text,
                  fontFamily: "Pally, Arial, sans-serif",
                  margin: "0 0 12px",
                }}
              >
                You&apos;re confirmed, {displayName}.
              </Heading>
              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: emailPalette.text,
                  margin: 0,
                }}
              >
                You&apos;ve been added to {workshopName}. We&apos;ll be sharing
                the details and next steps for your session on {workshopDate}.
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
                  Open workshop details
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
                If anything changes, we&apos;ll reach out with updates before
                the session begins.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default WorkshopConfirmationEmail;
