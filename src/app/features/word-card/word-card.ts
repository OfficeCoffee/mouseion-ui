import { Component, input } from '@angular/core';
import { WordDto, WordResponseDto } from '../../shared/models/backend-dtos.interface';

@Component({
  imports: [],
  selector: 'app-word-card',
  styleUrl: './word-card.scss',
  templateUrl: './word-card.html',
})
export class WordCard {
  readonly word = input.required<WordDto>();
}