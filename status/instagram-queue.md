# Instagram content queue

Single source of truth for what's staged, scheduled, and posted. The monthly batch-staging task and any day-of reminder tasks read/update this file so two separate sessions never stage conflicting content for the same date again (see `status/2026-07-20.md` for the incident that made this necessary — two competing photo batches got created for the same week with no shared state).

Verified against actual Instagram post history via the Graph API, not assumptions.

## Scheduled (reminder task created, awaiting live go-ahead on the date)

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
- ~~2026-09-09 (Wed) — mission/brewery~~ **MISSED** — reminder task `brewery-mission-post-reminder-0909` fired (unconfirmed) but no go-ahead was given; notification apparently didn't reach Lindsay again. Swapped to 2026-09-11 below (Lindsay's call, to land the Shepherd's Men post on 9/11 itself).
- ~~2026-09-11 (Fri) — Rosie personality~~ **MISSED, swapped** — reminder task `rosie-personality-post-reminder-0911` fired (unconfirmed) but no go-ahead was given, same notification pattern. Moved to 2026-09-16 below.
- **2026-09-11 (Fri, TODAY) — mission/brewery**: `images/gallery/palmer-couch-mission-shelf.jpg` — swapped in from the missed 9/9 slot, deliberately timed to 9/11 — awaiting live go-ahead
  Caption: "Palmer taking a break between brewery stops. That book on the shelf behind her isn't a coincidence — it's the whole reason we started this thing. Every visit, every follow, every dollar goes to Shepherd's Men and the SHARE Military Initiative. More at frenchiesontap.com. #FrenchiesOnTap #FrenchBulldog #ShepherdsMen #SHAREMilitaryInitiative"
- **2026-09-14 (Mon) — Palmer personality**: `images/gallery/palmer-stone-wall.jpg` — reminder task: `palmer-personality-post-reminder-0914`
  Caption: "Palmer surveying her kingdom (the backyard). #FrenchiesOnTap #FrenchBulldog"
- **2026-09-12 (Sat) — Rosie personality**: `images/gallery/rosie-wall-standing.jpg` — swapped in from the missed 9/11 slot, moved up to tomorrow per Lindsay's 9/11 call (supersedes the earlier 9/16 plan) — no reminder task created yet, needs one on Lindsay's local machine
  Caption: "Rosie, mid-zoomie, briefly interrupted for a photo. 🐾 #FrenchiesOnTap #FrenchBulldog"

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

2026-09-09 and 2026-09-11 reminders both fired without a phone notification reaching Lindsay (same failure as 7/31, 8/21, 8/24 — 5th occurrence). Swapped/rescheduled per Lindsay's call on 2026-09-11; see Scheduled above. **This needs local debugging, not another reactive swap** — open a Claude Code session on Lindsay's Mac and check `/Users/lindsaymiller/.claude/scheduled-tasks/` for whether the task actually fires vs. whether the OS/app just isn't surfacing the notification (app backgrounded, notification permissions, etc.). A remote/cloud session can't see that local state.

2026-09-16 (Wed) has no reminder task yet — needs one created for the swapped-in Rosie post.

(The 7/29 and 8/14 open questions from earlier were resolved 2026-08-21 — both posted fine, see Posted below.)

## Posted

- 2026-08-24 — `palmer-fireplace-ottoman.jpg` (Palmer personality) — media `18127500943745180` — reminder fired on time (10:00:32 AM) again, but no phone notification reached Lindsay again either — 2nd consecutive miss (see 8/21 too), pattern worth investigating on the notification-delivery side rather than the task-scheduling side; approved live in chat
- 2026-08-21 — `rosie-patio-leash.jpg` (Rosie personality) — media `18066096860744189` — reminder fired on time (10:00 AM) but the push notification apparently didn't reach Lindsay's phone; approved live in chat once she noticed
- 2026-08-17 — `palmer-sherpa-blanket.jpg` (Palmer personality) — media `18096881414527815` — confirmed via Graph API, queue file wasn't updated at the time
- 2026-08-14 — `rosie-chair-crazy.jpg` (Rosie personality) — media `18612308428044271` — confirmed via Graph API; the alt-text mismatch flagged on 8/15 was a false alarm, correct photo/caption went out
- 2026-07-29 — `lazy-guy-distillery-porch.jpg` (Palmer, mission/brewery) — media `18349739881169474` — confirmed via Graph API on 2026-08-21; had been flagged as unresolved since 8/15, actually posted fine
- 2026-08-19 — `palmer-brewery-cards.jpg` (Palmer, mission/brewery) — media `18118133513313683` — approved via reminder, live go-ahead given in chat; posted with `@shepherdsmen` tag only — `@shepherdccenter` (correct spelling, extra "c") was rejected by the API, per Lindsay likely because Shepherd Center's account isn't set up to allow tagging, not a typo. Skip tagging them on future mission/brewery posts unless that changes.
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
