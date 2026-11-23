import { Component, model, input, output, linkedSignal, computed } from '@angular/core';
import { Mode } from '../../../../services/popup.service';
import { WordsDto } from '../../../../shared/words.interface';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-popup',
  styleUrl: './word-popup.scss',
  templateUrl: './word-popup.html',
})
export class Popup {
  mode = model<Mode>('add');
  wordsDto = input<WordsDto>();
  closed = output<void>();

  // This will handle passing around the word data
  word = linkedSignal(() => this.wordsDto()?.word ?? '');
  origin = linkedSignal(() => this.wordsDto()?.origin ?? '');
  definition = linkedSignal(() => this.wordsDto()?.definition ?? '');

  disabled = computed(() => this.mode() === 'view');

  add() {
    // TODO: Call add word from deck service when that is created
    // that requires the AddWordToDeckDto from the api repo
    this.closed.emit();
  }

  startEdit() {
    // Switch from view to update
    this.mode.set('update');
  }

  update(){
    // Update the word using updateWord() from words service.
    this.closed.emit();
  }

  
}
