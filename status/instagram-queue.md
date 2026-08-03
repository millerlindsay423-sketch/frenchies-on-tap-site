# Instagram content queue

Single source of truth for what's staged, scheduled, and posted. The monthly batch-staging task and any day-of reminder tasks read/update this file so two separate sessions never stage conflicting content for the same date again (see `status/2026-07-20.md` for the incident that made this necessary — two competing photo batches got created for the same week with no shared state).

Verified against actual Instagram post history via the Graph API, not assumptions.

## Scheduled (reminder task created, awaiting live go-ahead on the date)

- **2026-07-29 (Wed) — mission/brewery**: `images/gallery/lazy-guy-distillery-porch.jpg` — reminder task: `brewery-mission-post-reminder-0729`
  Caption: "Palmer studying the menu at Lazy Guy Distillery like she's the one buying. 🥃🐾 This spot actually earned Palmer's Pick 2025. Turns out good taste runs in the family. Every visit like this helps fund Shepherd's Men and the SHARE Military Initiative. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
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

## Available inventory from external tool (Claude Cowork), confirmed and ready for future use

Lindsay's separate "Claude coworker" project also generates weekly Instagram suggestions — she's deleting that task since this system now covers the same job plus actual posting (recommended 2026-07-20). These 3 drafts were copied in on 2026-07-20; all dog identities are now confirmed. They weren't slotted into specific dates (their original Tue/Thu/Sat drafting doesn't match our Mon/Wed/Fri cadence, and the Aug 3–14 bridge batch is already full) — they're just good material sitting ready for whenever a slot opens up, starting with the Aug 15 monthly batch onward.

- `images/dogs/IMG_2808.jpeg` — **confirmed Palmer** by Lindsay (2026-07-20; the other tool had guessed Rosie — corrected). Imported into images/dogs/. Caption doesn't name a dog directly, so it works as-is as a Palmer personality post.
  Caption: "They told me to sit still for the picture. I sat still. I also never blinked once. Real focus. Mostly I was thinking about that sandwich from earlier. Follow Palmer and Rosie for more. #FrenchiesOnTap"
- `images/dogs/609.jpeg` — confirmed **Red = Palmer** via Finder tag (checked out independently). Already in images/dogs/.
  Caption: "Palmer's been doing this a while now. Brewery cards, tail wags, a mission stitched into every visit. That mission is Shepherd's Men and the SHARE Military Initiative at Shepherd Center. They treat post-9/11 veterans living with PTSD and TBI. Last year we raised $300. This year the goal is $5,000 to $10,000, and right now we're starting from zero. Every card handed out, every follow, every dollar moves that number. Donate at the link in bio. #FrenchiesOnTap #ShepherdsMen #ShareMilitaryInitiative" (tags: @shepherdsmen, @shepherdccenter)
- `images/dogs/IMG_7822.jpeg` — **confirmed both dogs together** by Lindsay (2026-07-20). Imported into images/dogs/ and **rotation fixed** (was sideways, now upright, verified visually — Palmer on the armchair/ottoman, Rosie on the rug by the toy basket). **Suggested as the first BTS post** for the Aug 15 monthly batch — strong fit, casual at-home shot, caption already drafted below.
  Caption: "Sunday planning meeting, Frenchie edition. Palmer supervised from the armchair. Rosie just wanted into the toy basket. This is basically how every week starts around here. #FrenchiesOnTap"

Note: none of these three could get proper Finder tags written programmatically (macOS tags need binary plist encoding, not a plain string — attempted and abandoned 2026-07-20). Identity is documented here in writing instead, which is durable since tags get stripped by git anyway.

## Gap flagged

None currently — 2026-08-03 through 2026-08-14 is now bridged (above), and the recurring monthly task picks up again 2026-08-15.

## Posted

- 2026-08-03 — `palmer-patio-alert.jpg` (Palmer personality) — media `18155798989499778` — approved via reminder, live go-ahead given in chat; site pushed to production same day to get the photo live before posting (also cleared the Aug 3–14 bridge batch + other pending commits)
- 2026-07-31 — `rosie-full-stare.jpg` (Rosie personality) — media `18435036298124340` — 0731 reminder fired correctly at 10am but was missed; approved live in chat that evening instead. A different task, `rosie-personality-post-reminder-0814`, also fired today by mistake and initially surfaced the wrong (8/14) photo — caught before publishing, see `status/2026-07-31.md`.
- 2026-07-27 — `palmer-mid-thought.jpg` (Palmer personality) — media `18192438643361660` — approved via reminder, live go-ahead given in chat
- 2026-07-24 — `rosie-treat-alert.jpg` (Rosie personality) — media `18096446945211407` — approved via reminder, live go-ahead given in chat
- 2026-07-16 — `new-website-portrait.jpg` (Palmer) — media `18127008610633755` — website relaunch announcement
- 2026-07-17 — `rosie-party-hat.jpg` (Rosie) — media `17959745085159324` — "Meet Rosie" intro
- 2026-07-20 — `palmer-bar-interrogation.jpg` (Palmer) — media `18106945178094724`
- 2026-07-22 — `horned-owl-palmer.jpg` (Palmer, mission/brewery) — media `18208915498350386` — approved via reminder, matched exactly, no mix-up this time
