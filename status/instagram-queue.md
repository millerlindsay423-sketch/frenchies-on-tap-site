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

- **2026-08-03 (Mon) — Palmer personality**: `images/gallery/palmer-patio-alert.jpg` — reminder task: `palmer-personality-post-reminder-0803`
  Caption: "Palmer, fully alert. 🐾 Something moved. She doesn't know what. She will find out. #FrenchiesOnTap #FrenchBulldog"
- **2026-08-05 (Wed) — mission/brewery**: `images/gallery/cherry-st-brewing.jpg` — reminder task: `brewery-mission-post-reminder-0805`
  Caption: "Palmer clocking in at Cherry St Brewing. 🍹🐾 Every stop like this helps us get closer to this year's goal for Shepherd's Men and the SHARE Military Initiative. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
- **2026-08-07 (Fri) — Rosie personality**: `images/gallery/rosie-tongue-out.jpg` — reminder task: `rosie-personality-post-reminder-0807`
  Caption: "Rosie's got something to say about this photo. 👅🐾 We just don't speak the language. #FrenchiesOnTap #FrenchBulldog"
- **2026-08-10 (Mon) — Palmer personality**: `images/gallery/palmer-colorful-harness.jpg` — reminder task: `palmer-personality-post-reminder-0810`
  Caption: "Palmer picked her own harness today. Or she didn't, but she's acting like she did. 🐾 #FrenchiesOnTap #FrenchBulldog"
- **2026-08-12 (Wed) — mission/brewery**: `images/gallery/cobb-craft-beverage-month.jpg` — reminder task: `brewery-mission-post-reminder-0812`
  Caption: "Palmer's all in for Cobb Craft Beverage Month. 🍺🐾 Every patio, every pour, every dollar goes toward Shepherd's Men and the SHARE Military Initiative. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
- **2026-08-14 (Fri) — Rosie personality**: `images/gallery/rosie-chair-crazy.jpg` — reminder task: `rosie-personality-post-reminder-0814`
  Caption: "Rosie has claimed this chair. 🪑🐾 Objections will not be considered. #FrenchiesOnTap #FrenchBulldog"

## Staged, unassigned (no date/reminder yet — backup inventory)

- `images/dogs/IMG_4301.jpg` (Palmer personality, watching the street from a balcony)
- `images/dogs/IMG_4634.jpg` (Palmer personality, close-up leaning on a table)
- `images/dogs/IMG_5348.jpg` (Palmer personality, patio stool)
- `images/dogs/IMG_4732.jpg` (Palmer personality, deck)
- `images/dogs/IMG_4962.jpg` (mission-adjacent, patio drink, brewery not clearly identifiable)
- `images/dogs/IMG_2781.jpg` (Rosie personality, patio, busier background)

## Pending from external tool (Claude Cowork), awaiting Lindsay's confirmation before scheduling

Lindsay's separate "Claude coworker" project also generates weekly Instagram suggestions. These 3 drafts were copied in on 2026-07-20 but are NOT yet scheduled — they conflict with our Mon/Wed/Fri cadence (drafted for Tue/Thu/Sat) and one is a new "Lindsay BTS" content type not in our current 3-category rotation. Dog identity also needs confirmation since these photos have no Finder tags (unlike our own pipeline, this other tool guessed identity from coloring alone):

- `IMG_2808.jpeg` (in ~/Pictures/French Bulldogs/, not yet imported to this project) — other tool guessed Rosie based on coloring, itself flagged uncertainty, no tag to verify. **Needs Lindsay's confirmation.**
- `609.jpeg` (already in images/dogs/, confirmed **Red = Palmer** via Finder tag — this one checks out)
- `IMG_7822.jpeg` (in ~/Pictures/French Bulldogs/, not yet imported) — shows both dogs together, but the photo is **sideways and needs rotating** before use. Other tool guessed which dog is which based on markings; no tag to verify either dog. **Needs Lindsay's confirmation on both identities, plus a rotation fix.**

## Gap flagged

None currently — 2026-08-03 through 2026-08-14 is now bridged (above), and the recurring monthly task picks up again 2026-08-15.

## Posted

- 2026-07-16 — `new-website-portrait.jpg` (Palmer) — media `18127008610633755` — website relaunch announcement
- 2026-07-17 — `rosie-party-hat.jpg` (Rosie) — media `17959745085159324` — "Meet Rosie" intro
- 2026-07-20 — `palmer-bar-interrogation.jpg` (Palmer) — media `18106945178094724`
