import * as fromBudget from '../reducers/budget.reducer';
import { selectBudgetState } from './budget.selectors';

describe('Budget Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBudgetState({
      [fromBudget.budgetFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
