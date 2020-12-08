import { createAction, props } from '@ngrx/store';

export const loadTransactions = createAction(
  '[Transaction] Load Transactions'
);

export const loadTransactionsSuccess = createAction(
  '[Transaction] Load Transactions Success',
  props<{ data: any }>()
);

export const loadTransactionsFailure = createAction(
  '[Transaction] Load Transactions Failure',
  props<{ error: any }>()
);
