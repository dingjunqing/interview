import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'aie',
    data: { pageTitle: 'interviewApp.interviewAIe.home.title' },
    loadChildren: () => import('./Interview/aie/aie.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
