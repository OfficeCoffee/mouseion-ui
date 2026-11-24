import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-searchbar',
  styleUrl: './searchbar.scss',
  templateUrl: './searchbar.html',
})
export class Searchbar {
  searchResults: string = "Gaiety"; // Temp for testing
}
