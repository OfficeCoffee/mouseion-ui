//TODO make comment
/**
 * 
 */
import { Injectable, signal } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService, ApiResponse } from './api.service';
import { WordDto, CreateWordDto, UpdateWordDto, WordResponseDto } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private readonly apiService: ApiService) {}
  private readonly _words = signal<WordResponseDto[]>([]);

  /** 
   * GET mouseion/words
   * @returns all words in the database
   */
  getAllWords(): Observable<WordDto[]> {
    return this.apiService.get<WordDto[]>('words').pipe(
      map(response => response.data), // Backend DTOs are already in the correct format
      catchError(error => {
        console.error('API call failed, using mock data:', error);
        return of(this.getMockWord());
      })
    );
  }

  /**
   * GET /mouseion/words/id/{id}
   * @returns the word associated with the passed in id
   */
  getWordById(wordId: number): Observable<WordDto> {
    return this.apiService.get<WordDto>(`words/id/${wordId}`).pipe(
      map(response => response.data), // Backend DTOs are already in the correct format
      catchError(error => {
        console.error('API call failed, using mock data:', error);
        const word = this.getMockWord().find(s => s.wordId === wordId);
        if (!word) {
          throw new Error(`Word with ID ${wordId} not found`);
        }
        return of(word);
      })
    );
  }

  /**
   * GET /mouseion/words/name/{name}
   * @returns the word associated with the passed in name
   */
  getWordByName(name: string): Observable<WordDto[]> {
      return this.apiService.get<WordDto[]>('words').pipe(
        map(response => response.data),
        catchError(error => {
          console.error('API call failed, using mock data:', error);
          return of(this.getMockWord());
        })
      );
    }

  /**
   * GET /mouseion/words/recent
   * @returns the ten most recently added words
   */  
  getTenWordsByDate(): Observable<WordDto[]> {
    return this.apiService.get<WordDto[]>('words/recent').pipe(
      map(response => response.data), // Backend DTOs are already in the correct format
      catchError(error => {
        console.error('API call failed, using mock data:', error);
        return of(this.getMockWord());
      })
    );
  }

  /**
   * GET /mouseion/words
   * @returns all words in the deck id
   */
  getWordsInDeck(): Observable<ApiResponse<WordResponseDto[]>> {
      return this.apiService.get<WordResponseDto[]>('words/deck/${deckId}').pipe(
          tap(result => this._words.set(result.data))
      );
  }


  /**
   * PUT /mouseion/words/{id}
   * @returns the updated word
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
   * Get mock word for fallback
   */
  private getMockWord(): WordDto[] {
    return [
      {
        wordId: 1,
        word: "Gaiety",
        origin: "Getting lunch with Sara 09/16",
        definition: "The state of being joyous, vivacious, or cheerful.",
        dateAdded: new Date('2023-01-01').toISOString(),
      },
      {
        wordId: 2,
        word: "Harangue",
        origin: null,
        definition: "A long, passionate, and vehement speech, especially one delivered before a public gathering.",
        dateAdded: new Date('2023-01-01').toISOString(),
      },
      {
        wordId: 3,
        word: "Travail",
        origin: "From book title",
        definition: "Pain, anguish or suffering resulting from mental or physical hardship.",
        dateAdded: new Date('2023-01-01').toISOString(),
      }
    ];
  }
}