# Bots in the whats360.live dashboard

Source: whats360.live dashboard "Bots" dialogs, seen in a dashboard PDF export dated 2026-05-27 (pages 81 to 88). These are dashboard screens. No bot API endpoint is documented in the supplied materials. Field names below are the dashboard labels translated from Arabic, not API parameters. Not independently verified.

## Bot types

| Type | What the dashboard says |
|---|---|
| AI bot | Replies with a Google Gemini model. Customised with a system prompt and a knowledge base. |
| Simple (rules) bot | Replies when a message contains one of your keywords. Good for common questions and fixed replies. |
| Conversation bot | Asks a series of questions to qualify leads and collect answers (described on the help tab; the creation form was not in the export). |

## AI bot dialog tabs

1. Basic: bot name (required), device, trigger condition (default "all messages"), enable in groups, working hours (start, end, time zone, working days), human handoff (handoff keywords, handoff message), and commands to stop or resume the bot for one customer.
2. Gemini: Gemini API key, model (a Gemini 2.5 Flash option is marked recommended), output length slider, temperature slider, min and max reply delay, memory length. Use your own key. Never paste it into issues.
3. Personality: system prompt, optional personality description, or pick a saved persona.
4. Knowledge: URL of a JSON knowledge base file the bot can read.
5. Links: numbers the bot answers, numbers it answers only, and blocked numbers (one per line).
6. Test: try the bot before enabling it.
7. Help: usage tips (use working hours, enable groups only if wanted, add a delay so replies look natural, test first).

## Simple bot dialog

Bot name (required), keywords (comma separated), reply text with `{phone}` and `{name}` variables, optional media URL and media type, min and max delay in seconds (defaults shown: 10 and 40), enable in groups, apply to all, catch-all reply for any other message.

## Not covered

The bot list, test panel and conversation-bot form were not read in detail. Nothing here has been run.

## CRM auto-status rules page (partial)

Source: same export, p79-80, read only in part (the right-hand half of the page was cropped out of my review). Seen: a rules form with a number-of-days field (1 to 365, example value 7), an action area that sets a CRM status with a colour picker, and a list of status names in the CRM (Pending, Open, In Progress, Waiting Reply, Follow Up, Priority, Completed, Spam, Cancelled, Archived, Inactive). The page title says rules change a status based on customer activity. The empty state says no rules exist yet. Exact trigger options and field labels were not read. No API is documented.

## Conversation bot screen (p72-77, read at full size, header dated 2026-05)
Dashboard screens only, no bot API shown. Source: dashboard screenshots, not verified live.
- Ready templates: technical support bot, appointment booking bot, survey bot and FAQ bot, each with a question count and a "use" button.
- Quick setup, 4 steps: bot name, trigger keyword (can be empty to trigger on any message), welcome message, completion message.
- New bot form, grouped as:
  - Basics: bot name (required), trigger keyword, optional link to a persona.
  - Messages: welcome message, completion message (sent when data collection ends), fallback message (when the bot does not understand).
  - Behaviour: reminder delay in seconds (0 means none), timeout in seconds (0 means none), maximum attempts (shown as 3), and a transfer-to-staff switch (shown disabled).
  - Optional Gemini API key field.
  - External integration: optional webhook URL and optional webhook headers as JSON. The payload sent is not shown on these pages and is not documented here.
- Save and cancel buttons, an enabled/disabled toggle, and a "select a bot to see its questions" area.
