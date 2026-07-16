const { loadEnv } = require('./env');
loadEnv();

const token = process.env.IG_ACCESS_TOKEN;
const igUserId = process.env.IG_BUSINESS_ACCOUNT_ID;

const [, , imageUrl, ...captionParts] = process.argv;
const caption = captionParts.join(' ');

if (!token || !igUserId) {
  console.error('IG_ACCESS_TOKEN and IG_BUSINESS_ACCOUNT_ID must be set in .env');
  process.exit(1);
}

if (!imageUrl) {
  console.error('Usage: node scripts/instagram/post.js <public-image-url> "<caption text>"');
  process.exit(1);
}

const API = 'https://graph.instagram.com/v21.0';

async function apiCall(path, params) {
  const url = new URL(`${API}/${path}`);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
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

async function main() {
  console.log('1. Creating media container...');
  const container = await apiCall(`${igUserId}/media`, {
    image_url: imageUrl,
    caption,
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

main().catch((err) => {
  console.error('\nFailed to post:', err.message);
  process.exit(1);
});
