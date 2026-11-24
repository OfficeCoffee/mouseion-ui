import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { ConfirmationPopup } from './features/popups/components/confirmation-popup/confirmation-popup';
import { Popup } from './features/popups/components/word-popup/word-popup';
import { WordList } from './features/word-list/word-list';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    { path: 'popup/confirmation', component: ConfirmationPopup},
    { path: 'popup/word', component: Popup},
    { path: 'words', component: WordList },
];