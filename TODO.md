# TODO / open items

Things the site was built with placeholders for. Ask Claude Code to help with any of these whenever you're ready — just say what you have (a link, a photo, a price) and it'll wire it in.

## Blocking a full launch
- **Rosie's photo** — of the 45 photos you added, I could only confidently identify one dog by name (`palmer.jpg`, used on the Home page). The rest are almost all the same dog I'm assuming is also Palmer (same coat/markings), but I couldn't find one I was confident was Rosie, so her "Meet the Frenchies" card on the Home page is still a placeholder. Tell me which file(s) are Rosie and I'll drop her in. `images/dogs/IMG_0035.jpg` looks like it might be the two of them together, if that helps jog which one's which.
- **Brewery-specific photos** — none of the 45 photos are matched to a specific brewery (no captions/metadata to go on), so all 37 individual brewery pages still show "photo pending." If you can tell me which photos go with which brewery, I can wire those in too — otherwise the general shots are now live on the Home page and Gallery.
- **Final logo files from Mary** — `images/logo/primary.png` and `images/logo/secondary.png` are cropped from her *draft* options sheet. They still say "EST. 2019" on the ribbon; the confirmed correct text is "EST. 2023." Swap in Mary's final delivered files once you have them and this fixes itself.
- **Classy donate page URL** — the Donate page CTA buttons currently point to `#`. Share the real Classy campaign link and it'll get wired into both spots on `donate.html`.
- **GitHub + Netlify** — the site isn't live anywhere yet. See "Going live" below.

## Nice to have, not blocking
- **Current $ raised** — the Home page stat strip shows `$300` (carried over from the mockup as a placeholder). Give me the real number whenever you have it.
- **Merch prices + product photos** — `merch.html` has all 4 products (2 hat variants, the "Brew. Give. Serve." tee, the Horned Owl collab tee) with "Price TBD" placeholders and no checkout — that's intentional, waiting on the Etsy-vs-Bryan's-store decision.
- **Merch checkout** — once you and Bryan (or Etsy) land on a platform, the "Coming Soon" buttons on `merch.html` become real "Shop Now" links.
- **`Palmer-Donate-Page-Mockup.html`** — this was referenced in the original requirements doc as the source design for the Donate page but was never dropped into this project folder. `donate.html` was built directly from the written spec instead. If that mockup turns up, worth a quick pass to check the built page against it.

## Content notes (not action items, just flagged during migration)
- A few brewery review pages on the old site refer to the business by a slightly different name than the official page title (Freedom Brew & Shine's copy calls itself "Freedom Mill" throughout; Pendley Creek Brewing Company's copy calls itself "Pendley Brewery"). Left as-is since that's how the original copy read — worth reconciling with the breweries themselves if it matters to them.
- `Newsletter-Subscribers-Export.csv` (7-person list, contains names/emails/phone numbers) intentionally was **not** copied into this project — it's an archive of a killed feature and shouldn't live in a git repo. It stays wherever you're keeping the original requirements folder.

## Going live (needs your login, not something Claude Code can do for you)
1. Create a GitHub repo (github.com → New repository) and push this folder to it — ask Claude Code to walk you through `git remote add` + `git push` once the repo exists.
2. Go to netlify.com, sign in, "Add new site" → "Import from GitHub," pick the repo. No build command needed — this is a plain static site (see `netlify.toml`).
3. Once it's live on a `*.netlify.app` URL, point your real domain at it from Netlify's Domain Settings once the frenchiesontap.com (or backup .net/.co) situation with Patrick is resolved.
