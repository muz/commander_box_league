# Implementation Details

These are various implementation details to aid with AI prompts.

## Scryfall

### Card Search Response

The card search API represents cards like this:

```
{
      "object": "card",
      "id": "f73ce8ec-c916-48eb-ae20-c0d6d03d7145",
      "oracle_id": "2c96ab90-155b-4bf4-acc9-65a2f0cd3189",
      "multiverse_ids": [],
      "mtgo_id": 141517,
      "tcgplayer_id": 632062,
      "cardmarket_id": 825778,
      "name": "Capital City",
      "lang": "en",
      "released_at": "2025-06-13",
      "uri": "https://api.scryfall.com/cards/f73ce8ec-c916-48eb-ae20-c0d6d03d7145",
      "scryfall_uri": "https://scryfall.com/card/fin/274/capital-city?utm_source=api",
      "layout": "normal",
      "highres_image": true,
      "image_status": "highres_scan",
      "image_uris": {
        "small": "https://cards.scryfall.io/small/front/f/7/f73ce8ec-c916-48eb-ae20-c0d6d03d7145.jpg?1748706809",
        "normal": "https://cards.scryfall.io/normal/front/f/7/f73ce8ec-c916-48eb-ae20-c0d6d03d7145.jpg?1748706809",
        "large": "https://cards.scryfall.io/large/front/f/7/f73ce8ec-c916-48eb-ae20-c0d6d03d7145.jpg?1748706809",
        "png": "https://cards.scryfall.io/png/front/f/7/f73ce8ec-c916-48eb-ae20-c0d6d03d7145.png?1748706809",
        "art_crop": "https://cards.scryfall.io/art_crop/front/f/7/f73ce8ec-c916-48eb-ae20-c0d6d03d7145.jpg?1748706809",
        "border_crop": "https://cards.scryfall.io/border_crop/front/f/7/f73ce8ec-c916-48eb-ae20-c0d6d03d7145.jpg?1748706809"
      },
      "mana_cost": "",
      "cmc": 0.0,
      "type_line": "Land — Town",
      "oracle_text": "{T}: Add {C}.\n{1}, {T}: Add one mana of any color.\nCycling {2} ({2}, Discard this card: Draw a card.)",
      "colors": [],
      "color_identity": [],
      "keywords": [
        "Cycling"
      ],
      "produced_mana": [
        "B",
        "C",
        "G",
        "R",
        "U",
        "W"
      ],
      "legalities": {
        "standard": "legal",
        "future": "legal",
        "historic": "legal",
        "timeless": "legal",
        "gladiator": "legal",
        "pioneer": "legal",
        "modern": "legal",
        "legacy": "legal",
        "pauper": "not_legal",
        "vintage": "legal",
        "penny": "legal",
        "commander": "legal",
        "oathbreaker": "legal",
        "standardbrawl": "legal",
        "brawl": "legal",
        "alchemy": "legal",
        "paupercommander": "not_legal",
        "duel": "legal",
        "oldschool": "not_legal",
        "premodern": "not_legal",
        "predh": "not_legal"
      },
      "games": [
        "paper",
        "arena"
      ],
      "reserved": false,
      "game_changer": false,
      "foil": true,
      "nonfoil": true,
      "finishes": [
        "nonfoil",
        "foil"
      ],
      "oversized": false,
      "promo": false,
      "reprint": false,
      "variation": false,
      "set_id": "d7beb4b7-e1ff-4d35-ab07-5700f17ea1ea",
      "set": "fin",
      "set_name": "Final Fantasy",
      "set_type": "expansion",
      "set_uri": "https://api.scryfall.com/sets/d7beb4b7-e1ff-4d35-ab07-5700f17ea1ea",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Afin&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/fin?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/f73ce8ec-c916-48eb-ae20-c0d6d03d7145/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A2c96ab90-155b-4bf4-acc9-65a2f0cd3189&unique=prints",
      "collector_number": "274",
      "digital": false,
      "rarity": "uncommon",
      "flavor_text": "A city built upon the Isles of Ark that straddle the continents of Storm and Ash.",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Wei Guan",
      "artist_ids": [
        "6bd18163-aa22-4a41-82f6-8cdb8269d3c8"
      ],
      "illustration_id": "e95b24e2-0519-4ff5-ade2-7bfac47623b9",
      "border_color": "black",
      "frame": "2015",
      "security_stamp": "triangle",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "promo_types": [
        "ffxvi"
      ],
      "edhrec_rank": 10810,
      "penny_rank": 1209,
      "prices": {
        "usd": "0.10",
        "usd_foil": "0.19",
        "usd_etched": null,
        "eur": "0.12",
        "eur_foil": "0.22",
        "tix": null
      },
      "related_uris": {
        "tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Farticles&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Farticles%3FproductLineName%3Dmagic%26q%3DCapital%2BCity",
        "tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Fdecks&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fdecks%3FproductLineName%3Dmagic%26q%3DCapital%2BCity",
        "edhrec": "https://edhrec.com/route/?cc=Capital+City"
      },
      "purchase_uris": {
        "tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F632062%3Fpage%3D1",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products?idProduct=825778&referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/141517?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    }
    ```

### Processed Card Data Structure

After processing the Scryfall API response, our application stores cards in the following format:

```javascript
{
  setCode: "FIN",
  setName: "Final Fantasy",
  cards: [
    {
      name: "Summon: Bahamut",
      rarity: "mythic",
      collectorNumber: 1,
      typeLine: "Legendary Creature — Dragon",
      manaCost: "{6}{R}{R}",
      cmc: 8,
      imageUris: {
        small: "https://cards.scryfall.io/small/front/...",
        normal: "https://cards.scryfall.io/normal/front/...",
        large: "https://cards.scryfall.io/large/front/...",
        png: "https://cards.scryfall.io/png/front/...",
        art_crop: "https://cards.scryfall.io/art_crop/front/...",
        border_crop: "https://cards.scryfall.io/border_crop/front/..."
      },
      oracleText: "Flying, haste\nWhen Summon: Bahamut enters...",
      flavorText: "\"The king of dragons has awakened.\"",
      artist: "Kevin Glint",
      power: "8",
      toughness: "8",
      colors: ["R"],
      colorIdentity: ["R"],
      keywords: ["Flying", "Haste"],
      legalities: {
        standard: "legal",
        modern: "legal",
        // ... other formats
      }
    }
    // ... more cards
  ]
}
```

### Key Data Fields Extracted

- **Basic Info**: `name`, `rarity`, `collectorNumber`
- **Game Info**: `typeLine`, `manaCost`, `cmc`, `oracleText`
- **Visual**: `imageUris` (all available image sizes)
- **Metadata**: `artist`, `flavorText`, `power`, `toughness`
- **Gameplay**: `colors`, `colorIdentity`, `keywords`, `legalities`

This enhanced data structure allows the application to display rich card information including artwork, mana costs, type lines, and other game-relevant details.