import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BudgetAgent } from '../../agents';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { BudgetService } from './budget.service';
import { BudgetCardComponent } from './card/budget-card.component';
import { BudgetDialogModule } from './dialog/budget-dialog.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [BudgetComponent, BudgetCardComponent, ListComponent],
  imports: [
    BudgetDialogModule,
    BudgetRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [BudgetComponent],
  providers: [BudgetAgent, BudgetService],
})
export class BudgetModule {}
