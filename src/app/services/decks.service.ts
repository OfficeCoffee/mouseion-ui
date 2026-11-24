import { Injectable, signal } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService, ApiResponse } from './api.service';
import { DeckDto, AddWordToDeckDto} from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class DecksService {
  constructor(private readonly apiService: ApiService) {}
  private readonly _decks = signal<DeckDto[]>([]);

  private normalizeCreateRequest(request: AddWordToDeckDto): AddWordToDeckDto{
    return {
        ...request,
        word: request.word.trim(),
        origin: request.origin?.trim() ?? null,
        definition: request.definition.trim(),
        deckId: request.deckId,
    }
  }

  getAllDecks(): Observable<DeckDto[]> {
    return this.apiService.get<DeckDto[]>('decks').pipe(
        map(response => response.data)
    )
  }

//   addWordToDeck(request: AddWordToDeckDto): Observable<AddWordToDeckDto> {
//     const payload = this.normalizeCreateRequest(request);    
//   }

    // /** 
    //  * GET mouseion/words
    //  * @returns all words in the database
    //  */
    // getAllWords(): Observable<WordDto[]> {
    //   return this.apiService.get<WordDto[]>('words').pipe(
    //     map(response => response.data), // Backend DTOs are already in the correct format
    //     catchError(error => {
    //       console.error('API call failed, using mock data:', error);
    //       return of(this.getMockWord());
    //     })
    //   );
    // }
}