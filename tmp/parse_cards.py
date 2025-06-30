import json
import sys
import urllib.request
import urllib.error

# Check if command line argument is provided
if len(sys.argv) != 2:
    print("Usage: python3 parse_cards.py <set_code>")
    print("Example: python3 parse_cards.py fca")
    sys.exit(1)

# Get the set code from command line argument
set_code = sys.argv[1]

# Construct the initial URL
url = f"https://api.scryfall.com/cards/search?order=set&q=unique:prints+game:paper+s:{set_code}"

print(f"Fetching data from: {url}")

# Initialize variables for pagination
all_cards = []
current_url = url
page_count = 1

try:
    while current_url:
        print(f"Fetching page {page_count}...")

        # Fetch data from the current page
        with urllib.request.urlopen(current_url) as response:
            data = json.loads(response.read().decode('utf-8'))

        # Add cards from this page to our collection
        all_cards.extend(data['data'])

        # Check if there are more pages
        if data.get('has_more', False) and data.get('next_page'):
            current_url = data['next_page']
            page_count += 1
        else:
            current_url = None

except urllib.error.URLError as e:
    print(f"Error fetching data from API: {e}")
    sys.exit(1)
except json.JSONDecodeError as e:
    print(f"Error parsing JSON response: {e}")
    sys.exit(1)

print(f"Fetched {page_count} page(s) with {len(all_cards)} total cards")

# Find the highest collector number to determine array size
# Filter cards to only include those with integer collector numbers
valid_cards = [card for card in all_cards if card['collector_number'].isdigit()]
max_collector_number = max(int(card['collector_number']) for card in valid_cards) if valid_cards else 0

# Create a list with empty objects up to the max collector number
extracted_cards = [{} for _ in range(max_collector_number + 1)]  # +1 because collector numbers start at 1

# Fill in the cards at their proper positions (collector number = array index)
for card in valid_cards:
    collector_number = int(card['collector_number'])
    extracted_cards[collector_number] = {
        'name': card['name'],
        'rarity': card['rarity'],
        'collectorNumber': collector_number
    }

# Remove the first empty object (index 0) since collector numbers start at 1
extracted_cards = extracted_cards[1:]

# Display the results
print(f'\nExtracted card information for set {set_code.upper()} (using array position as collector number):')
print('=====================================================================')
for i, card in enumerate(extracted_cards, 1):
    if card:  # If the object is not empty
        print(f"#{i} - {card['name']} ({card['rarity']})")
    else:
        print(f"#{i} - [EMPTY SLOT]")

print(f"\nTotal array size: {len(extracted_cards)}")
print(f"Cards with data: {sum(1 for card in extracted_cards if card)}")
print(f"Empty slots: {sum(1 for card in extracted_cards if not card)}")

# Save to a new JSON file in the tmp directory
output_filename = f"{set_code}_extracted_cards_positional.json"
with open(output_filename, 'w', encoding='utf-8') as file:
    json.dump(extracted_cards, file, indent=2, ensure_ascii=False)

print(f'\nExtracted data saved to tmp/{output_filename}')

# Also display the first few cards as a sample
print('\nSample of extracted data:')
print('=========================')
for i, card in enumerate(extracted_cards[:10], 1):
    if card:
        print(f"{i}. {card}")
    else:
        print(f"{i}. {{}} (empty)")