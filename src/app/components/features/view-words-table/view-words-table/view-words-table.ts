import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  imports: [MatDivider, MatButton, MatIcon, MatListModule],
  selector: 'app-view-words-table',
  styleUrl: './view-words-table.scss',
  templateUrl: './view-words-table.html',
})
export class ViewWordsTable {
list: any;
//modular list: 
// Word (call for text from DB), 
// Definition (call from DB), 
// Modify(+) (naviagable link to edit word pop up), 
// Delete (navigatable link to delete pop up)
}
