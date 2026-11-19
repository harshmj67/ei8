# Careers email setup (EmailJS)

Both "Apply now" (on job cards) and "Say hello" (on the Careers page) now go to a
new page, `/careers/apply`, with its own form. It uses a **separate EmailJS
template** so these messages always land in `careers@ei8.in`, no matter which
button the user clicked.

Why a separate template? In EmailJS, the destination address ("To Email") is
configured on the **template** in the dashboard — it is not something the
website code can set. Reusing the sales template would keep sending these to
sales@ei8.in. So you need one more template, pointed at careers@ei8.in.

## One-time setup (5 minutes)

1. Log in to https://dashboard.emailjs.com/
2. Go to **Email Templates → Create New Template**.
3. In the template's **Settings** tab, set:
   - **To Email**: `careers@ei8.in`
   - **From Name**: `{{from_name}}` (optional)
   - **Reply To**: `{{from_email}}` (so you can hit "reply" and it goes to the applicant)
4. In the template **Content**, use these variables (they match the form fields
   in `src/components/CareerApplicationForm.jsx`):
   - `{{role}}` – which role they're applying for (or "General application")
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{link}}` – LinkedIn/portfolio/resume link
   - `{{message}}`

   Example template body:
   ```
   New application: {{role}}

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Link: {{link}}

   Message:
   {{message}}
   ```
5. Save the template and copy its **Template ID**.
6. In `.env`, replace the placeholder:
   ```
   REACT_APP_EMAILJS_CAREERS_TEMPLATE_ID=paste_your_new_template_id_here
   ```
7. Restart the dev server (`npm start`) or rebuild for the env var to take effect.

That's it — the same EmailJS **Service** and **Public Key** you already use for
the sales contact form are reused; only the template (and therefore the "To"
address) is different.

## What changed in the code

- `src/components/CareerApplicationForm.jsx` – new form, sends via
  `REACT_APP_EMAILJS_CAREERS_TEMPLATE_ID`.
- `src/pages/CareersApply.jsx` – new page at `/careers/apply` that renders the form.
- `src/App.js` – added the `/careers/apply` route.
- `src/pages/Careers.jsx` – "Apply now" on each role now links to
  `/careers/apply?role=<role title>` (pre-fills which role they're applying for),
  and the "Say hello" CTA now links to `/careers/apply` instead of `/contact`.
- The general `/contact` page and `sales@ei8.in` flow are untouched.
