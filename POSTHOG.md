# PostHog Setup Guide

This project is wired to PostHog for:

- landing page **A/B testing** (PostHog Experiments / feature flags)
- **funnels** for the registration flow
- **every button / link / outbound link** tracking
- **session replay**, scroll depth and engagement
- a lightweight **consent gate**

The code already sends all the events below. What's left is the one-time
PostHog dashboard setup (create the flag + funnels). Follow the steps in order.

---

## 1. Environment variables

Everything lives in `.env` (copy from `.env.example`):

```
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_xxxxx   # from PostHog > Project settings > Project API key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com   # your region (us.eu...)

# Optional. The feature-flag key used for the landing A/B test.
# Defaults to "home-page-variant" if unset.
POSTHOG_LANDING_FLAG_KEY=home-page-variant
```

Notes:

- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` is the **project** API key (`phc_...`).
  It is public and safe to expose client-side.
- The old `POSTHOG_API_KEY` (personal key, `phx_...`) and `POSTHOG_PROJECT_ID`
  are no longer needed — funnel creation was removed from the request path.

## 2. Create the landing A/B experiment

The home page (`/`) evaluates the flag `home-page-variant` server-side and
redirects visitors to `/v1` or `/v2`. Create it once in PostHog:

1. In PostHog go to **Experiments → New experiment**.
2. **Name:** `Home page A/B test`.
3. **Feature flag key:** must be `home-page-variant` (or set
   `POSTHOG_LANDING_FLAG_KEY` to your own key).
4. **Variants:** add two variants with the **exact** values `v1` and `v2`.
5. **Rollout:** 100% roll out to everyone, split 50 / 50 between the variants
   (or any split you like).
6. **Primary metric:** create the funnel from step 3 and attach it, so PostHog
   computes significance automatically.
7. **Targeting:** keep it simple — "Everyone" is fine.
8. **Launch** the experiment.

How the code maps the flag value:

| flag value | page |
| --- | --- |
| `v1`, `control`, `false` | `/v1` |
| `v2`, `test`, `true` | `/v2` |
| anything else / not created | `/v1` (fallback) |

If the flag doesn't exist yet, the site still works — it falls back to `/v1`.

Assignments are recorded automatically by PostHog (`$feature_flag_called`),
server-side with the visitor's `visitor_id`. The client is initialised with the
same id, so conversions link back to the assignment correctly.

## 3. Create the funnels

Go to **Insights → New insight → Funnel** and build:

**A. Registration funnel** (the main one):

1. `landing_page_viewed`
2. `registration_cta_clicked`
3. `registration_form_continue`
4. `registration_form_submit_success`
5. `confirmation_page_viewed`

Set the window to 14 days and "Conversion rate = Total". This is the funnel to
attach to the experiment in step 2.

**B. Landing engagement** (optional):

1. `$pageview`
2. `scroll_depth_50`
3. `registration_cta_clicked`

**C. CTA performance** (optional):

1. `registration_cta_clicked` (filter by property `cta_location`)
2. `registration_form_submit_success`

This shows which section (hero / how-it-works / final-cta) actually converts.

## 4. Full event list

Everything the app currently captures. Use these when building insights.

**Page lifecycle** (auto, from `PageAnalytics`)

| Event | Properties |
| --- | --- |
| `$pageview` | `page`, `pathname`, `search` |
| `$pageleave` | auto from posthog-js |
| `landing_page_viewed` | `variant` (v1/v2), `page` |
| `confirmation_page_viewed` | `variant`, `page` |
| `page_engaged` | `pathname`, `duration_seconds` |
| `scroll_depth_25` / `_50` / `_75` / `_100` | `pathname` |

**Registration flow**

| Event | Properties |
| --- | --- |
| `registration_cta_clicked` | `variant`, `cta_location` (hero / how-it-works / final-cta) |
| `registration_form_validation_failed` | `reason` (name/email/phone), `stage` (continue/submit) |
| `registration_form_continue` | `variant`, `cta_location` |
| `registration_form_submit_attempt` | `variant`, `cta_location`, `has_phone` |
| `registration_form_submit_success` | `variant`, `cta_location`, `has_phone` |
| `registration_form_webhook_missing` | — |

**Generic clicks** (every button and link, auto from `PostHogProvider`)

| Event | Properties |
| --- | --- |
| `button_clicked` | `text`, `variant`, `pathname`, `page` |
| `link_clicked` | `href`, `link_text`, `pathname` |
| `outbound_link_clicked` | `url`, `link_text`, `pathname` |

Covers footer social links, header logo, confirmation cross-promote buttons
("Get My Score", "Get My Guide"), and the FAQ contact button.

**FAQ**

| Event | Properties |
| --- | --- |
| `faq_question_opened` | `question` (q1–q6), `pathname` |

**Errors**

| Event | Properties |
| --- | --- |
| `client_error` | `message`, `filename`, `lineno`, `colno` |
| `client_unhandled_rejection` | `reason` |
| `$exception` (via captureException) | `context`, `variant`, `cta_location` |

**People / user properties** (set with `identify()`)

- `email`, `name`, `registered`, `stage`

## 5. Session replay

Replay is already enabled in `src/lib/posthog.ts` with full masking
(`mask_all_text` + `mask_all_element_attributes`), so emails / names / phones
typed into the form are hidden.

To watch sessions: PostHog → **Recordings**. Replay only records after the
visitor accepts the consent banner (see step 6).

## 6. Consent

- A small consent banner (`src/components/consent-banner.tsx`) is shown once to
  visitors who have no `posthog_consent` cookie.
- Until they click **Accept**, PostHog runs in opt-out mode: no events, no
  replay, no cookies are sent.
- Clicking **Accept** calls `setPostHogConsent("granted")` and turns capturing
  on for the rest of the session. **Decline** keeps it off.
- To change the wording or styling, edit the banner component. To remove the
  gate entirely, delete `<ConsentBanner />` from `src/app/layout.tsx` and the
  consent logic in `src/lib/posthog.ts`.

## 7. Verify it works (dev)

1. Run `bun dev` and open `http://localhost:4678/` (or the port in `package.json`).
2. Accept the consent banner.
3. In the browser console you'll see PostHog debug logs (enabled in dev) with
   `$pageview`, `landing_page_viewed`, and on click `button_clicked` etc.
4. PostHog → **Live events** should show them within seconds.
5. Visiting `/` again with the same browser keeps the same variant (cookie).

## 8. Troubleshooting

| Symptom | Fix |
| --- | --- |
| No events at all | Consent not accepted yet (step 6), or `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` empty. |
| `PostHog feature flag evaluation failed` in server logs | Check the token/host; PostHog flags need the project key and an internet connection. |
| Experiment shows no assignments | The flag `home-page-variant` doesn't exist in PostHog, or its variant values aren't exactly `v1`/`v2`. |
| Funnel step 1 empty (`landing_page_viewed`) | PageAnalytics not mounted — check `src/app/layout.tsx`. |
| `ab_test_assignment` / old `pageview` events missing | Expected — these were replaced by `$feature_flag_called` / `$pageview`. |
| Old insight "Workshop funnel" still around | Safe to delete; it was auto-created by the old code and is no longer maintained. |
