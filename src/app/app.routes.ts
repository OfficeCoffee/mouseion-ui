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
    {
        path: 'view-words-table',
        loadComponent: () => 
            import('./features/view-all-words/components/view-words-table/view-words-table').then(m => m.ViewWordsTable),
    },
    {
        path: 'view-words-page', // Use for url path
        loadComponent: () => 
            import('./features/view-all-words/components/view-words-page/view-words-page').then(m => m.ViewWordsPage),
    },
    {
        path: 'view-words-results', // Use for url path
        loadComponent: () => 
            import('./features/view-all-words/components/view-words-result/view-words-result').then(m => m.ViewWordsResult),
    }
];