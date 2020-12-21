import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TransactionsModule } from '../transactions';
import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailComponent } from './detail-item/account-detail.component';
import { AccountListComponent } from './list/account-list.component';

@NgModule({
  declarations: [AccountListComponent, AccountDetailComponent],
  exports: [AccountListComponent, AccountDetailComponent],
  imports: [
    AccountRoutingModule,
    CommonModule,
    MatButtonModule,
    RouterModule,
    TransactionsModule,
  ],
})
export class AccountModule {}
