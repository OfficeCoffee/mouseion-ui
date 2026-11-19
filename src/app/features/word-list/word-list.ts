import { Component, inject, signal } from '@angular/core';
import { WordService } from '../../services';
import { WordCard } from '../word-card/word-card';
import { toSignal } from '@angular/core/rxjs-interop';
import { MockPost } from '../../services/words.service';
import { map } from 'rxjs';

@Component({
  imports: [WordCard],
  selector: 'app-word-list',
  styleUrl: './word-list.scss',
  templateUrl: './word-list.html',
})
export class WordList {
  private readonly wordService = inject(WordService);

  readonly words = this.wordService.words;
  readonly rawWord = signal('');

  readonly mockWords = toSignal(
    this.wordService.mockGetWords().pipe(
      map(response => response.data)
    ),
    {initialValue: [] as MockPost[] }
  );

  onWordInput(event: Event): void {
    this.rawWord.set((event.target as HTMLInputElement).value);
  }

  onAddWord(): void {
    const word = this.rawWord().trim();
    
    if (!word) return;

    this.wordService.createMockWord({
      raw_word: word,
      origin: 'mock',
      definition: 'mock'
    });

    this.rawWord.set('');
  }
}