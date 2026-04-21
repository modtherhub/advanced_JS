const os = require('os');

const uptimeInSeconds = os.uptime();

const SECONDS_IN_A_WEEK = 60 * 60 * 24 * 7;

const hours = Math.floor(uptimeInSeconds / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = Math.floor(uptimeInSeconds % 60);

if (uptimeInSeconds >= SECONDS_IN_A_WEEK) {
  console.log(`The system has been up for ${Math.floor(uptimeInSeconds / SECONDS_IN_A_WEEK)} week(s).`);
} else {
  console.log(`The system has been up for ${hours} hour(s), ${minutes} minute(s), and ${seconds} second(s).`);
}