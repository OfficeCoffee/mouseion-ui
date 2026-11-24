import { Injectable, signal } from "@angular/core";
import { WordDto } from "../shared/models/backend-dtos.interface";

// Add: Words can be added
// View: Words can be viewed, but not edited (have to press edit buton)
// Edit: Words can be edited and then updated by pressing the save button.
// TODO: This should probably be put into an enum class of some sorts in addition to the view table states
export type Mode = 'add' | 'view' | 'update';

@Injectable({ providedIn: 'root'})
export class PopupService {
    private readonly _state = signal<{ mode: Mode; word?: WordDto} | null> (null);
    readonly state = this._state.asReadonly();

    open(mode: Mode, word?: WordDto) {
        this._state.set({ mode, word});
    }

    close() {
        this._state.set(null);
    }

    setMode(mode: Mode) {
        this._state.set({mode})
    }
}