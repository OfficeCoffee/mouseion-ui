import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Popup } from './features/popups/components/word-popup/word-popup';
import { PopupService } from './services/popup.service';

@Component({
  imports: [RouterOutlet, Popup],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mouseion-ui');
  popup = inject(PopupService)
}
