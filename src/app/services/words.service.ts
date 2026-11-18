import { Injectable, inject, signal } from '@angular/core';
import { ApiResponse, ApiService } from './api.service';
import { CreateWordDto, UpdateWordDto, WordResponseDto } from '../shared/words.interface';
import { Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService{
    constructor(private readonly apiService: ApiService) {}
    private readonly _words = signal<WordResponseDto[]>([]);
    readonly words = this._words.asReadonly();

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
        return this.apiService.get<WordResponseDto[]>('words').pipe(
            tap(result => this._words.set(result.data))
        );
    }

    /**
     * GET /mouseion/words
     * @returns all words in the database
     */
    getWordsInDeck(): Observable<ApiResponse<WordResponseDto[]>> {
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
            createdAt: new Date().toISOString()
        };
        this._words.update(list => [...list, newWord]);
    }

    /**
     * MOCK: Delete when done.
     * Just here to clean up created words, might not even use.
     */
    deleteMockWord(id: number): void {
        this._words.update(words => words.filter(words => words.id !==id)
        );
    }
}