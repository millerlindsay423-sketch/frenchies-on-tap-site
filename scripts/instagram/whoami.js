const { loadEnv } = require('./env');
loadEnv();

const token = process.env.IG_ACCESS_TOKEN;
if (!token) {
  console.error('IG_ACCESS_TOKEN is not set in .env');
  process.exit(1);
}

async function main() {
  const url = `https://graph.instagram.com/me?fields=id,username,account_type&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.error) {
    console.error('Instagram API returned an error:');
    console.error(data.error);
    process.exit(1);
  }

  console.log('Token is valid. Account details:');
  console.log(`  Username:     ${data.username}`);
  console.log(`  Account ID:   ${data.id}`);
  console.log(`  Account type: ${data.account_type}`);
  console.log('\nCopy the Account ID above into IG_BUSINESS_ACCOUNT_ID in your .env file.');
}

main();
