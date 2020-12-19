import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBudget from '../reducers/budget.reducer';

export const selectBudgetState = createFeatureSelector<fromBudget.State>(
  fromBudget.budgetFeatureKey
);
