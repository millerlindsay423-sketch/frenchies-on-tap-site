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

// Where each gallery photo came from (original file, Finder tag, venue override, notes).
const SOURCES = path.join(ROOT, 'data', 'gallery-sources.json');
const sources = fs.existsSync(SOURCES) ? JSON.parse(fs.readFileSync(SOURCES, 'utf8')) : {};
const TAG_DOG = { Red: 'Palmer', Orange: 'Rosie', Yellow: 'Both' };

// Only photos with a tile on gallery.html; others in the folder (e.g. the home page's
// Shepherd's Men photo) aren't part of the gallery.
const files = fs.readdirSync(GALLERY_DIR).filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && f in altByFile).sort();
const manifest = files.map((f) => {
  const full = path.join(GALLERY_DIR, f);
  const alt = altByFile[f];
  if (alt === undefined) console.warn(`No gallery.html alt text for ${f}`);
  const { w, h } = dims(full);
  const src = sources[f] || {};
  const venue = src.venue || ((alt || '').match(venueRe) || [, ''])[1].replace(/^(The|At)\s+/, '');
  const ratio = +(w / h).toFixed(3);
  const notes = [src.note || (src.source_filename ? '' : 'Original not found in ~/Pictures/French Bulldogs.')];
  if (ratio < 0.75 || ratio > 1.91) notes.push('Aspect ratio outside 0.75–1.91: Stories only, not feed.');
  return {
    public_url: BASE_URL + f,
    gallery_filename: f,
    source_filename: src.source_filename || '',
    source_path: src.source_path || '',
    finder_color_tag: src.finder_color_tag || '',
    dog: TAG_DOG[src.finder_color_tag] || dogFor(alt || '', full),
    venue,
    width: w,
    height: h,
    aspect_ratio: ratio,
    alt_text: alt || '',
    note: notes.filter(Boolean).join(' '),
  };
});

fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + '\n');
const outside = manifest.filter((e) => e.aspect_ratio < 0.75 || e.aspect_ratio > 1.91).length;
console.log(`Wrote ${manifest.length} entries to gallery-manifest.json (${outside} outside 0.75–1.91)`);
