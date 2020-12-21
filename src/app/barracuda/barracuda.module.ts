import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountModule } from './account/account.module';
import { BarracudaRoutingModule } from './barracuda-routing.module';
import { BudgetModule } from './budget/budget.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TransactionsModule } from './transactions';

@NgModule({
  declarations: [],
  imports: [
    AccountModule,
    BudgetModule,
    CommonModule,
    DashboardModule,
    BarracudaRoutingModule,
    TransactionsModule,
  ],
})
export class BarracudaModule {}
