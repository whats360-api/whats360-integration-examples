// Call this only AFTER your payment provider's own verification says the payment succeeded.
const { sendText } = require('./whats360-client');
async function notifyPaid(cfg, { number, orderId, amount, currency }) {
  return sendText({ ...cfg, number, msg: `Payment received for order ${orderId}: ${amount} ${currency}. Thank you.` });
}
module.exports = { notifyPaid };
