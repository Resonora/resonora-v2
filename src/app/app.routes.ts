import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Handpan og lyd i Odense | Resonora',
    data: {
      description: 'Udforsk handpan og nærvær gennem lyd hos Resonora i Odense. Find introduktion og undervisning for nysgerrige og begyndere.',
      image: 'forside',
      imageAlt: 'En lysende pyramide i en skov',
    },
    loadComponent: () => import('./pages/landingpage/landingpage').then((m) => m.Landingpage),
  },
  {
    path: 'lyd',
    title: 'Lydmeditation – kommer snart | Resonora',
    data: {
      description: 'En verden af lyd er på vej. Følg med hos Resonora, hvor kommende tilbud om lydmeditation vil blive delt.',
      image: 'lyd',
      imageAlt: 'Rebecka med klangskåle og andre instrumenter',
    },
    loadComponent: () => import('./pages/lydrummet/lydrummet').then((m) => m.Lydrummet),
  },
  {
    path: 'handpan',
    title: 'Handpan for begyndere i Odense | Resonora',
    data: {
      description: 'Prøv handpan eller lær at spille i Odense. Find en session for nysgerrige, begyndere eller dig med din egen handpan.',
      image: 'handpan',
      imageAlt: 'En handpan i landskabet ved solnedgang',
    },
    loadComponent: () => import('./pages/handpan/handpan').then((m) => m.Handpan),
  },
  {
    path: 'handpan/for-nysgerrige',
    title: 'Prøv handpan i Odense | Resonora',
    data: {
      description: 'Oplev din første handpan i en rolig introduktion. Prøv to instrumenter, lær grundlæggende teknik og få råd om køb.',
      image: 'for-nysgerrige',
      imageAlt: 'Nærbillede af en handpan med vanddråber',
    },
    loadComponent: () =>
      import('./pages/handpan-offer1/handpan-offer1').then((m) => m.HandpanOffer1),
  },
  {
    path: 'handpan/for-begynderen',
    title: 'Lær at spille handpan i Odense | Resonora',
    data: {
      description: 'Dyk ned i handpanens klang, og lær dine første meditative spillemønstre i en session for begyndere.',
      image: 'for-begynderen',
      imageAlt: 'Håndtegnet oversigt over en handpans tonefelter',
    },
    loadComponent: () =>
      import('./pages/handpan-offer2/handpan-offer2').then((m) => m.HandpanOffer2),
  },
  {
    path: 'handpan/for-dig-med-handpan',
    title: 'Undervisning med din handpan | Resonora',
    data: {
      description: 'Få hjælp til at forstå din egen handpan og finde meditative spillemønstre, der passer til dig og dit instrument.',
      image: 'egen-handpan',
      imageAlt: 'En handpan på en træstub i skoven',
    },
    loadComponent: () =>
      import('./pages/handpan-offer3/handpan-offer3').then((m) => m.HandpanOffer3),
  },
  {
    path: 'vision',
    title: 'Visionen bag Resonora | Handpan og lyd',
    data: {
      description: 'Læs historien bag Resonora og Rebeckas vision om nærvær, kreativitet og fællesskab gennem lyd.',
      image: 'vision',
      imageAlt: 'Rebecka, mennesket bag Resonora',
    },
    loadComponent: () => import('./pages/vision/vision').then((m) => m.Vision),
  },
  {
    path: 'kontakt',
    title: 'Kontakt og booking | Resonora i Odense',
    data: {
      description: 'Kontakt Resonora i Odense for spørgsmål eller booking af en handpan-session. Skriv en besked, ring eller send en e-mail.',
      image: 'kontakt',
      imageAlt: 'En handpan i skovbunden',
    },
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
];
