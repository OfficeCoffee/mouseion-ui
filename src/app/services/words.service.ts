import { Injectable, inject, signal } from '@angular/core';
import { ApiResponse, ApiService } from './api.service';
import { CreateWordDto, UpdateWordDto, WordResponseDto } from '../shared/words.interface';
import { Observable, tap, map} from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface MockPost {
    wordId: number;
    word: string;
    origin: string;
    definition: string;
    dateAdded: string;
}

@Injectable({
  providedIn: 'root'
})
export class WordService{
    constructor(private readonly apiService: ApiService) {}
    private readonly _words = signal<WordResponseDto[]>([]);
    readonly words = this._words.asReadonly();

    private readonly _mockWords = signal<MockPost[]>([]);
    readonly mockWords = this._mockWords.asReadonly();

    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    mockGetWords(): Observable<ApiResponse<MockPost[]>> {
        console.log("Calling mock API")

    return this.apiService.get<any[]>('posts').pipe(
        map(response => ({
            ...response,
            data: response.data.map((post): MockPost => ({
                wordId: post.id,
                word: post.title,
                origin: 'Mock',
                definition: 'Mock',
                dateAdded: new Date().toISOString()
                }))
        }))
    );
    }

    /**
     * GET /mouseion/words/id/{id}
     * @returns the word associated with the passed in id
     */
    getWordById(id: number): Observable<ApiResponse<WordResponseDto>> {
        return this.apiService.get<WordResponseDto>(`words/id/${id}`);
    }

    /**
     * GET /mouseion/words/name/{name}
     * @returns the word associated with the passed in name
     */
    getWordByName(name: string): Observable<ApiResponse<WordResponseDto[]>> {
        //TODO: investigate if special characters like '#' or '?' will mess this path up.
        return this.apiService.get<WordResponseDto[]>(`words/name/${name}`);
    }

    /**
     * GET /mouseion/words/recent
     * @returns the ten most recently added words
     */  
    getTenWordsByDate(): Observable<ApiResponse<WordResponseDto[]>> {
        return this.apiService.get<WordResponseDto[]>('words/recent').pipe(
            tap(result => this._words.set(result.data))
        );
    }

    /**
     * GET /mouseion/words
     * @returns all words in the database
     */
    getWordsInDeck(): Observable<ApiResponse<WordResponseDto[]>> {
        // TODO: this name should really be changed because it doesn't get words from a deck,
        // but rather all existing words.
        return this.apiService.get<WordResponseDto[]>('words').pipe(
            tap(result => this._words.set(result.data))
        );
    }


    /**
     * PUT /mouseion/words/{id}
     * @returns the updated word.
     */
    updateWord(id: number, dto: UpdateWordDto): Observable<ApiResponse<WordResponseDto>> {
        return this.apiService.put<WordResponseDto>(`words/${id})`, dto).pipe(
            tap(result =>
                this._words.update(list => 
                    list.map(word => (word.id === id ? result.data : word))
                )
            )
        );
    }

    /**
     * MOCK: Delete when done.
     * Words are created through the deck service.
     */
    createMockWord(dto: CreateWordDto): void {
        const newWord: WordResponseDto = {
            ...dto,

            id: Date.now(),
            dateAdded: new Date().toISOString()
        };
        this._words.update(list => [...list, newWord]);
    }

    /**
     * MOCK: Delete when done.
     * Just here to clean up created words, might not even use.
     */
    // deleteMockWord(id: number): void {
    //     this._words.update(words => words.filter(words => words.id !==id)
    //     );
    // }
}