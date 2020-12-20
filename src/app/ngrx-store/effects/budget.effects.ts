import { Injectable } from '@angular/core';
import { IBudget, IDeleteResponse } from '@mammoth-apps/api-interfaces';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BudgetAgent } from '../../agents';
import { BudgetActions } from '../actions';

@Injectable()
export class BudgetEffects {
  public getBudgets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.loadBudgets),
      switchMap(() =>
        this.budgetAgent.getBudgets().pipe(
          map((data: IBudget[]) => BudgetActions.loadBudgetsSuccess({ data })),
          catchError((error) =>
            of(BudgetActions.loadBudgetsFailure({ errorMsg: error }))
          )
        )
      )
    )
  );

  public deleteBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.deleteBudget),
      switchMap(({ id }) =>
        this.budgetAgent.deleteBudget(id).pipe(
          map((data: IDeleteResponse) =>
            BudgetActions.deleteBudgetSuccess({ data })
          ),
          catchError((error) =>
            of(BudgetActions.deleteBudgetFailure({ errorMsg: error }))
          )
        )
      )
    )
  );

  @Effect()
  public createBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.createBudget),
      switchMap(({ budget }) =>
        this.budgetAgent.createBudget(budget).pipe(
          map((data: IBudget) => BudgetActions.createBudgetSuccess({ data })),
          catchError((error) =>
            of(BudgetActions.createBudgetFailure({ errorMsg: error }))
          )
        )
      )
    )
  );

  public updateBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.updateBudget),
      switchMap(({ budget }) =>
        this.budgetAgent.updateBudget(budget).pipe(
          map((data: IBudget) => BudgetActions.updateBudgetSuccess({ data })),
          catchError((error) =>
            of(BudgetActions.updateBudgetFailure({ errorMsg: error }))
          )
        )
      )
    )
  );

  constructor(private budgetAgent: BudgetAgent, private actions$: Actions) {}
}
