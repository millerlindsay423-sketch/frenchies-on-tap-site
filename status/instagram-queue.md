# Instagram content queue

Single source of truth for what's staged, scheduled, and posted. The monthly batch-staging task and any day-of reminder tasks read/update this file so two separate sessions never stage conflicting content for the same date again (see `status/2026-07-20.md` for the incident that made this necessary — two competing photo batches got created for the same week with no shared state).

Verified against actual Instagram post history via the Graph API, not assumptions.

## Scheduled (reminder task created, awaiting live go-ahead on the date)

- **2026-07-22 (Wed) — mission/brewery**: `images/gallery/horned-owl-palmer.jpg` — reminder task: `brewery-mission-post-reminder`
  Caption: "Palmer supervising quality control at Horned Owl Brewing. 🍻🐾 Every stop on the tour is one step closer to another donation for Shepherd's Men and the SHARE Military Initiative — good beer, better cause. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
- **2026-07-24 (Fri) — Rosie personality**: `images/gallery/rosie-treat-alert.jpg` — reminder task: `rosie-personality-post-reminder`
  Caption: "Rosie has entered the chat. 👀🐾 That's the face she makes when she hears the treat bag from two rooms away. #FrenchiesOnTap #FrenchBulldog"
- **2026-07-27 (Mon) — Palmer personality**: `images/gallery/palmer-mid-thought.jpg` — reminder task: `palmer-personality-post-reminder-0727`
  Caption: "Palmer, mid-thought. 🤔🐾 We don't know what she's looking at, we just know she's judging it. That's the Palmer experience. #FrenchiesOnTap #FrenchBulldog"
- **2026-07-29 (Wed) — mission/brewery**: `images/gallery/lazy-guy-distillery-porch.jpg` — reminder task: `brewery-mission-post-reminder-0729`
  Caption: "Palmer studying the menu at Lazy Guy Distillery like she's the one buying. 🥃🐾 This spot actually earned Palmer's Pick 2025. Turns out good taste runs in the family. Every visit like this helps fund Shepherd's Men and the SHARE Military Initiative. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
- **2026-07-31 (Fri) — Rosie personality**: `images/gallery/rosie-full-stare.jpg` — reminder task: `rosie-personality-post-reminder-0731`
  Caption: "Rosie giving the stare that means business. 😤🐾 No, she is not moving from this cafe table. Yes, she knows exactly what she wants. #FrenchiesOnTap #FrenchBulldog"

## Staged, unassigned (no date/reminder yet)

(empty as of 2026-07-20 — everything currently staged has been assigned above)

## Gap flagged

No staged content yet for the week of 2026-08-03 or 2026-08-10 — the recurring monthly batch-staging task doesn't run until 2026-08-15, which is too late to cover those two weeks. Needs either an early manual top-up or the monthly task's first run moved earlier. See open question in `status/2026-07-20.md`.

## Posted

- 2026-07-16 — `new-website-portrait.jpg` (Palmer) — media `18127008610633755` — website relaunch announcement
- 2026-07-17 — `rosie-party-hat.jpg` (Rosie) — media `17959745085159324` — "Meet Rosie" intro
- 2026-07-20 — `palmer-bar-interrogation.jpg` (Palmer) — media `18106945178094724`
