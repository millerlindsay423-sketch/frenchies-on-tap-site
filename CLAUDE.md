# Frenchies on Tap

Brewery-hopping fundraising project starring two French Bulldogs, Palmer and Rosie. 100% of what they raise goes to Shepherd's Men and the SHARE Military Initiative. Static HTML/CSS/JS site (no build step, no CMS), deployed on Netlify via auto-deploy on push to `main`. See `README.md` for file structure and day-to-day editing conventions.

## Working with Lindsay on this project

Bring website design/development, marketing copywriting, and social media/growth expertise to this project — not just code changes. The underlying goal isn't "a website exists," it's: grow Instagram followers, publish cute and engaging content on a consistent cadence, and raise real money for Shepherd's Men. Weigh suggestions against that goal, not just technical correctness.

Brand voice: warm, a little playful, mission-forward but not preachy. Look at existing captions/copy (gallery.html, past commit messages, prior Instagram captions) before writing new copy, rather than inventing a new tone.

## Photo pipeline

- `images/dogs/` — full pool of source photos, not all wired into any page yet.
- `images/gallery/` — curated subset shown on the public gallery page (`gallery.html`) and used as source material for Instagram posts. Anything under `images/` is publicly reachable once deployed, whether or not it's in this folder.
- `incoming/` — drop zone for brand-new photos before they're sorted in.
- **Dog identity via Finder color tags**: Lindsay tags photos in Finder — Red = Palmer, Orange = Rosie, Yellow = both together. Check with `mdls -raw -name kMDItemUserTags "<file>"`. Don't guess identity from the photo alone when a tag is available; when no tag exists, ask rather than assume — Palmer and Rosie are hard to tell apart visually.
- `scripts/add-to-gallery.js` — copies a photo into `images/gallery/`, converting HEIC/HEIF to JPG via macOS `sips` if needed, and adds the corresponding tile to `gallery.html`.

## Instagram posting

- `scripts/instagram/whoami.js` — verifies the access token and prints the connected account's username/ID/type.
- `scripts/instagram/post.js <image-url>[,<image-url2>,...] "<caption>" [--tag user1,user2]` — publishes a feed post via the Graph API (create container → wait → publish). A single URL posts one photo; comma-separated URLs publish a swipeable carousel. `--tag` adds Instagram user-tags (mentions) to the photo(s) — usernames only, no `@`. Also supports Stories (`media_type=STORIES`) and Reels (`media_type=REELS`, needs `video_url`) per Meta's Content Publishing API, though the current script only implements feed/carousel posts — extend it further if a Stories/Reels post is needed.
- `scripts/instagram/refresh-token.js` — refreshes the long-lived token (60-day expiry) and updates `.env` in place. Needs to run at least once before 60 days elapse or the token expires permanently.
- Credentials live in `.env` (gitignored, never commit) — see `.env.example` for the required keys.
- **Never run `post.js` without Lindsay's explicit go-ahead in the moment** — it publishes live to the public account. Adding photos to the gallery and pushing to git is lower-stakes and fine to do proactively once she's approved a specific photo/caption.

## Content cadence

Aiming for 3 posts/week: one Palmer personality shot, one mission/brewery-visit shot, one Rosie personality shot. A scheduled task (`weekly-instagram-post-picks`, runs Sundays 9am) prepares candidates each week for Lindsay to review and approve — see `/Users/lindsaymiller/.claude/scheduled-tasks/weekly-instagram-post-picks/SKILL.md` for its exact logic.

## Session status log

`status/` holds a running log so a new chat can get caught up fast. One file per calendar day (`status/YYYY-MM-DD.md`); if a second session happens the same day, append to that day's file under a `---` separator instead of making a new one.

When a session is naturally wrapping up (Lindsay signals she's done for now, or asks directly — e.g. "wrap up" / "save status"), write or update today's file with three sections:
- **What we covered** — brief summary of the session
- **Open website production items** — anything changed locally but not yet committed/pushed/deployed (check `git status` and `git diff` rather than relying on memory), plus anything that needs Lindsay's input before it can ship
- **Open questions for Lindsay** — anything surfaced this session that needs her decision or input

Caveat: a session can't act after the chat window actually closes — there's no background job here, only what happens during a live turn. So this works when the wrap-up happens *in* a conversation, not truly "on close." If Lindsay closes out without a wrap-up moment, the next session should note the gap.

At the start of a new session, if Lindsay references the status folder or asks to get caught up, read the most recent file(s) in `status/` first before doing anything else.
