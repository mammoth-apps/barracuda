import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchPageComponent } from './launch.component';

const routes: Routes = [{ path: '', component: LaunchPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
