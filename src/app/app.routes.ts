import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';

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
    {
        path: 'view-words-table',
        loadComponent: () => 
            import('./features/view-all-words/components/view-words-table/view-words-table').then(m => m.ViewWordsTable),
    },
    {
        path: 'view-words-page', // Use for url path
        loadComponent: () => 
            import('./features/view-all-words/components/view-words-page/view-words-page').then(m => m.ViewWordsPage),
    }
];