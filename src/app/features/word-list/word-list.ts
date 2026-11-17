import { Component, input, signal } from '@angular/core';
import { CreateWordDto, WordResponseDto } from '../../shared/word.interface';
import { WordService } from '../../services';

interface Word {
  id: number;
  name: string;
}

@Component({
  imports: [],
  selector: 'app-word-list',
  styleUrl: './word-list.scss',
  templateUrl: './word-list.html',
})

export class WordList {
  // rawWord = signal('');

  // constructor(protected readonly wordService: WordService) {}

  // onAddWord(): void {
  //   const word = this.rawWord().trim();

  //   if (!word) return;

  //   const request: CreateWordDto = {
  //     raw_word: word,
  //     origin: "mock",
  //     definition: "mock"
  //   };

  //   this.wordService.createWord(request);
  //   this.rawWord.set('');
  // }

  words: Word[] = []
}