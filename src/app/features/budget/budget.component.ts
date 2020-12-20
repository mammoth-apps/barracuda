import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IBudget, ICreateBudget } from '@mammoth-apps/api-interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BudgetActions } from 'src/app/ngrx-store/actions';
import { selectBudgetList } from '../../ngrx-store/selectors/budget.selectors';
import { IMammothState } from '../../ngrx-store/state/mammoth.state';
import { BudgetDialogComponent } from './budget-dialog/budget-dialog.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  public budgets$: Observable<IBudget[]>;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<IMammothState>
  ) {
    this.budgets$ = this.store.pipe(select(selectBudgetList));
  }

  public ngOnInit(): void {
    this.store.dispatch(BudgetActions.loadBudgets());
  }

  public selectClick(budgetId: string): void {
    this.router.navigate(['v1', budgetId], {
      relativeTo: this.activatedRoute,
    });
  }

  public deleteBudget(id: string): void {
    this.store.dispatch(BudgetActions.deleteBudget({ id }));
  }

  public addNewBudget(): void {
    const dialogRef = this.dialog.open(BudgetDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((budget: ICreateBudget | null) => {
      if (budget) {
        this.store.dispatch(BudgetActions.createBudget({ budget }));
      }
    });
  }

  public updateBudget(selectedBudget: IBudget): void {
    const dialogRef = this.dialog.open(BudgetDialogComponent, {
      data: { selectedBudget },
    });

    dialogRef.afterClosed().subscribe((budget: IBudget | null) => {
      if (budget) {
        this.store.dispatch(BudgetActions.updateBudget({ budget }));
      }
    });
  }
}
