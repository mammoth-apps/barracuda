import { IBudget } from '@mammoth-apps/api-interfaces';
import { createReducer, on } from '@ngrx/store';
import * as BudgetActions from '../actions/budget.actions';

export const budgetFeatureKey = 'budget';

export interface State {
  budgets: IBudget[];
  selectedBudget: IBudget | null;
  isLoading: boolean;
  error: any;
}

export const initialState: State = {
  budgets: [],
  selectedBudget: null,
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(BudgetActions.loadBudgets, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(BudgetActions.loadBudgetsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    budgets: action.data,
  })),
  on(BudgetActions.loadBudgetsFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
