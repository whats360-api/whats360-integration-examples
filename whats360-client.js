// Tiny shared helper for the examples: builds the documented send-text request. Node 18+.
async function sendText({ token, instanceId, number, msg, fetchImpl = globalThis.fetch, base = 'https://whats360.live/api/v1' }) {
  const q = new URLSearchParams({ token, instance_id: instanceId, jid: `${number}@s.whatsapp.net`, msg });
  const res = await fetchImpl(`${base}/send-text?${q}`);
  if (!res.ok) throw new Error(`Whats360 HTTP ${res.status}`); // never include the URL: it contains the token
  return res.json();
}
module.exports = { sendText };
