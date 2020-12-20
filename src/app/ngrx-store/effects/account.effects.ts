import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { AccountAgent } from '../../agents';
import { AccountActions } from '../actions';
import { selectSelectedBudget } from '../selectors/budget.selectors';
import { IMammothState } from '../state/mammoth.state';

@Injectable()
export class AccountEffects {
  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.loadAccounts),
      withLatestFrom(this.store.pipe(select(selectSelectedBudget))),
      mergeMap(([_, budget]) =>
        this.accountAgent.getAccounts(budget.id).pipe(
          map(
            (accounts) => AccountActions.loadAccountsSuccess({ accounts }),
            catchError((error) =>
              of(AccountActions.loadAccountsFailure({ errorMsg: error }))
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<IMammothState>,
    private accountAgent: AccountAgent
  ) {}
}
