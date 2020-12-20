import { createReducer, on } from '@ngrx/store';
import { BudgetActions } from '../actions';
import { initialBudgetState } from '../state/budget.state';

export const budgetReducer = createReducer(
  initialBudgetState,
  on(BudgetActions.createBudgetSuccess, (state, action) => ({
    ...state,
    budgets: [...state.budgets, action.data],
  })),
  on(BudgetActions.createBudgetFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  })),
  on(BudgetActions.deleteBudgetSuccess, (state, action) => ({
    ...state,
    budgets: state.budgets.filter((budget) => budget.id !== action.data.id),
  })),
  on(BudgetActions.deleteBudgetFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  })),
  on(BudgetActions.updateBudgetSuccess, (state, action) => ({
    ...state,
    budgets: state.budgets.map((budget) =>
      budget.id === action.data.id ? action.data : budget
    ),
  })),
  on(BudgetActions.updateBudgetFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  })),
  on(BudgetActions.loadBudgetsSuccess, (state, action) => ({
    ...state,
    budgets: action.data,
  })),
  on(BudgetActions.loadBudgetsFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  }))
);
