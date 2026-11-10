import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Words } from './features/components/words/words';


export const routes: Routes = [
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'words',
        component: Words
    }
];
