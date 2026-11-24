<?php
/**
 * Sketch: send a WhatsApp text when a WooCommerce order moves to "processing".
 * Uses only the documented Whats360 send-text endpoint. NOT executed (no PHP/WordPress here).
 * Put the constants in wp-config.php, never in the plugin file.
 */
add_action('woocommerce_order_status_processing', function ($order_id) {
    $order = wc_get_order($order_id);
    $phone = preg_replace('/\D+/', '', $order->get_billing_phone()); // international format expected
    if (!$phone) { return; }
    $msg = sprintf('Hi %s, your order #%s is confirmed. Total: %s', $order->get_billing_first_name(), $order->get_order_number(), $order->get_total());
    $url = add_query_arg([
        'token'       => WHATS360_TOKEN,
        'instance_id' => WHATS360_INSTANCE_ID,
        'jid'         => $phone . '@s.whatsapp.net',
        'msg'         => $msg,
    ], 'https://whats360.live/api/v1/send-text');
    $res = wp_remote_get($url, ['timeout' => 15]);
    if (is_wp_error($res)) { error_log('Whats360 send failed: ' . $res->get_error_message()); }
});
