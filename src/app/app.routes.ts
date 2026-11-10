import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./new-component/new-component').then(m => m.NewComponent)
    }


];

