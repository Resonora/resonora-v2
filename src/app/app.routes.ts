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
    path: 'handpan/for-nysgerrige',
    title: 'For nysgerrige – Resonora',
    loadComponent: () =>
      import('./components/handpan/subpages/handpan-offer1/handpan-offer1').then(
        (m) => m.HandpanOffer1,
      ),
  },
  {
    path: 'handpan/for-begyndere',
    title: 'For begyndere – Resonora',
    loadComponent: () =>
      import('./components/handpan/subpages/handpan-offer3/handpan-your-handpan').then(
        (m) => m.HandpanYourHandpan,
      ),
  },
  {
    path: 'om',
    title: 'Om Resonora – Resonora',
    loadComponent: () => import('./pages/about-me/about-me').then((m) => m.AboutMe),
  },
  {
    path: 'kontakt',
    title: 'Kontakt – Resonora',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
];
