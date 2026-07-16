const fs = require('fs');
const path = require('path');
const { loadEnv } = require('./env');
loadEnv();

const token = process.env.IG_ACCESS_TOKEN;
if (!token) {
  console.error('IG_ACCESS_TOKEN is not set in .env');
  process.exit(1);
}

const ENV_PATH = path.join(__dirname, '..', '..', '.env');

function updateEnvToken(newToken) {
  const contents = fs.readFileSync(ENV_PATH, 'utf8');
  const updated = contents.replace(/^IG_ACCESS_TOKEN=.*$/m, `IG_ACCESS_TOKEN=${newToken}`);
  fs.writeFileSync(ENV_PATH, updated);
}

async function main() {
  const url = new URL('https://graph.instagram.com/refresh_access_token');
  url.searchParams.set('grant_type', 'ig_refresh_token');
  url.searchParams.set('access_token', token);

  const res = await fetch(url);
  const data = await res.json();

  if (data.error) {
    console.error('Refresh failed:', data.error);
    console.error('\nIf this says the token is invalid or too old, you\'ll need to generate a new one');
    console.error('from the Meta developer console (Step 2) and paste it into .env manually.');
    process.exit(1);
  }

  updateEnvToken(data.access_token);

  const expiresDate = new Date(Date.now() + data.expires_in * 1000);
  console.log('Token refreshed successfully.');
  console.log(`New token expires: ${expiresDate.toDateString()} (in ${Math.round(data.expires_in / 86400)} days)`);
  console.log('.env has been updated automatically.');
}

main();
