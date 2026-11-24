import { Component, model, input, output, linkedSignal, computed, inject } from '@angular/core';
import { Mode, PopupService } from '../../../../services/popup.service';
import { WordDto } from '../../../../shared/models/backend-dtos.interface';
import { FormsModule } from '@angular/forms';
import { WordService } from '../../../../services/words.service';

@Component({
  imports: [FormsModule],
  selector: 'app-popup',
  styleUrl: './word-popup.scss',
  templateUrl: './word-popup.html',
})
export class Popup {
  private popup = inject(PopupService);
  private wordService = inject(WordService);

  // Values calculated from other signals

  mode = computed(() => this.popup.state()?.mode ?? 'add');
  wordDto = computed(() => this.popup.state()?.word);

  // This will handle passing around the word data
  word = linkedSignal(() => this.wordDto()?.word ?? '');
  origin = linkedSignal(() => this.wordDto()?.origin ?? '');
  definition = linkedSignal(() => this.wordDto()?.definition ?? '');

  disabled = computed(() => this.mode() === 'view');

  close() {
    this.popup.close();
  }

  setMode(mode: Mode){
    console.log("Changing mode to ", mode);
    this.popup.setMode(mode);
  }

  add() {
    // TODO: Call add word from deck service when that is created
    // that requires the AddWordToDeckDto from the api repo
    console.log("hit add!")
    this.popup.close();
  }

  update(){
    // Update the word using updateWord() from words service.
    console.log("hit update!")
    this.popup.close();
  }
}
