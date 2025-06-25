import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'watches/watch/GOA535',
    pathMatch: 'full',
  },
  {
    path: 'watches',
    children: [
      {
        path: '',
        redirectTo: 'watch/GOA535',
        pathMatch: 'full',
      },
      {
        path: 'watch/:sku',
        loadComponent: () => import('./pages/watches/watch/watch.page').then((m) => m.WatchPage),
      },
      /**
       * Would be default `''`, if not demo redirect to GOA535
       */
      {
        path: 'list',
        loadComponent: () => import('./pages/watches/watches.page').then((m) => m.WatchesPage),
      },
    ],
  },
  {
    path: 'academy',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/academy/academy.page').then((m) => m.AcademyPage),
      },
    ],
  },
  {
    path: 'company',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/company/company.page').then((m) => m.CompanyPage),
      },
    ],
  },
  {
    path: 'jewellery',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/jewellery/jewellery.page').then((m) => m.JewelleryPage),
      },
    ],
  },
  {
    path: 'stores',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/stores/stores.page').then((m) => m.StoresPage),
      },
    ],
  },
  {
    path: 'wedding',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/wedding/wedding.page').then((m) => m.WeddingPage),
      },
    ],
  },
  {
    path: 'basket',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/basket/basket.page').then((m) => m.BasketPage),
      },
    ],
  },
  {
    path: 'contact',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
      },
    ],
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage),
      },
    ],
  },
  {
    path: 'wish-list',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/wish-list/wish-list.page').then((m) => m.WishListPage),
      },
    ],
  },
];
