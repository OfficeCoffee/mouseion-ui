import { Component } from '@angular/core';

interface Word {
  id: number;
  rawWord: string
}



@Component({
  imports: [],
  selector: 'app-word-list',
  styleUrl: './word-list.scss',
  templateUrl: './word-list.html',
})

export class WordList {
  words: Word[] = [
    { id: 1, rawWord: 'Farcical'},
    { id: 2, rawWord: 'Gazette'},
    { id: 3, rawWord: 'Liturgical'},
    { id: 4, rawWord: 'Derision'},
  ]
}
