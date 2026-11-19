import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Word, WordDto } from '../components/features/shared/models/backend-dtos.interface';
import { ApiService } from './api.service';

// getAllWords, getWordByName***, 

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private readonly apiService: ApiService) {}

    getAllWords(): Observable<Word[]> {// path spec VVV
        return this.apiService.get<Word[]>('words').pipe(
            map(response => response.data),
            catchError(error => {
                console.error('API call failed, using mock data:', error);
                return of(this.getMockWord());
            })
        );
    }

    getWordByName(name: string): Observable<Word[]> {// path spec VVV
        return this.apiService.get<Word[]>(`words/name/${name}`).pipe(
            map(response => response.data),
            catchError(error => {
                console.error('API call failed, using mock data:', error);
                return of(this.getMockWord());
            })
        );
    }


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