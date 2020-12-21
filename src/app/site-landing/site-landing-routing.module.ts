import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLandingComponent } from './site-landing.component';

const routes: Routes = [{ path: '', component: SiteLandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteLandingRoutingModule {}
