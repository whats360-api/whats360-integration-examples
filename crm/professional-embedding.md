# Professional Embedding

Embed the whats360.live system inside your own website through an `iframe`, with automatic sign-in for your staff.

## What the dashboard page says
- Embedding is for staff only. Each staff member gets a personal link tied to their email.
- You need an **embed token** (shown masked on the page; click to reveal or hide). **Treat it as a secret. Never publish it.**
- You must add at least one **allowed domain** to activate embedding. Enter the domain without `http://`. Subdomains such as `sub.example.com` are allowed automatically.
- Enter the staff member's email in the page to display the embed code for that person.

## Setup outline
1. In the dashboard open Professional Embedding.
2. Add your domain under Allowed domains.
3. Enter a staff email and copy the generated embed code.
4. Paste the code into the page on your site that only logged-in staff can open.

## Security notes
- Per-staff links grant access to that staff member's account area. Do not put them on public pages.
- If a link or token leaks, renew it from the dashboard and tell info@whats360.live if you need help.
- The exact iframe code format and token renewal steps are not shown in the source, so they are not documented here.
