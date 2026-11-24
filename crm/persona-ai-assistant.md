# Persona (AI assistant setup)

The dashboard "Persona" screen defines how the AI assistant talks and sells. This page lists the fields shown in the setup wizard. It is a description of the screen, not an API.

A persona can be linked to specific devices (WhatsApp numbers). Leave it empty to use the persona on any device. You can start with Quick setup (5 steps), import, or create a new persona.

| Stage | Purpose | Fields shown |
|---|---|---|
| 1. Define the persona | Who the assistant is and its style | Persona name, active switch, linked devices, persona description |
| 2. What it sells | Products, prices, delivery | Products or services (name, price, description), pricing policies, delivery information |
| 3. How it starts | Welcome message and discovery | Welcome message, customer discovery questions |
| 4. How it persuades | Value offer, objections, closing | Value proposition and offers, objections with replies, closing questions |
| 5. Mandatory rules | Extra details and rules never to break | Extra products or services, rules, examples |

Advanced AI settings shown: Full Prompt (replaces all sections when filled), JSON Output Mode, Media URLs by intent, Telegram bot token and chat IDs for order, cancellation and problem notifications, and training by examples (up to 10 question and answer pairs).

## Notes
- The page shows an example JSON output mode shape with keys `intent`, `botResponse`, `orderData`, `telegramData`. The page says the system expects the AI to answer in that form when the mode is enabled.
- Telegram tokens and chat IDs are private. Never publish them.
- AI answer quality, accuracy, sales results and Telegram delivery are not guaranteed by this documentation.

## Source check
Stage names and fields above were cross-checked against the dashboard export dated 2026-05-07 (page header on p65), p65 read at full size: Quick setup is a 5-step wizard (step 3 of 5 shown), plus "New persona", "Import" and a "What is a persona?" help box. Field labels match the table. Stage 5 repeats the products/services block as "extra details" and adds a "rules that must not be broken" box. The advanced AI settings (stage 6) were only partly visible on that page. Pages p66-69 were later read at full size: the same form with sample entries (names such as health adviser, customer service and sales representative), the stage 1 and stage 3 boxes filled with short example text, stage 4 and 5 and the advanced AI settings collapsed. p70-71 show the empty list and template cards. Nothing on these pages adds a field, a limit or an API.
