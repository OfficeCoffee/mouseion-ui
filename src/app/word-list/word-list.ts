import { Component } from '@angular/core';

interface Word {
  id: number;
  name: string
}

@Component({
  imports: [],
  selector: 'app-word-list',
  styleUrl: './word-list.scss',
  templateUrl: './word-list.html',
})

export class WordList {
  words: Word[] = [
    { id: 1, name: 'Farcical'},
    { id: 2, name: 'Gazette'},
    { id: 3, name: 'Liturgical'},
    { id: 4, name: 'Derision'},
  ]
}
