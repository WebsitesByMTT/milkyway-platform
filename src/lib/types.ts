export interface Game {
    _id: string; // Unique identifier for the game
    name: string; // Game name
    thumbnail: string; // URL to the game thumbnail image
    type: string; // Type of game (e.g., "slot")
    category: string; // Category of the game
    status: string; // Status of the game (e.g., "active")
    tagName: string; // Tag or shorthand identifier for the game
    slug: string; // Slugified name of the game for URLs
    payout: string; // ID or reference to payout details
    createdAt: string; // ISO date string for creation time
}

export interface Data {
    availableAt?: string;
    isUnderMaintenance?: boolean;
    featured?: Game[];
    others?: Game[];
}