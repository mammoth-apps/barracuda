import {
  IBudget,
  ICreateBudget,
  IDeleteResponse,
  IUpdateBudget,
} from '@mammoth-apps/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const loadBudgets = createAction('[Budget] Load Budgets');
export const loadBudgetsSuccess = createAction(
  '[Budget] Load Budgets Success',
  props<{ data: IBudget[] }>()
);
export const loadBudgetsFailure = createAction(
  '[Budget] Load Budgets Failure',
  props<{ errorMsg: string }>()
);

export const setSelectedBudget = createAction(
  '[Budget] Set Selected Budget',
  props<{
    id: string;
  }>()
);

export const getBudget = createAction(
  '[Budget] Get Budget',
  props<{ id: string }>()
);
export const getBudgetSuccess = createAction(
  '[Budget] Load Budget Success',
  props<{ data: IBudget }>()
);
export const getBudgetFailure = createAction(
  '[Budget] Load Budget Failure',
  props<{ errorMsg: string }>()
);
export const deleteBudget = createAction(
  '[Budget] Delete Budget',
  props<{ id: string }>()
);
export const deleteBudgetSuccess = createAction(
  '[Budget] Delete Budget Success',
  props<{ data: IDeleteResponse }>()
);
export const deleteBudgetFailure = createAction(
  '[Budget] Delete Budget Failure',
  props<{ errorMsg: string }>()
);
export const createBudget = createAction(
  '[Budget] Create Budget',
  props<{ budget: ICreateBudget }>()
);
export const createBudgetSuccess = createAction(
  '[Budget] Create Budget Success',
  props<{ data: IBudget }>()
);
export const createBudgetFailure = createAction(
  '[Budget] Create Budget Failure',
  props<{ errorMsg: string }>()
);
export const updateBudget = createAction(
  '[Budget] Update Budget',
  props<{ budget: IUpdateBudget }>()
);
export const updateBudgetSuccess = createAction(
  '[Budget] Update Budget Success',
  props<{ data: IBudget }>()
);
export const updateBudgetFailure = createAction(
  '[Budget] Update Budget Failure',
  props<{ errorMsg: string }>()
);
