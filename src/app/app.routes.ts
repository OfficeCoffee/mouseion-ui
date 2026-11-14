import { Routes } from '@angular/router';
import { ConfirmationPopup } from './features/popups/components/confirmation-popup/confirmation-popup';
import { AddWordPopup } from './features/popups/components/add-word-popup/add-word-popup';
import { EditWordPopup } from './features/popups/components/edit-word-popup/edit-word-popup';
import { SaveWordPopup } from './features/popups/components/save-word-popup/save-word-popup';

export const routes: Routes = [
    { path: 'popup/confirmation', component: ConfirmationPopup},
    { path: 'popup/addWord', component: AddWordPopup},
    { path: 'popup/editWord', component: EditWordPopup}, //change this to include id later.
    { path: 'popup/saveWord', component: SaveWordPopup},
];
