# Instagram content queue

Single source of truth for what's staged, scheduled, and posted. The monthly batch-staging task and any day-of reminder tasks read/update this file so two separate sessions never stage conflicting content for the same date again (see `status/2026-07-20.md` for the incident that made this necessary — two competing photo batches got created for the same week with no shared state).

Verified against actual Instagram post history via the Graph API, not assumptions.

## Scheduled (reminder task created, awaiting live go-ahead on the date)

- **2026-07-29 (Wed) — mission/brewery**: `images/gallery/lazy-guy-distillery-porch.jpg` — reminder task: `brewery-mission-post-reminder-0729`
  Caption: "Palmer studying the menu at Lazy Guy Distillery like she's the one buying. 🥃🐾 This spot actually earned Palmer's Pick 2025. Turns out good taste runs in the family. Every visit like this helps fund Shepherd's Men and the SHARE Military Initiative. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
  **FLAGGED 2026-08-15**: this reminder fired back on 7/29 but there's no corresponding entry in "Posted" below and no `status/2026-07-29.md` — looks like it may have been missed rather than declined. Needs Lindsay to confirm whether it actually went out (check Instagram directly) before this line is trusted either way.
- **2026-08-14 (Fri) — Rosie personality**: `images/gallery/rosie-chair-crazy.jpg` — reminder task: `rosie-personality-post-reminder-0814`
  Caption: "Rosie has claimed this chair. 🪑🐾 Objections will not be considered. #FrenchiesOnTap #FrenchBulldog"
  **NOTE 2026-08-15**: gallery.html's alt text for this photo is currently "Rosie's close-up derpy grin", which doesn't match the reminder task's description ("Rosie claiming the good chair") or this caption. Found this uncommitted and unexplained at the start of today's session — didn't touch it, but flagging in case it signals a photo/caption mismatch like the 7/31 incident.

- **2026-08-17 (Mon) — Palmer personality**: `images/gallery/palmer-sherpa-blanket.jpg` — reminder task: `palmer-personality-post-reminder-0817`
  Caption: "Palmer, deeply concerned about something only she can see. (It's probably snack-related.) 🦴🐾 #FrenchiesOnTap #FrenchBulldog"
- **2026-08-19 (Wed) — mission/brewery**: `images/gallery/palmer-brewery-cards.jpg` — reminder task: `brewery-mission-post-reminder-0819`
  Caption: "Palmer's been doing this a while now. Brewery cards, tail wags, a mission stitched into every visit. That mission is Shepherd's Men and the SHARE Military Initiative at Shepherd Center. They treat post-9/11 veterans living with PTSD and TBI. Last year we raised $300. This year the goal is $5,000 to $10,000, and right now we're starting from zero. Every card handed out, every follow, every dollar moves that number. Donate at the link in bio. #FrenchiesOnTap #ShepherdsMen #ShareMilitaryInitiative" (tags: @shepherdsmen, @shepherdccenter)
- **2026-08-21 (Fri) — Rosie personality**: `images/gallery/rosie-patio-leash.jpg` — reminder task: `rosie-personality-post-reminder-0821`
  Caption: "Rosie clocked the patio chair leg and decided it was worth investigating. Priorities. 🐾 #FrenchiesOnTap #FrenchBulldog"
- **2026-08-24 (Mon) — Palmer personality**: `images/gallery/palmer-fireplace-ottoman.jpg` — reminder task: `palmer-personality-post-reminder-0824`
  Caption: "Palmer holding court by the fireplace like she pays the mortgage here. #FrenchiesOnTap #FrenchBulldog"
- **2026-08-26 (Wed) — Lindsay BTS** (swapped from mission/brewery this month): `images/gallery/sunday-planning-meeting.jpg` — reminder task: `bts-post-reminder-0826`
  Caption: "Sunday planning meeting, Frenchie edition. Palmer supervised from the armchair. Rosie just wanted into the toy basket. This is basically how every week starts around here. #FrenchiesOnTap"
- **2026-08-28 (Fri) — Rosie personality**: `images/gallery/rosie-wall-grin.jpg` — reminder task: `rosie-personality-post-reminder-0828`
  Caption: "Rosie found the good lighting and she is not moving. 😁🐾 #FrenchiesOnTap #FrenchBulldog"
- **2026-08-31 (Mon) — Palmer personality**: `images/gallery/palmer-dining-chair.jpg` — reminder task: `palmer-personality-post-reminder-0831`
  Caption: "Palmer claimed the good chair before anyone else got home. Smart girl. #FrenchiesOnTap #FrenchBulldog"
- **2026-09-02 (Wed) — mission/brewery**: `images/gallery/palmer-red-harness-patio.jpg` — reminder task: `brewery-mission-post-reminder-0902`
  Caption: "Palmer, dressed for the occasion and ready to work the patio. Every brewery stop like this helps fund Shepherd's Men and the SHARE Military Initiative — real support for post-9/11 veterans living with PTSD and TBI. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
- **2026-09-04 (Fri) — Rosie personality**: `images/gallery/rosie-tongue-closeup.jpg` — reminder task: `rosie-personality-post-reminder-0904`
  Caption: "Rosie has something to say and it's mostly tongue. 👅🐾 #FrenchiesOnTap #FrenchBulldog"
- **2026-09-07 (Mon) — Palmer personality**: `images/gallery/palmer-sunbeam-plant.jpg` — reminder task: `palmer-personality-post-reminder-0907`
  Caption: "Palmer found the one sunbeam in the whole house and set up camp. #FrenchiesOnTap #FrenchBulldog"
- **2026-09-09 (Wed) — mission/brewery**: `images/gallery/palmer-couch-mission-shelf.jpg` — reminder task: `brewery-mission-post-reminder-0909`
  Caption: "Palmer taking a break between brewery stops. That book on the shelf behind her isn't a coincidence — it's the whole reason we started this thing. Every visit, every follow, every dollar goes to Shepherd's Men and the SHARE Military Initiative. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
- **2026-09-11 (Fri) — Rosie personality**: `images/gallery/rosie-wall-standing.jpg` — reminder task: `rosie-personality-post-reminder-0911`
  Caption: "Rosie, mid-zoomie, briefly interrupted for a photo. 🐾 #FrenchiesOnTap #FrenchBulldog"
- **2026-09-14 (Mon) — Palmer personality**: `images/gallery/palmer-stone-wall.jpg` — reminder task: `palmer-personality-post-reminder-0914`
  Caption: "Palmer surveying her kingdom (the backyard). #FrenchiesOnTap #FrenchBulldog"

## Staged, unassigned (no date/reminder yet — backup inventory)

- `images/dogs/IMG_4301.jpg` (Palmer personality, watching the street from a balcony)
- `images/dogs/IMG_4634.jpg` (Palmer personality, close-up leaning on a table)
- `images/dogs/IMG_5348.jpg` (Palmer personality, patio stool)
- `images/dogs/IMG_4732.jpg` (Palmer personality, deck)
- `images/dogs/IMG_4962.jpg` (mission-adjacent, patio drink, brewery not clearly identifiable)

Added 2026-08-10, confirmed **Palmer** via Photos app cross-reference against her People & Pets album (see `status/2026-08-10.md`):

- `images/dogs/IMG_2455.jpg` (Palmer personality, standing on the treadmill desk — funny home-office shot; **rejected for the Aug 15 batch**, sticky notes with legible names visible in the background)
- `images/dogs/IMG_3110.jpg` (Palmer personality, overhead shot on the wood floor wearing a floral bow; **rejected for the Aug 15 batch**, someone's feet/shoes visible in frame)
- `images/dogs/IMG_3976.jpg` (Palmer personality, sitting on the kitchen floor by the oven; **rejected for the Aug 15 batch**, paperwork visible on the counter in the background)

The remaining 16 from the same Photos sync were identity-unclear at first pass; Lindsay resolved them via Finder color tags on 2026-08-10 (Red = Palmer, Orange = Rosie, Yellow = both). Converted and added to `images/dogs/`:

- `images/dogs/F020DE2B-F9D0-4B73-A64B-BAA1D5D85E14.jpg` (Palmer personality, sitting by a "Masters"-branded water bowl at home)
- `images/dogs/IMG_1242.jpg` (Palmer personality, standing on a barstool, brewery/restaurant setting; backlit/dark, good backup if a mission slot needs filling)
- `images/dogs/IMG_1740.jpg` (Palmer, mission-adjacent — lying on a gravel patio next to a to-go drink cup, brewery; **rejected for the Aug 15 batch**, a stranger's feet visible in frame)
- `images/dogs/IMG_1860.jpg` (Palmer, mission-adjacent — brewery patio seating, garage-door windows, food truck visible outside; **rejected for the Aug 15 batch**, strangers seated prominently in the background — same brewery session as IMG_1862-1/IMG_1866)
- `images/dogs/IMG_1862-1.jpg` (Palmer, mission-adjacent — close-up, same brewery patio; **rejected**, same stranger visible in background)
- `images/dogs/IMG_1866.jpg` (Palmer, mission-adjacent — close-up at the same brewery bar counter; **rejected**, same stranger visible in background)
- `images/dogs/IMG_2348.jpg` (Palmer, mission-adjacent — brewery bar counter, candy-cane holiday harness — save for a winter batch, wrong season for Aug/Sep)
- `images/dogs/e79657f5-8162-49bf-a6f5-37f30fd45635.jpg` (Palmer personality, garage/workshop, striped harness)
- `images/dogs/imagejpeg_0-1.jpg` (Palmer personality, wearing a flag bandana headband — strong patriotic angle, good for a July 4th-adjacent post)
- `images/dogs/imagejpeg_0-2.jpg` (Palmer personality, wild-hair costume outfit, indoors — good Halloween candidate)
- `images/dogs/IMG_2650-1.jpg` (both dogs together — overhead kitchen-floor shot, good candidate for the next BTS or "both" post)

## Available inventory from external tool (Claude Cowork), confirmed and ready for future use

Lindsay's separate "Claude coworker" project also generates weekly Instagram suggestions — she's deleting that task since this system now covers the same job plus actual posting (recommended 2026-07-20). These 3 drafts were copied in on 2026-07-20; all dog identities are now confirmed.

- `images/dogs/IMG_2808.jpeg` — **confirmed Palmer** by Lindsay (2026-07-20; the other tool had guessed Rosie — corrected). Imported into images/dogs/. Caption doesn't name a dog directly, so it works as-is as a Palmer personality post. Still unused — good candidate for the next batch (2026-09-15).
  Caption: "They told me to sit still for the picture. I sat still. I also never blinked once. Real focus. Mostly I was thinking about that sandwich from earlier. Follow Palmer and Rosie for more. #FrenchiesOnTap"
- `images/dogs/609.jpeg` — confirmed **Red = Palmer** via Finder tag (checked out independently). **Used 2026-08-19** as `palmer-brewery-cards.jpg` (see Scheduled above).
- `images/dogs/IMG_7822.jpeg` — **confirmed both dogs together** by Lindsay (2026-07-20). Imported into images/dogs/ and **rotation fixed** (was sideways, now upright, verified visually — Palmer on the armchair/ottoman, Rosie on the rug by the toy basket). **Used 2026-08-26** as `sunday-planning-meeting.jpg`, this batch's BTS post (see Scheduled above).

Note: none of these three could get proper Finder tags written programmatically (macOS tags need binary plist encoding, not a plain string — attempted and abandoned 2026-07-20). Identity is documented here in writing instead, which is durable since tags get stripped by git anyway.

## Gap flagged

None currently. 2026-08-17 through 2026-09-14 (13 posts: 5 Palmer personality, 4 Rosie personality, 3 mission/brewery, 1 BTS) was staged in full by the 2026-08-15 monthly batch run — see Scheduled above. The recurring monthly task picks up again 2026-09-15 for the next stretch.

The 2026-07-29 mission/brewery post (flagged above) needs Lindsay to confirm it actually went out — treat that date as an open question, not a confirmed post, until she checks.

## Posted

- 2026-08-12 — `cobb-craft-beverage-month.jpg` (Palmer, mission/brewery) — media `18117732676913747` — reminder fired at 4:34 PM instead of 10am (app was closed on Lindsay's phone at the scheduled time — scheduled tasks only run while the app is open), approved live in chat once she was back
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
