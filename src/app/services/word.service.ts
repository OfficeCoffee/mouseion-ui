//TODO change comment
/**
 * Students who submit work orders.
 *
 * Each work order embeds a full student object from the API. This service is for
 * standalone student CRUD/list screens (GET with mock fallback).
 */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Word, WordDto } from '../shared/models';


//TODO add get word by name, get ten recent words, and post word
@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private readonly apiService: ApiService) {}

  /** GET words. Grabs all words for the view all page. */
  getWords(): Observable<Word[]> {
    return this.apiService.get<WordDto[]>('word').pipe(
      map(response => response.data), // Backend DTOs are already in the correct format
      catchError(error => {
        console.error('API call failed, using mock data:', error);
        return of(this.getMockWord());
      })
    );
  }

  /** GET word/:id. Matches wordId on WordRequest when auth is wired up. */
  getWordById(wordId: number): Observable<Word> {
    return this.apiService.get<WordDto>(`word/${wordId}`).pipe(
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