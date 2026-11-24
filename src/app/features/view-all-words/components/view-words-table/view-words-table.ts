import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { DestroyRef, inject, OnInit, signal } from '@angular/core';
import { WordService } from '../../../../services/words.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WordDto } from '../../../../shared/models';

@Component({
  imports: [MatListModule],
  selector: 'app-view-words-table',
  styleUrl: './view-words-table.scss',
  templateUrl: './view-words-table.html',
})
export class ViewWordsTable implements OnInit {
list: any;

  private readonly destroyRef = inject(DestroyRef)
  private readonly wordService = inject(WordService);
  readonly wordSignal = signal<WordDto[]>([]);

  ngOnInit(): void {
    this.loadWords();
  }

  private loadWords(): void{
    this.wordService
    .getAllWords()
    //.getWordByName('Gaiety')
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: words => {
        this.wordSignal.set([...words]);
      }
    })
  }
//modular list: 
// Word (call for text from DB), 
// Definition (call from DB), 
// Modify(+) (naviagable link to edit word pop up), 
// Delete (navigatable link to delete pop up)
}
