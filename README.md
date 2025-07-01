# Commander Box League - Booster Simulator

A single-page web application that simulates opening random boosters from Magic the Gathering trading card boxes. This tool allows players to experience the thrill of opening boosters virtually without the cost of physical cards.

**This tool was inspired by and can be used to simulate running a [Commander Box League](https://wpn.wizards.com/en/event/edge-of-eternities-commander-box-league) drafting pool.**

## Features

- **Booster Simulation**: Open random boosters from various Magic the Gathering sets
- **Card Display**: View cards pulled from boosters with relevant information
- **Set Selection**: Choose from different Magic the Gathering sets and formats
- **Real-time Data**: Fetches card data directly from Scryfall.com API
- **Browser Caching**: Caches fetched data to improve performance
- **Responsive Design**: Works on desktop and mobile devices

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API Integration**: Scryfall.com API for real-time card data
- **No Backend Required**: Pure client-side application with browser-based caching

## Project Structure

```
commander_box_league/
├── index.html          # Main HTML file
├── css/               # Stylesheets
│   └── styles.css
├── js/                # JavaScript files
│   ├── scryfall-api.js # Scryfall API integration
│   └── cardSets.json   # Set configuration data
├── assets/            # Images and other assets
│   └── images/
└── README.md          # This file
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start simulating booster openings!

**Note**: This application fetches card data from the Scryfall.com API. The API has rate limits, so the application includes built-in delays between requests and browser-based caching to minimize API calls.

## Testing

To test the Scryfall API integration, open `test-api.html` in your browser. This will allow you to verify that the API calls are working correctly and test the caching functionality.

## Development

This is a client-side only application, so no server setup is required. Simply edit the HTML, CSS, and JavaScript files and refresh your browser to see changes.

## License

This project is for educational and entertainment purposes. Magic the Gathering is a trademark of Wizards of the Coast.

## Contributing

Feel free to contribute by:
- Adding new card sets
- Improving the UI/UX
- Adding new features
- Fixing bugs
- Correct the pull distribution for a given set or across boosters...

---

*Note: This simulator is for entertainment purposes only and does not involve real trading cards or monetary value.*