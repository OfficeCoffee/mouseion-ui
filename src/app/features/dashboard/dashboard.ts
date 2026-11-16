import { Component, createComponent, DestroyRef, inject, OnInit } from '@angular/core';

import { Searchbar } from './components/searchbar/searchbar';
import { WordOfTheDay } from './components/word-of-the-day/word-of-the-day';
import { WordsTable } from './components/words-table/words-table';

// import { Words } from '@app/words/';

@Component({
  imports: [
    Searchbar,
    WordOfTheDay,
    WordsTable,
  ],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard{
  
}
