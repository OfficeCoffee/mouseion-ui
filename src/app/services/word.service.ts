import { Injectable, inject, signal } from '@angular/core';
import { ApiResponse, ApiService } from './api.service';
import { CreateWordDto, UpdateWordDto, WordResponseDto } from '../shared/word.interface';
import { Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService{
    constructor(private readonly apiService: ApiService) {}
    private readonly _words = signal<WordResponseDto[]>([]);
    readonly orders = this._words.asReadonly();

    /**
     * GET /mouseion/words
     * @returns all words in the database
     */
    loadAllWords(): Observable<ApiResponse<WordResponseDto[]>> {
        return this.apiService.get<WordResponseDto[]>('words').pipe(
            tap(result => this._words.set(result.data))
        );
    }

    /**
     * GET /mouseion/words/recent
     * @returns the ten most recently added words
     */  
    loadRecent10Words(): Observable<ApiResponse<WordResponseDto[]>> {
        return this.apiService.get<WordResponseDto[]>('orders').pipe(
            tap(result => this._words.set(result.data))
        );
    }

    /**
     * GET /mouseion/words/id/{id}
     * @returns the word associated with the passed in id
     */
    loadWordById(id: number): Observable<ApiResponse<WordResponseDto>> {
        return this.apiService.get<WordResponseDto>(`words/id/${id}`);
    }

    /**
     * GET /mouseion/words/name/{name}
     * @returns the word associated with the passed in name
     */
    loadWordByName(name: string): Observable<ApiResponse<WordResponseDto>> {
        //TODO: investigate if special characters like '#' or '?' will mess this path up.
        return this.apiService.get<WordResponseDto>(`word/name/${name}`);
    }

    /**
     * PUT /mouseion/words/{id}
     * @returns the updated word.
     */
    updateWord(id: number, dto: UpdateWordDto): Observable<ApiResponse<WordResponseDto>> {
        return this.apiService.put<WordResponseDto>(`word/${id})`, dto).pipe(
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
    createWord(dto: CreateWordDto): void {
        const newWord: WordResponseDto = {
            ...dto,

            id: 42, // There is no answer ;-;
            createdAt: new Date().toISOString()
        };
        this._words.update(list => [...list, newWord]);
    }
}