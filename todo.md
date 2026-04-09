# NEUROSCIENCE 2026 - Project TODO

## Completed Features ✅

- [x] Homepage (Home.tsx) - Landing page with YON Theory overview
- [x] NEUROSCIENCE 2026 page (Neuroscience2026.tsx) - Main knowledge library
- [x] Section: The YON Framework (6 PDFs) - All uploaded to S3 and clickable
- [x] Section: LinkedIn Articles (6 articles) - All linked
- [x] Section: Temporality and Retro-Causality (4 articles) - 2 empty slots remain
- [x] Section: Distinguished Speakers - ASTROPHYSICS 2026 Berlin image integrated
- [x] Newsletter form UI - Visible and styled
- [x] Newsletter backend - DB table created (Phase 1)
- [x] Newsletter server functions - Created in server/db.ts (Phase 2)
- [x] Newsletter tRPC procedure - Created in server/routers.ts (Phase 3)
- [x] Newsletter frontend connection - Form connected to tRPC with success/error feedback
- [x] Newsletter vitest tests - 7 tests passing (validation, subscription, duplicate handling)
- [x] Plausible Analytics - Integrated in client/index.html
- [x] Full English translation - All content in English for international audience
- [x] Logo LUZ integration - Header and hero section
- [x] Design: Gilien aesthetic - Deep blue/gold palette, Fermat spiral, animations
- [x] Export code to GitHub - PR #1 created at https://github.com/gilsawas/neuroscience2026/pull/1
- [x] Section: LUZ Articles (6 LinkedIn articles) - All linked and integrated

## In Progress 🚀

- [ ] Configure custom domain: sawas-ai.art/neuroscience2026

## Pending Features 📋

- [ ] Section: Therapeutic Applications - Fill remaining empty slots
- [ ] Section: Scientific Convergences - Fill remaining empty slots
- [ ] Section: AI Awakening - Fill remaining empty slots
- [ ] Fill remaining slots in Temporality and Retro-Causality (2 empty)
- [ ] English versions of French LinkedIn articles (e.g., "AI LUZ Fusion 2.0")
- [ ] Video project for Neuroscience 2026 Barcelona (separate task)

## Technical Debt 🔧

- [ ] Add more comprehensive error handling in newsletter subscription
- [ ] Add email validation on backend with regex
- [ ] Consider adding unsubscribe functionality
- [ ] Add rate limiting to newsletter subscription endpoint
- [ ] Add GDPR compliance (privacy policy, consent tracking)

## Notes 📝

- Site currently at: https://3000-ig7fri4ye9r8q5w4hdltu-75dd87a7.us2.manus.computer
- Target domain: sawas-ai.art/neuroscience2026
- Database: MySQL/TiDB with Drizzle ORM
- Framework: Next.js/React + tRPC + Tailwind CSS
- Analytics: Umami (built-in) + Plausible Analytics
- Newsletter subscribers table: newsletter_subscribers (email, isActive, subscribedAt)
- All PDFs and assets uploaded to S3 CDN
