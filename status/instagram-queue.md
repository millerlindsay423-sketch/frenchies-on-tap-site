# Instagram content queue

Single source of truth for what's staged, scheduled, and posted. The monthly batch-staging task and any day-of reminder tasks read/update this file so two separate sessions never stage conflicting content for the same date again (see `status/2026-07-20.md` for the incident that made this necessary — two competing photo batches got created for the same week with no shared state).

Verified against actual Instagram post history via the Graph API, not assumptions.

## Scheduled (reminder task created, awaiting live go-ahead on the date)

- **2026-07-29 (Wed) — mission/brewery**: `images/gallery/lazy-guy-distillery-porch.jpg` — reminder task: `brewery-mission-post-reminder-0729`
  Caption: "Palmer studying the menu at Lazy Guy Distillery like she's the one buying. 🥃🐾 This spot actually earned Palmer's Pick 2025. Turns out good taste runs in the family. Every visit like this helps fund Shepherd's Men and the SHARE Military Initiative. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
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

Added 2026-08-10, confirmed **Palmer** via Photos app cross-reference against her People & Pets album (see `status/2026-08-10.md`):

- `images/dogs/IMG_0990.jpg` (Palmer personality, sitting on a white sherpa blanket, antler chew nearby, worried-eyes look)
- `images/dogs/IMG_0996.jpg` (Palmer personality, sitting on the ottoman in front of the fireplace, white chest marking visible)
- `images/dogs/IMG_1048.jpg` (Palmer personality, standing up on a dining chair, looking up at the camera)
- `images/dogs/IMG_1319.jpg` (Palmer personality, sitting beside a houseplant in a sunbeam)
- `images/dogs/IMG_2455.jpg` (Palmer personality, standing on the treadmill desk — funny home-office shot)
- `images/dogs/IMG_3110.jpg` (Palmer personality, overhead shot on the wood floor wearing a floral bow)
- `images/dogs/IMG_3976.jpg` (Palmer personality, sitting on the kitchen floor by the oven)
- `images/dogs/output_image1723911843162.jpg` (Palmer personality/mission-adjacent — lounging on the couch with a "Shepherd's Men" book visible on the shelf behind her)

The remaining 16 from the same Photos sync were identity-unclear at first pass; Lindsay resolved them via Finder color tags on 2026-08-10 (Red = Palmer, Orange = Rosie, Yellow = both). Converted and added to `images/dogs/`:

- `images/dogs/7095969022429225022.jpg` (Palmer personality, brewery patio, red harness)
- `images/dogs/F020DE2B-F9D0-4B73-A64B-BAA1D5D85E14.jpg` (Palmer personality, sitting by a "Masters"-branded water bowl at home)
- `images/dogs/IMG_1242.jpg` (Palmer personality, standing on a barstool, brewery/restaurant setting)
- `images/dogs/IMG_1740.jpg` (Palmer, mission-adjacent — lying on a gravel patio next to a to-go drink cup, brewery)
- `images/dogs/IMG_1860.jpg` (Palmer, mission-adjacent — brewery patio seating, garage-door windows, food truck visible outside)
- `images/dogs/IMG_1862-1.jpg` (Palmer, mission-adjacent — close-up, same brewery patio)
- `images/dogs/IMG_1866.jpg` (Palmer, mission-adjacent — close-up at the same brewery bar counter)
- `images/dogs/IMG_2159.jpg` (Palmer personality, sitting on a stone wall in the backyard)
- `images/dogs/IMG_2348.jpg` (Palmer, mission-adjacent — brewery bar counter, candy-cane holiday harness)
- `images/dogs/e79657f5-8162-49bf-a6f5-37f30fd45635.jpg` (Palmer personality, garage/workshop, striped harness)
- `images/dogs/imagejpeg_0-1.jpg` (Palmer personality, wearing a flag bandana headband — strong patriotic angle)
- `images/dogs/imagejpeg_0-2.jpg` (Palmer personality, wild-hair costume outfit, indoors)
- `images/dogs/IMG_2584-1.jpg` (Rosie personality, tongue out, backyard stone wall)
- `images/dogs/IMG_2586-1.jpg` (Rosie personality, close-up, tongue out, backyard)
- `images/dogs/IMG_2590-1.jpg` (Rosie personality, tongue out, standing on the backyard wall)
- `images/dogs/IMG_2650-1.jpg` (both dogs together — overhead kitchen-floor shot, good candidate for a "both" or BTS-style post)

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

- 2026-08-10 — `palmer-colorful-harness.jpg` (Palmer personality) — media `18119029792682243` — approved via reminder, live go-ahead given in chat
- 2026-08-05 — `cherry-st-brewing.jpg` (Palmer, mission/brewery) — media `18045798458652820` — approved via reminder, live go-ahead given in chat
- 2026-08-03 — `palmer-patio-alert.jpg` (Palmer personality) — media `18155798989499778` — approved via reminder, live go-ahead given in chat; site pushed to production same day to get the photo live before posting (also cleared the Aug 3–14 bridge batch + other pending commits)
- 2026-07-31 — `rosie-full-stare.jpg` (Rosie personality) — media `18435036298124340` — 0731 reminder fired correctly at 10am but was missed; approved live in chat that evening instead. A different task, `rosie-personality-post-reminder-0814`, also fired today by mistake and initially surfaced the wrong (8/14) photo — caught before publishing, see `status/2026-07-31.md`.
- 2026-07-27 — `palmer-mid-thought.jpg` (Palmer personality) — media `18192438643361660` — approved via reminder, live go-ahead given in chat
- 2026-07-24 — `rosie-treat-alert.jpg` (Rosie personality) — media `18096446945211407` — approved via reminder, live go-ahead given in chat
- 2026-07-16 — `new-website-portrait.jpg` (Palmer) — media `18127008610633755` — website relaunch announcement
- 2026-07-17 — `rosie-party-hat.jpg` (Rosie) — media `17959745085159324` — "Meet Rosie" intro
- 2026-07-20 — `palmer-bar-interrogation.jpg` (Palmer) — media `18106945178094724`
- 2026-07-22 — `horned-owl-palmer.jpg` (Palmer, mission/brewery) — media `18208915498350386` — approved via reminder, matched exactly, no mix-up this time
