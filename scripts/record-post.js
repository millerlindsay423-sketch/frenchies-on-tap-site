// Records that a gallery photo was posted (or scheduled) to social, so nothing picks it again.
//
//   node scripts/record-post.js <gallery-filename> <YYYY-MM-DD> [--via metricool|post.js]
//        [--url <post url>] [--media-id <id>] [--scheduled]
//   node scripts/record-post.js --sync-finder-tags
//
// Writes to data/gallery-sources.json, regenerates gallery-manifest.json, and adds a gray
// "Posted" Finder tag to the photo's original in ~/Pictures/French Bulldogs (keeping its
// Red/Orange/Yellow dog tag). --sync-finder-tags re-applies that tag to every posted original.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SOURCES = path.join(ROOT, 'data', 'gallery-sources.json');

const loadSources = () => JSON.parse(fs.readFileSync(SOURCES, 'utf8'));
const saveSources = (s) => fs.writeFileSync(SOURCES, JSON.stringify(s, null, 2) + '\n');
const expand = (p) => p.replace(/^~(?=\/)/, os.homedir());

// Finder tags live in a binary-plist xattr; python's plistlib (ships with macOS) writes it.
const TAG_PY = `
import plistlib, subprocess, sys
f = sys.argv[1]
try:
    raw = subprocess.run(['xattr', '-px', 'com.apple.metadata:_kMDItemUserTags', f], capture_output=True, text=True, check=True).stdout
    tags = plistlib.loads(bytes.fromhex(''.join(raw.split())))
except subprocess.CalledProcessError:
    tags = []
if not any(t.split('\\n')[0] == 'Posted' for t in tags):
    tags.append('Posted\\n1')
    subprocess.run(['xattr', '-wx', 'com.apple.metadata:_kMDItemUserTags', plistlib.dumps(tags, fmt=plistlib.FMT_BINARY).hex(), f], check=True)
    print('tagged')
`;

function tagPosted(sourcePath) {
  const file = expand(sourcePath);
  if (!sourcePath || !fs.existsSync(file)) return false;
  return execFileSync('python3', ['-c', TAG_PY, file]).toString().includes('tagged');
}

function rebuildManifest() {
  execFileSync('node', [path.join(__dirname, 'build-gallery-manifest.js')], { stdio: 'inherit' });
}

function syncFinderTags() {
  const sources = loadSources();
  let n = 0;
  for (const [f, s] of Object.entries(sources)) {
    const twin = sources[s.same_as] || {};
    const posted = [...(s.posts || []), ...(twin.posts || [])].some((p) => p.status === 'posted');
    if (posted && tagPosted(s.source_path)) { n++; console.log(`Tagged Posted: ${s.source_filename} (${f})`); }
  }
  console.log(`${n} original(s) newly tagged.`);
}

// Returns earlier posted/scheduled entries for a gallery photo (including an identical twin).
function priorPosts(galleryFile) {
  const sources = loadSources();
  const s = sources[galleryFile] || {};
  return [...(s.posts || []), ...((sources[s.same_as] || {}).posts || [])];
}

function recordPost(galleryFile, date, { via = 'manual', url, mediaId, scheduled = false } = {}) {
  if (!fs.existsSync(path.join(ROOT, 'images', 'gallery', galleryFile))) {
    throw new Error(`images/gallery/${galleryFile} not found`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`Date must be YYYY-MM-DD, got ${date}`);
  const sources = loadSources();
  const s = sources[galleryFile] ||= { source_filename: '', source_path: '', finder_color_tag: '', venue: '', note: '' };
  s.posts ||= [];
  const post = { date, platform: 'instagram', via, status: scheduled ? 'scheduled' : 'posted' };
  if (url) post.url = url;
  if (mediaId) post.instagram_media_id = mediaId;
  // A scheduled entry for the same date becomes the posted one.
  s.posts = s.posts.filter((p) => !(p.status === 'scheduled' && p.date === date && !scheduled));
  s.posts.push(post);
  s.posts.sort((a, b) => a.date.localeCompare(b.date));
  saveSources(sources);
  rebuildManifest();
  if (!scheduled && tagPosted(s.source_path)) console.log(`Tagged Posted in Finder: ${s.source_filename}`);
  console.log(`Recorded ${post.status} ${galleryFile} on ${date} via ${via}`);
}

module.exports = { recordPost, priorPosts, syncFinderTags, tagPosted };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--sync-finder-tags') {
    syncFinderTags();
  } else {
    const flag = (name) => {
      const i = args.indexOf(name);
      if (i === -1) return undefined;
      const v = args[i + 1];
      args.splice(i, 2);
      return v;
    };
    const scheduled = args.includes('--scheduled');
    if (scheduled) args.splice(args.indexOf('--scheduled'), 1);
    const opts = { via: flag('--via'), url: flag('--url'), mediaId: flag('--media-id'), scheduled };
    const [galleryFile, date] = args;
    if (!galleryFile || !date) {
      console.error('Usage: node scripts/record-post.js <gallery-filename> <YYYY-MM-DD> [--via metricool|post.js] [--url <url>] [--media-id <id>] [--scheduled]');
      console.error('       node scripts/record-post.js --sync-finder-tags');
      process.exit(1);
    }
    try {
      recordPost(path.basename(galleryFile), date, opts);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
}
