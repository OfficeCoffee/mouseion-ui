import { Component, model, input, output, linkedSignal } from '@angular/core';
import { Mode } from '../../../../services/popup.service';
import { WordsDto } from '../../../../shared/words.interface';

@Component({
  imports: [],
  selector: 'app-add-word-popup',
  styleUrl: './add-word-popup.scss',
  templateUrl: './add-word-popup.html',
})
export class AddWordPopup {
  mode = model<Mode>('add');
  wordsDto = input<WordsDto>();
  closed = output<void>();

  word = linkedSignal(() => this.wordsDto()?.word ?? '');
  origin = linkedSignal(() => this.wordsDto()?.origin ?? '');
  definition = linkedSignal(() => this.wordsDto()?.definition ?? '');

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
