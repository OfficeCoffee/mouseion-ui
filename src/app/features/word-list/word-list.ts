import { Component, inject, signal } from '@angular/core';
import { WordService } from '../../services/words.service';
import { WordCard } from '../word-card/word-card';
import { toSignal } from '@angular/core/rxjs-interop';
import { WordDto } from '../../shared/models/backend-dtos.interface';
import { PopupService } from '../../services/popup.service';

@Component({
  imports: [WordCard],
  selector: 'app-word-list',
  styleUrl: './word-list.scss',
  templateUrl: './word-list.html',
})
export class WordList {
  private readonly wordService = inject(WordService);
  
  popup = inject(PopupService);

  readonly words = toSignal(
    this.wordService.getAllWords(),
    { initialValue: [] as WordDto[] }
  )
}