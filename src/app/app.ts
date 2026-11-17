import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewWordsTable } from './components/features/view-words-table/view-words-table/view-words-table';
import { ViewWordsPage } from './components/features/view-words-page/view-words-page/view-words-page';

@Component({
  imports: [RouterOutlet, ViewWordsTable, ViewWordsPage],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mouseion-ui');
}
