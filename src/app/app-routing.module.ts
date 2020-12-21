import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./site-landing/site-landing.module').then(
        (m) => m.SiteLandingModule
      ),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./barracuda/barracuda.module').then((m) => m.BarracudaModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'site-landing',
    loadChildren: () =>
      import('./site-landing/site-landing.module').then(
        (m) => m.SiteLandingModule
      ),
  },
  {
    path: 'getting-started',
    loadChildren: () =>
      import('./getting-started/getting-started.module').then(
        (m) => m.GettingStartedModule
      ),
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then((m) => m.DocsModule),
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
