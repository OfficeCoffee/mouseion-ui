import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { DestroyRef, inject, OnInit, signal } from '@angular/core';
import { WordService } from '../../../../services/words.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WordDto } from '../../../../shared/models';
import {Searchbar} from '../../../dashboard/components/searchbar/searchbar';

@Component({
  imports: [MatListModule],
  selector: 'app-view-words-result',
  styleUrl: './view-words-result.scss',
  templateUrl: './view-words-result.html',
})
export class ViewWordsResult implements OnInit {

  private readonly destroyRef = inject(DestroyRef)
  private readonly wordService = inject(WordService);
  readonly wordSignal = signal<WordDto[]>([]);

  ngOnInit(): void {
    this.loadWords();
  }
  //Searchbar.prototype.searchResults
  //wordToSearch string = new Searchbar().searchResults;
  private loadWords(): void{
    this.wordService
    //.getAllWords()
    .getWordByName(new Searchbar().searchResults)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: words => {
        this.wordSignal.set([...words]);
      }
    })
  }
}
