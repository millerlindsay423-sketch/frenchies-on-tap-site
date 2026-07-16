const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const GALLERY_DIR = path.join(ROOT, 'images', 'gallery');
const GALLERY_HTML = path.join(ROOT, 'gallery.html');

const [, , sourcePath, altText, outputName] = process.argv;

if (!sourcePath || !altText) {
  console.error('Usage: node scripts/add-to-gallery.js <source-image-path> "<alt text>" [output-filename]');
  process.exit(1);
}

if (!fs.existsSync(sourcePath)) {
  console.error(`Source file not found: ${sourcePath}`);
  process.exit(1);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

const ext = path.extname(sourcePath).toLowerCase();
const baseName = outputName ? outputName.replace(/\.jpg$/i, '') : slugify(altText);
const destPath = path.join(GALLERY_DIR, `${baseName}.jpg`);

if (fs.existsSync(destPath)) {
  console.error(`${destPath} already exists — pick a different output filename.`);
  process.exit(1);
}

if (ext === '.heic' || ext === '.heif') {
  console.log('Converting HEIC/HEIF to JPG via sips...');
  execFileSync('sips', ['-s', 'format', 'jpeg', sourcePath, '--out', destPath]);
} else if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
  fs.copyFileSync(sourcePath, destPath);
} else {
  console.error(`Unsupported file type: ${ext}`);
  process.exit(1);
}

console.log(`Copied to ${path.relative(ROOT, destPath)}`);

const escapedAlt = altText.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const newTile = `      <div class="tile"><img src="images/gallery/${baseName}.jpg" alt="${escapedAlt}"></div>\n`;

const html = fs.readFileSync(GALLERY_HTML, 'utf8');
const CLOSE_MARKER = '    </div>\n  </div>\n</section>\n\n<section style="padding-top:0;">';

if (!html.includes(CLOSE_MARKER)) {
  console.error('Could not find the expected gallery-grid closing marker in gallery.html — add the tile manually.');
  process.exit(1);
}

const updated = html.replace(CLOSE_MARKER, `${newTile}${CLOSE_MARKER}`);
fs.writeFileSync(GALLERY_HTML, updated);

console.log('Added new tile to gallery.html');
