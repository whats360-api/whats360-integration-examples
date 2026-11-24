# WooCommerce order confirmation without code

From the whats360.live dashboard webhook guide (not executed when written):
1. In whats360.live create an **Incoming** webhook and choose the WooCommerce template. Copy the receive URL.
2. In WordPress: WooCommerce, Settings, Advanced, Webhooks, Add Webhook.
3. Name anything. Status: Active. Topic: Order created (or Order updated). Delivery URL: the receive URL. Secret: the same secret you set in Whats360.
4. Save and place a test order with your own phone number.

Sample payload shape: `{"id": 727, "status": "processing", "total": "150.00", "billing": {"first_name": "Sara", "phone": "+966501234567"}}`

Troubleshooting: WooCommerce, Status, Logs. WooCommerce disables a webhook after repeated failures; the endpoint must answer 200 OK. Keep the receive URL and secret private.


## Video tutorials and setup file (provided by whats360.live)
- Dashboard and features walkthrough: https://youtu.be/-T4ANjGTJ34
- WooCommerce connection and notifications: https://youtu.be/cE8jw4YxZY0
- Full playlist: https://www.youtube.com/playlist?list=PLYCgFoF0S_CxXOUIHBJqlv88rwu_PrhuC
- Ready setup file `whats360-pro.json` (hosted on MediaFire by a third party, not inspected by this repository): https://www.mediafire.com/file/62yzqp8bz9tqj83/whats360-pro.json/file . Review it before use and take a backup first. The import method is not specified here.

## Before you start
The integration needs a plan that supports the API. whats360.live staff mention a 48-hour free trial. Check the current terms in your account. Delivery depends on the WhatsApp number state, the customer and store settings. No delivery is guaranteed.

## Setup in short (as given by whats360.live)
1. Download the setup file (link above).
2. Add the code to WordPress using the **Code Snippets** plugin.
3. Set your API details and the messages you want.
4. Test an order status change and confirm the WhatsApp message reaches the customer.

Use placeholders for your token. Never paste a real token into a public place.
