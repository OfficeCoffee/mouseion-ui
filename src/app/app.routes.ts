import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Words } from './words/words';


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
