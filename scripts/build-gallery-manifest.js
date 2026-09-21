// Regenerates gallery-manifest.json (served at /gallery-manifest.json) from
// images/gallery/ + the alt text in gallery.html. Run after adding gallery photos.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const GALLERY_DIR = path.join(ROOT, 'images', 'gallery');
const OUT = path.join(ROOT, 'gallery-manifest.json');
const BASE_URL = 'https://frenchiesontap.com/images/gallery/';

const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&');

const html = fs.readFileSync(path.join(ROOT, 'gallery.html'), 'utf8');
const altByFile = {};
for (const m of html.matchAll(/<img\s+src="images\/gallery\/([^"]+)"\s+alt="([^"]*)"/g)) {
  altByFile[m[1]] = decode(m[2]);
}

function dims(file) {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', '-g', 'orientation', file]).toString();
  let w = +out.match(/pixelWidth: (\d+)/)[1];
  let h = +out.match(/pixelHeight: (\d+)/)[1];
  const o = +(out.match(/orientation: (\d+)/) || [])[1];
  if (o >= 5 && o <= 8) [w, h] = [h, w]; // EXIF-rotated: report displayed size
  return { w, h };
}

// Alt text decides; if it names no dog, fall back to Finder color tag (Red=Palmer, Orange=Rosie, Yellow=Both).
function dogFor(alt, file) {
  const p = /\bPalmer\b/.test(alt), r = /\bRosie\b/.test(alt);
  if (p && r) return 'Both';
  if (p) return 'Palmer';
  if (r) return 'Rosie';
  try {
    const tags = execFileSync('mdls', ['-raw', '-name', 'kMDItemUserTags', file]).toString();
    if (/Red/.test(tags)) return 'Palmer';
    if (/Orange/.test(tags)) return 'Rosie';
    if (/Yellow/.test(tags)) return 'Both';
  } catch {}
  return '';
}

const venueRe = /((?:[A-Z][\w'.]*\s)+(?:Brewery|Brewing|Distillery|Brewpub|Taproom))/;

const files = fs.readdirSync(GALLERY_DIR).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
const manifest = files.map((f) => {
  const full = path.join(GALLERY_DIR, f);
  const alt = altByFile[f];
  if (alt === undefined) console.warn(`No gallery.html alt text for ${f}`);
  const { w, h } = dims(full);
  const venue = ((alt || '').match(venueRe) || [, ''])[1].replace(/^(The|At)\s+/, '');
  return {
    public_url: BASE_URL + f,
    gallery_filename: f,
    dog: dogFor(alt || '', full),
    venue,
    width: w,
    height: h,
    aspect_ratio: +(w / h).toFixed(3),
    alt_text: alt || '',
  };
});

fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + '\n');
const outside = manifest.filter((e) => e.aspect_ratio < 0.75 || e.aspect_ratio > 1.91).length;
console.log(`Wrote ${manifest.length} entries to gallery-manifest.json (${outside} outside 0.75–1.91)`);
