import { Component, signal } from '@angular/core';

interface Word {
  id: number;
  name: string
}

@Component({
  imports: [],
  selector: 'app-words',
  styleUrl: './words.scss',
  templateUrl: './words.html',
})

export class Words {

    /** Greeting computed once at construction. Avoid heavy getters in the template. */
  readonly welcomeMessage = signal(Words.buildWelcomeMessage());

  private static buildWelcomeMessage(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning!';
    if (hour < 18) return 'Good afternoon!';
    return 'Good evening!';
  }

  words: Word[] = [
    {id: 1, name: "name1"},
    {id: 2, name: "name2"},
    {id: 3, name: "name3"},
  ]

}
