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
    dateAdded: Date;
}

export interface WordRequestDto {
    word: string;
    origin: string;
    definition: string;
}

// --- WordsDeck -----------------------------------------

export interface Word {
    wordId: number;
    word: string;
    origin?: string | null;
    definition: string;
    dateAdded: string;
}

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