import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'view-words-table',
        loadComponent: () => 
            import('./components/features/view-words-table/view-words-table').then(m => m.ViewWordsTable),
    },
    {
        path: 'view-words-page',
        loadComponent: () => 
            import('./components/features/view-words-page/view-words-page').then(m => m.ViewWordsPage),
    }
];
