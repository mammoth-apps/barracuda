import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { BudgetAgent } from 'src/app/agents';
import * as BudgetActions from '../actions/budget.actions';

@Injectable()
export class BudgetEffects {
  loadBudgets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BudgetActions.loadBudgets),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.budgetApiAgent.getBudgets().pipe(
          map((data) => BudgetActions.loadBudgetsSuccess({ data })),
          catchError((error) => of(BudgetActions.loadBudgetsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private budgetApiAgent: BudgetAgent) {}
}
