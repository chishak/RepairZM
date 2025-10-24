# RePairZM — Single-file prototype

This repository hosts a single-file prototype of RePairZM (index.html). It is a demo static site that stores data in the browser (localStorage) and should be used only for demonstration.

How to deploy (GitHub Pages)
1. Ensure `index.html` is at the repository root.
2. Push or upload to the `main` branch of a public GitHub repository.
3. In GitHub repository → Settings → Pages → Set source to `main` / root `/`.
4. Visit the site at `https://<username>.github.io/<repo>/`.

Quick test checklist after you publish
- Open the Pages URL from desktop and mobile.
- Click "Seed demo data" to add sample repairers.
- Sign up as a user and sign up as a repairer (repairer accounts are unverified until an admin verifies them).
- Create a repair request, check AI-matching, and simulate payment.
- Start a chat to see localStorage conversation persistence.

Notes and warnings
- Authentication, payments, and chat are demo-only (client-side). Use a server/backend before going production.
- For production consider Supabase/Firebase for Auth + Realtime, and Stripe for payments.
- Do not store plaintext passwords or secret API keys in a public repo or in frontend code.
