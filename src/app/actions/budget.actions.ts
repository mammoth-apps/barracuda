import { createAction, props } from '@ngrx/store';

export const loadBudgets = createAction(
  '[Budget] Load Budgets'
);

export const loadBudgetsSuccess = createAction(
  '[Budget] Load Budgets Success',
  props<{ data: any }>()
);

export const loadBudgetsFailure = createAction(
  '[Budget] Load Budgets Failure',
  props<{ error: any }>()
);
