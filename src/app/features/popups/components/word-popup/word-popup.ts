import { Component, model, input, output, linkedSignal, computed, inject, effect } from '@angular/core';
import { Mode, PopupService } from '../../../../services/popup.service';
import { WordDto } from '../../../../shared/models/backend-dtos.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WordService } from '../../../../services/words.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-popup',
  styleUrl: './word-popup.scss',
  templateUrl: './word-popup.html',
})
export class Popup {
  private popup = inject(PopupService);
  private wordService = inject(WordService);

  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    word: ['', Validators.required],
    origin: [''],
    definition: ['', Validators.required],
  });

  // Values calculated from other signals
  mode = computed(() => this.popup.state()?.mode ?? 'add');
  wordDto = computed(() => this.popup.state()?.word);

  constructor() {
    effect(() => {
      const baseWord = this.wordDto();

      if(this.mode() === 'add' || !baseWord) {
        this.form.reset({ word: '', origin: '', definition: '' });
      } else {
        this.form.reset({ ...baseWord, origin: baseWord.origin ?? '' });
      }

      if (this.mode() === 'view') {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }

  private buildWord(){
    const rawWord = this.form.getRawValue();
    return { ...rawWord, origin: rawWord.origin.trim() || null };
  }

  close() {
    this.popup.close();
  }

  setMode(mode: Mode){
    console.log("Changing mode to ", mode);
    this.popup.setMode(mode);
  }

  add() {
    if(this.form.invalid) return;

    //this.deckService.addWord(this.buildValues()).subscribe(() => this.popup.close));


    // TODO: Call add word from deck service when that is created
    // that requires the AddWordToDeckDto from the api repo
    console.log("hit add!")
    this.popup.close();
  }

  update(){
    const originalWord = this.wordDto();
    
    if(this.form.invalid || !originalWord) return;

    // Update the word using updateWord() from words service.
    console.log("hit update!")
    this.popup.close();
  }
}
