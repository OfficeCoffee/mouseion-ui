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

// From the api
export interface WordsDto {
    wordId: number;
    word: string;
    origin: string;
    definition: string;
    dateAdded: string;
}
