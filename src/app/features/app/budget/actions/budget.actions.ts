import { IBudget } from '@mammoth-apps/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const loadBudgets = createAction('[Budget] Load Budgets');

export const loadBudgetsSuccess = createAction(
  '[Budget] Load Budgets Success',
  props<{ data: IBudget[] }>()
);

export const loadBudgetsFailure = createAction(
  '[Budget] Load Budgets Failure',
  props<{ error: any }>()
);
