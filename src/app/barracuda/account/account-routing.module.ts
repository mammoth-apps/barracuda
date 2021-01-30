import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountGridComponent } from './grid/account-grid.component';

const routes: Routes = [
  {
    path: ':accountId',
    component: AccountGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
