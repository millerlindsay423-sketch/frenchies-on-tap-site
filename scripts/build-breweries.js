#!/usr/bin/env node
// Authoring tool, not part of the deployed site. Reads data/breweries.json,
// writes breweries/{slug}.html for every entry, and injects state-grouped
// card grids into brewery-directory.html and the 4 featured cards on
// index.html stay hand-authored (only 4, low drift risk).
//
// Run with: node scripts/build-breweries.js
// Re-run any time breweries.json changes (new brewery, corrected copy, etc.)
// and it will regenerate every brewery page + the directory from scratch.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const breweries = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/breweries.json'), 'utf8'));

function paws(rating) {
  const whole = Math.floor(rating);
  const hasHalf = rating - whole >= 0.5;
  let out = '🐾'.repeat(whole);
  if (hasHalf) out += '<span class="half">🐾</span>';
  return out;
}

function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;');
}

function directoryCard(b) {
  const pickBadge = b.pick
    ? `<div class="picks-badge">Palmer's Pick ${b.pickYears.join(' &amp; ')}</div>`
    : '';
  return `      <a class="brew-card${b.pick ? ' pick' : ''}" href="breweries/${b.slug}.html">
        ${pickBadge}
        <div class="loc">${b.location}</div>
        <h4>${b.name}</h4>
        <div class="paws">${paws(b.rating)}</div>
        <p class="quip">"${b.quip}"</p>
      </a>`;
}

function buildDirectory() {
  const byState = { Georgia: [], 'North Carolina': [], Tennessee: [] };
  breweries.forEach((b) => byState[b.state].push(b));

  // Always regenerate from the template (scripts/templates/directory.template.html)
  // so this is idempotent — never read-and-rewrite the served output file itself.
  let html = fs.readFileSync(path.join(__dirname, 'templates/directory.template.html'), 'utf8');
  html = html.replace('<!--GA-CARDS-->', byState.Georgia.map(directoryCard).join('\n'));
  html = html.replace('<!--NC-CARDS-->', byState['North Carolina'].map(directoryCard).join('\n'));
  html = html.replace('<!--TN-CARDS-->', byState.Tennessee.map(directoryCard).join('\n'));
  fs.writeFileSync(path.join(ROOT, 'brewery-directory.html'), html);
  console.log('Directory updated with', breweries.length, 'breweries.');
}

function breweryPage(b) {
  const pickBadge = b.pick
    ? `<div class="picks-badge" style="position:static;display:inline-block;margin-bottom:10px;">Palmer's Pick ${b.pickYears.join(' &amp; ')}</div><br>`
    : '';
  const reviewParagraphs = b.review
    ? b.review.split('\n\n').map((p) => `        <p>${p}</p>`).join('\n')
    : `        <p>Full review pending — check back soon, or ask Claude Code to pull it from the archived live-site copy.</p>`;

  const photoBlock = (b.photos && b.photos.length)
    ? `<div class="photo-stack">\n${b.photos.map((p) => `      <img src="../images/breweries/${p}" alt="${escapeAttr(b.name)}">`).join('\n')}\n    </div>`
    : `<div class="photo-block">📷 Photo pending</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${b.name} — Frenchies on Tap</title>
<meta name="description" content="Palmer's review of ${escapeAttr(b.name)} in ${escapeAttr(b.location.replace(/&amp;/g, '&'))}.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Work+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
</head>
<body>

<div class="util-bar">🇺🇸 100% of Palmer's fundraising goes straight to <strong>Shepherd's Men</strong> &amp; the SHARE Military Initiative</div>

<nav>
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo">
      <img src="../images/logo/secondary.png" alt="Frenchies on Tap logo">
    </a>
    <div class="nav-links">
      <a href="../index.html">Home</a>
      <a href="../brewery-directory.html" class="active">Brewery Directory</a>
      <a href="../about.html">About</a>
      <a href="../gallery.html">Gallery</a>
      <a href="../merch.html">Merch</a>
    </div>
    <a href="../donate.html" class="nav-cta">Donate Now</a>
  </div>
</nav>

<div class="brewery-header">
  <div class="wrap">
    <a class="back-link" href="../brewery-directory.html">← Back to the Directory</a>
    <div class="loc">${b.location}</div>
    <h1>${b.name}</h1>
    ${pickBadge}
    <div class="paws">${paws(b.rating)} <span style="color:var(--gray);font-size:0.85rem;font-weight:600;">(${b.rating} / 5)</span></div>
  </div>
</div>

<div class="wrap brewery-body">
  <div class="review">
    <p class="quip">"${b.quip}"</p>
${reviewParagraphs}
  </div>
  ${photoBlock}
</div>

<footer>
  <div class="wrap">
    <div class="foot-inner">
      <div>
        <div class="foot-brand">Frenchies on Tap</div>
        <div style="color:var(--gold-2);font-size:0.72rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-top:6px;">🐾 Brew. Give. Serve.</div>
        <p style="font-size:0.82rem;margin-top:8px;max-width:240px;">Brew-hopping Frenchies raising money for the people who served.</p>
      </div>
      <div class="foot-col">
        <h5>Explore</h5>
        <a href="../index.html">Home</a>
        <a href="../brewery-directory.html">Brewery Directory</a>
        <a href="../about.html">About</a>
        <a href="../gallery.html">Gallery</a>
        <a href="../merch.html">Merch</a>
      </div>
      <div class="foot-col">
        <h5>The Mission</h5>
        <a href="../donate.html">Donate Now</a>
        <span style="display:block;font-size:0.85rem;margin-bottom:8px;color:rgba(255,255,255,0.6);">Shepherd's Men</span>
        <span style="display:block;font-size:0.85rem;margin-bottom:8px;color:rgba(255,255,255,0.6);">SHARE Military Initiative</span>
      </div>
      <div class="foot-col">
        <h5>Contact &amp; Follow</h5>
        <a href="mailto:miller.lindsay423@gmail.com">miller.lindsay423@gmail.com</a>
        <a href="../index.html">frenchiesontap.com</a>
        <a href="https://www.instagram.com/frenchiesontap" target="_blank" rel="noopener">Instagram @frenchiesontap</a>
        <a href="https://www.tiktok.com/@pawmer2020" target="_blank" rel="noopener">TikTok @pawmer2020</a>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 Frenchies on Tap</span>
      <span>Proud supporters of Shepherd's Men &amp; SHARE Military Initiative</span>
    </div>
  </div>
</footer>

</body>
</html>
`;
}

function buildBreweryPages() {
  const dir = path.join(ROOT, 'breweries');
  breweries.forEach((b) => {
    fs.writeFileSync(path.join(dir, `${b.slug}.html`), breweryPage(b));
  });
  console.log('Generated', breweries.length, 'brewery pages.');
}

buildBreweryPages();
buildDirectory();
