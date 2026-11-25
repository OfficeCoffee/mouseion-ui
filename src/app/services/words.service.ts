//TODO make comment
/**
 * 
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { WordDto } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private readonly apiService: ApiService) {}

  /** 
   * GET words
   * Grabs all words for the view all page
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
   * GET word/id/:id
   * Matches wordId on WordRequest when auth is wired up
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
   * GET word/name/:word
   * Matches wordId on WordRequest when auth is wired up
   */
  getWordByName(name: string): Observable<WordDto> {
    return this.apiService.get<WordDto>(`words/name/${name}`).pipe(
      map(response => response.data), // Backend DTOs are already in the correct format
      catchError(error => {
        console.error('API call failed, using mock data:', error);
        const word = this.getMockWord().find(s => s.word === name);
        if (!word) {
          throw new Error(`Word with name ${name} not found`);
        }
        return of(word);
      })
    );
  }

  /**
   * GET words/recent
   * Get the top ten words decending by date
   */
  getTopTenWords(): Observable<WordDto[]> {
    return this.apiService.get<WordDto[]>('words/recent').pipe(
      map(response => response.data), // Backend DTOs are already in the correct format
      catchError(error => {
        console.error('API call failed, using mock data:', error);
        return of(this.getMockWord());
      })
    );
  }

  /**
   * Get mock word for fallback
   */
  private getMockWord(): WordDto[] {
    return [
      {
        wordId: 1,
        word: "MOCK: Gaiety",
        origin: "Getting lunch with Sara 09/16",
        definition: "The state of being joyous, vivacious, or cheerful.",
        dateAdded: new Date('2023-01-01').toISOString(),
      },
      {
        wordId: 2,
        word: "MOCK: Harangue",
        origin: null,
        definition: "A long, passionate, and vehement speech, especially one delivered before a public gathering.",
        dateAdded: new Date('2023-01-01').toISOString(),
      },
      {
        wordId: 3,
        word: "MOCK: Travail",
        origin: "From book title",
        definition: "Pain, anguish or suffering resulting from mental or physical hardship.",
        dateAdded: new Date('2023-01-01').toISOString(),
      }
    ];
  }
}