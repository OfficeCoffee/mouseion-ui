/**
 * TypeScript interfaces that mirror the Java Spring Boot API (mr-fixit-service).
 * Property names are camelCase to match JSON from the server.
 */


// --- Deck ----------------------------------------

export interface DeckDto {
    deckId: number;
    deckName: string;
    dateAdded: Date;
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

export interface CreateWordDto {
    raw_word: string;
    origin?: string;
    definition: string;
}

// The id is passed in the url 
// so this only contains the values that are updatable 
export type UpdateWordDto = CreateWordDto;

export interface WordResponseDto extends CreateWordDto {
    id: number;
    dateAdded: string; // ISO string?
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