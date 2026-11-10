import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Popup } from './popup/popup';
import { WordList } from './word-list/word-list';

@Component({
  imports: [RouterOutlet, Popup, WordList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mouseion-ui');
}
