import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MockComponent } from './mock-component/mock-component';

@Component({
  imports: [RouterOutlet, MockComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mouseion-ui');
}
