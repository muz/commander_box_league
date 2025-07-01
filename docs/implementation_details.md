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

### Multi-face cards

Scryfall will show cards with multiple faces like this:

```
{
      "object": "card",
      "id": "9a069e96-2786-493d-aca8-f70611435dbe",
      "oracle_id": "ceba3d03-be5a-4dd7-b829-7db216a0f44e",
      "multiverse_ids": [],
      "mtgo_id": 141201,
      "tcgplayer_id": 630957,
      "cardmarket_id": 824143,
      "name": "Clive, Ifrit's Dominant // Ifrit, Warden of Inferno",
      "lang": "en",
      "released_at": "2025-06-13",
      "uri": "https://api.scryfall.com/cards/9a069e96-2786-493d-aca8-f70611435dbe",
      "scryfall_uri": "https://scryfall.com/card/fin/133/clive-ifrits-dominant-ifrit-warden-of-inferno?utm_source=api",
      "layout": "transform",
      "highres_image": true,
      "image_status": "highres_scan",
      "cmc": 6.0,
      "type_line": "Legendary Creature — Human Noble Warrior // Legendary Enchantment Creature — Saga Demon",
      "color_identity": [
        "R"
      ],
      "keywords": [
        "Transform",
        "Fight"
      ],
      "produced_mana": [
        "R"
      ],
      "card_faces": [
        {
          "object": "card_face",
          "name": "Clive, Ifrit's Dominant",
          "mana_cost": "{4}{R}{R}",
          "type_line": "Legendary Creature — Human Noble Warrior",
          "oracle_text": "When Clive enters, you may discard your hand, then draw cards equal to your devotion to red. (Each {R} in the mana costs of permanents you control counts toward your devotion to red.)\n{4}{R}{R}, {T}: Exile Clive, then return it to the battlefield transformed under its owner's control. Activate only as a sorcery.",
          "colors": [
            "R"
          ],
          "power": "5",
          "toughness": "5",
          "artist": "Nino Is",
          "artist_id": "ae717001-28ec-46e3-a07e-f16b6deaf9e2",
          "illustration_id": "82c70115-a985-4279-b89f-a8bca5258893",
          "image_uris": {
            "small": "https://cards.scryfall.io/small/front/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817",
            "normal": "https://cards.scryfall.io/normal/front/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817",
            "large": "https://cards.scryfall.io/large/front/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817",
            "png": "https://cards.scryfall.io/png/front/9/a/9a069e96-2786-493d-aca8-f70611435dbe.png?1748707817",
            "art_crop": "https://cards.scryfall.io/art_crop/front/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817",
            "border_crop": "https://cards.scryfall.io/border_crop/front/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817"
          }
        },
        {
          "object": "card_face",
          "name": "Ifrit, Warden of Inferno",
          "mana_cost": "",
          "type_line": "Legendary Enchantment Creature — Saga Demon",
          "oracle_text": "(As this Saga enters and after your draw step, add a lore counter.)\nI — Lunge — Ifrit fights up to one other target creature.\nII, III — Brimstone — Add {R}{R}{R}{R}. If Ifrit has three or more lore counters on it, exile it, then return it to the battlefield (front face up).",
          "colors": [
            "R"
          ],
          "color_indicator": [
            "R"
          ],
          "power": "9",
          "toughness": "9",
          "flavor_text": "\"Let the flames burn within you! No... let them burn without!\"",
          "artist": "Nino Is",
          "artist_id": "ae717001-28ec-46e3-a07e-f16b6deaf9e2",
          "illustration_id": "079f4ca9-558d-451d-83c3-7c36db497cab",
          "image_uris": {
            "small": "https://cards.scryfall.io/small/back/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817",
            "normal": "https://cards.scryfall.io/normal/back/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817",
            "large": "https://cards.scryfall.io/large/back/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817",
            "png": "https://cards.scryfall.io/png/back/9/a/9a069e96-2786-493d-aca8-f70611435dbe.png?1748707817",
            "art_crop": "https://cards.scryfall.io/art_crop/back/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817",
            "border_crop": "https://cards.scryfall.io/border_crop/back/9/a/9a069e96-2786-493d-aca8-f70611435dbe.jpg?1748707817"
          }
        }
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
        "penny": "not_legal",
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
      "rulings_uri": "https://api.scryfall.com/cards/9a069e96-2786-493d-aca8-f70611435dbe/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aceba3d03-be5a-4dd7-b829-7db216a0f44e&unique=prints",
      "collector_number": "133",
      "digital": false,
      "rarity": "mythic",
      "artist": "Nino Is",
      "artist_ids": [
        "ae717001-28ec-46e3-a07e-f16b6deaf9e2"
      ],
      "border_color": "black",
      "frame": "2015",
      "frame_effects": [
        "enchantment",
        "legendary"
      ],
      "security_stamp": "triangle",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "promo_types": [
        "ffxvi"
      ],
      "edhrec_rank": 10674,
      "prices": {
        "usd": "3.24",
        "usd_foil": "4.16",
        "usd_etched": null,
        "eur": "2.58",
        "eur_foil": "2.85",
        "tix": null
      },
      "related_uris": {
        "tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Farticles&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Farticles%3FproductLineName%3Dmagic%26q%3DClive%252C%2BIfrit%2527s%2BDominant%2B%252F%252F%2BIfrit%252C%2BWarden%2Bof%2BInferno",
        "tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Fdecks&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fdecks%3FproductLineName%3Dmagic%26q%3DClive%252C%2BIfrit%2527s%2BDominant%2B%252F%252F%2BIfrit%252C%2BWarden%2Bof%2BInferno",
        "edhrec": "https://edhrec.com/route/?cc=Clive%2C+Ifrit%27s+Dominant"
      },
      "purchase_uris": {
        "tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F630957%3Fpage%3D1",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products?idProduct=824143&referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/141201?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
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