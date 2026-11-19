import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Word } from '../../../../shared/models/backend-dtos.interface';
import { WordService } from '../../../../services/word.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  imports: [],
  selector: 'app-words-table',
  styleUrl: './words-table.scss',
  templateUrl: './words-table.html',
})
export class WordsTable implements OnInit{
  private readonly destroyRef = inject(DestroyRef)
  private readonly wordService = inject(WordService);
  readonly wordSignal = signal<Word[]>([]);

  ngOnInit(): void {
    this.loadWords();
  }

  private loadWords(): void{
    this.wordService
    .getTopTenWords()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: words => {
        this.wordSignal.set([...words])
      }
    })
  }
}
