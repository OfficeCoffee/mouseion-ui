//TODO make comment
/**
 * 
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Word, WordDto } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private readonly apiService: ApiService) {}

  /** 
   * GET words
   * Grabs all words for the view all page
   */
  getAllWords(): Observable<Word[]> {
    return this.apiService.get<Word[]>('words').pipe(
      map(response => response.data), // Backend DTOs are already in the correct format
      catchError(error => {
        console.error('API call failed, using mock data:', error);
        return of(this.getMockWord());
      })
    );
  }

  /** 
   * GET word/:id
   * Matches wordId on WordRequest when auth is wired up
   */
  getWordById(wordId: number): Observable<Word> {
    return this.apiService.get<Word>(`word/id/${wordId}`).pipe(
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
   * GET words/recent
   * Get the top ten words decending by date
   */
  getTopTenWords(): Observable<Word[]> {
    return this.apiService.get<Word[]>('words/recent').pipe(
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
  private getMockWord(): Word[] {
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