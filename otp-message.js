// OTP over WhatsApp. Generate the code with a CSPRNG, store only a hash, expire it, rate-limit requests.
const crypto = require('node:crypto');
const { sendText } = require('./whats360-client');

function makeOtp() { return String(crypto.randomInt(0, 1000000)).padStart(6, '0'); }
function hashOtp(code, salt) { return crypto.createHash('sha256').update(salt + code).digest('hex'); }

async function sendOtp(cfg, number) {
  const code = makeOtp();
  const salt = crypto.randomBytes(8).toString('hex');
  await sendText({ ...cfg, number, msg: `Your verification code is ${code}. It expires in 5 minutes.` });
  return { hash: hashOtp(code, salt), salt, expiresAt: Date.now() + 5 * 60 * 1000 }; // store this, not the code
}
module.exports = { makeOtp, hashOtp, sendOtp };
