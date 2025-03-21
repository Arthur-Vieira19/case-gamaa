import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'testeGamaApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'meta',
    data: { pageTitle: 'testeGamaApp.meta.home.title' },
    loadChildren: () => import('./meta/meta.routes'),
  },
  {
    path: 'aluno',
    data: { pageTitle: 'testeGamaApp.aluno.home.title' },
    loadChildren: () => import('./aluno/aluno.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
