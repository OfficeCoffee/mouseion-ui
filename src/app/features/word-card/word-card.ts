import { Component, input } from '@angular/core';
import { WordResponseDto } from '../../shared/words.interface';
import { MockPost } from '../../services/words.service';

@Component({
  imports: [],
  selector: 'app-word-card',
  styleUrl: './word-card.scss',
  templateUrl: './word-card.html',
})
export class WordCard {
  readonly word = input.required<MockPost>();
}