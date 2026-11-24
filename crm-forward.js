// Forward a Whats360 OUTGOING webhook payload to your CRM's HTTP endpoint.
// Documented payload fields: phone, sender_name, message, message_id, chat_jid, timestamp, media_url, instance_id.
async function forwardToCrm(payload, { crmUrl, crmKey, fetchImpl = globalThis.fetch }) {
  const body = { phone: payload.phone, name: payload.sender_name, text: payload.message, externalId: payload.message_id };
  const res = await fetchImpl(crmUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${crmKey}` }, body: JSON.stringify(body) });
  return res.ok;
}
module.exports = { forwardToCrm };
