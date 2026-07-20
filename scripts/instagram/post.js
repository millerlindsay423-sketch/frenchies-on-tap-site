const { loadEnv } = require('./env');
loadEnv();

const token = process.env.IG_ACCESS_TOKEN;
const igUserId = process.env.IG_BUSINESS_ACCOUNT_ID;

const args = process.argv.slice(2);
let tagUsers = [];
const tagIndex = args.indexOf('--tag');
if (tagIndex !== -1) {
  tagUsers = args[tagIndex + 1].split(',').map((u) => u.trim().replace(/^@/, '')).filter(Boolean);
  args.splice(tagIndex, 2);
}

const [imageUrlArg, ...captionParts] = args;
const caption = captionParts.join(' ');
const imageUrls = imageUrlArg ? imageUrlArg.split(',').map((u) => u.trim()).filter(Boolean) : [];

if (!token || !igUserId) {
  console.error('IG_ACCESS_TOKEN and IG_BUSINESS_ACCOUNT_ID must be set in .env');
  process.exit(1);
}

if (!imageUrls.length) {
  console.error('Usage: node scripts/instagram/post.js <image-url>[,<image-url2>,...] "<caption text>" [--tag user1,user2]');
  console.error('  Multiple comma-separated image URLs publish as a carousel.');
  console.error('  --tag mentions/tags the given usernames on the photo(s).');
  process.exit(1);
}

const API = 'https://graph.instagram.com/v21.0';

function userTagsParam() {
  if (!tagUsers.length) return undefined;
  return JSON.stringify(tagUsers.map((username) => ({ username, x: 0.5, y: 0.5 })));
}

async function apiCall(path, params) {
  const url = new URL(`${API}/${path}`);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) url.searchParams.set(key, value);
  }
  const res = await fetch(url, { method: 'POST' });
  const data = await res.json();
  if (data.error) {
    throw new Error(`Instagram API error: ${JSON.stringify(data.error)}`);
  }
  return data;
}

async function waitForContainer(creationId) {
  const url = new URL(`${API}/${creationId}`);
  url.searchParams.set('fields', 'status_code,status');
  url.searchParams.set('access_token', token);

  for (let attempt = 0; attempt < 20; attempt++) {
    const res = await fetch(url);
    const data = await res.json();
    if (data.error) throw new Error(`Status check error: ${JSON.stringify(data.error)}`);

    if (data.status_code === 'FINISHED') return;
    if (data.status_code === 'ERROR') throw new Error(`Container failed to process: ${data.status}`);

    console.log(`  container status: ${data.status_code} — waiting...`);
    await new Promise((r) => setTimeout(r, 3000));
  }
  throw new Error('Timed out waiting for media container to finish processing.');
}

async function postSingle() {
  console.log('1. Creating media container...');
  const container = await apiCall(`${igUserId}/media`, {
    image_url: imageUrls[0],
    caption,
    user_tags: userTagsParam(),
    access_token: token,
  });
  console.log(`   creation_id: ${container.id}`);

  console.log('2. Waiting for Instagram to process the image...');
  await waitForContainer(container.id);

  console.log('3. Publishing...');
  const published = await apiCall(`${igUserId}/media_publish`, {
    creation_id: container.id,
    access_token: token,
  });

  console.log(`\nPosted! Media ID: ${published.id}`);
}

async function postCarousel() {
  console.log(`1. Creating ${imageUrls.length} carousel item containers...`);
  const childIds = [];
  for (const [i, url] of imageUrls.entries()) {
    const child = await apiCall(`${igUserId}/media`, {
      image_url: url,
      is_carousel_item: 'true',
      user_tags: userTagsParam(),
      access_token: token,
    });
    console.log(`   item ${i + 1} creation_id: ${child.id}`);
    childIds.push(child.id);
  }

  console.log('2. Creating carousel container...');
  const carousel = await apiCall(`${igUserId}/media`, {
    media_type: 'CAROUSEL',
    children: childIds.join(','),
    caption,
    access_token: token,
  });
  console.log(`   creation_id: ${carousel.id}`);

  console.log('3. Waiting for Instagram to process the carousel...');
  await waitForContainer(carousel.id);

  console.log('4. Publishing...');
  const published = await apiCall(`${igUserId}/media_publish`, {
    creation_id: carousel.id,
    access_token: token,
  });

  console.log(`\nPosted! Media ID: ${published.id}`);
}

async function main() {
  if (imageUrls.length === 1) {
    await postSingle();
  } else {
    await postCarousel();
  }
}

main().catch((err) => {
  console.error('\nFailed to post:', err.message);
  process.exit(1);
});
