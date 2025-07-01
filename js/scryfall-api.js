/**
 * Scryfall API integration for fetching card data
 * Handles pagination and data transformation to match the application's expected format
 */

class ScryfallAPI {
    constructor() {
        this.baseUrl = 'https://api.scryfall.com';
        this.cache = new Map(); // Cache fetched data to avoid repeated API calls
    }

    /**
     * Fetch all cards for a given set code from Scryfall API
     * @param {string} setCode - The set code (e.g., 'FIN', 'FCA')
     * @returns {Promise<Object>} - Promise that resolves to the card data in the expected format
     */
    async fetchSetData(setCode) {
        // Check cache first
        if (this.cache.has(setCode)) {
            console.log(`Using cached data for set ${setCode}`);
            return this.cache.get(setCode);
        }

        console.log(`Fetching data for set ${setCode} from Scryfall API...`);

        const url = `${this.baseUrl}/cards/search?order=set&q=unique:prints+game:paper+s:${setCode}`;

        try {
            const allCards = await this.fetchAllPages(url);
            const processedData = this.processCardData(setCode, allCards);

            // Cache the result
            this.cache.set(setCode, processedData);

            console.log(`Successfully fetched ${allCards.length} cards for set ${setCode}`);
            return processedData;

        } catch (error) {
            console.error(`Error fetching data for set ${setCode}:`, error);
            throw error;
        }
    }

        /**
     * Fetch all pages from a Scryfall API response (handles pagination)
     * @param {string} initialUrl - The initial API URL
     * @returns {Promise<Array>} - Promise that resolves to all cards from all pages
     */
    async fetchAllPages(initialUrl) {
        const allCards = [];
        let currentUrl = initialUrl;
        let pageCount = 1;

        while (currentUrl) {
            console.log(`Fetching page ${pageCount} from Scryfall API...`);

            try {
                const response = await fetch(currentUrl);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(`Set not found. Please check the set code.`);
                    } else if (response.status === 429) {
                        throw new Error(`Rate limit exceeded. Please wait a moment and try again.`);
                    } else {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                }

                const data = await response.json();

                // Add cards from this page to our collection
                allCards.push(...data.data);

                // Check if there are more pages
                if (data.has_more && data.next_page) {
                    currentUrl = data.next_page;
                    pageCount++;

                    // Add a small delay to be respectful to the API
                    await this.delay(100);
                } else {
                    currentUrl = null;
                }

            } catch (error) {
                console.error(`Error fetching page ${pageCount}:`, error);
                throw error;
            }
        }

        console.log(`Fetched ${pageCount} page(s) with ${allCards.length} total cards`);
        return allCards;
    }

        /**
     * Process raw card data from Scryfall into the format expected by the application
     * @param {string} setCode - The set code
     * @param {Array} cards - Array of raw card objects from Scryfall
     * @returns {Object} - Processed card data in the expected format
     */
    processCardData(setCode, cards) {
        if (!Array.isArray(cards) || cards.length === 0) {
            console.warn(`No cards found for set ${setCode}`);
            return {
                setCode: setCode,
                setName: setCode,
                cards: []
            };
        }

        // Filter cards to only include those with integer collector numbers
        const validCards = cards.filter(card =>
            card &&
            card.collector_number &&
            card.collector_number.match(/^\d+$/) &&
            card.name &&
            card.rarity
        );

        if (validCards.length === 0) {
            console.warn(`No valid cards found for set ${setCode}`);
            return {
                setCode: setCode,
                setName: setCode,
                cards: []
            };
        }

        // Find the highest collector number to determine array size
        const maxCollectorNumber = Math.max(
            ...validCards.map(card => parseInt(card.collector_number))
        );

        // Create a list with empty objects up to the max collector number
        const extractedCards = new Array(maxCollectorNumber).fill({});

        // Fill in the cards at their proper positions (collector number = array index)
        validCards.forEach(card => {
            const collectorNumber = parseInt(card.collector_number);
            extractedCards[collectorNumber - 1] = {
                name: card.name,
                rarity: card.rarity,
                collectorNumber: collectorNumber,
                typeLine: card.type_line || '',
                manaCost: card.mana_cost || '',
                cmc: card.cmc || 0,
                imageUris: card.image_uris || null,
                oracleText: card.oracle_text || '',
                flavorText: card.flavor_text || '',
                artist: card.artist || '',
                power: card.power || null,
                toughness: card.toughness || null,
                colors: card.colors || [],
                colorIdentity: card.color_identity || [],
                keywords: card.keywords || [],
                legalities: card.legalities || {}
            };
        });

        // Get set name from the first card (they should all have the same set name)
        const setName = validCards[0]?.set_name || setCode;

        console.log(`Processed ${validCards.length} valid cards for set ${setCode} (${setName})`);
        console.log(`Array size: ${extractedCards.length}, Cards with data: ${extractedCards.filter(card => card.name).length}`);

        return {
            setCode: setCode,
            setName: setName,
            cards: extractedCards
        };
    }

    /**
     * Utility function to add delay between API calls
     * @param {number} ms - Milliseconds to delay
     * @returns {Promise} - Promise that resolves after the delay
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Clear the cache for a specific set or all sets
     * @param {string} setCode - Optional set code to clear specific cache entry
     */
    clearCache(setCode = null) {
        if (setCode) {
            this.cache.delete(setCode);
            console.log(`Cleared cache for set ${setCode}`);
        } else {
            this.cache.clear();
            console.log('Cleared all cached data');
        }
    }

    /**
     * Get cache statistics
     * @returns {Object} - Cache statistics
     */
    getCacheStats() {
        return {
            size: this.cache.size,
            keys: Array.from(this.cache.keys())
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScryfallAPI;
}