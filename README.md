# Frenchies on Tap

The website for Palmer & Rosie's brewery-hopping fundraising mission. Plain HTML/CSS/JS — no build step, no CMS. Open any `.html` file to see the page; open `styles.css` to see all the styling.

## Making changes

Open this folder with Claude Code and just describe what you want changed — "update the stat strip on the home page," "add a new brewery called X," "change the gold color to be a bit darker." Claude Code can read and edit these files directly.

To add or update a brewery: edit `data/breweries.json`, then run:
```
node scripts/build-breweries.js
```
This regenerates every page in `breweries/` plus the Brewery Directory from that one data file — much safer than hand-editing 37 nearly-identical pages.

**Never hand-edit `brewery-directory.html` or `breweries/*.html` without making the same change in `scripts/templates/` (or `data/breweries.json`).** Those pages get overwritten on every rebuild, so a change made only to the output silently reverts next time. After any rebuild, check `git diff` and confirm only the lines you meant to change moved before committing. (This bit us on 2026-10-04: a stale directory template reverted "Pitstop Directory" and dropped the map's cluster scripts.)

To add a new photo or logo: drop it in `incoming/`, tell Claude Code what it is (which brewery, which dog, etc.), and it'll take care of resizing, renaming, and wiring it into the right page.

See `TODO.md` for what's still unfinished (photos, final logo, donate link, merch prices).

## Structure

```
index.html, about.html, donate.html, gallery.html, merch.html, brewery-directory.html
breweries/{slug}.html      — one page per brewery, generated (see scripts/build-breweries.js)
styles.css                 — the whole design system, one file
images/                    — logo, dog photos, brewery photos, gallery, merch
images/dogs/               — full pool of converted photos (~45); only a few are wired into pages so far, the rest are there for future picks
data/breweries.json        — source of truth for all 35 brewery pages
incoming/                  — drop zone for new photos/logos before they're sorted
```

## Deploying

Hosted on Netlify, connected to a GitHub repo for automatic deploys on push. No build command — `netlify.toml` just points it at the root. See `TODO.md` → "Going live" for the one-time setup steps.
