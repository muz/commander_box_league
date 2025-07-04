# Commander Box League - Booster Simulator

A single-page web application that simulates opening random boosters from Magic the Gathering trading card boxes. This tool allows players to experience the thrill of opening boosters virtually without the cost of physical cards.

**This tool is designed for simulating virtual Commander Box League deck building.**

[Try the live interface here!](https://muz.github.io/commander_box_league/)

**Inspired by [Commander Box League](https://wpn.wizards.com/en/event/edge-of-eternities-commander-box-league).**

## Features

- **Booster Simulation**: Open random boosters from various Magic the Gathering sets
- **Card Display**: View cards pulled from boosters with relevant information
- **Set Selection**: Choose from different Magic the Gathering sets and formats
- **Real-time Data**: Fetches card data directly from Scryfall.com API
- **Browser Caching**: Caches fetched data to improve performance
- **No Backend Required**: Pure static site, runs entirely in your browser

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API Integration**: Scryfall.com API for real-time card data
- **Static Site**: All files are served from the `docs/` directory (suitable for GitHub Pages)

## Project Structure

```
commander_box_league/
├── docs/
│   ├── css/
│   │   └── styles.css
│   ├── index.html           # Main entry point (open this in your browser)
│   ├── js/
│   │   ├── cardSetsSummary.json   # List of available sets and metadata
│   │   ├── scryfall-api.js       # Scryfall API integration and caching
│   │   └── sets/
│   │       ├── DFT.json          # Example set configuration (one per set)
│   │       ├── FIN.json
│   │       └── TDM.json
├── notes/
│   └── implementation_details.md
├── README.md
└── test-api.html
```

- **All application files are under the `docs/` directory.**
- **Set definitions** are stored as individual JSON files in `docs/js/sets/` (e.g., `DFT.json`).
- **Set summary and metadata** is in `docs/js/cardSetsSummary.json`.
- **No backend/server required**: just open `docs/index.html` in your browser, or use GitHub Pages.

## Getting Started

1. Clone or download this repository
2. Open `docs/index.html` in your web browser, or use the [live interface](https://muz.github.io/commander_box_league/)
3. Start simulating booster openings!

**Note**: This application fetches card data from the Scryfall.com API. The API has rate limits, so the application includes built-in delays between requests and browser-based caching to minimize API calls.

## Testing

To test the Scryfall API integration, open `test-api.html` in your browser. This will allow you to verify that the API calls are working correctly and test the caching functionality.

## Development

This is a static, client-side only application. Simply edit the HTML, CSS, and JavaScript files in `docs/` and refresh your browser to see changes. No server setup is required.

## License

This project is for educational and entertainment purposes. Magic the Gathering is a trademark of Wizards of the Coast.

## Contributing

Feel free to contribute by:
- Adding new card sets (add a new JSON file to `docs/js/sets/` and update `cardSetsSummary.json`)
- Improving the UI/UX
- Adding new features
- Fixing bugs
- Correcting the pull distribution for a given set or across boosters...

---

*Note: This simulator is for entertainment purposes only and does not involve real trading cards or monetary value.*