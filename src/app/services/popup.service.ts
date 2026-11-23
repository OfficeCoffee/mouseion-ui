import { Injectable, signal } from "@angular/core";
import { baseWordDto } from "../shared/words.interface";

// Add: Words can be added
// View: Words can be viewed, but not edited (have to press edit buton)
// Edit: Words can be edited and then updated by pressing the save button.
type Mode = 'add' | 'view' | 'edit';

@Injectable({ providedIn: 'root'})
export class PopupService {
    private readonly _state = signal<{ mode: Mode; word?: baseWordDto} | null> (null);
    readonly state = this._state.asReadonly();

    open(mode: Mode, word?: baseWordDto) {
        this._state.set({ mode, word});
    }

    close() {
        this._state.set(null);
    }
}