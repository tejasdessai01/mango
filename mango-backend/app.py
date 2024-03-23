from flask import Flask, request, jsonify
import plaid
import os 
from plaid import ApiClient

app = Flask(__name__)

# Load environment variables - Plaid API Keys 
PLAID_CLIENT_ID = os.getenv('PLAID_CLIENT_ID')
PLAID_SECRET = os.getenv('PLAID_SECRET')
PLAID_ENV = os.getenv('PLAID_ENV') or 'development'  # Default to development

# Initialize Plaid client 
client = plaid.ApiClient(client_id=PLAID_CLIENT_ID, secret=PLAID_SECRET, environment=PLAID_ENV)

@app.route('/generate-link-token', methods=['POST'])
def generate_link_token():
    try:
        response = client.create_link_token(
            user={"client_user_id": "unique-user-identifier"},
            client_name="Mango",
            products=["auth", "transactions"],
            country_codes=["US"],
            language="en",
        )
        return jsonify({"link_token": response["link_token"]})
    except plaid.errors.PlaidError as e:
        return jsonify(format_error(e)), 500

@app.route('/exchange-token', methods=['POST'])
def exchange_token():
    public_token = request.json.get('public_token')
    try:
        exchange_response = client.exchange_public_token(public_token)
        access_token = exchange_response['access_token']

        # TODO: Fetch account data using 'access_token' 
        # Example placeholder:
        accounts = [
          { "name": "My Checking", "number": "****1234", "routing": "****5678" },
          # ... more accounts if applicable ...
        ]

        return jsonify({'accounts': accounts})
    except plaid.errors.PlaidError as e:
        return jsonify(format_error(e)), 500

# Error formatter (optional)
def format_error(e):
    return {'error': {'display_message': e.display_message, 'error_code': e.code, 'error_type': e.type } }

if __name__ == '__main__':
    app.run(debug=True) 
