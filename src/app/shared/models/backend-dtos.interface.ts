/**
 * TypeScript interfaces that mirror the Java Spring Boot API (mr-fixit-service).
 * Property names are camelCase to match JSON from the server.
 */


// --- Deck ----------------------------------------

export interface DeckDto {
    deckId: number;
    deckName: string;
    dateAdded: string;
}

export interface DeckRequestDto {
    deckName: string;
}

// --- Words -----------------------------------------

export interface WordDto {
    wordId: number;
    word: string;
    origin?: string | null;
    definition: string;
    dateAdded: string;
}

// --- WordsDeck -----------------------------------------

export interface WordDeckDto {
    deckId: number;
    wordId: number;
}

export interface AddWordToDeckDto {
    word: string;
    origin: string;
    definition: string;
    deckId: number;
}

export interface WordInDeckDto {
    wordId: number;
    word: string;
}