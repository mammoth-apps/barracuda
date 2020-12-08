import { createAction, props } from '@ngrx/store';

export const loadPayees = createAction(
  '[Payee] Load Payees'
);

export const loadPayeesSuccess = createAction(
  '[Payee] Load Payees Success',
  props<{ data: any }>()
);

export const loadPayeesFailure = createAction(
  '[Payee] Load Payees Failure',
  props<{ error: any }>()
);
