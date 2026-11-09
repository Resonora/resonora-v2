import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/landingpage/landingpage').then((m) => m.Landingpage),
  },
  {
    path: 'lyd',
    title: 'Lyd – Resonora',
    loadComponent: () => import('./pages/lydrummet/lydrummet').then((m) => m.Lydrummet),
  },
  {
    path: 'handpan',
    title: 'Handpan – Resonora',
    loadComponent: () => import('./pages/handpan/handpan').then((m) => m.Handpan),
  },
  {
    path: 'reiki',
    title: 'Reiki – Resonora',
    loadComponent: () => import('./pages/reiki/reiki').then((m) => m.Reiki),
  },
];
