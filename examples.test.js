const test = require('node:test');
const assert = require('node:assert');
const { sendText } = require('./whats360-client');
const { makeOtp, hashOtp, sendOtp } = require('./otp-message');
const { notifyPaid } = require('./payment-notification');
const { forwardToCrm } = require('./crm-forward');

const cfgWith = (calls) => ({ token: 'T', instanceId: 'D', fetchImpl: async (url, init) => { calls.push({ url, init }); return { ok: true, status: 200, json: async () => ({ success: true }) }; } });

test('otp is 6 digits and sent through send-text, hash only returned', async () => {
  assert.match(makeOtp(), /^\d{6}$/);
  const calls = []; const r = await sendOtp(cfgWith(calls), '201234567890');
  const msg = new URL(calls[0].url).searchParams.get('msg');
  const code = msg.match(/\d{6}/)[0];
  assert.strictEqual(r.hash, hashOtp(code, r.salt));
  assert.ok(!JSON.stringify(r).includes(code));
});
test('payment notification builds the documented request', async () => {
  const calls = []; await notifyPaid(cfgWith(calls), { number: '2010', orderId: '9', amount: '10', currency: 'EGP' });
  const u = new URL(calls[0].url);
  assert.strictEqual(u.pathname, '/api/v1/send-text'); assert.match(u.searchParams.get('msg'), /order 9/);
});
test('http failure does not leak the token', async () => {
  await assert.rejects(() => sendText({ token: 'SECRET', instanceId: 'D', number: '1', msg: 'x', fetchImpl: async () => ({ ok: false, status: 401 }) }), (e) => !e.message.includes('SECRET'));
});
test('crm forward maps documented fields', async () => {
  let sent; const ok = await forwardToCrm({ phone: '1', sender_name: 'A', message: 'hi', message_id: 'm' }, { crmUrl: 'https://crm.example/x', crmKey: 'k', fetchImpl: async (u, i) => { sent = JSON.parse(i.body); return { ok: true }; } });
  assert.ok(ok); assert.deepStrictEqual(sent, { phone: '1', name: 'A', text: 'hi', externalId: 'm' });
});
