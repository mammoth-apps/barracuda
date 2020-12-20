import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BudgetAgent } from '../../agents';
import { BudgetDialogModule } from './budget-dialog/budget-dialog.module';
import { BudgetComponent } from './budget.component';
import { BudgetService } from './budget.service';
import { BudgetTileComponent } from './tile';

@NgModule({
  declarations: [BudgetComponent, BudgetTileComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    BudgetDialogModule,
  ],
  exports: [BudgetComponent],
  providers: [BudgetAgent, BudgetService],
})
export class BudgetModule {}
