import { Component, model, input, output, linkedSignal, computed, inject } from '@angular/core';
import { Mode, PopupService } from '../../../../services/popup.service';
import { testDto } from '../../../../shared/models/backend-dtos.interface';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { testservice } from '../../../../services/tests.service';

@Component({
  imports: [FormsModule],
  selector: 'app-popup',
  styleUrl: './test-popup.scss',
  templateUrl: './test-popup.html',
})
export class Popup {
  private popup = inject(PopupService);
  private testservice = inject(testservice);

  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    test: ['', Validators.required],
    origin: [''],
    definition: ['', Validators.required],
  });


  mode = computed(() => this.popup.state()?.mode ?? 'add');
  testDto = computed(() => this.popup.state()?.test);

  // test = linkedSignal(() => this.testDto()?.test ?? '');
  // origin = linkedSignal(() => this.testDto()?.origin ?? '');
  // definition = linkedSignal(() => this.testDto()?.definition ?? '');



  disabled = computed(() => this.mode() === 'view');

  close() {
    this.popup.close();
  }

  setMode(mode: Mode){
    console.log("Changing mode to ", mode);
    this.popup.setMode(mode);
  }

  add() {
    console.log("hit add!")
    this.popup.close();
  }

  update(){
    console.log("hit update!")
    this.popup.close();
  }
}
