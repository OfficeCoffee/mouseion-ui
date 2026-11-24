import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {ViewWordsTable} from '../view-words-table/view-words-table';

@Component({
  imports: [MatButton, MatIcon, ViewWordsTable],
  selector: 'app-view-words-page',
  styleUrl: './view-words-page.scss',
  templateUrl: './view-words-page.html',
})
export class ViewWordsPage {
  searchTitle: string = "Results";
  viewTitle: string = "View All Words";

  routeTitle: boolean = false;
}
