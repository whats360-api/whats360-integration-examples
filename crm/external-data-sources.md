# External Data Sources

Connect any external API to conversations so customer data appears beside the chat automatically (for example from an ERP or your customer database).

## How it works (dashboard page)
1. Add your own API endpoint.
2. When a customer starts a conversation, the system sends the customer's phone number to your API.
3. The system shows the customer data (name, balance, orders and so on) beside the conversation.

Your URL contains a placeholder: `https://your-api.com/customer?phone={{phone}}`. `{{phone}}` is replaced with the customer's phone number.

## Endpoint form fields shown in the dashboard
Basic information: name (Arabic and English), endpoint name (Arabic and English), icon, color.  
Connection: URL template, HTTP method (GET shown as default), Cache TTL in seconds (0 default), Timeout in ms (10000 default), headers as JSON, authentication type ("none" shown as default).  
Response handling: a response map (JSON) that turns the response into key and value pairs for display, for example `{"Name": "data.name", "Balance": "data.balance"}` (the page shows an Arabic-label example), hidden fields, custom labels, section boxes.  
Display: order and status (enabled). You can test it with a phone number in the test field.

## Security notes for your own endpoint
- Your endpoint receives customer phone numbers. Use HTTPS and authentication, and return only what staff need.
- Never put real tokens in screenshots or public issues.
- Authentication types other than "none" are not listed in the source page, so they are not documented here.

## Example of a receiving endpoint (illustrative, not run)
```python
# Flask sketch. Illustrative only: replace the lookup with your own data source.
from flask import Flask, request, jsonify
app = Flask(__name__)
@app.get("/customer")
def customer():
    phone = request.args.get("phone", "")
    return jsonify({"data": {"name": "Example customer", "balance": 0}})
```
The response shape here matches a response map like `data.name` and `data.balance`. It is a sketch for explaining the map, not a documented whats360.live contract.
