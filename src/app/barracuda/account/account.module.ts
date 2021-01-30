import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TransactionsModule } from '../transactions';
import { AccountRoutingModule } from './account-routing.module';
import { AccountGridComponent } from './grid/account-grid.component';
import { AccountListItemComponent } from './list-item/list-item.component';
import { AccountListComponent } from './list/account-list.component';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountGridComponent,
    AccountListItemComponent,
  ],
  exports: [AccountListComponent, AccountGridComponent],
  imports: [
    AccountRoutingModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
    TransactionsModule,
  ],
})
export class AccountModule {}
