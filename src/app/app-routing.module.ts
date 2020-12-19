import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/launch/launch.module').then((m) => m.LaunchModule),
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('./features/docs/docs.module').then((m) => m.DocsModule),
  },
  {
    path: 'log-in',
    loadChildren: () =>
      import('./features/log-in/log-in.module').then((m) => m.LogInModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./features/app/app-features.module').then(
        (m) => m.AppFeaturesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
